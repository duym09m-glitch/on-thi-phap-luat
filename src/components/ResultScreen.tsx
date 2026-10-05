import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Award,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Home,
  RotateCcw,
  XCircle,
} from 'lucide-react';
import { ExamResult } from '../types';

interface ResultScreenProps {
  result: ExamResult;
  onNavigateHome: () => void;
  onRetakeExam: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  result,
  onNavigateHome,
  onRetakeExam,
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'incorrect'>('all');
  // Set of opened question index IDs for toggling explanations
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set());

  // Confetti effect for good score (score >= 8.0)
  useEffect(() => {
    if (result.score >= 8.0) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // Ignore confetti error
      }
    }
  }, [result.score]);

  const toggleExpand = (index: number) => {
    setExpandedIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  // Format time (m:s)
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m} phút ${s.toString().padStart(2, '0')} giây`;
  };

  // Grade classification
  const getGradeInfo = (score: number) => {
    if (score >= 9.0) {
      return {
        badge: 'Xuất sắc',
        color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-800',
        message: 'Kiến thức pháp lý của bạn rất vững chắc! Xin chúc mừng.',
      };
    }
    if (score >= 8.0) {
      return {
        badge: 'Giỏi',
        color: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border-blue-300 dark:border-blue-800',
        message: 'Bạn nắm rất tốt các chế định cơ bản của pháp luật.',
      };
    }
    if (score >= 6.5) {
      return {
        badge: 'Khá',
        color: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-300 dark:border-indigo-800',
        message: 'Kết quả khả quan, hãy ôn lại những câu làm sai để đạt điểm tối đa.',
      };
    }
    if (score >= 5.0) {
      return {
        badge: 'Trung bình',
        color: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 border-amber-300 dark:border-amber-800',
        message: 'Bạn đã đạt chuẩn qua môn, nhưng cần ôn thêm các quy định chi tiết.',
      };
    }
    return {
      badge: 'Chưa đạt',
      color: 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-800',
      message: 'Hãy xem kỹ các câu sai kèm giải thích luật dưới đây để cải thiện.',
    };
  };

  const grade = getGradeInfo(result.score);
  const incorrectCount = result.totalQuestions - result.correctCount;

  // Filter questions
  const displayedQuestions = result.questions
    .map((q, idx) => ({ q, idx }))
    .filter(({ idx }) => {
      const isCorrect = result.userAnswers[idx] === result.questions[idx].correctOptionIndex;
      if (filterMode === 'incorrect') {
        return !isCorrect;
      }
      return true;
    });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-300">
      {/* 1. Score Summary Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            <span>{result.title}</span>
            <span>•</span>
            <span>
              {result.mode === 'preset'
                ? 'Đề mẫu'
                : result.mode === 'chapter'
                ? 'Thi theo chương'
                : 'Luyện tập'}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Kết Quả Bài Thi
          </h1>
        </div>

        {/* Big Score Number */}
        <div className="flex flex-col items-center justify-center">
          <div className="text-5xl sm:text-7xl font-black text-indigo-600 dark:text-indigo-400 tracking-tight leading-none">
            {result.score.toFixed(2)}
            <span className="text-2xl sm:text-3xl font-bold text-slate-400">/10</span>
          </div>
          <div className="mt-3">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-bold border ${grade.color}`}
            >
              <Award className="w-4 h-4" />
              Xếp loại: {grade.badge}
            </span>
          </div>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
            {grade.message}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800 max-w-lg mx-auto">
          <div className="p-3 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40">
            <span className="block text-xl font-bold text-emerald-600 dark:text-emerald-400">
              {result.correctCount}/{result.totalQuestions}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Số câu đúng</span>
          </div>
          <div className="p-3 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40">
            <span className="block text-xl font-bold text-rose-600 dark:text-rose-400">
              {incorrectCount}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Câu sai / bỏ trống</span>
          </div>
          <div className="col-span-2 sm:col-span-1 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
            <span className="block text-xl font-bold text-slate-700 dark:text-slate-200">
              {formatTime(result.timeSpentSeconds)}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Thời gian làm bài</span>
          </div>
        </div>

        {/* Top Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={onNavigateHome}
            className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-sm transition flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Về trang chủ
          </button>
          <button
            onClick={onRetakeExam}
            className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-600/20 transition flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Làm đề mới
          </button>
        </div>
      </div>

      {/* 2. Review List Header & Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            Chi tiết câu trả lời
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Bấm vào từng câu để xem lại phương án và cơ sở pháp lý
          </p>
        </div>

        {/* Filter buttons: "Tất cả" | "Chỉ câu sai" */}
        <div className="bg-slate-200/70 dark:bg-slate-800/70 p-1 rounded-xl flex items-center shrink-0 self-start sm:self-auto">
          <button
            onClick={() => setFilterMode('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              filterMode === 'all'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Tất cả ({result.totalQuestions})
          </button>
          <button
            onClick={() => setFilterMode('incorrect')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              filterMode === 'incorrect'
                ? 'bg-white dark:bg-slate-900 text-rose-600 dark:text-rose-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Chỉ câu sai ({incorrectCount})
          </button>
        </div>
      </div>

      {/* 3. Question Review List */}
      <div className="space-y-4">
        {displayedQuestions.map(({ q, idx }) => {
          const userAnswerIdx = result.userAnswers[idx];
          const isCorrect = userAnswerIdx === q.correctOptionIndex;
          const isUnanswered = userAnswerIdx === undefined;

          // By requirement: "Câu đúng thu gọn mặc định, bấm để mở giải thích. Câu sai hoặc bỏ trống: ĐỎ, và ngay dưới câu đó hiển thị rõ đáp án..."
          // If incorrect, always show explanation. If correct, show if in expandedIndices.
          const isExpanded = !isCorrect || expandedIndices.has(idx);

          return (
            <div
              key={idx}
              className={`rounded-2xl border-2 overflow-hidden transition-all bg-white dark:bg-slate-900 ${
                isCorrect
                  ? 'border-emerald-500/80 dark:border-emerald-500/70'
                  : 'border-rose-500/80 dark:border-rose-500/70'
              }`}
            >
              {/* Question Header Card */}
              <div
                onClick={() => isCorrect && toggleExpand(idx)}
                className={`p-4 sm:p-5 flex items-start justify-between gap-3 ${
                  isCorrect
                    ? 'bg-emerald-50/30 dark:bg-emerald-950/10 cursor-pointer hover:bg-emerald-50/50'
                    : 'bg-rose-50/30 dark:bg-rose-950/10'
                }`}
              >
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className="pt-0.5 shrink-0">
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                    )}
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                        Câu {idx + 1}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        Chương {q.chapter}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                          isCorrect
                            ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                            : 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                        }`}
                      >
                        {isCorrect ? 'Đúng' : isUnanswered ? 'Bỏ trống' : 'Sai'}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base font-medium text-slate-900 dark:text-white leading-relaxed">
                      {q.text}
                    </p>
                  </div>
                </div>

                {isCorrect && (
                  <button
                    type="button"
                    className="p-1 rounded-lg text-slate-400 hover:text-slate-600 shrink-0"
                    aria-label="Thu gọn/mở rộng"
                  >
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                )}
              </div>

              {/* Expanded details: Options + Explanation */}
              {isExpanded && (
                <div className="p-4 sm:p-5 pt-0 space-y-4 border-t border-slate-100 dark:border-slate-800/80">
                  {/* Options list */}
                  <div className="space-y-2 pt-3">
                    {q.options.map((opt, optIdx) => {
                      const letter = String.fromCharCode(65 + optIdx);
                      const isUserChoice = userAnswerIdx === optIdx;
                      const isCorrectChoice = optIdx === q.correctOptionIndex;

                      let optClass =
                        'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 text-slate-600 dark:text-slate-400';

                      if (isCorrectChoice) {
                        optClass =
                          'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-100 font-medium';
                      } else if (isUserChoice && !isCorrectChoice) {
                        optClass =
                          'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-950 dark:text-rose-100 line-through';
                      }

                      return (
                        <div
                          key={optIdx}
                          className={`p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-2.5 ${optClass}`}
                        >
                          <span className="w-6 h-6 rounded-lg font-bold flex items-center justify-center shrink-0 bg-white/70 dark:bg-slate-900/70">
                            {letter}
                          </span>
                          <span className="flex-1 pt-0.5 leading-relaxed">{opt}</span>
                          {isCorrectChoice && (
                            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 shrink-0 self-center">
                              (Đáp án đúng)
                            </span>
                          )}
                          {isUserChoice && !isCorrectChoice && (
                            <span className="text-xs font-bold text-rose-600 dark:text-rose-400 shrink-0 self-center">
                              (Bạn đã chọn)
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Legal Explanation Box */}
                  <div className="p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/60 text-xs sm:text-sm">
                    <div className="font-bold text-indigo-900 dark:text-indigo-300 mb-1 flex items-center gap-1.5">
                      <span>Căn cứ pháp lý & Lời giải:</span>
                    </div>
                    <p className="text-indigo-950 dark:text-indigo-200 leading-relaxed whitespace-pre-line">
                      {q.explanation}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-6 pb-12">
        <button
          onClick={onNavigateHome}
          className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm transition flex items-center gap-2 shadow-sm"
        >
          <Home className="w-4 h-4" />
          Về trang chủ
        </button>
        <button
          onClick={onRetakeExam}
          className="px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold text-sm shadow-md shadow-indigo-600/25 transition flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Làm lại đề mới
        </button>
      </div>
    </div>
  );
};
