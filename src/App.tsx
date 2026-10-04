/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { 
  ALL_QUESTIONS, 
  CHAPTERS, 
  EXAM_SETS, 
  getExamById 
} from './data';
import { ChapterId, ExamMode, Question, QuestionDifficulty } from './types/quiz';
import { Header } from './components/Header';
import { QuestionCard } from './components/QuestionCard';
import { QuestionNav } from './components/QuestionNav';
import { SubmitWarningModal } from './components/SubmitWarningModal';
import { ResultReport } from './components/ResultReport';
import { ExamSelectModal } from './components/ExamSelectModal';
import { PrintExamModal } from './components/PrintExamModal';
import { ResumeModal } from './components/ResumeModal';
import { HistoryModal } from './components/HistoryModal';
import { ConfirmModal } from './components/ConfirmModal';
import { ResultFilterType } from './components/ResultReport';
import { 
  buildExam, 
  BuildExamParams 
} from './lib/examBuilder';
import { shuffle } from './lib/shuffle';
import { needsLockedOrder } from './data/bank';
import { 
  Session, 
  loadSession, 
  saveSession, 
  clearSession, 
  cleanupOldStorageKeys, 
  calculateTimeRemaining, 
  reconstituteQuestions, 
  generateUUID, 
  loadHistory, 
  saveHistoryItem, 
  calculateExamChapterStats 
} from './lib/session';
import { 
  AlertCircle, 
  CheckCircle2, 
  Dumbbell, 
  Keyboard,
  Layers, 
  Sparkles, 
  X 
} from 'lucide-react';

export default function App() {
  // Theme state
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>(() => {
    if (typeof window === 'undefined') return 'system';
    return (localStorage.getItem('pl_theme') as 'light' | 'dark' | 'system') || 'system';
  });

  // Apply theme to html element
  useEffect(() => {
    const root = document.documentElement;
    const applyTheme = () => {
      const isDark =
        theme === 'dark' ||
        (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      if (isDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    applyTheme();
    localStorage.setItem('pl_theme', theme);

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = () => applyTheme();
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, [theme]);

  const handleCycleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : prev === 'dark' ? 'system' : 'light'));
  };

  // Clean old storage keys on first mount
  useEffect(() => {
    cleanupOldStorageKeys();
  }, []);

  // Read URL params if present
  const initialUrlParams = useMemo(() => {
    if (typeof window === 'undefined') return { examId: 1 };
    const params = new URLSearchParams(window.location.search);
    const examParam = params.get('exam');
    return {
      examId: examParam ? Math.max(1, Math.min(5, parseInt(examParam, 10) || 1)) : 1,
    };
  }, []);

  // Active Session State
  const [session, setSession] = useState<Session | null>(() => {
    const existing = loadSession();
    if (existing) {
      return existing;
    }
    // Tạo phiên mặc định cho Đề 1
    const built = buildExam({ mode: 'exam-set', examId: initialUrlParams.examId });
    const initialSession: Session = {
      version: 2,
      sessionId: generateUUID(),
      mode: 'exam-set',
      config: { examId: initialUrlParams.examId },
      title: getExamById(initialUrlParams.examId).title,
      durationSeconds: built.durationSeconds,
      items: built.items,
      answers: {},
      flagged: [],
      currentIndex: 0,
      startedAt: Date.now(),
      pausedAt: null,
      pausedTotalMs: 0,
      warned10: false,
      status: 'in_progress',
    };
    saveSession(initialSession);
    return initialSession;
  });

  // Reconstituted questions from current session
  const questions: Question[] = useMemo(() => {
    if (!session || !session.items) return [];
    return reconstituteQuestions(session.items);
  }, [session?.sessionId, session?.items]);

  // Derived / local UI states synced with session
  const [currentIndex, setCurrentIndex] = useState(() => session?.currentIndex || 0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>(() => session?.answers || {});
  const [flaggedQuestionIds, setFlaggedQuestionIds] = useState<Set<number>>(
    () => new Set(session?.flagged || [])
  );
  const [isSubmitted, setIsSubmitted] = useState(() => session?.status === 'submitted');
  const [filterReview, setFilterReview] = useState<ResultFilterType>('all');
  const [showKeyboardHints, setShowKeyboardHints] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    return localStorage.getItem('pl_show_shortcuts') !== 'false';
  });

  // Timer states (calculated dynamically)
  const [timeLeft, setTimeLeft] = useState<number>(() => {
    if (!session) return 5400;
    return calculateTimeRemaining(session).timeLeftSeconds;
  });
  const [timeSpentSeconds, setTimeSpentSeconds] = useState<number>(() => {
    if (!session) return 0;
    return calculateTimeRemaining(session).timeSpentSeconds;
  });
  const [isTimerRunning, setIsTimerRunning] = useState(() => session?.pausedAt === null);

  // Modals
  const [isSubmitWarningOpen, setIsSubmitWarningOpen] = useState(false);
  const [isExamSelectOpen, setIsExamSelectOpen] = useState(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [confirmSwitchModal, setConfirmSwitchModal] = useState<{
    isOpen: boolean;
    onConfirm: () => void;
  }>({
    isOpen: false,
    onConfirm: () => {},
  });

  // Toast alert
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((cur) => (cur === msg ? null : cur));
    }, 6000);
  }, []);

  const [warned1Min, setWarned1Min] = useState(false);

  // Check existing session on boot (resume modal vs expired)
  useEffect(() => {
    const existing = loadSession();
    if (existing && existing.status === 'in_progress') {
      const { isExpired } = calculateTimeRemaining(existing);
      if (isExpired && existing.durationSeconds !== null) {
        // Tự nộp bài nếu thời gian đã hết khi mở lại
        existing.status = 'submitted';
        existing.submittedAt = Date.now();
        saveSession(existing);
        setSession(existing);
        setIsSubmitted(true);
        // Lưu lịch sử
        const questionsList = reconstituteQuestions(existing.items);
        let correct = 0;
        let wrong = 0;
        let omitted = 0;
        questionsList.forEach((q) => {
          const a = existing.answers[q.id];
          if (a === undefined) omitted++;
          else if (a === q.correctAnswer) correct++;
          else wrong++;
        });
        const score10 = Number(((correct / (questionsList.length || 100)) * 10).toFixed(2));
        saveHistoryItem({
          id: existing.sessionId,
          examId: existing.config.examId || 0,
          examTitle: existing.title,
          timestamp: Date.now(),
          score: score10,
          correctCount: correct,
          totalQuestions: questionsList.length,
          timeSpentSeconds: existing.durationSeconds || 5400,
          mode: existing.mode,
          wrongCount: wrong,
          omittedCount: omitted,
          chapterIds: existing.config.chapterIds,
          chapterStats: calculateExamChapterStats(questionsList, existing.answers),
        });
      } else {
        // Hiện modal hỏi khôi phục bài làm dở
        setIsResumeModalOpen(true);
      }
    }
  }, []);

  // Sync state when session changes
  useEffect(() => {
    if (session) {
      setCurrentIndex(session.currentIndex || 0);
      setUserAnswers(session.answers || {});
      setFlaggedQuestionIds(new Set(session.flagged || []));
      setIsSubmitted(session.status === 'submitted');
      setIsTimerRunning(session.pausedAt === null);
    }
  }, [session?.sessionId]);

  // Debounced session saver ref
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const queueSessionSave = useCallback((updated: Session) => {
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }
    saveTimeoutRef.current = setTimeout(() => {
      saveSession(updated);
    }, 300);
  }, []);

  // Real-time Timer Interval
  useEffect(() => {
    if (!session || isSubmitted) return;

    const interval = setInterval(() => {
      const { timeLeftSeconds: rem, timeSpentSeconds: spent, isExpired } = calculateTimeRemaining(
        session,
        Date.now()
      );

      setTimeLeft(rem);
      setTimeSpentSeconds(spent);

      // Auto-submit when time is up
      if (isExpired && session.durationSeconds !== null && session.status === 'in_progress') {
        clearInterval(interval);
        handleConfirmSubmit();
        return;
      }

      // Warning 10 minutes
      if (session.durationSeconds !== null && rem <= 600 && rem > 60 && !session.warned10) {
        session.warned10 = true;
        setSession({ ...session, warned10: true });
        queueSessionSave({ ...session, warned10: true });
        showToast('⏰ Còn 10 phút! Hãy kiểm tra lại các câu hỏi chưa làm.');
      }

      // Warning 1 minute
      if (session.durationSeconds !== null && rem <= 60 && rem > 0 && !warned1Min) {
        setWarned1Min(true);
        showToast('⚠️ Chỉ còn 1 phút! Hãy kiểm tra và chuẩn bị nộp bài thi.');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [session, isSubmitted, warned1Min, showToast, queueSessionSave]);

  // Toggle Timer (Pause / Resume)
  const handleToggleTimer = () => {
    if (!session || isSubmitted) return;
    const now = Date.now();
    let updated: Session;

    if (session.pausedAt === null) {
      // Pause
      updated = {
        ...session,
        pausedAt: now,
      };
      setIsTimerRunning(false);
    } else {
      // Resume
      const pauseDuration = now - session.pausedAt;
      updated = {
        ...session,
        pausedAt: null,
        pausedTotalMs: session.pausedTotalMs + pauseDuration,
      };
      setIsTimerRunning(true);
    }

    setSession(updated);
    queueSessionSave(updated);
  };

  // Browser beforeunload protection during active exam
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (session && session.status === 'in_progress') {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [session]);

  // Select Option handler
  const handleSelectOption = useCallback(
    (optionIndex: number) => {
      if (!session || isSubmitted) return;
      const currentQ = questions[currentIndex];
      if (!currentQ) return;

      // In practice mode, lock once answered
      if (session.mode === 'practice' && userAnswers[currentQ.id] !== undefined) {
        return;
      }

      const nextAnswers = { ...userAnswers, [currentQ.id]: optionIndex };
      setUserAnswers(nextAnswers);

      const updated: Session = {
        ...session,
        answers: nextAnswers,
      };
      setSession(updated);
      queueSessionSave(updated);
    },
    [currentIndex, isSubmitted, questions, queueSessionSave, session, userAnswers]
  );

  // Toggle Flag Question
  const handleToggleFlag = useCallback(() => {
    if (!session) return;
    const currentQ = questions[currentIndex];
    if (!currentQ) return;

    setFlaggedQuestionIds((prev) => {
      const next = new Set(prev);
      if (next.has(currentQ.id)) {
        next.delete(currentQ.id);
      } else {
        next.add(currentQ.id);
      }

      const updated: Session = {
        ...session,
        flagged: Array.from(next),
      };
      setSession(updated);
      queueSessionSave(updated);

      return next;
    });
  }, [currentIndex, questions, queueSessionSave, session]);

  // Next & Prev Navigation
  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      if (session) {
        const updated = { ...session, currentIndex: nextIdx };
        setSession(updated);
        queueSessionSave(updated);
      }
    }
  }, [currentIndex, questions.length, queueSessionSave, session]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      const prevIdx = currentIndex - 1;
      setCurrentIndex(prevIdx);
      if (session) {
        const updated = { ...session, currentIndex: prevIdx };
        setSession(updated);
        queueSessionSave(updated);
      }
    }
  }, [currentIndex, queueSessionSave, session]);

  // Jump to specific index
  const handleJumpToIndex = (idx: number) => {
    setCurrentIndex(idx);
    if (session) {
      const updated = { ...session, currentIndex: idx };
      setSession(updated);
      queueSessionSave(updated);
    }
  };

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        isSubmitWarningOpen ||
        isExamSelectOpen ||
        isPrintModalOpen ||
        isResumeModalOpen ||
        isHistoryModalOpen ||
        confirmSwitchModal.isOpen
      ) {
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
      } else if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        handleToggleTimer();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    confirmSwitchModal.isOpen,
    handleNext,
    handlePrev,
    handleSelectOption,
    handleToggleFlag,
    handleToggleTimer,
    isExamSelectOpen,
    isHistoryModalOpen,
    isPrintModalOpen,
    isResumeModalOpen,
    isSubmitWarningOpen,
  ]);

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

  // Submit button clicked
  const handleSubmitClick = () => {
    if (session?.mode === 'practice') {
      // Ở chế độ luyện tập, nộp bài ngay
      handleConfirmSubmit();
    } else {
      setIsSubmitWarningOpen(true);
    }
  };

  // Confirm submission
  const handleConfirmSubmit = () => {
    if (!session) return;
    setIsSubmitWarningOpen(false);

    const now = Date.now();
    const { timeSpentSeconds: finalTimeSpent } = calculateTimeRemaining(session, now);

    let correct = 0;
    let wrong = 0;
    let omitted = 0;
    questions.forEach((q) => {
      const a = userAnswers[q.id];
      if (a === undefined) omitted++;
      else if (a === q.correctAnswer) correct++;
      else wrong++;
    });

    const score10 = Number(((correct / (questions.length || 100)) * 10).toFixed(2));
    const chStats = calculateExamChapterStats(questions, userAnswers);

    const updated: Session = {
      ...session,
      status: 'submitted',
      submittedAt: now,
    };

    setSession(updated);
    saveSession(updated);
    setIsSubmitted(true);

    // Lưu vào lịch sử
    saveHistoryItem({
      id: session.sessionId,
      examId: session.config.examId || 0,
      examTitle: session.title,
      timestamp: now,
      score: score10,
      correctCount: correct,
      totalQuestions: questions.length,
      timeSpentSeconds: finalTimeSpent,
      mode: session.mode,
      wrongCount: wrong,
      omittedCount: omitted,
      chapterIds: session.config.chapterIds,
      chapterStats: chStats,
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Luyện tập lại các câu làm sai trong bài thi vừa làm
  const handlePracticeWrongQuestions = () => {
    if (!questions.length) return;
    const wrongQuestions = questions.filter((q) => {
      const a = userAnswers[q.id];
      return a === undefined || a !== q.correctAnswer;
    });

    if (wrongQuestions.length === 0) {
      showToast('🎉 Bạn đã trả lời đúng 100% tất cả các câu hỏi, không có câu nào sai!');
      return;
    }

    const items = wrongQuestions.map((q) => {
      const isLocked = Boolean(q.lockOptionOrder || needsLockedOrder(q));
      const optionOrder = isLocked ? [0, 1, 2, 3] : shuffle([0, 1, 2, 3]);
      return { id: q.id, optionOrder };
    });

    const newSession: Session = {
      version: 2,
      sessionId: generateUUID(),
      mode: 'practice',
      config: {
        questionCount: wrongQuestions.length,
      },
      title: `Luyện Lại ${wrongQuestions.length} Câu Làm Sai`,
      durationSeconds: null,
      items,
      answers: {},
      flagged: [],
      currentIndex: 0,
      startedAt: Date.now(),
      pausedAt: null,
      pausedTotalMs: 0,
      warned10: false,
      status: 'in_progress',
    };

    clearSession();
    saveSession(newSession);
    setSession(newSession);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedQuestionIds(new Set());
    setIsSubmitted(false);
    setIsTimerRunning(true);
    setFilterReview('all');
    setWarned1Min(false);
    showToast(`Bắt đầu luyện tập lại ${wrongQuestions.length} câu làm sai/bỏ trống.`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to initialize a new session from params
  const startNewSession = (params: BuildExamParams, customTitle?: string) => {
    const built = buildExam(params);
    let title = customTitle || 'Đề Thi Trắc Nghiệm';
    if (params.mode === 'exam-set' && params.examId) {
      title = getExamById(params.examId).title;
    } else if (params.mode === 'exam-random') {
      title = 'Đề Thi Trộn Ngẫu Nhiên 100 Câu (1.400 Câu)';
    } else if (params.mode === 'exam-chapter') {
      title = `Thi Theo Chương (${params.chapterIds?.map((c) => `C${c}`).join(', ')})`;
    } else if (params.mode === 'practice') {
      title = `Luyện Tập (${params.chapterIds?.length === 7 ? 'Toàn bộ 7 chương' : params.chapterIds?.map((c) => `C${c}`).join(', ')})`;
    }

    const newSession: Session = {
      version: 2,
      sessionId: generateUUID(),
      mode: params.mode,
      config: {
        examId: params.examId,
        chapterIds: params.chapterIds,
        difficulty: params.difficultyFilter,
        questionCount: params.questionCount,
      },
      title,
      durationSeconds: built.durationSeconds,
      items: built.items,
      answers: {},
      flagged: [],
      currentIndex: 0,
      startedAt: Date.now(),
      pausedAt: null,
      pausedTotalMs: 0,
      warned10: false,
      status: 'in_progress',
    };

    clearSession();
    saveSession(newSession);
    setSession(newSession);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedQuestionIds(new Set());
    setIsSubmitted(false);
    setIsTimerRunning(true);
    setFilterReview('all');
    setWarned1Min(false);

    if (built.notice) {
      showToast(built.notice);
    }

    // Update URL param
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (params.mode === 'exam-set' && params.examId) {
        url.searchParams.set('exam', params.examId.toString());
      } else {
        url.searchParams.delete('exam');
      }
      window.history.pushState({}, '', url.toString());
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Safe request to switch exam / mode (checks if in_progress)
  const safeSwitchExam = (switchFn: () => void) => {
    if (session && session.status === 'in_progress' && Object.keys(userAnswers).length > 0) {
      setConfirmSwitchModal({
        isOpen: true,
        onConfirm: switchFn,
      });
    } else {
      switchFn();
    }
  };

  // Retake current exam
  const handleRetakeExam = () => {
    if (!session) return;
    safeSwitchExam(() => {
      startNewSession(
        {
          mode: session.mode,
          examId: session.config.examId,
          chapterIds: session.config.chapterIds,
          difficultyFilter: session.config.difficulty,
          questionCount: session.config.questionCount,
        },
        session.title
      );
    });
  };

  // Start Exam Set
  const handleStartExamSet = (examId: number) => {
    safeSwitchExam(() => {
      startNewSession({ mode: 'exam-set', examId });
    });
  };

  // Start Random Exam
  const handleStartRandomExam = () => {
    safeSwitchExam(() => {
      startNewSession({ mode: 'exam-random' });
    });
  };

  // Start Chapter Exam
  const handleStartChapterExam = (chapterIds: ChapterId[]) => {
    safeSwitchExam(() => {
      startNewSession({ mode: 'exam-chapter', chapterIds });
    });
  };

  // Start Practice Mode
  const handleStartPractice = (
    chapterIds: ChapterId[],
    difficulty: QuestionDifficulty | 'all',
    count: number | 'all'
  ) => {
    safeSwitchExam(() => {
      startNewSession({
        mode: 'practice',
        chapterIds,
        difficultyFilter: difficulty,
        questionCount: count,
      });
    });
  };

  // Filter questions for review
  const reviewQuestions = useMemo(() => {
    if (!isSubmitted) return [];
    return questions.filter((q) => {
      const userChoice = userAnswers[q.id];
      const isAnswered = userChoice !== undefined;
      const isCorrect = userChoice === q.correctAnswer;
      const isWrong = isAnswered && !isCorrect;
      const isUnanswered = !isAnswered;
      const isFlagged = flaggedQuestionIds.has(q.id);

      if (filterReview === 'wrong') return isWrong;
      if (filterReview === 'correct') return isCorrect;
      if (filterReview === 'unanswered') return isUnanswered;
      if (filterReview === 'flagged') return isFlagged;
      if (typeof filterReview === 'number') return q.chapterId === filterReview;
      return true;
    });
  }, [filterReview, flaggedQuestionIds, isSubmitted, questions, userAnswers]);

  const currentQuestion = questions[currentIndex];
  const answeredCount = Object.keys(userAnswers).length;
  const isPracticeMode = session?.mode === 'practice';

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-200">
      {/* Toast Alert Banner */}
      {toastMessage && (
        <div className="fixed top-18 right-4 z-50 max-w-sm p-4 bg-slate-900/90 dark:bg-slate-800/95 text-white text-xs sm:text-sm font-semibold rounded-2xl shadow-xl backdrop-blur-md border border-slate-700 animate-in slide-in-from-top-4 flex items-center justify-between gap-3">
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="p-1 hover:bg-white/20 rounded-lg shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Top Header */}
      <Header
        title={session?.title || 'Pháp Luật Đại Cương'}
        timeLeftSeconds={timeLeft}
        timeSpentSeconds={timeSpentSeconds}
        isPractice={isPracticeMode}
        isTimerRunning={isTimerRunning}
        onToggleTimer={handleToggleTimer}
        onOpenExamSelect={() => setIsExamSelectOpen(true)}
        onOpenHistory={() => setIsHistoryModalOpen(true)}
        onSubmitClick={handleSubmitClick}
        isSubmitted={isSubmitted}
        answeredCount={answeredCount}
        totalQuestions={questions.length}
        theme={theme}
        onCycleTheme={handleCycleTheme}
      />

      {/* Main Body Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Prominent Current Exam Title Hero */}
        <div className="mb-4 sm:mb-6 p-4 sm:p-6 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 transition-colors">
          <div className="space-y-1 sm:space-y-1.5 min-w-0 w-full sm:w-auto">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={`px-2 py-0.5 text-[11px] sm:text-xs font-black rounded-md text-white tracking-wide uppercase ${
                  isPracticeMode ? 'bg-emerald-600' : 'bg-blue-600'
                }`}
              >
                {session?.mode === 'exam-set'
                  ? `BỘ ĐỀ ${session?.config.examId || 1}`
                  : session?.mode === 'exam-random'
                  ? 'ĐỀ THI NGẪU NHIÊN'
                  : session?.mode === 'exam-chapter'
                  ? 'THI THEO CHƯƠNG'
                  : 'LUYỆN TẬP TỰ DO'}
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
                • {questions.length} Câu Trắc Nghiệm{' '}
                {session?.durationSeconds
                  ? `• ${Math.round(session.durationSeconds / 60)} Phút`
                  : '• Tự Do (Giải thích ngay)'}
              </span>
            </div>
            <h1 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-snug break-words">
              {session?.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
              {isPracticeMode
                ? 'Chế độ luyện tập: Chọn đáp án là hiển thị ngay lời giải thích và căn cứ pháp lý, tính giờ tăng dần.'
                : 'Mỗi lượt thi được dựng đề mới ngẫu nhiên theo blueprint, đảo vị trí câu và phương án chống học vẹt.'}
            </p>
          </div>

          <button
            onClick={() => setIsExamSelectOpen(true)}
            className="w-full sm:w-auto justify-center flex items-center gap-2 px-4 py-2.5 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900 active:bg-blue-200 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-bold border border-blue-200 dark:border-blue-800 rounded-xl transition-all shadow-2xs shrink-0 active:scale-95 touch-manipulation"
            title="Đổi sang bộ đề hoặc chế độ khác"
          >
            <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Đổi bộ đề / chế độ</span>
          </button>
        </div>

        {/* SUBMITTED REVIEW MODE */}
        {isSubmitted ? (
          <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
            {/* Comprehensive Score Report */}
            <ResultReport
              examTitle={session?.title}
              questions={questions}
              userAnswers={userAnswers}
              flaggedQuestionIds={flaggedQuestionIds}
              timeSpentSeconds={timeSpentSeconds}
              onRetakeExam={handleRetakeExam}
              onChangeExam={() => setIsExamSelectOpen(true)}
              onOpenPrintModal={() => setIsPrintModalOpen(true)}
              onStartPracticeChapter={(chId) => handleStartPractice([chId], 'all', 20)}
              onPracticeWrongQuestions={handlePracticeWrongQuestions}
              filterReview={filterReview}
              onSetFilterReview={setFilterReview}
            />

            {/* List of Questions with full answers & explanations */}
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <span>Chi Tiết Đáp Án & Căn Cứ Pháp Lý</span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    Hiển thị {reviewQuestions.length}/{questions.length} câu
                  </span>
                </h3>
              </div>

              {reviewQuestions.length === 0 ? (
                <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-500">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                  <p className="text-base font-semibold text-slate-800 dark:text-slate-200">
                    Tuyệt vời! Không có câu hỏi nào trong danh mục này.
                  </p>
                  <button
                    onClick={() => setFilterReview('all')}
                    className="mt-3 px-4 py-2 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 rounded-xl transition-colors"
                  >
                    Xem tất cả {questions.length} câu
                  </button>
                </div>
              ) : (
                reviewQuestions.map((q) => {
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
                      isPractice={isPracticeMode}
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
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
                  isPractice={isPracticeMode}
                  onNext={handleNext}
                  onPrev={handlePrev}
                  hasNext={currentIndex < questions.length - 1}
                  hasPrev={currentIndex > 0}
                />
              )}

              {/* Quick instructions & rules card */}
              <div className="p-4 bg-white/80 dark:bg-slate-900/80 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span>
                    <strong>Quy chế:</strong>{' '}
                    {isPracticeMode
                      ? 'Chế độ Luyện tập: Chọn đáp án sẽ hiện ngay kết quả và căn cứ pháp lý.'
                      : `Đề thi gồm ${questions.length} câu trắc nghiệm (${Math.round((session?.durationSeconds || 5400) / 60)} phút). Hãy hoàn thành đầy đủ trước khi nộp bài.`}
                  </span>
                </div>
              </div>

              {/* Keyboard Shortcuts Hint Bar (Bật/Tắt) */}
              <div className="p-3.5 bg-white/80 dark:bg-slate-900/80 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-300">
                    <Keyboard className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>Gợi ý phím tắt bàn phím</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const next = !showKeyboardHints;
                      setShowKeyboardHints(next);
                      try {
                        localStorage.setItem('pl_show_shortcuts', String(next));
                      } catch {
                        // ignore storage errors
                      }
                    }}
                    className="text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline touch-manipulation"
                  >
                    {showKeyboardHints ? 'Ẩn phím tắt' : 'Hiện phím tắt'}
                  </button>
                </div>

                {showKeyboardHints && (
                  <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-2 text-[11px]">
                    <span className="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md font-mono text-slate-800 dark:text-slate-200">
                      <strong>← / →</strong> Câu trước / sau
                    </span>
                    <span className="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md font-mono text-slate-800 dark:text-slate-200">
                      <strong>1-4 / A-D</strong> Chọn phương án
                    </span>
                    <span className="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md font-mono text-slate-800 dark:text-slate-200">
                      <strong>F</strong> Cắm cờ
                    </span>
                    <span className="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md font-mono text-slate-800 dark:text-slate-200">
                      <strong>Space</strong> Tạm dừng / Tiếp tục
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Right 4 Columns: Question Grid Matrix */}
            <div className="lg:col-span-4 sticky top-20">
              <QuestionNav
                questions={questions}
                currentIndex={currentIndex}
                userAnswers={userAnswers}
                flaggedQuestionIds={flaggedQuestionIds}
                onSelectQuestion={handleJumpToIndex}
                onSubmitClick={handleSubmitClick}
                isSubmitted={false}
                isPractice={isPracticeMode}
              />
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-6 mt-8 sm:mt-12 text-center text-xs text-slate-500 dark:text-slate-400 pb-safe transition-colors">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            Hệ thống ôn thi & trắc nghiệm <strong>Pháp luật đại cương</strong> (Ngân hàng 1.400 câu hỏi chuẩn đại học).
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPrintModalOpen(true)}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              In đề thi & Đáp án
            </button>
            <span>•</span>
            <a
              href="/download-offline"
              download="TracNghiem_PhapLuatDaiCuong_500Cau.html"
              className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline transition-colors"
              title="Tải 1 file HTML duy nhất chạy trực tiếp offline trên điện thoại / gửi Zalo"
            >
              Tải bản offline (.html)
            </a>
            <span>•</span>
            <button
              onClick={() => setIsExamSelectOpen(true)}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Đổi bộ đề
            </button>
          </div>
        </div>
      </footer>

      {/* MODALS */}

      {/* Submit Warning Modal */}
      <SubmitWarningModal
        isOpen={isSubmitWarningOpen}
        onClose={() => setIsSubmitWarningOpen(false)}
        unansweredIndices={unansweredIndices}
        totalQuestions={questions.length}
        onJumpToQuestion={handleJumpToIndex}
        onConfirmSubmit={handleConfirmSubmit}
      />

      {/* Exam / Mode Selector Modal */}
      <ExamSelectModal
        isOpen={isExamSelectOpen}
        onClose={() => setIsExamSelectOpen(false)}
        currentMode={session?.mode || 'exam-set'}
        currentExamId={session?.config.examId}
        onStartExamSet={handleStartExamSet}
        onStartRandomExam={handleStartRandomExam}
        onStartChapterExam={handleStartChapterExam}
        onStartPractice={handleStartPractice}
      />

      {/* Print Exam Modal */}
      <PrintExamModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        examTitle={session?.title || 'Pháp Luật Đại Cương'}
        questions={questions}
      />

      {/* Resume Modal */}
      <ResumeModal
        session={session}
        isOpen={isResumeModalOpen}
        onResume={() => {
          setIsResumeModalOpen(false);
        }}
        onDiscard={() => {
          setIsResumeModalOpen(false);
          startNewSession({ mode: 'exam-set', examId: 1 });
        }}
      />

      {/* History Modal */}
      <HistoryModal
        isOpen={isHistoryModalOpen}
        onClose={() => setIsHistoryModalOpen(false)}
        history={loadHistory()}
        onRefreshHistory={() => {}}
        onStartPracticeChapter={(chId) => {
          handleStartPractice([chId], 'all', 20);
        }}
      />

      {/* Confirmation Modal when switching exams mid-way */}
      <ConfirmModal
        isOpen={confirmSwitchModal.isOpen}
        onClose={() => setConfirmSwitchModal({ isOpen: false, onConfirm: () => {} })}
        onConfirm={confirmSwitchModal.onConfirm}
        title="Huỷ Bài Thi Đang Làm?"
        message="Bài thi hiện tại của bạn chưa hoàn thành. Nếu chuyển sang bộ đề hoặc chế độ mới, kết quả lượt làm này sẽ bị huỷ bỏ. Bạn có chắc chắn muốn chuyển không?"
        confirmText="Vẫn chuyển"
        isDanger={true}
      />
    </div>
  );
}
