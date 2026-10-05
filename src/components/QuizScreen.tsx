import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  Pause,
  Play,
  Send,
  XCircle,
} from 'lucide-react';
import { ExamQuestion, ExamSession } from '../types';
import { ConfirmModal } from './ConfirmModal';

interface QuizScreenProps {
  session: ExamSession;
  onUpdateSession: (session: ExamSession) => void;
  onSubmitExam: () => void;
  onNavigateHome: () => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({
  session,
  onUpdateSession,
  onSubmitExam,
  onNavigateHome,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);

  // Time remaining state in seconds
  const [remainingSeconds, setRemainingSeconds] = useState<number>(() => {
    if (session.isPaused) {
      return session.remainingSeconds;
    }
    const diff = Math.max(0, Math.floor((session.endAt - Date.now()) / 1000));
    return diff;
  });

  const questionRef = useRef<HTMLDivElement>(null);
  const isPractice = session.mode === 'practice';
  const totalQuestions = session.questions.length;
  const currentQ: ExamQuestion | undefined = session.questions[currentIndex];

  // Number of answered questions
  const answeredCount = Object.keys(session.userAnswers).length;
  const unansweredCount = totalQuestions - answeredCount;

  // Real-time absolute timer
  useEffect(() => {
    if (session.isPaused) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(0, Math.floor((session.endAt - now) / 1000));
      setRemainingSeconds(diff);

      if (diff <= 0) {
        clearInterval(interval);
        // Time is up -> Auto submit without confirmation
        onSubmitExam();
      }
    }, 500);

    return () => clearInterval(interval);
  }, [session.endAt, session.isPaused, onSubmitExam]);

  // Format mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const isLowTime = remainingSeconds < 300 && remainingSeconds > 0; // Under 5 mins

  // Toggle pause in practice mode
  const handleTogglePause = () => {
    if (!isPractice) return;

    if (session.isPaused) {
      // Resume
      const newEndAt = Date.now() + session.remainingSeconds * 1000;
      onUpdateSession({
        ...session,
        isPaused: false,
        endAt: newEndAt,
      });
    } else {
      // Pause
      const currentRemaining = Math.max(0, Math.floor((session.endAt - Date.now()) / 1000));
      onUpdateSession({
        ...session,
        isPaused: true,
        remainingSeconds: currentRemaining,
      });
      setRemainingSeconds(currentRemaining);
    }
  };

  // Option selection
  const handleSelectOption = (optIndex: number) => {
    if (session.isPaused) return;

    // In practice mode, locking after selection
    if (isPractice && session.userAnswers[currentIndex] !== undefined) {
      return;
    }

    const updatedAnswers = {
      ...session.userAnswers,
      [currentIndex]: optIndex,
    };

    onUpdateSession({
      ...session,
      userAnswers: updatedAnswers,
    });
  };

  // Navigation handlers
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      scrollToQuestion();
    }
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      scrollToQuestion();
    }
  };

  const handleJumpTo = (index: number) => {
    setCurrentIndex(index);
    scrollToQuestion();
  };

  const scrollToQuestion = () => {
    setTimeout(() => {
      questionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  // Desktop keyboard shortcuts (A-D to pick, Left/Right arrow to navigate)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if in inputs or modal is open
      if (isSubmitModalOpen || isExitModalOpen || session.isPaused) return;

      const key = e.key.toUpperCase();
      if (['A', 'B', 'C', 'D'].includes(key)) {
        const keyMap: Record<string, number> = { A: 0, B: 1, C: 2, D: 3 };
        handleSelectOption(keyMap[key]);
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, session, isSubmitModalOpen, isExitModalOpen]);

  if (!currentQ) {
    return (
      <div className="p-8 text-center text-slate-500 dark:text-slate-400">
        Không tìm thấy dữ liệu câu hỏi.
      </div>
    );
  }

  const selectedAnswer = session.userAnswers[currentIndex];
  const isAnswered = selectedAnswer !== undefined;
  const isCorrect = selectedAnswer === currentQ.correctOptionIndex;

  return (
    <div className="min-h-screen pb-16">
      {/* 1. Sticky Top Bar */}
      <div className="sticky top-16 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between gap-3">
          {/* Progress label */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsExitModalOpen(true)}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title="Về trang chủ"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="flex items-baseline gap-1.5 font-bold text-sm sm:text-base text-slate-900 dark:text-white">
              <span>Câu {currentIndex + 1}</span>
              <span className="text-xs text-slate-400 font-normal">/{totalQuestions}</span>
            </div>
          </div>

          {/* Timer & Controls */}
          <div className="flex items-center gap-3">
            {/* Countdown timer */}
            <div
              className={`px-3 py-1 rounded-xl font-mono text-sm sm:text-base font-bold transition-colors flex items-center gap-1.5 ${
                isLowTime
                  ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-300 dark:border-rose-800 animate-pulse'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200'
              }`}
            >
              <span>{formatTime(remainingSeconds)}</span>
            </div>

            {/* Practice Pause button */}
            {isPractice && (
              <button
                onClick={handleTogglePause}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition flex items-center gap-1"
                title={session.isPaused ? 'Tiếp tục' : 'Tạm dừng đồng hồ'}
              >
                {session.isPaused ? (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current text-emerald-600" />
                    <span className="hidden sm:inline">Tiếp tục</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3.5 h-3.5 text-amber-600" />
                    <span className="hidden sm:inline">Tạm dừng</span>
                  </>
                )}
              </button>
            )}

            {/* Submit button */}
            <button
              onClick={() => setIsSubmitModalOpen(true)}
              className="px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white shadow-sm shadow-indigo-600/20 transition flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              Nộp bài
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-6 space-y-6">
        {/* Pause Overlay in Practice mode */}
        {isPractice && session.isPaused ? (
          <div className="my-12 p-8 sm:p-12 text-center rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-inner">
            <div className="w-14 h-14 mx-auto rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
              <Pause className="w-7 h-7" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Bài làm đang tạm dừng
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
              Đồng hồ đã dừng lại. Hãy bấm nút bên dưới khi bạn sẵn sàng tiếp tục ôn luyện.
            </p>
            <button
              onClick={handleTogglePause}
              className="mt-6 px-6 py-2.5 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition inline-flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-current" />
              Tiếp tục làm bài
            </button>
          </div>
        ) : (
          <>
            {/* 2. Single Question Area */}
            <div
              ref={questionRef}
              className="p-5 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 transition-colors"
            >
              {/* Question metadata badge */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                    Chương {currentQ.chapter}
                  </span>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-[250px] sm:max-w-md">
                  {currentQ.section}
                </span>
              </div>

              {/* Question text */}
              <div className="pt-1">
                <h2 className="text-base sm:text-xl font-semibold text-slate-900 dark:text-white leading-relaxed select-text">
                  <span className="font-bold text-indigo-600 dark:text-indigo-400 mr-2">
                    Câu {currentIndex + 1}:
                  </span>
                  {currentQ.text}
                </h2>
              </div>

              {/* 4 Large Option cards */}
              <div className="space-y-3 pt-2">
                {currentQ.options.map((optionText, optIdx) => {
                  const letter = String.fromCharCode(65 + optIdx); // A, B, C, D
                  const isSelected = selectedAnswer === optIdx;

                  // Practice mode coloring
                  let cardStyle =
                    'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200 hover:border-indigo-300 dark:hover:border-slate-700';
                  let badgeStyle =
                    'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200';

                  if (isPractice && isAnswered) {
                    if (optIdx === currentQ.correctOptionIndex) {
                      // Correct option
                      cardStyle =
                        'border-emerald-500 dark:border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-100 ring-2 ring-emerald-500/20';
                      badgeStyle = 'bg-emerald-600 text-white';
                    } else if (isSelected && !isCorrect) {
                      // Wrong selected option
                      cardStyle =
                        'border-rose-500 dark:border-rose-500 bg-rose-50/80 dark:bg-rose-950/40 text-rose-950 dark:text-rose-100 ring-2 ring-rose-500/20';
                      badgeStyle = 'bg-rose-600 text-white';
                    } else {
                      // Other unchosen options
                      cardStyle =
                        'border-slate-200 dark:border-slate-800 opacity-60 bg-slate-50 dark:bg-slate-900 text-slate-500';
                      badgeStyle = 'bg-slate-200 dark:bg-slate-800 text-slate-500';
                    }
                  } else if (isSelected) {
                    // Regular selected state
                    cardStyle =
                      'border-indigo-600 dark:border-indigo-500 bg-indigo-50/70 dark:bg-indigo-950/30 text-indigo-950 dark:text-indigo-100 ring-2 ring-indigo-500/20';
                    badgeStyle = 'bg-indigo-600 text-white';
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      onClick={() => handleSelectOption(optIdx)}
                      disabled={isPractice && isAnswered}
                      className={`w-full text-left p-4 sm:p-4.5 rounded-2xl border-2 transition-all flex items-start gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${cardStyle}`}
                    >
                      <span
                        className={`w-8 h-8 rounded-xl font-bold text-sm flex items-center justify-center shrink-0 transition-colors ${badgeStyle}`}
                      >
                        {letter}
                      </span>
                      <span className="text-sm sm:text-base leading-relaxed pt-0.5 flex-1">
                        {optionText}
                      </span>

                      {/* Practice indicator icons */}
                      {isPractice && isAnswered && (
                        <div className="shrink-0 pt-0.5">
                          {optIdx === currentQ.correctOptionIndex && (
                            <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                          )}
                          {isSelected && !isCorrect && (
                            <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                          )}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Practice Mode immediate Explanation box */}
              {isPractice && isAnswered && (
                <div
                  className={`mt-4 p-4 sm:p-5 rounded-2xl border text-sm animate-in fade-in duration-200 ${
                    isCorrect
                      ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/80 text-emerald-950 dark:text-emerald-200'
                      : 'bg-amber-50/70 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800/80 text-amber-950 dark:text-amber-200'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold mb-1.5">
                    <HelpCircle className="w-4 h-4" />
                    <span>Giải thích chi tiết:</span>
                  </div>
                  <p className="leading-relaxed whitespace-pre-line text-xs sm:text-sm">
                    {currentQ.explanation}
                  </p>
                </div>
              )}
            </div>

            {/* 3. Navigation Controls */}
            <div className="flex items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center gap-1.5 shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Câu trước
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={currentIndex === totalQuestions - 1}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 disabled:bg-slate-300 dark:disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed text-white font-semibold text-sm transition flex items-center gap-1.5 shadow-sm shadow-indigo-600/20"
              >
                Câu sau
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* 4. Question Grid (100 boxes) at Bottom */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                  Bảng trạng thái làm bài ({answeredCount}/{totalQuestions})
                </h3>
                {/* Small legend */}
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                    <span>Đã chọn</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                    <span>Chưa chọn</span>
                  </div>
                </div>
              </div>

              {/* Grid 100 boxes */}
              <div className="grid grid-cols-10 sm:grid-cols-10 md:grid-cols-10 gap-1.5 sm:gap-2">
                {session.questions.map((_, idx) => {
                  const hasAnswer = session.userAnswers[idx] !== undefined;
                  const isCurrent = idx === currentIndex;

                  // Requirement: "Khi mới vào đề cả 100 ô đều ĐỎ (chưa chọn). Câu nào đã chọn đáp án thì ô chuyển XANH."
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleJumpTo(idx)}
                      className={`h-9 sm:h-10 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center ${
                        hasAnswer
                          ? 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-sm shadow-emerald-500/20'
                          : 'bg-rose-500 text-white hover:bg-rose-600 shadow-sm shadow-rose-500/20'
                      } ${
                        isCurrent
                          ? 'ring-4 ring-indigo-500 ring-offset-2 ring-offset-white dark:ring-offset-slate-900 scale-105 z-10 font-extrabold'
                          : ''
                      }`}
                      title={`Câu ${idx + 1}: ${hasAnswer ? 'Đã chọn' : 'Chưa chọn'}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Confirm Submit Modal */}
      <ConfirmModal
        isOpen={isSubmitModalOpen}
        title="Xác nhận nộp bài thi"
        confirmText="Nộp bài ngay"
        cancelText="Tiếp tục làm"
        confirmVariant="primary"
        onConfirm={() => {
          setIsSubmitModalOpen(false);
          onSubmitExam();
        }}
        onCancel={() => setIsSubmitModalOpen(false)}
      >
        <div className="space-y-3">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Bạn có chắc chắn muốn nộp bài thi không? Sau khi nộp bài, hệ thống sẽ chấm điểm và hiển
            thị lời giải chi tiết.
          </p>
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 flex items-center justify-around text-center">
            <div>
              <span className="block text-xl font-bold text-emerald-600 dark:text-emerald-400">
                {answeredCount}
              </span>
              <span className="text-xs text-slate-500">Đã trả lời</span>
            </div>
            <div className="w-px h-8 bg-slate-200 dark:bg-slate-700"></div>
            <div>
              <span className="block text-xl font-bold text-rose-600 dark:text-rose-400">
                {unansweredCount}
              </span>
              <span className="text-xs text-slate-500">Chưa trả lời</span>
            </div>
          </div>
        </div>
      </ConfirmModal>

      {/* Confirm Exit Modal */}
      <ConfirmModal
        isOpen={isExitModalOpen}
        title="Rời khỏi bài thi?"
        message="Tiến độ bài thi của bạn đã được tự động lưu. Bạn có thể quay lại tiếp tục làm bất kỳ lúc nào từ trang chủ."
        confirmText="Rời về trang chủ"
        cancelText="Ở lại làm bài"
        confirmVariant="danger"
        onConfirm={() => {
          setIsExitModalOpen(false);
          onNavigateHome();
        }}
        onCancel={() => setIsExitModalOpen(false)}
      />
    </div>
  );
};
