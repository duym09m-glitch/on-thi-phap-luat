import React, { useState } from 'react';
import { AlertCircle, Calendar, CheckCircle2, Clock, Trash2, X, XCircle } from 'lucide-react';
import { ExamHistoryItem, ChapterId } from '../types/quiz';
import { CHAPTERS } from '../data/chapters';
import { deleteHistoryItem, clearAllHistory, getOverallChapterStats } from '../lib/session';
import { ConfirmModal } from './ConfirmModal';

interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  history: ExamHistoryItem[];
  onRefreshHistory: () => void;
  onStartPracticeChapter?: (chapterId: ChapterId) => void;
}

export const HistoryModal: React.FC<HistoryModalProps> = ({
  isOpen,
  onClose,
  history,
  onRefreshHistory,
  onStartPracticeChapter,
}) => {
  const [isConfirmClearOpen, setIsConfirmClearOpen] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);

  if (!isOpen) return null;

  const chapterOverall = getOverallChapterStats(history);
  const weakestChapter = chapterOverall.length > 0 && chapterOverall[0].total > 0 ? chapterOverall[0] : null;

  const handleConfirmDeleteOne = () => {
    if (deleteTargetId) {
      deleteHistoryItem(deleteTargetId);
      setDeleteTargetId(null);
      onRefreshHistory();
    }
  };

  const handleConfirmClearAll = () => {
    clearAllHistory();
    setIsConfirmClearOpen(false);
    onRefreshHistory();
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
        <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-blue-700 to-indigo-800 text-white shrink-0">
            <div className="flex items-center gap-2.5">
              <Clock className="w-5 h-5 text-blue-200" />
              <div>
                <h3 className="text-base sm:text-lg font-bold">Lịch Sử Làm Bài & Năng Lực Từng Chương</h3>
                <p className="text-xs text-blue-200">
                  Lưu tối đa 50 lượt thi gần nhất và phân tích tỷ lệ sai
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 active:scale-95 transition-all touch-manipulation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
            {/* Tổng hợp năng lực theo chương */}
            <div className="p-4 bg-slate-50 dark:bg-slate-950/50 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <span>Tỷ Lệ Sai Theo Chương Qua Tất Cả Các Lượt</span>
                  {history.length > 0 && (
                    <span className="text-xs font-normal text-slate-500">
                      ({history.length} lượt thi)
                    </span>
                  )}
                </h4>
                {weakestChapter && weakestChapter.wrongRate > 0 && (
                  <span className="text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2.5 py-0.5 rounded-md border border-rose-200 dark:border-rose-900">
                    Cần chú ý nhất: Chương {weakestChapter.chapterId} ({weakestChapter.wrongRate}% sai)
                  </span>
                )}
              </div>

              {history.length === 0 ? (
                <p className="text-xs text-slate-400 dark:text-slate-500 italic py-2">
                  Chưa có dữ liệu lịch sử để phân tích chương. Hãy hoàn thành ít nhất 1 bài thi!
                </p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {chapterOverall.map((ch) => {
                    const info = CHAPTERS.find((c) => c.id === ch.chapterId);
                    const isWeakest = weakestChapter?.chapterId === ch.chapterId && ch.wrongRate > 0;
                    return (
                      <div
                        key={ch.chapterId}
                        className={`p-3 rounded-xl border text-xs transition-all ${
                          isWeakest
                            ? 'bg-rose-50/70 dark:bg-rose-950/30 border-rose-300 dark:border-rose-800 ring-1 ring-rose-400/40'
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="font-bold text-slate-800 dark:text-slate-200 truncate" title={info?.name}>
                            Chương {ch.chapterId}: {info?.shortName || info?.name}
                          </span>
                          <span
                            className={`font-black shrink-0 px-2 py-0.5 rounded ${
                              ch.wrongRate >= 50
                                ? 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-400'
                                : ch.wrongRate >= 25
                                ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400'
                                : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400'
                            }`}
                          >
                            {ch.total > 0 ? `${ch.wrongRate}% sai` : 'Chưa thi'}
                          </span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                          <div
                            className={`h-1.5 rounded-full ${
                              ch.wrongRate >= 50 ? 'bg-rose-500' : ch.wrongRate >= 25 ? 'bg-amber-500' : 'bg-emerald-500'
                            }`}
                            style={{ width: `${ch.wrongRate}%` }}
                          />
                        </div>
                        {onStartPracticeChapter && (
                          <div className="pt-2 mt-1 flex justify-end">
                            <button
                              onClick={() => {
                                onStartPracticeChapter(ch.chapterId);
                                onClose();
                              }}
                              className="text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline"
                            >
                              Luyện tập chương {ch.chapterId} →
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Danh sách lượt thi */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Lịch Sử Các Bài Thi Đã Làm ({history.length})
                </h4>
                {history.length > 0 && (
                  <button
                    onClick={() => setIsConfirmClearOpen(true)}
                    className="text-xs font-semibold text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Xoá toàn bộ lịch sử</span>
                  </button>
                )}
              </div>

              {history.length === 0 ? (
                <div className="p-8 text-center bg-slate-50 dark:bg-slate-950/40 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 text-slate-400 text-xs">
                  Chưa có bài thi nào được ghi lại.
                </div>
              ) : (
                <div className="space-y-2.5">
                  {history.map((item) => {
                    const dateStr = new Date(item.timestamp).toLocaleString('vi-VN', {
                      hour: '2-digit',
                      minute: '2-digit',
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                    });
                    const mins = Math.floor(item.timeSpentSeconds / 60);
                    const secs = item.timeSpentSeconds % 60;

                    return (
                      <div
                        key={item.id}
                        className="p-3.5 sm:p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:shadow-xs transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                      >
                        <div className="space-y-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap text-xs">
                            <span className="font-extrabold text-blue-600 dark:text-blue-400">
                              {item.examTitle}
                            </span>
                            <span className="text-slate-400 dark:text-slate-500">•</span>
                            <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {dateStr}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
                            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              {item.correctCount}/{item.totalQuestions} câu đúng
                            </span>
                            {item.wrongCount !== undefined && (
                              <span className="flex items-center gap-1 text-rose-600 dark:text-rose-400">
                                <XCircle className="w-3.5 h-3.5" />
                                {item.wrongCount} sai
                              </span>
                            )}
                            <span className="text-slate-400">
                              ⏱ {mins}p {secs}s
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100 dark:border-slate-800">
                          <div className="text-right">
                            <div className="text-xl font-black text-slate-900 dark:text-slate-100">
                              {item.score}
                              <span className="text-xs font-normal text-slate-400">/10</span>
                            </div>
                          </div>
                          <button
                            onClick={() => setDeleteTargetId(item.id)}
                            className="p-1.5 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            title="Xóa lượt làm này"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal xác nhận xoá toàn bộ */}
      <ConfirmModal
        isOpen={isConfirmClearOpen}
        onClose={() => setIsConfirmClearOpen(false)}
        onConfirm={handleConfirmClearAll}
        title="Xoá Toàn Bộ Lịch Sử"
        message="Bạn có chắc chắn muốn xoá tất cả dữ liệu lịch sử làm bài và thống kê? Hành động này không thể hoàn tác."
        confirmText="Xoá hết"
        isDanger={true}
      />

      {/* Modal xác nhận xoá 1 lượt */}
      <ConfirmModal
        isOpen={deleteTargetId !== null}
        onClose={() => setDeleteTargetId(null)}
        onConfirm={handleConfirmDeleteOne}
        title="Xoá Lượt Làm Bài"
        message="Bạn có chắc chắn muốn xoá bản ghi bài thi này khỏi lịch sử?"
        confirmText="Xoá"
        isDanger={true}
      />
    </>
  );
};
