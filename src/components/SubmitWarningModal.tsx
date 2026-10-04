import React from 'react';
import { AlertTriangle, ArrowRight, CheckCircle2, ShieldAlert, X } from 'lucide-react';

interface SubmitWarningModalProps {
  isOpen: boolean;
  onClose: () => void;
  unansweredIndices: number[]; // 0-based question indices
  totalQuestions: number;
  onJumpToQuestion: (index: number) => void;
  onConfirmSubmit: () => void;
}

export const SubmitWarningModal: React.FC<SubmitWarningModalProps> = ({
  isOpen,
  onClose,
  unansweredIndices,
  totalQuestions,
  onJumpToQuestion,
  onConfirmSubmit,
}) => {
  if (!isOpen) return null;

  const answeredCount = totalQuestions - unansweredIndices.length;
  const isComplete = unansweredIndices.length === 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        {/* Header */}
        <div
          className={`flex items-center justify-between px-6 py-4 text-white ${
            isComplete
              ? 'bg-gradient-to-r from-emerald-600 to-teal-700'
              : 'bg-gradient-to-r from-amber-600 to-rose-600'
          }`}
        >
          <div className="flex items-center gap-2.5">
            {isComplete ? (
              <CheckCircle2 className="w-6 h-6 text-emerald-200" />
            ) : (
              <ShieldAlert className="w-6 h-6 text-amber-200 animate-pulse" />
            )}
            <h3 className="text-base sm:text-lg font-bold">
              {isComplete ? 'Xác Nhận Nộp Bài Thi' : 'Chưa Hoàn Thành Hết Đề Thi!'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {isComplete ? (
            <div className="text-center py-4 space-y-3">
              <div className="inline-flex p-3 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 rounded-full">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <p className="text-base font-semibold text-slate-800 dark:text-slate-100">
                Chúc mừng! Bạn đã hoàn thành trọn vẹn cả {totalQuestions}/{totalQuestions} câu hỏi.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Bạn có chắc chắn muốn nộp bài để xem điểm số, xếp loại và lời giải thích chi tiết từng câu?
              </p>
            </div>
          ) : (
            <>
              {/* Alert Banner */}
              <div className="p-3.5 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 rounded-xl flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                <div className="text-sm text-rose-900 dark:text-rose-200 leading-snug">
                  <p className="font-bold">
                    Quy chế thi: Cần điền đầy đủ đáp án trước khi bấm nộp bài!
                  </p>
                  <p className="text-xs text-rose-700 dark:text-rose-300 mt-1">
                    Bạn mới làm <span className="font-bold text-emerald-600 dark:text-emerald-400">{answeredCount}/{totalQuestions}</span> câu. 
                    Còn lại <span className="font-bold text-rose-600 dark:text-rose-400">{unansweredIndices.length}</span> câu chưa chọn đáp án.
                  </p>
                </div>
              </div>

              {/* Status bar */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
                  <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                    Đã làm: {answeredCount} câu
                  </span>
                  <span className="text-rose-600 dark:text-rose-400 flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                    Chưa làm: {unansweredIndices.length} câu
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-emerald-500 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
                  />
                </div>
              </div>

              {/* List of unanswered question numbers */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                  Danh sách {unansweredIndices.length} câu chưa chọn (Nhấp để nhảy đến câu):
                </label>
                <div className="max-h-44 overflow-y-auto p-2.5 bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl grid grid-cols-6 sm:grid-cols-8 gap-2">
                  {unansweredIndices.map((idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        onJumpToQuestion(idx);
                        onClose();
                      }}
                      className="px-2 py-1.5 text-xs font-bold text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-950/60 hover:bg-rose-200 dark:hover:bg-rose-900 border border-rose-300 dark:border-rose-800 rounded-lg transition-transform active:scale-95 text-center shadow-xs"
                      title={`Đến câu ${idx + 1}`}
                    >
                      Câu {idx + 1}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 italic">
                  * Gợi ý: Bấm vào số câu trên để chuyển ngay tới câu đó và hoàn thành bài.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          {!isComplete ? (
            <>
              <button
                onClick={() => {
                  if (unansweredIndices.length > 0) {
                    onJumpToQuestion(unansweredIndices[0]);
                  }
                  onClose();
                }}
                className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-md transition-all active:scale-95"
              >
                <span>Làm tiếp câu chưa xong</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onConfirmSubmit}
                className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:underline transition-colors"
                title="Vẫn nộp bài dù chưa hoàn thành đầy đủ"
              >
                Vẫn nộp bài ngay (Chấp nhận trừ điểm câu trống)
              </button>
            </>
          ) : (
            <>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium rounded-xl transition-colors"
              >
                Kiểm tra lại bài
              </button>
              <button
                onClick={onConfirmSubmit}
                className="w-full sm:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-xl shadow-md transition-all active:scale-95"
              >
                Nộp bài ngay
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
