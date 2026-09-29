import React, { useState } from 'react';
import { Bookmark, CheckCircle2, ChevronDown, ChevronUp, CircleSlash2, HelpCircle } from 'lucide-react';
import { Question } from '../types/quiz';

interface QuestionNavProps {
  questions: Question[];
  currentIndex: number;
  userAnswers: Record<number, number>; // questionId -> optionIndex (0..3)
  flaggedQuestionIds: Set<number>;
  onSelectQuestion: (index: number) => void;
  onSubmitClick: () => void;
  isSubmitted: boolean;
}

export const QuestionNav: React.FC<QuestionNavProps> = ({
  questions,
  currentIndex,
  userAnswers,
  flaggedQuestionIds,
  onSelectQuestion,
  onSubmitClick,
  isSubmitted,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [filter, setFilter] = useState<'all' | 'answered' | 'unanswered' | 'flagged'>('all');

  const total = questions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const unansweredCount = total - answeredCount;
  const flaggedCount = flaggedQuestionIds.size;

  const filteredQuestions = questions.map((q, idx) => ({ q, idx })).filter(({ q }) => {
    const isAnswered = userAnswers[q.id] !== undefined;
    const isFlagged = flaggedQuestionIds.has(q.id);

    if (filter === 'answered') return isAnswered;
    if (filter === 'unanswered') return !isAnswered;
    if (filter === 'flagged') return isFlagged;
    return true;
  });

  return (
    <aside className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
      {/* Top Header */}
      <div className="p-4 border-b border-slate-100 bg-slate-50/70 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <span>Bảng 100 Câu Hỏi</span>
            <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
              {answeredCount}/{total}
            </span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Xanh: Đã chọn • Đỏ: Chưa chọn
          </p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="md:hidden p-1.5 rounded-lg text-slate-500 hover:bg-slate-200 transition-colors"
          title="Thu gọn / Mở rộng"
        >
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>

      {isExpanded && (
        <>
          {/* Progress bar */}
          <div className="px-4 py-2.5 bg-white border-b border-slate-100">
            <div className="flex justify-between text-xs font-medium text-slate-600 mb-1">
              <span>Tiến độ hoàn thành:</span>
              <span className="font-bold text-blue-700">
                {Math.round((answeredCount / total) * 100)}%
              </span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(answeredCount / total) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Quick filter tabs */}
          <div className="p-2 border-b border-slate-100 bg-slate-50/50 flex flex-wrap gap-1 text-[11px]">
            <button
              onClick={() => setFilter('all')}
              className={`px-2 py-1 rounded-md font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-600 hover:bg-slate-200'
              }`}
            >
              Tất cả ({total})
            </button>
            <button
              onClick={() => setFilter('answered')}
              className={`px-2 py-1 rounded-md font-medium transition-colors flex items-center gap-1 ${
                filter === 'answered'
                  ? 'bg-emerald-600 text-white'
                  : 'text-emerald-700 hover:bg-emerald-50'
              }`}
            >
              <CheckCircle2 className="w-3 h-3" />
              Đã làm ({answeredCount})
            </button>
            <button
              onClick={() => setFilter('unanswered')}
              className={`px-2 py-1 rounded-md font-medium transition-colors flex items-center gap-1 ${
                filter === 'unanswered'
                  ? 'bg-rose-600 text-white'
                  : 'text-rose-700 hover:bg-rose-50'
              }`}
            >
              <CircleSlash2 className="w-3 h-3" />
              Chưa làm ({unansweredCount})
            </button>
            {flaggedCount > 0 && (
              <button
                onClick={() => setFilter('flagged')}
                className={`px-2 py-1 rounded-md font-medium transition-colors flex items-center gap-1 ${
                  filter === 'flagged'
                    ? 'bg-amber-600 text-white'
                    : 'text-amber-700 hover:bg-amber-50'
                }`}
              >
                <Bookmark className="w-3 h-3 fill-amber-500 text-amber-500" />
                Cắm cờ ({flaggedCount})
              </button>
            )}
          </div>

          {/* 100 Question Grid */}
          <div className="flex-1 overflow-y-auto p-3 max-h-[calc(100vh-370px)] min-h-[220px]">
            <div className="grid grid-cols-5 gap-1.5">
              {filteredQuestions.map(({ q, idx }) => {
                const isCurrent = idx === currentIndex;
                const isAnswered = userAnswers[q.id] !== undefined;
                const isFlagged = flaggedQuestionIds.has(q.id);

                // Styling logic per requirements:
                // Green if answered, Red if unanswered!
                let stateStyles = '';
                if (isSubmitted) {
                  // After submission: check if correct
                  const isCorrect = userAnswers[q.id] === q.correctAnswer;
                  if (isCorrect) {
                    stateStyles = 'bg-emerald-600 text-white border-emerald-700';
                  } else {
                    stateStyles = 'bg-rose-600 text-white border-rose-700';
                  }
                } else {
                  if (isAnswered) {
                    stateStyles = 'bg-emerald-600 hover:bg-emerald-700 text-white font-bold border-emerald-700 shadow-xs';
                  } else {
                    stateStyles = 'bg-rose-50 hover:bg-rose-100 text-rose-700 border-rose-300 font-semibold';
                  }
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => onSelectQuestion(idx)}
                    className={`relative h-9 rounded-lg text-xs flex items-center justify-center transition-all border ${stateStyles} ${
                      isCurrent
                        ? 'ring-2 ring-blue-600 ring-offset-2 scale-105 z-10 font-extrabold shadow-sm'
                        : 'active:scale-95'
                    }`}
                    title={`Câu ${idx + 1}: ${isAnswered ? 'Đã trả lời' : 'Chưa chọn đáp án'}`}
                  >
                    <span>{idx + 1}</span>

                    {/* Flag indicator icon */}
                    {isFlagged && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 ring-1 ring-white" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Submit CTA */}
          {!isSubmitted && (
            <div className="p-3 border-t border-slate-100 bg-slate-50 space-y-2">
              <button
                onClick={onSubmitClick}
                className="w-full py-2.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white text-sm font-bold rounded-xl shadow-md transition-all active:scale-98 flex items-center justify-center gap-2"
              >
                <span>Nộp Bài Thi (90 Phút)</span>
              </button>
              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-sm bg-emerald-600 inline-block"></span>
                  Đã làm
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-sm bg-rose-200 border border-rose-400 inline-block"></span>
                  Chưa làm
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-sm bg-amber-400 inline-block"></span>
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
