import { Chapter, DifficultyLevel, Question } from '../types';

interface BankCache {
  chapters: Chapter[];
  questionsByChapter: Map<number, Question[]>;
  questionsById: Map<string, Question>;
}

let cachedBank: BankCache | null = null;

export function parseAllQuestions(): BankCache {
  if (cachedBank) {
    return cachedBank;
  }

  // Read all .txt files dynamically from ./raw/
  const rawFiles = import.meta.glob('./raw/*.txt', {
    query: '?raw',
    import: 'default',
    eager: true,
  }) as Record<string, string>;

  const chaptersMap = new Map<number, Chapter>();
  const questionsByChapter = new Map<number, Question[]>();
  const questionsById = new Map<string, Question>();

  for (const [filePath, content] of Object.entries(rawFiles)) {
    // Extract chapter number from filename, e.g. ngan_hang_cau_hoi_chuong_3_phap_luat_dai_cuong.txt
    const filenameMatch = filePath.match(/chuong_(\d+)/i);
    if (!filenameMatch) {
      console.warn(`[BankParser] Could not detect chapter number from filename: ${filePath}`);
      continue;
    }

    const chapterNum = parseInt(filenameMatch[1], 10);
    const parsedData = parseSingleFile(content, chapterNum);

    if (parsedData.questions.length > 0) {
      chaptersMap.set(chapterNum, parsedData.chapter);
      questionsByChapter.set(chapterNum, parsedData.questions);

      for (const q of parsedData.questions) {
        questionsById.set(q.id, q);
      }
    }
  }

  // Sort chapters by number
  const sortedChapters = Array.from(chaptersMap.values()).sort((a, b) => a.number - b.number);

  cachedBank = {
    chapters: sortedChapters,
    questionsByChapter,
    questionsById,
  };

  return cachedBank;
}

interface ParsedFileData {
  chapter: Chapter;
  questions: Question[];
}

function parseSingleFile(rawText: string, chapterNum: number): ParsedFileData {
  const lines = rawText.split(/\r?\n/);

  // 1. Detect chapter title from lines
  let chapterTitle = `Chương ${chapterNum}`;
  let chapterFullName = `CHƯƠNG ${chapterNum}`;

  for (const line of lines) {
    const trimmed = line.trim();
    const chMatch = trimmed.match(/^CHƯƠNG\s+(\d+)[:\s]*(.*)$/i);
    if (chMatch && parseInt(chMatch[1], 10) === chapterNum) {
      chapterFullName = trimmed;
      chapterTitle = chMatch[2].trim() || `Chương ${chapterNum}`;
      break;
    }
  }

  // 2. Parse sections and questions
  const questions: Question[] = [];
  let currentSection = `Chương ${chapterNum}`;
  let hasReachedFirstSection = false;

  // We scan line by line
  let i = 0;
  while (i < lines.length) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    // Check for Section title (MỤC ...)
    const sectionMatch = line.match(/^MỤC\s+([\d\.]+[\s:]+[^\r\n]+)/i);
    if (sectionMatch) {
      currentSection = line;
      hasReachedFirstSection = true;
      i++;
      continue;
    }

    // Stop if we hit the answer key table at the end
    if (line.includes('BẢNG ĐÁP ÁN TỔNG HỢP') || line.includes('HẾT NGÂN HÀNG CÂU HỎI')) {
      // End of questions in file
      break;
    }

    // Ignore introductory material before first section
    if (!hasReachedFirstSection && !line.startsWith('Câu ')) {
      i++;
      continue;
    }

    // Check for Question start: "Câu 12 [Dễ]:" or "Câu 12 [Trung bình]:" or "Câu 12 [Vận dụng]:"
    const qMatch = line.match(/^Câu\s+(\d+)\s*\[(Dễ|Trung bình|Vận dụng)\]\s*[:.-]\s*(.*)$/i);
    if (qMatch) {
      hasReachedFirstSection = true;
      const qNum = parseInt(qMatch[1], 10);
      const level = qMatch[2] as DifficultyLevel;
      const qId = `c${chapterNum}-${qNum}`;

      let questionText = qMatch[3].trim();
      i++;

      // Continue reading question text until we see option "A."
      while (i < lines.length && !lines[i].trim().match(/^[A-D]\.\s/)) {
        const textLine = lines[i].trim();
        if (textLine.startsWith('Câu ') || textLine.startsWith('MỤC ') || textLine.includes('BẢNG ĐÁP ÁN')) {
          break;
        }
        if (textLine) {
          questionText += (questionText ? ' ' : '') + textLine;
        }
        i++;
      }

      // Read options A, B, C, D
      const options: string[] = ['', '', '', ''];
      const optLabels = ['A', 'B', 'C', 'D'];
      let currentOptIdx = -1;

      while (i < lines.length) {
        const optLine = lines[i].trim();

        // Check for option label
        const optMatch = optLine.match(/^([A-D])\.\s*(.*)$/);
        if (optMatch) {
          const label = optMatch[1].toUpperCase();
          currentOptIdx = optLabels.indexOf(label);
          if (currentOptIdx >= 0 && currentOptIdx < 4) {
            options[currentOptIdx] = optMatch[2].trim();
          }
          i++;
          continue;
        }

        // Check for "Đáp án đúng:"
        if (optLine.match(/^Đáp án đúng\s*[:.-]/i)) {
          break;
        }

        // Check for next question or section if answer was somehow missing
        if (optLine.startsWith('Câu ') || optLine.startsWith('MỤC ')) {
          break;
        }

        // Continuation of current option text
        if (currentOptIdx >= 0 && currentOptIdx < 4 && optLine) {
          options[currentOptIdx] += ' ' + optLine;
        }
        i++;
      }

      // Read correct answer: "Đáp án đúng: D"
      let correctLetter = '';
      if (i < lines.length && lines[i].trim().match(/^Đáp án đúng\s*[:.-]/i)) {
        const ansMatch = lines[i].trim().match(/^Đáp án đúng\s*[:.-]\s*([A-D])/i);
        if (ansMatch) {
          correctLetter = ansMatch[1].toUpperCase();
        }
        i++;
      }

      // Read explanation: "Giải thích: ..."
      let explanation = '';
      if (i < lines.length && lines[i].trim().match(/^Giải thích\s*[:.-]/i)) {
        const expMatch = lines[i].trim().match(/^Giải thích\s*[:.-]\s*(.*)$/i);
        if (expMatch) {
          explanation = expMatch[1].trim();
        }
        i++;

        // Read multi-line explanation until next Question, Section, or Divider
        while (i < lines.length) {
          const expLine = lines[i].trim();
          if (
            expLine.startsWith('Câu ') ||
            expLine.startsWith('MỤC ') ||
            expLine.startsWith('===') ||
            expLine.startsWith('---') ||
            expLine.includes('BẢNG ĐÁP ÁN') ||
            expLine.includes('HẾT NGÂN HÀNG CÂU HỎI')
          ) {
            break;
          }
          if (expLine) {
            explanation += (explanation ? ' ' : '') + expLine;
          }
          i++;
        }
      }

      // Validation
      const answerIdx = optLabels.indexOf(correctLetter);
      const isMissingOption = options.some((opt) => !opt.trim());

      if (answerIdx === -1 || isMissingOption) {
        console.warn(
          `[BankParser] Warning for Question ${qId}: Missing options or invalid answer. Answer: "${correctLetter}", Options: ${JSON.stringify(
            options
          )}`
        );
      }

      questions.push({
        id: qId,
        chapter: chapterNum,
        number: qNum,
        level,
        section: currentSection,
        text: questionText,
        options,
        answer: answerIdx >= 0 ? answerIdx : 0,
        explanation: explanation || 'Chưa có giải thích chi tiết cho câu hỏi này.',
      });
      continue;
    }

    i++;
  }

  return {
    chapter: {
      number: chapterNum,
      title: chapterTitle,
      fullName: chapterFullName,
      questionCount: questions.length,
    },
    questions,
  };
}
