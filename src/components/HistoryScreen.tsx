import React, { useState } from 'react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Eye,
  History,
  Scale,
  Trash2,
} from 'lucide-react';
import { StoredExamResult } from '../types';
import { ConfirmModal } from './ConfirmModal';

interface HistoryScreenProps {
  historyList: StoredExamResult[];
  onViewResult: (id: string) => void;
  onDeleteItem: (id: string) => void;
  onClearAll: () => void;
  onNavigateHome: () => void;
}

export const HistoryScreen: React.FC<HistoryScreenProps> = ({
  historyList,
  onViewResult,
  onDeleteItem,
  onClearAll,
  onNavigateHome,
}) => {
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
  const [isClearAllModalOpen, setIsClearAllModalOpen] = useState(false);

  const formatDate = (timestamp: number) => {
    const d = new Date(timestamp);
    const dateStr = d.toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    const timeStr = d.toLocaleTimeString('vi-VN', {
      hour: '2-digit',
      minute: '2-digit',
    });
    return `${dateStr} lúc ${timeStr}`;
  };

  const formatSpentTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s.toString().padStart(2, '0')}s`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6 animate-in fade-in duration-300">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div className="flex items-center gap-3">
          <button
            onClick={onNavigateHome}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            title="Quay lại"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <History className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              Lịch Sử Bài Thi Đã Làm
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Tổng cộng {historyList.length} bài thi được lưu trữ
            </p>
          </div>
        </div>

        {historyList.length > 0 && (
          <button
            onClick={() => setIsClearAllModalOpen(true)}
            className="px-3.5 py-1.5 rounded-xl border border-rose-300 dark:border-rose-900/60 text-xs sm:text-sm font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition flex items-center gap-1.5 self-start sm:self-auto"
          >
            <Trash2 className="w-4 h-4" />
            Xóa tất cả
          </button>
        )}
      </div>

      {/* History Items List */}
      {historyList.length === 0 ? (
        <div className="py-16 text-center space-y-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8">
          <div className="w-14 h-14 mx-auto rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center">
            <Scale className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
              Chưa có bài thi nào được lưu
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
              Hãy hoàn thành một đề thi hoặc bài luyện tập, kết quả sẽ tự động lưu lại tại đây.
            </p>
          </div>
          <button
            onClick={onNavigateHome}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition"
          >
            Bắt đầu làm bài thi
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {historyList.map((item) => (
            <div
              key={item.id}
              className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-slate-700 transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm"
            >
              {/* Exam Info */}
              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs px-2.5 py-0.5 rounded-md font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {item.mode === 'preset'
                      ? 'Đề mẫu'
                      : item.mode === 'chapter'
                      ? 'Thi theo chương'
                      : 'Luyện tập'}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{formatDate(item.date)}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{formatSpentTime(item.timeSpentSeconds)}</span>
                  </div>
                </div>

                <h3 className="font-bold text-base text-slate-900 dark:text-white truncate">
                  {item.title}
                </h3>
              </div>

              {/* Score & Actions */}
              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100 dark:border-slate-800">
                {/* Score badge */}
                <div className="text-right">
                  <div className="text-xl sm:text-2xl font-black text-indigo-600 dark:text-indigo-400 leading-none">
                    {item.score.toFixed(2)}
                    <span className="text-xs text-slate-400 font-normal">/10</span>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Đúng {item.correctCount}/{item.totalQuestions}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onViewResult(item.id)}
                    className="px-3.5 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 font-semibold text-xs sm:text-sm transition flex items-center gap-1.5"
                    title="Xem chi tiết kết quả"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Xem lại</span>
                  </button>
                  <button
                    onClick={() => setDeleteTargetId(item.id)}
                    className="p-1.5 rounded-xl text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition"
                    title="Xóa bài thi này"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Delete Single Modal */}
      <ConfirmModal
        isOpen={deleteTargetId !== null}
        title="Xóa bài thi khỏi lịch sử?"
        message="Hành động này sẽ xóa vĩnh viễn kết quả bài thi này khỏi lịch sử của bạn."
        confirmText="Xóa bài thi"
        cancelText="Hủy"
        confirmVariant="danger"
        onConfirm={() => {
          if (deleteTargetId) {
            onDeleteItem(deleteTargetId);
            setDeleteTargetId(null);
          }
        }}
        onCancel={() => setDeleteTargetId(null)}
      />

      {/* Clear All Modal */}
      <ConfirmModal
        isOpen={isClearAllModalOpen}
        title="Xóa toàn bộ lịch sử thi?"
        message="Tất cả các bài thi đã làm trong phiên hiện tại sẽ bị xóa hoàn toàn. Bạn có chắc chắn không?"
        confirmText="Xóa tất cả"
        cancelText="Hủy"
        confirmVariant="danger"
        onConfirm={() => {
          onClearAll();
          setIsClearAllModalOpen(false);
        }}
        onCancel={() => setIsClearAllModalOpen(false)}
      />
    </div>
  );
};
