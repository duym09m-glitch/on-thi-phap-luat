import React from 'react';
import { Clock, Play, RotateCcw } from 'lucide-react';
import { Session, calculateTimeRemaining } from '../lib/session';

interface ResumeModalProps {
  session: Session | null;
  isOpen: boolean;
  onResume: () => void;
  onDiscard: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  session,
  isOpen,
  onResume,
  onDiscard,
}) => {
  if (!isOpen || !session) return null;

  const { timeLeftSeconds, timeSpentSeconds } = calculateTimeRemaining(session);
  const isPractice = session.durationSeconds === null;

  const answeredCount = Object.keys(session.answers).length;
  const totalCount = session.items.length;

  const timeDisplay = isPractice
    ? `${Math.floor(timeSpentSeconds / 60)} phút ${timeSpentSeconds % 60} giây (Đã làm)`
    : `${Math.floor(timeLeftSeconds / 60)} phút ${timeLeftSeconds % 60} giây (Còn lại)`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white text-center">
          <div className="inline-flex p-3 bg-white/10 rounded-2xl mb-2 backdrop-blur-sm">
            <Clock className="w-8 h-8 text-blue-200 animate-pulse" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold">Khôi Phục Bài Thi Đang Làm Dở</h3>
          <p className="text-xs sm:text-sm text-blue-100 mt-1">
            Hệ thống phát hiện phiên làm bài chưa hoàn tất của bạn
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="p-4 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="text-xs uppercase font-extrabold text-blue-600 dark:text-blue-400 tracking-wider">
              {session.mode === 'practice' ? 'Chế độ Luyện tập' : 'Chế độ Thi trắc nghiệm'}
            </div>
            <h4 className="text-base font-extrabold text-slate-900 dark:text-slate-100">
              {session.title}
            </h4>
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200/60 dark:border-slate-800 text-xs">
              <div>
                <span className="text-slate-500 dark:text-slate-400">Tiến độ: </span>
                <span className="font-bold text-slate-800 dark:text-slate-200">
                  {answeredCount}/{totalCount} câu ({Math.round((answeredCount / (totalCount || 1)) * 100)}%)
                </span>
              </div>
              <div>
                <span className="text-slate-500 dark:text-slate-400">Thời gian: </span>
                <span className="font-bold text-slate-800 dark:text-slate-200">
                  {timeDisplay}
                </span>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
            Bạn có muốn tiếp tục làm bài thi này từ câu đang dừng hay bỏ bài này để bắt đầu một bài thi mới?
          </p>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <button
            onClick={onDiscard}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-all flex items-center justify-center gap-1.5"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Bỏ bài này, làm mới</span>
          </button>
          <button
            onClick={onResume}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-600/20 transition-all active:scale-95 flex items-center justify-center gap-1.5"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Tiếp tục làm bài</span>
          </button>
        </div>
      </div>
    </div>
  );
};
