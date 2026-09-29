/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  EXAM_SETS, 
  ALL_QUESTIONS, 
  getExamById, 
  getQuestionsByChapter, 
  getRandomExamQuestions, 
  CHAPTERS 
} from './data';
import { ChapterId, ExamSet, Question } from './types/quiz';
import { Header } from './components/Header';
import { QuestionCard } from './components/QuestionCard';
import { QuestionNav } from './components/QuestionNav';
import { SubmitWarningModal } from './components/SubmitWarningModal';
import { ResultReport } from './components/ResultReport';
import { ExamSelectModal } from './components/ExamSelectModal';
import { PrintExamModal } from './components/PrintExamModal';
import { 
  AlertCircle, 
  BookOpen, 
  CheckCircle2, 
  Filter, 
  Layers, 
  ListOrdered, 
  RotateCcw, 
  Sparkles 
} from 'lucide-react';

const DURATION_90_MINS = 90 * 60; // 5400 seconds

export default function App() {
  // Read query params from URL if present (e.g. ?exam=2 or ?chapter=3)
  const initialParams = useMemo(() => {
    if (typeof window === 'undefined') return { examId: 1, chapterId: null };
    const params = new URLSearchParams(window.location.search);
    const examParam = params.get('exam');
    const chapterParam = params.get('chapter');
    return {
      examId: examParam ? Math.max(1, Math.min(5, parseInt(examParam, 10) || 1)) : 1,
      chapterId: chapterParam ? parseInt(chapterParam, 10) : null,
    };
  }, []);

  // Current Exam Set
  const [currentExam, setCurrentExam] = useState<ExamSet>(() => getExamById(initialParams.examId));
  const [questions, setQuestions] = useState<Question[]>(() => currentExam.questions);
  const [currentIndex, setCurrentIndex] = useState(0);

  // User State
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [flaggedQuestionIds, setFlaggedQuestionIds] = useState<Set<number>>(new Set());

  // Timer State (90 minutes)
  const [timeLeft, setTimeLeft] = useState(DURATION_90_MINS);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [timeSpentSeconds, setTimeSpentSeconds] = useState(0);

  // Exam Submission & Review State
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [filterReview, setFilterReview] = useState<'all' | 'wrong' | 'correct' | number>('all');

  // Modals
  const [isSubmitWarningOpen, setIsSubmitWarningOpen] = useState(false);
  const [isExamSelectOpen, setIsExamSelectOpen] = useState(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);

  // Restore saved state from localStorage if available for this exam
  useEffect(() => {
    try {
      const savedKey = `pl_exam_${currentExam.id}_answers`;
      const savedAnswers = localStorage.getItem(savedKey);
      if (savedAnswers && !isSubmitted) {
        setUserAnswers(JSON.parse(savedAnswers));
      }
    } catch {
      // Ignore storage errors
    }
  }, [currentExam.id, isSubmitted]);

  // Save answers to localStorage as user progresses
  const handleSelectOption = useCallback(
    (optionIndex: number) => {
      if (isSubmitted) return;
      const currentQ = questions[currentIndex];
      if (!currentQ) return;

      setUserAnswers((prev) => {
        const next = { ...prev, [currentQ.id]: optionIndex };
        try {
          localStorage.setItem(`pl_exam_${currentExam.id}_answers`, JSON.stringify(next));
        } catch {
          // Ignore storage errors
        }
        return next;
      });
    },
    [currentIndex, currentExam.id, isSubmitted, questions]
  );

  // Toggle Flag Question
  const handleToggleFlag = useCallback(() => {
    const currentQ = questions[currentIndex];
    if (!currentQ) return;

    setFlaggedQuestionIds((prev) => {
      const next = new Set(prev);
      if (next.has(currentQ.id)) {
        next.delete(currentQ.id);
      } else {
        next.add(currentQ.id);
      }
      return next;
    });
  }, [currentIndex, questions]);

  // Countdown Timer Hook
  useEffect(() => {
    if (!isTimerRunning || isSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Auto submit when time runs out!
          setIsSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
      setTimeSpentSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isTimerRunning, isSubmitted]);

  // Switch Exam Set
  const handleSelectExam = (examId: number) => {
    const targetExam = getExamById(examId);
    setCurrentExam(targetExam);
    setQuestions(targetExam.questions);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedQuestionIds(new Set());
    setTimeLeft(DURATION_90_MINS);
    setTimeSpentSeconds(0);
    setIsTimerRunning(true);
    setIsSubmitted(false);
    setFilterReview('all');

    // Update URL query string without reloading page
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('exam', examId.toString());
      url.searchParams.delete('chapter');
      window.history.pushState({}, '', url.toString());
    }
  };

  // Switch to Practice by Chapter
  const handleSelectChapterMode = (chapterId: ChapterId) => {
    const chapterQuestions = getQuestionsByChapter(chapterId);
    const chapterInfo = CHAPTERS.find((c) => c.id === chapterId);

    const customExam: ExamSet = {
      id: 9990 + chapterId,
      title: `Chuyên Đề ${chapterInfo?.shortName || `Chương ${chapterId}`}`,
      slug: `chuong-${chapterId}`,
      subtitle: `Tập trung ôn tập ${chapterQuestions.length} câu hỏi thuộc ${chapterInfo?.name}`,
      description: chapterInfo?.description || '',
      durationMinutes: 90,
      questionCount: chapterQuestions.length,
      badge: 'Luyện Theo Chương',
      questions: chapterQuestions,
    };

    setCurrentExam(customExam);
    setQuestions(chapterQuestions);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedQuestionIds(new Set());
    setTimeLeft(DURATION_90_MINS);
    setTimeSpentSeconds(0);
    setIsTimerRunning(true);
    setIsSubmitted(false);
    setFilterReview('all');
  };

  // Switch to Random 100 Questions Exam
  const handleSelectRandomExam = () => {
    const random100 = getRandomExamQuestions(100);
    const customExam: ExamSet = {
      id: 8888,
      title: 'Đề Thi Trộn Ngẫu Nhiên 100 Câu (500 Câu)',
      slug: 'de-ngau-nhien',
      subtitle: 'Được hệ thống tổng hợp ngẫu nhiên bao quát 7 chương trọng tâm',
      description: 'Đề thi trắc nghiệm ngẫu nhiên giúp kiểm tra toàn diện năng lực phản xạ phòng thi.',
      durationMinutes: 90,
      questionCount: 100,
      badge: 'Đề Ngẫu Nhiên',
      questions: random100,
    };

    setCurrentExam(customExam);
    setQuestions(random100);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedQuestionIds(new Set());
    setTimeLeft(DURATION_90_MINS);
    setTimeSpentSeconds(0);
    setIsTimerRunning(true);
    setIsSubmitted(false);
    setFilterReview('all');
  };

  // Retake current exam
  const handleRetakeExam = () => {
    setUserAnswers({});
    setFlaggedQuestionIds(new Set());
    setTimeLeft(DURATION_90_MINS);
    setTimeSpentSeconds(0);
    setIsTimerRunning(true);
    setIsSubmitted(false);
    setCurrentIndex(0);
    setFilterReview('all');
    try {
      localStorage.removeItem(`pl_exam_${currentExam.id}_answers`);
    } catch {
      // Ignore
    }
  };

  // Find all unanswered question indices
  const unansweredIndices = useMemo(() => {
    const list: number[] = [];
    questions.forEach((q, idx) => {
      if (userAnswers[q.id] === undefined) {
        list.push(idx);
      }
    });
    return list;
  }, [questions, userAnswers]);

  // Submit button clicked: check if all answers are filled!
  const handleSubmitClick = () => {
    setIsSubmitWarningOpen(true);
  };

  // Confirm submission
  const handleConfirmSubmit = () => {
    setIsSubmitted(true);
    setIsSubmitWarningOpen(false);
    setIsTimerRunning(false);
    // Scroll smoothly to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigation handlers
  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, questions.length]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is inside an input or modal is open
      if (e.target instanceof HTMLInputElement || isSubmitWarningOpen || isExamSelectOpen || isPrintModalOpen) {
        return;
      }

      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (['1', 'a', 'A'].includes(e.key)) {
        handleSelectOption(0);
      } else if (['2', 'b', 'B'].includes(e.key)) {
        handleSelectOption(1);
      } else if (['3', 'c', 'C'].includes(e.key)) {
        handleSelectOption(2);
      } else if (['4', 'd', 'D'].includes(e.key)) {
        handleSelectOption(3);
      } else if (['f', 'F'].includes(e.key)) {
        handleToggleFlag();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    handleNext, 
    handlePrev, 
    handleSelectOption, 
    handleToggleFlag, 
    isExamSelectOpen, 
    isPrintModalOpen, 
    isSubmitWarningOpen
  ]);

  // Questions displayed in review mode filtered by user's filter
  const reviewQuestions = useMemo(() => {
    if (!isSubmitted) return [];
    return questions.filter((q) => {
      const userChoice = userAnswers[q.id];
      const isCorrect = userChoice === q.correctAnswer;
      if (filterReview === 'wrong') return !isCorrect;
      if (filterReview === 'correct') return isCorrect;
      if (typeof filterReview === 'number') return q.chapterId === filterReview;
      return true;
    });
  }, [filterReview, isSubmitted, questions, userAnswers]);

  const currentQuestion = questions[currentIndex];
  const answeredCount = Object.keys(userAnswers).length;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Header */}
      <Header
        currentExam={currentExam}
        timeLeftSeconds={timeLeft}
        isTimerRunning={isTimerRunning}
        onToggleTimer={() => setIsTimerRunning((prev) => !prev)}
        onOpenExamSelect={() => setIsExamSelectOpen(true)}
        onSubmitClick={handleSubmitClick}
        isSubmitted={isSubmitted}
        answeredCount={answeredCount}
        totalQuestions={questions.length}
      />

      {/* Main Body Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Prominent Current Exam Title Hero */}
        <div className="mb-6 p-5 sm:p-6 bg-white border border-slate-200/90 rounded-2xl shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1.5 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 text-xs font-black rounded-md bg-blue-600 text-white tracking-wide uppercase">
                BỘ ĐỀ {currentExam.id}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                • 100 Câu Trắc Nghiệm Chuẩn • 90 Phút
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {currentExam.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 line-clamp-2">
              {currentExam.description}
            </p>
          </div>

          <button
            onClick={() => setIsExamSelectOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs sm:text-sm font-bold border border-blue-200 rounded-xl transition-all shadow-2xs shrink-0"
            title="Đổi sang bộ đề khác trong 5 bộ đề"
          >
            <Layers className="w-4 h-4 text-blue-600" />
            <span>Chọn bộ đề khác (1 - 5)</span>
          </button>
        </div>
        {/* SUBMITTED REVIEW MODE */}
        {isSubmitted ? (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Comprehensive Score Report */}
            <ResultReport
              exam={currentExam}
              questions={questions}
              userAnswers={userAnswers}
              timeSpentSeconds={timeSpentSeconds}
              onRetakeExam={handleRetakeExam}
              onChangeExam={() => setIsExamSelectOpen(true)}
              onOpenPrintModal={() => setIsPrintModalOpen(true)}
              filterReview={filterReview}
              onSetFilterReview={setFilterReview}
            />

            {/* List of Questions with full answers & explanations */}
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span>Chi Tiết Đáp Án & Căn Cứ Pháp Lý</span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
                    Hiển thị {reviewQuestions.length} câu
                  </span>
                </h3>
              </div>

              {reviewQuestions.length === 0 ? (
                <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-500">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                  <p className="text-base font-semibold text-slate-800">
                    Tuyệt vời! Không có câu hỏi nào trong danh mục này.
                  </p>
                  <button
                    onClick={() => setFilterReview('all')}
                    className="mt-3 px-4 py-2 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors"
                  >
                    Xem tất cả 100 câu
                  </button>
                </div>
              ) : (
                reviewQuestions.map((q, displayIdx) => {
                  const originalIndex = questions.findIndex((orig) => orig.id === q.id);
                  return (
                    <QuestionCard
                      key={q.id}
                      question={q}
                      questionIndex={originalIndex}
                      totalQuestions={questions.length}
                      selectedOption={userAnswers[q.id]}
                      onSelectOption={() => {}}
                      isFlagged={flaggedQuestionIds.has(q.id)}
                      onToggleFlag={() => {}}
                      isSubmitted={true}
                      onNext={() => {}}
                      onPrev={() => {}}
                      hasNext={false}
                      hasPrev={false}
                    />
                  );
                })
              )}
            </div>
          </div>
        ) : (
          /* ACTIVE EXAM TESTING MODE */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left 8 Columns: Main Question Area */}
            <div className="lg:col-span-8 space-y-4">
              {currentQuestion && (
                <QuestionCard
                  question={currentQuestion}
                  questionIndex={currentIndex}
                  totalQuestions={questions.length}
                  selectedOption={userAnswers[currentQuestion.id]}
                  onSelectOption={handleSelectOption}
                  isFlagged={flaggedQuestionIds.has(currentQuestion.id)}
                  onToggleFlag={handleToggleFlag}
                  isSubmitted={false}
                  onNext={handleNext}
                  onPrev={handlePrev}
                  hasNext={currentIndex < questions.length - 1}
                  hasPrev={currentIndex > 0}
                />
              )}

              {/* Quick instructions & exam rules card */}
              <div className="p-4 bg-white/80 rounded-2xl border border-slate-200/80 text-xs text-slate-600 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                  <span>
                    <strong>Quy chế thi:</strong> Đề gồm 100 câu trắc nghiệm (90 phút). Hãy hoàn thành đầy đủ 100 câu trước khi nộp bài.
                  </span>
                </div>
              </div>
            </div>

            {/* Right 4 Columns: 100 Question Grid Matrix */}
            <div className="lg:col-span-4 sticky top-20">
              <QuestionNav
                questions={questions}
                currentIndex={currentIndex}
                userAnswers={userAnswers}
                flaggedQuestionIds={flaggedQuestionIds}
                onSelectQuestion={(idx) => setCurrentIndex(idx)}
                onSubmitClick={handleSubmitClick}
                isSubmitted={false}
              />
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            Hệ thống ôn thi & trắc nghiệm <strong>Pháp luật đại cương</strong> (5 bộ đề • 500 câu hỏi chuẩn đại học).
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPrintModalOpen(true)}
              className="hover:text-blue-600 transition-colors"
            >
              In đề thi & Đáp án
            </button>
            <span>•</span>
            <button
              onClick={() => setIsExamSelectOpen(true)}
              className="hover:text-blue-600 transition-colors"
            >
              Đổi bộ đề
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <SubmitWarningModal
        isOpen={isSubmitWarningOpen}
        onClose={() => setIsSubmitWarningOpen(false)}
        unansweredIndices={unansweredIndices}
        totalQuestions={questions.length}
        onJumpToQuestion={(idx) => setCurrentIndex(idx)}
        onConfirmSubmit={handleConfirmSubmit}
      />

      <ExamSelectModal
        isOpen={isExamSelectOpen}
        onClose={() => setIsExamSelectOpen(false)}
        currentExamId={currentExam.id}
        onSelectExam={handleSelectExam}
        onSelectChapterMode={handleSelectChapterMode}
        onSelectRandomExam={handleSelectRandomExam}
      />

      <PrintExamModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        exam={currentExam}
        questions={questions}
      />
    </div>
  );
}
