import React, { useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { 
  Award, 
  BarChart3, 
  Bookmark,
  CheckCircle2, 
  CircleSlash2,
  Clock, 
  Download, 
  Dumbbell, 
  FileText, 
  ListFilter, 
  RotateCcw, 
  Sparkles, 
  XCircle 
} from 'lucide-react';
import { Question, ExamSet, ChapterId } from '../types/quiz';
import { CHAPTERS } from '../data/chapters';

export type ResultFilterType = 'all' | 'wrong' | 'correct' | 'unanswered' | 'flagged' | number;

interface ResultReportProps {
  exam?: ExamSet;
  examTitle?: string;
  questions: Question[];
  userAnswers: Record<number, number>;
  flaggedQuestionIds?: Set<number>;
  timeSpentSeconds: number;
  onRetakeExam: () => void;
  onChangeExam: () => void;
  onOpenPrintModal: () => void;
  onStartPracticeChapter?: (chapterId: ChapterId) => void;
  onPracticeWrongQuestions?: () => void;
  filterReview: ResultFilterType;
  onSetFilterReview: (filter: ResultFilterType) => void;
}

export const ResultReport: React.FC<ResultReportProps> = ({
  exam,
  examTitle,
  questions,
  userAnswers,
  flaggedQuestionIds = new Set(),
  timeSpentSeconds,
  onRetakeExam,
  onChangeExam,
  onOpenPrintModal,
  onStartPracticeChapter,
  onPracticeWrongQuestions,
  filterReview,
  onSetFilterReview,
}) => {
  const total = questions.length;
  let correctCount = 0;
  let wrongCount = 0;
  let omittedCount = 0;

  questions.forEach((q) => {
    const userChoice = userAnswers[q.id];
    if (userChoice === undefined) {
      omittedCount++;
    } else if (userChoice === q.correctAnswer) {
      correctCount++;
    } else {
      wrongCount++;
    }
  });

  const flaggedCount = flaggedQuestionIds.size;
  const score10 = total > 0 ? Number(((correctCount / total) * 10).toFixed(2)) : 0;

  // Đánh giá xếp loại: <5.0: Yếu; 5.0–6.4: Trung bình; 6.5–7.9: Khá; 8.0–8.9: Giỏi; 9.0–10: Xuất sắc.
  let gradeText = '';
  let gradeColor = '';
  if (score10 >= 9.0) {
    gradeText = 'Xuất sắc';
    gradeColor = 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 dark:text-emerald-300';
  } else if (score10 >= 8.0) {
    gradeText = 'Giỏi';
    gradeColor = 'text-blue-600 bg-blue-50 dark:bg-blue-950/60 dark:text-blue-300';
  } else if (score10 >= 6.5) {
    gradeText = 'Khá';
    gradeColor = 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 dark:text-indigo-300';
  } else if (score10 >= 5.0) {
    gradeText = 'Trung bình';
    gradeColor = 'text-amber-600 bg-amber-50 dark:bg-amber-950/60 dark:text-amber-300';
  } else {
    gradeText = 'Yếu';
    gradeColor = 'text-rose-600 bg-rose-50 dark:bg-rose-950/60 dark:text-rose-300';
  }

  // Confetti when score is high
  useEffect(() => {
    if (score10 >= 7.0) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // Bỏ qua lỗi canvas
      }
    }
  }, [score10]);

  // Format time spent
  const minutes = Math.floor(timeSpentSeconds / 60);
  const seconds = timeSpentSeconds % 60;
  const timeFormatted = `${minutes > 0 ? `${minutes} phút ` : ''}${seconds} giây`;

  // Thống kê từng chương trong bài thi vừa làm
  const chapterStats = useMemo(() => {
    const list = CHAPTERS.map((ch) => {
      const chQuestions = questions.filter((q) => q.chapterId === ch.id);
      const chTotal = chQuestions.length;
      let chCorrect = 0;
      let chWrong = 0;
      let chOmitted = 0;

      chQuestions.forEach((q) => {
        const a = userAnswers[q.id];
        if (a === undefined) chOmitted++;
        else if (a === q.correctAnswer) chCorrect++;
        else chWrong++;
      });

      const wrongRate = chTotal > 0 ? Math.round(((chWrong + chOmitted) / chTotal) * 100) : 0;
      const correctRate = chTotal > 0 ? Math.round((chCorrect / chTotal) * 100) : 0;

      return {
        ...ch,
        total: chTotal,
        correct: chCorrect,
        wrong: chWrong,
        omitted: chOmitted,
        wrongRate,
        correctRate,
      };
    }).filter((ch) => ch.total > 0);

    // Sắp xếp chương sai nhiều nhất lên đầu
    list.sort((a, b) => b.wrongRate - a.wrongRate);
    return list;
  }, [questions, userAnswers]);

  const mostWrongChapter = chapterStats.length > 0 && chapterStats[0].wrongRate > 0 ? chapterStats[0] : null;
  const displayTitle = examTitle || exam?.title || 'Bài Thi Trắc Nghiệm';

  return (
    <div className="space-y-6">
      {/* Top Banner Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 text-white p-5 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="min-w-0">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-blue-200 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Kết Quả Bài Thi Đã Nộp
              </div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight break-words">
                {displayTitle}
              </h2>
              <p className="text-xs sm:text-sm text-blue-200 mt-1">
                Thời gian làm bài: {timeFormatted} • Quy mô: {total} câu hỏi
              </p>
            </div>

            {/* Main Score Dial */}
            <div className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-2xl text-center shadow-lg shrink-0">
              <span className="text-xs uppercase tracking-wider text-blue-200 block font-semibold">
                Điểm Tổng Kết
              </span>
              <div className="text-4xl sm:text-5xl font-black tracking-tight text-white mt-1">
                {score10}
                <span className="text-xl text-blue-200 font-medium">/10</span>
              </div>
              <div className={`mt-1 text-xs font-bold px-2.5 py-0.5 rounded-full inline-block ${gradeColor}`}>
                {gradeText}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stat Boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 dark:divide-slate-800 border-b border-slate-100 dark:border-slate-800">
          <div className="p-3.5 sm:p-5 flex items-center gap-2.5 sm:gap-3.5">
            <div className="p-2 sm:p-2.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 rounded-xl shrink-0">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <div className="text-lg sm:text-2xl font-bold text-slate-800 dark:text-slate-200">
                {correctCount}
                <span className="text-xs text-slate-400 font-normal">/{total}</span>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium truncate">Số câu đúng</div>
            </div>
          </div>

          <div className="p-3.5 sm:p-5 flex items-center gap-2.5 sm:gap-3.5">
            <div className="p-2 sm:p-2.5 bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 rounded-xl shrink-0">
              <XCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <div className="text-lg sm:text-2xl font-bold text-slate-800 dark:text-slate-200">
                {wrongCount}
                <span className="text-xs text-slate-400 font-normal">/{total}</span>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium truncate">Số câu sai</div>
            </div>
          </div>

          <div className="p-3.5 sm:p-5 flex items-center gap-2.5 sm:gap-3.5">
            <div className="p-2 sm:p-2.5 bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 rounded-xl shrink-0">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <div className="text-lg sm:text-2xl font-bold text-slate-800 dark:text-slate-200">
                {minutes}p {seconds}s
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium truncate">Thời gian</div>
            </div>
          </div>

          <div className="p-3.5 sm:p-5 flex items-center gap-2.5 sm:gap-3.5">
            <div className="p-2 sm:p-2.5 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-xl shrink-0">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <div className="text-lg sm:text-2xl font-bold text-slate-800 dark:text-slate-200">
                {total > 0 ? Math.round((correctCount / total) * 100) : 0}%
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium truncate">Độ chính xác</div>
            </div>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="p-3.5 sm:p-5 bg-slate-50/70 dark:bg-slate-950/50 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={onRetakeExam}
              className="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all active:scale-95 touch-manipulation min-h-[42px]"
            >
              <RotateCcw className="w-4 h-4" />
              Làm lại bài thi này
            </button>
            {onPracticeWrongQuestions && wrongCount + omittedCount > 0 && (
              <button
                onClick={onPracticeWrongQuestions}
                className="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-700 hover:to-orange-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-all active:scale-95 touch-manipulation min-h-[42px]"
              >
                <Dumbbell className="w-4 h-4" />
                Luyện lại các câu làm sai ({wrongCount + omittedCount} câu)
              </button>
            )}
            <button
              onClick={onChangeExam}
              className="flex items-center justify-center gap-1.5 px-4 py-2.5 border border-slate-300 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-semibold rounded-xl transition-all active:scale-95 touch-manipulation min-h-[42px]"
            >
              <FileText className="w-4 h-4 text-slate-500" />
              Đổi bộ đề / chế độ khác
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={onOpenPrintModal}
              className="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-slate-800 dark:bg-slate-700 hover:bg-slate-900 dark:hover:bg-slate-600 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all active:scale-95 touch-manipulation min-h-[42px]"
            >
              <Download className="w-4 h-4" />
              In / Tải PDF
            </button>
          </div>
        </div>
      </div>

      {/* Chapter Performance Breakdown */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-4 sm:p-6 space-y-3 sm:space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
              Thống Kê Năng Lực Từng Chương (Lượt Vừa Làm)
            </h3>
          </div>
          {mostWrongChapter && (
            <span className="text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2.5 py-1 rounded-md border border-rose-200 dark:border-rose-900">
              Cần ôn thêm: Chương {mostWrongChapter.id} - {mostWrongChapter.shortName || mostWrongChapter.name} ({mostWrongChapter.correctRate}% đúng)
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3.5 pt-1">
          {chapterStats.map((ch) => (
            <div
              key={ch.id}
              className="p-3 sm:p-3.5 bg-slate-50/70 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800 rounded-xl space-y-2"
            >
              <div className="flex items-center justify-between text-xs font-semibold gap-2">
                <span className="text-slate-800 dark:text-slate-200 truncate font-bold" title={ch.name}>
                  Chương {ch.id}: {ch.shortName || ch.name}
                </span>
                <span className="font-bold text-slate-900 dark:text-slate-100 shrink-0">
                  {ch.correct}/{ch.total} đúng ({ch.wrong} sai, {ch.omitted} trống) • {ch.correctRate}%
                </span>
              </div>

              {/* Progress Bar 3 segments: đúng (xanh), sai (đỏ), bỏ trống (xám) */}
              <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden flex">
                <div
                  className="bg-emerald-500 h-2 transition-all duration-500"
                  style={{ width: `${(ch.correct / ch.total) * 100}%` }}
                  title={`Đúng: ${ch.correct}`}
                />
                <div
                  className="bg-rose-500 h-2 transition-all duration-500"
                  style={{ width: `${(ch.wrong / ch.total) * 100}%` }}
                  title={`Sai: ${ch.wrong}`}
                />
                <div
                  className="bg-slate-400 h-2 transition-all duration-500"
                  style={{ width: `${(ch.omitted / ch.total) * 100}%` }}
                  title={`Bỏ trống: ${ch.omitted}`}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] pt-1 border-t border-slate-200/60 dark:border-slate-800/80">
                <span className="text-slate-500 dark:text-slate-400">
                  Tỷ lệ đúng: <strong className={ch.correctRate < 60 ? 'text-rose-600 dark:text-rose-400' : 'text-emerald-600 dark:text-emerald-400'}>{ch.correctRate}%</strong>
                </span>
                {onStartPracticeChapter && (
                  <button
                    onClick={() => onStartPracticeChapter(ch.id)}
                    className="font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <Dumbbell className="w-3 h-3" />
                    <span>Luyện tập chương này</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter review buttons */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
        <div className="flex items-center gap-2 shrink-0">
          <ListFilter className="w-4 h-4 text-slate-500" />
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
            Bộ lọc danh sách câu sau nộp:
          </span>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          <button
            onClick={() => onSetFilterReview('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors shrink-0 ${
              filterReview === 'all'
                ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-xs font-bold'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            Tất cả ({total})
          </button>
          <button
            onClick={() => onSetFilterReview('correct')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1 shrink-0 ${
              filterReview === 'correct'
                ? 'bg-emerald-600 text-white shadow-xs font-bold'
                : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            Câu đúng ({correctCount})
          </button>
          <button
            onClick={() => onSetFilterReview('wrong')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1 shrink-0 ${
              filterReview === 'wrong'
                ? 'bg-rose-600 text-white shadow-xs font-bold'
                : 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-400 hover:bg-rose-100'
            }`}
          >
            <XCircle className="w-3.5 h-3.5" />
            Câu sai ({wrongCount})
          </button>
          <button
            onClick={() => onSetFilterReview('unanswered')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1 shrink-0 ${
              filterReview === 'unanswered'
                ? 'bg-amber-600 text-white shadow-xs font-bold'
                : 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 hover:bg-amber-100'
            }`}
          >
            <CircleSlash2 className="w-3.5 h-3.5" />
            Câu chưa làm ({omittedCount})
          </button>
          <button
            onClick={() => onSetFilterReview('flagged')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1 shrink-0 ${
              filterReview === 'flagged'
                ? 'bg-indigo-600 text-white shadow-xs font-bold'
                : 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-100'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            Đã cắm cờ ({flaggedCount})
          </button>
        </div>
      </div>
    </div>
  );
};
