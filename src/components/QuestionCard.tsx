import React from 'react';
import { Bookmark, Check, CheckCircle2, ChevronLeft, ChevronRight, Scale, X, XCircle } from 'lucide-react';
import { Question } from '../types/quiz';

interface QuestionCardProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  selectedOption: number | undefined; // 0..3 or undefined
  onSelectOption: (optionIndex: number) => void;
  isFlagged: boolean;
  onToggleFlag: () => void;
  isSubmitted: boolean;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionIndex,
  totalQuestions,
  selectedOption,
  onSelectOption,
  isFlagged,
  onToggleFlag,
  isSubmitted,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}) => {
  const isAnswered = selectedOption !== undefined;
  const isCorrect = isSubmitted && isAnswered && selectedOption === question.correctAnswer;
  const isWrong = isSubmitted && isAnswered && selectedOption !== question.correctAnswer;
  const isOmitted = isSubmitted && !isAnswered;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col transition-all">
      {/* Question Header */}
      <div className="px-4 py-3 sm:px-6 sm:py-4 border-b border-slate-100 bg-slate-50/70 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <span className="inline-flex items-center justify-center px-2.5 py-1 bg-blue-600 text-white text-xs font-bold rounded-lg shadow-xs shrink-0">
            Câu {questionIndex + 1}/{totalQuestions}
          </span>
          <span className="text-xs font-medium text-slate-600 bg-slate-200/80 px-2.5 py-1 rounded-md max-w-[160px] xs:max-w-xs sm:max-w-md truncate">
            {question.chapterName}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {/* Flag button */}
          <button
            onClick={onToggleFlag}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold transition-all active:scale-95 touch-manipulation ${
              isFlagged
                ? 'bg-amber-100 text-amber-800 border border-amber-300'
                : 'text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
            title="Đánh dấu câu hỏi để xem lại sau"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-500 text-amber-500' : ''}`} />
            <span className="hidden xs:inline">{isFlagged ? 'Đã cắm cờ' : 'Cắm cờ'}</span>
            <span className="xs:hidden">{isFlagged ? 'Đã cắm' : 'Cờ'}</span>
          </button>
        </div>
      </div>

      {/* Question Text */}
      <div className="p-4 sm:p-6 md:p-7">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed tracking-normal break-words">
          {question.question}
        </h3>

        {/* Status banner in submitted mode */}
        {isSubmitted && (
          <div className="mt-4">
            {isCorrect && (
              <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Bạn đã trả lời chính xác! (+0.1 điểm)</span>
              </div>
            )}
            {isWrong && (
              <div className="flex items-center gap-2 p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-sm font-semibold">
                <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>
                  Bạn đã chọn sai phương án ({OPTION_LABELS[selectedOption!]}). Hãy xem đáp án đúng bên dưới!
                </span>
              </div>
            )}
            {isOmitted && (
              <div className="flex items-center gap-2 p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-sm font-semibold">
                <XCircle className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Bạn đã bỏ trống câu hỏi này chưa chọn đáp án (0 điểm).</span>
              </div>
            )}
          </div>
        )}

        {/* 4 Options List */}
        <div className="mt-6 space-y-3">
          {question.options.map((optionText, optIdx) => {
            const isSelected = selectedOption === optIdx;
            const isThisTheCorrectAnswer = optIdx === question.correctAnswer;

            let optionStyle = 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50 text-slate-800';
            let badgeStyle = 'bg-slate-100 text-slate-700 border-slate-300';

            if (!isSubmitted) {
              if (isSelected) {
                optionStyle = 'border-blue-600 bg-blue-50/80 text-blue-900 ring-2 ring-blue-500/20 shadow-xs font-medium';
                badgeStyle = 'bg-blue-600 text-white border-blue-600';
              }
            } else {
              // In review mode:
              if (isThisTheCorrectAnswer) {
                // Correct answer is always green
                optionStyle = 'border-emerald-500 bg-emerald-50/90 text-emerald-950 font-semibold ring-2 ring-emerald-500/30';
                badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
              } else if (isSelected && !isThisTheCorrectAnswer) {
                // User's wrong selection is red
                optionStyle = 'border-rose-400 bg-rose-50/90 text-rose-950 ring-2 ring-rose-400/30 line-through opacity-85';
                badgeStyle = 'bg-rose-600 text-white border-rose-600';
              } else {
                optionStyle = 'border-slate-200 bg-slate-50/40 text-slate-500 opacity-60';
                badgeStyle = 'bg-slate-200 text-slate-600 border-slate-300';
              }
            }

            return (
              <button
                key={optIdx}
                type="button"
                disabled={isSubmitted}
                onClick={() => onSelectOption(optIdx)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all flex items-start gap-3 sm:gap-3.5 cursor-pointer disabled:cursor-default active:scale-[0.99] touch-manipulation min-h-[48px] ${optionStyle}`}
              >
                {/* Option Letter Badge (A, B, C, D) */}
                <span
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center shrink-0 border transition-all ${badgeStyle}`}
                >
                  {isSubmitted && isThisTheCorrectAnswer ? (
                    <Check className="w-4 h-4 stroke-[3]" />
                  ) : isSubmitted && isSelected && !isThisTheCorrectAnswer ? (
                    <X className="w-4 h-4 stroke-[3]" />
                  ) : (
                    OPTION_LABELS[optIdx]
                  )}
                </span>

                <div className="flex-1 text-sm sm:text-base leading-relaxed pt-0.5 break-words">
                  <span>{optionText}</span>

                  {/* Submission badges */}
                  {isSubmitted && isThisTheCorrectAnswer && (
                    <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold bg-emerald-600 text-white shrink-0">
                      ĐÁP ÁN ĐÚNG
                    </span>
                  )}
                  {isSubmitted && isSelected && !isThisTheCorrectAnswer && (
                    <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold bg-rose-600 text-white shrink-0">
                      BẠN ĐÃ CHỌN SAI
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Explanation Box in Submitted Mode */}
        {isSubmitted && (
          <div className="mt-6 sm:mt-7 p-4 sm:p-5 bg-gradient-to-br from-slate-50 to-blue-50/40 border border-blue-100 rounded-2xl space-y-2.5 sm:space-y-3">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
              <Scale className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Căn Cứ Pháp Lý & Lời Giải Chi Tiết:</span>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed break-words">
              {question.explanation}
            </p>

            {question.legalReference && (
              <div className="pt-2 border-t border-blue-100/70 text-xs text-blue-800 font-medium flex flex-wrap items-center gap-1.5">
                <span className="font-semibold text-slate-500">Cơ sở pháp lý:</span>
                <span className="bg-blue-100/80 px-2 py-0.5 rounded text-blue-900 font-mono break-all">
                  {question.legalReference}
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Question Footer Navigation */}
      <div className="px-4 py-3 sm:px-6 sm:py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          className="flex items-center justify-center gap-1 sm:gap-1.5 px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-200/70 active:bg-slate-200 rounded-xl transition-all disabled:opacity-40 disabled:hover:bg-transparent min-h-[44px] active:scale-95 touch-manipulation"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Câu trước</span>
        </button>

        <span className="text-xs text-slate-400 hidden md:inline-block">
          Dùng phím mũi tên ← → hoặc số 1-4 trên bàn phím
        </span>

        <button
          onClick={onNext}
          disabled={!hasNext}
          className="flex items-center justify-center gap-1 sm:gap-1.5 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl shadow-xs transition-all disabled:opacity-40 min-h-[44px] active:scale-95 touch-manipulation"
        >
          <span>Câu tiếp theo</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
