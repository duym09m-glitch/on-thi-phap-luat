import React, { useEffect, useState } from 'react';
import { Chapter, ExamConfig, ExamResult, ExamSession, StoredExamResult } from './types';
import { getChapters } from './bank';
import { buildExam } from './lib/buildExam';
import {
  clearActiveSession,
  clearAllHistory,
  deleteHistoryItem,
  getActiveSession,
  getRecentQuestionIds,
  getStoredHistory,
  initSessionLifecycle,
  reconstructExamResult,
  saveActiveSession,
  saveHistoryResult,
} from './lib/storage';
import { navigate, useHashRoute } from './lib/router';
import { Header } from './components/Header';
import { HomeScreen } from './components/HomeScreen';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';
import { HistoryScreen } from './components/HistoryScreen';
import { ConfirmModal } from './components/ConfirmModal';

export const App: React.FC = () => {
  const [route] = useHashRoute();
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [activeSession, setActiveSession] = useState<ExamSession | null>(null);
  const [currentResult, setCurrentResult] = useState<ExamResult | null>(null);
  const [historyList, setHistoryList] = useState<StoredExamResult[]>([]);
  const [isDiscardConfirmOpen, setIsDiscardConfirmOpen] = useState(false);

  // Initialize lifecycle & data on mount
  useEffect(() => {
    initSessionLifecycle();

    const loadedChapters = getChapters();
    setChapters(loadedChapters);

    const savedSession = getActiveSession();
    if (savedSession && !savedSession.completed) {
      setActiveSession(savedSession);
    }

    setHistoryList(getStoredHistory());
  }, []);

  // Sync activeSession changes to localStorage
  const handleUpdateSession = (updated: ExamSession) => {
    setActiveSession(updated);
    saveActiveSession(updated);
  };

  // Start new exam
  const handleStartExam = (config: ExamConfig) => {
    try {
      // Gather recently seen question IDs to prioritize unseen questions
      const recentIds = getRecentQuestionIds(config.chapters, config.presetId);

      // Build pure exam with crypto Fisher-Yates and shuffled options
      const examQuestions = buildExam({
        config,
        recentQuestionIds: recentIds,
      });

      const now = Date.now();
      const durationSecs = config.durationMinutes * 60;
      const endAt = now + durationSecs * 1000;

      const newSession: ExamSession = {
        id: `exam-${now}`,
        mode: config.mode,
        title: config.title,
        chapters: config.chapters,
        presetId: config.presetId,
        questions: examQuestions,
        userAnswers: {},
        startTime: now,
        durationSeconds: durationSecs,
        endAt,
        isPaused: false,
        remainingSeconds: durationSecs,
        completed: false,
      };

      setActiveSession(newSession);
      saveActiveSession(newSession);
      navigate('/quiz');
    } catch (e: any) {
      alert(e.message || 'Không thể khởi tạo đề thi');
    }
  };

  // Resume active session
  const handleResumeActiveSession = () => {
    if (activeSession) {
      navigate('/quiz');
    }
  };

  // Discard active session
  const handleDiscardActiveSession = () => {
    setIsDiscardConfirmOpen(true);
  };

  const confirmDiscardActiveSession = () => {
    setActiveSession(null);
    clearActiveSession();
    setIsDiscardConfirmOpen(false);
  };

  // Submit exam
  const handleSubmitExam = () => {
    if (!activeSession) return;

    const totalQuestions = activeSession.questions.length;
    let correctCount = 0;

    activeSession.questions.forEach((q, idx) => {
      const selected = activeSession.userAnswers[idx];
      if (selected !== undefined && selected === q.correctOptionIndex) {
        correctCount++;
      }
    });

    const score = Number(((correctCount / totalQuestions) * 10).toFixed(2));
    const timeSpent = Math.max(
      1,
      Math.min(
        activeSession.durationSeconds,
        Math.floor((Date.now() - activeSession.startTime) / 1000)
      )
    );

    const result: ExamResult = {
      id: activeSession.id,
      mode: activeSession.mode,
      title: activeSession.title,
      chapters: activeSession.chapters,
      presetId: activeSession.presetId,
      date: Date.now(),
      timeSpentSeconds: timeSpent,
      totalQuestions,
      correctCount,
      score,
      questions: activeSession.questions,
      userAnswers: activeSession.userAnswers,
    };

    saveHistoryResult(result);
    setHistoryList(getStoredHistory());
    setCurrentResult(result);

    setActiveSession(null);
    clearActiveSession();

    navigate(`/result/${encodeURIComponent(result.id)}`);
  };

  // View historical result
  const handleViewResult = (id: string) => {
    if (currentResult && currentResult.id === id) {
      navigate(`/result/${encodeURIComponent(id)}`);
      return;
    }

    const stored = historyList.find((h) => h.id === id);
    if (stored) {
      const reconstructed = reconstructExamResult(stored);
      if (reconstructed) {
        setCurrentResult(reconstructed);
        navigate(`/result/${encodeURIComponent(id)}`);
      }
    }
  };

  // Delete history item
  const handleDeleteHistoryItem = (id: string) => {
    deleteHistoryItem(id);
    setHistoryList(getStoredHistory());
  };

  // Clear all history
  const handleClearAllHistory = () => {
    clearAllHistory();
    setHistoryList([]);
  };

  // Retake exam with same parameters
  const handleRetakeExam = () => {
    if (currentResult) {
      handleStartExam({
        mode: currentResult.mode,
        title: currentResult.title,
        chapters: currentResult.chapters,
        presetId: currentResult.presetId,
        totalQuestions: currentResult.totalQuestions,
        durationMinutes: 90,
      });
    } else {
      navigate('/');
    }
  };

  // Resolve result if loading directly via URL #/result/:id
  useEffect(() => {
    if (route.path === '/result') {
      const id = route.params.id;
      if (id && (!currentResult || currentResult.id !== id)) {
        const stored = getStoredHistory().find((h) => h.id === id);
        if (stored) {
          const reconstructed = reconstructExamResult(stored);
          if (reconstructed) {
            setCurrentResult(reconstructed);
          }
        }
      }
    }
  }, [route, currentResult]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors">
      <Header currentPath={route.path} onNavigateHome={() => navigate('/')} />

      <main className="flex-1">
        {route.path === '/' && (
          <HomeScreen
            chapters={chapters}
            activeSession={activeSession}
            onResumeActiveSession={handleResumeActiveSession}
            onDiscardActiveSession={handleDiscardActiveSession}
            onStartExam={handleStartExam}
          />
        )}

        {route.path === '/quiz' && activeSession && (
          <QuizScreen
            session={activeSession}
            onUpdateSession={handleUpdateSession}
            onSubmitExam={handleSubmitExam}
            onNavigateHome={() => navigate('/')}
          />
        )}

        {route.path === '/quiz' && !activeSession && (
          <div className="max-w-md mx-auto py-16 px-4 text-center space-y-4">
            <p className="text-slate-600 dark:text-slate-400">
              Không có bài thi nào đang được thực hiện.
            </p>
            <button
              onClick={() => navigate('/')}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm"
            >
              Về trang chủ
            </button>
          </div>
        )}

        {route.path === '/result' && currentResult && (
          <ResultScreen
            result={currentResult}
            onNavigateHome={() => navigate('/')}
            onRetakeExam={handleRetakeExam}
          />
        )}

        {route.path === '/result' && !currentResult && (
          <div className="max-w-md mx-auto py-16 px-4 text-center space-y-4">
            <p className="text-slate-600 dark:text-slate-400">
              Không tìm thấy thông tin bài thi hoặc bài thi đã bị xóa.
            </p>
            <button
              onClick={() => navigate('/')}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm"
            >
              Về trang chủ
            </button>
          </div>
        )}

        {route.path === '/history' && (
          <HistoryScreen
            historyList={historyList}
            onViewResult={handleViewResult}
            onDeleteItem={handleDeleteHistoryItem}
            onClearAll={handleClearAllHistory}
            onNavigateHome={() => navigate('/')}
          />
        )}
      </main>

      {/* Discard Active Session Modal */}
      <ConfirmModal
        isOpen={isDiscardConfirmOpen}
        title="Bỏ bài thi dở dang?"
        message="Hành động này sẽ xóa toàn bộ tiến độ của bài thi hiện tại. Bạn sẽ không thể phục hồi lại bài làm này."
        confirmText="Bỏ bài thi"
        cancelText="Tiếp tục làm"
        confirmVariant="danger"
        onConfirm={confirmDiscardActiveSession}
        onCancel={() => setIsDiscardConfirmOpen(false)}
      />

      {/* Academic Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-6 text-center text-xs text-slate-500 dark:text-slate-400 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm transition-colors">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 Ôn Thi Pháp Luật Đại Cương • Dành cho sinh viên không chuyên luật</p>
          <p className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
            <span>Ngân hàng chuẩn 1.400 câu hỏi</span>
            <span>•</span>
            <span>Bộ câu hỏi cập nhật mới nhất</span>
          </p>
        </div>
      </footer>
    </div>
  );
};
