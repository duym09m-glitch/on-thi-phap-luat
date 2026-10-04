import React, { useState } from 'react';
import { Bookmark, CheckCircle2, ChevronDown, ChevronUp, CircleSlash2 } from 'lucide-react';
import { Question } from '../types/quiz';

interface QuestionNavProps {
  questions: Question[];
  currentIndex: number;
  userAnswers: Record<number, number>; // questionId -> optionIndex (0..3)
  flaggedQuestionIds: Set<number>;
  onSelectQuestion: (index: number) => void;
  onSubmitClick: () => void;
  isSubmitted: boolean;
  isPractice?: boolean;
}

export const QuestionNav: React.FC<QuestionNavProps> = ({
  questions,
  currentIndex,
  userAnswers,
  flaggedQuestionIds,
  onSelectQuestion,
  onSubmitClick,
  isSubmitted,
  isPractice = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [filter, setFilter] = useState<'all' | 'answered' | 'unanswered' | 'flagged'>('all');

  const total = questions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const unansweredCount = total - answeredCount;
  const flaggedCount = flaggedQuestionIds.size;

  const filteredQuestions = questions
    .map((q, idx) => ({ q, idx }))
    .filter(({ q }) => {
      const isAnswered = userAnswers[q.id] !== undefined;
      const isFlagged = flaggedQuestionIds.has(q.id);

      if (filter === 'answered') return isAnswered;
      if (filter === 'unanswered') return !isAnswered;
      if (filter === 'flagged') return isFlagged;
      return true;
    });

  return (
    <aside className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col h-full">
      {/* Top Header */}
      <div className="p-3.5 sm:p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/40 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span>Bảng {total} Câu Hỏi</span>
            <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
              {answeredCount}/{total}
            </span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {isPractice
              ? 'Xanh: Đúng • Đỏ: Sai • Trắng: Chưa làm'
              : 'Xanh: Đã chọn • Đỏ: Chưa chọn'}
          </p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="md:hidden p-1.5 rounded-lg text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          title="Thu gọn / Mở rộng"
        >
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>

      {isExpanded && (
        <>
          {/* Progress bar */}
          <div className="px-4 py-2.5 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
            <div className="flex justify-between text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
              <span>Tiến độ hoàn thành:</span>
              <span className="font-bold text-blue-700 dark:text-blue-400">
                {Math.round((answeredCount / (total || 1)) * 100)}%
              </span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(answeredCount / (total || 1)) * 100}%` }}
              />
            </div>
          </div>

          {/* Quick filter tabs */}
          <div className="p-2 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 flex items-center gap-1 overflow-x-auto no-scrollbar py-2 text-xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-2.5 py-1.5 rounded-lg font-bold transition-all shrink-0 active:scale-95 touch-manipulation ${
                filter === 'all'
                  ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              Tất cả ({total})
            </button>
            <button
              onClick={() => setFilter('answered')}
              className={`px-2.5 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1 shrink-0 active:scale-95 touch-manipulation ${
                filter === 'answered'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              Đã làm ({answeredCount})
            </button>
            <button
              onClick={() => setFilter('unanswered')}
              className={`px-2.5 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1 shrink-0 active:scale-95 touch-manipulation ${
                filter === 'unanswered'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 hover:bg-rose-100'
              }`}
            >
              <CircleSlash2 className="w-3.5 h-3.5" />
              Chưa làm ({unansweredCount})
            </button>
            {flaggedCount > 0 && (
              <button
                onClick={() => setFilter('flagged')}
                className={`px-2.5 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1 shrink-0 active:scale-95 touch-manipulation ${
                  filter === 'flagged'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 hover:bg-amber-100'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                Cắm cờ ({flaggedCount})
              </button>
            )}
          </div>

          {/* Question Grid Matrix */}
          <div className="flex-1 overflow-y-auto p-3 max-h-[320px] lg:max-h-[calc(100vh-370px)] min-h-[180px]">
            <div className="grid grid-cols-5 sm:grid-cols-10 lg:grid-cols-5 gap-1.5">
              {filteredQuestions.map(({ q, idx }) => {
                const isCurrent = idx === currentIndex;
                const isAnswered = userAnswers[q.id] !== undefined;
                const isFlagged = flaggedQuestionIds.has(q.id);

                let stateStyles = '';
                if (isSubmitted) {
                  // Sau khi nộp bài: đúng xanh, sai đỏ
                  const isCorrect = userAnswers[q.id] === q.correctAnswer;
                  if (isCorrect) {
                    stateStyles = 'bg-emerald-600 text-white border-emerald-700';
                  } else {
                    stateStyles = 'bg-rose-600 text-white border-rose-700';
                  }
                } else if (isPractice) {
                  // Ở chế độ luyện tập: tô màu ngay lập tức
                  if (isAnswered) {
                    const isCorrect = userAnswers[q.id] === q.correctAnswer;
                    if (isCorrect) {
                      stateStyles = 'bg-emerald-600 text-white border-emerald-700 font-bold shadow-xs';
                    } else {
                      stateStyles = 'bg-rose-600 text-white border-rose-700 font-bold shadow-xs';
                    }
                  } else {
                    stateStyles = 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700';
                  }
                } else {
                  // Chế độ thi bình thường
                  if (isAnswered) {
                    stateStyles = 'bg-emerald-600 hover:bg-emerald-700 text-white font-bold border-emerald-700 shadow-xs';
                  } else {
                    stateStyles = 'bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 text-rose-700 dark:text-rose-400 border-rose-300 dark:border-rose-800 font-semibold';
                  }
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => onSelectQuestion(idx)}
                    className={`relative h-10 sm:h-9 rounded-lg text-xs flex items-center justify-center transition-all border touch-manipulation ${stateStyles} ${
                      isCurrent
                        ? 'ring-2 ring-blue-600 ring-offset-2 dark:ring-offset-slate-900 scale-105 z-10 font-extrabold shadow-sm'
                        : 'active:scale-95'
                    }`}
                    title={`Câu ${idx + 1}: ${isAnswered ? 'Đã trả lời' : 'Chưa chọn đáp án'}`}
                  >
                    <span>{idx + 1}</span>

                    {/* Flag indicator icon */}
                    {isFlagged && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 ring-1 ring-white dark:ring-slate-900" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Submit CTA */}
          {!isSubmitted && (
            <div className="p-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 space-y-2">
              <button
                onClick={onSubmitClick}
                className={`w-full py-2.5 px-4 text-white text-sm font-bold rounded-xl shadow-md transition-all active:scale-98 flex items-center justify-center gap-2 ${
                  isPractice
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 shadow-emerald-600/20'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-blue-600/20'
                }`}
              >
                <span>{isPractice ? 'Kết Thúc Luyện Tập' : 'Nộp Bài Thi'}</span>
              </button>
              <div className="flex items-center justify-center gap-3 text-[11px] text-slate-500 dark:text-slate-400 pt-1 flex-wrap">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-sm bg-emerald-600 inline-block" />
                  {isPractice ? 'Đúng' : 'Đã làm'}
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-sm bg-rose-500 inline-block" />
                  {isPractice ? 'Sai' : 'Chưa làm'}
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-sm bg-amber-400 inline-block" />
                  Cắm cờ
                </span>
              </div>
            </div>
          )}
        </>
      )}
    </aside>
  );
};
