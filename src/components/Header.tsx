import React from 'react';
import { 
  AlertCircle, 
  Clock, 
  History, 
  Layers, 
  Moon, 
  Pause, 
  Play, 
  Send, 
  ShieldCheck, 
  Sun, 
  Laptop,
  CheckCircle2
} from 'lucide-react';

interface HeaderProps {
  title: string;
  timeLeftSeconds: number;
  timeSpentSeconds: number;
  isPractice: boolean;
  isTimerRunning: boolean;
  onToggleTimer: () => void;
  onOpenExamSelect: () => void;
  onOpenHistory: () => void;
  onSubmitClick: () => void;
  isSubmitted: boolean;
  answeredCount: number;
  totalQuestions: number;
  theme: 'light' | 'dark' | 'system';
  onCycleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  timeLeftSeconds,
  timeSpentSeconds,
  isPractice,
  isTimerRunning,
  onToggleTimer,
  onOpenExamSelect,
  onOpenHistory,
  onSubmitClick,
  isSubmitted,
  answeredCount,
  totalQuestions,
  theme,
  onCycleTheme,
}) => {
  // Format seconds to HH:MM:SS or MM:SS
  const displaySeconds = isPractice ? timeSpentSeconds : timeLeftSeconds;
  const hours = Math.floor(displaySeconds / 3600);
  const minutes = Math.floor((displaySeconds % 3600) / 60);
  const seconds = displaySeconds % 60;

  const formattedTime = `${hours > 0 ? `${hours < 10 ? '0' : ''}${hours}:` : ''}${
    minutes < 10 ? '0' : ''
  }${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  // Cảnh báo thời gian: Còn 10 phút cam, 5 phút đỏ nhấp nháy
  const is5Mins = !isPractice && timeLeftSeconds <= 300 && timeLeftSeconds > 0;
  const is10Mins = !isPractice && timeLeftSeconds <= 600 && timeLeftSeconds > 300;

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800 shadow-xs pt-safe transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-3">
        {/* Left: Branding */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 shrink-0">
            <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6" />
          </div>

          <div className="min-w-0">
            <h1 className="text-sm sm:text-base font-black text-slate-900 dark:text-slate-100 leading-tight tracking-tight truncate">
              <span className="hidden sm:inline">Pháp Luật Đại Cương</span>
              <span className="sm:hidden">Pháp Luật ĐC</span>
            </h1>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden md:block truncate">
              {title}
            </p>
          </div>
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Timer Display */}
          {!isSubmitted && (
            <div
              className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl border font-mono transition-all shadow-xs ${
                isPractice
                  ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200'
                  : is5Mins
                  ? 'bg-rose-50 dark:bg-rose-950/60 border-rose-400 dark:border-rose-700 text-rose-700 dark:text-rose-200 animate-pulse font-bold'
                  : is10Mins
                  ? 'bg-amber-50 dark:bg-amber-950/60 border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-200 font-bold'
                  : 'bg-slate-100/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold'
              }`}
              title={isPractice ? 'Đồng hồ luyện tập (bấm giờ tăng dần)' : 'Đồng hồ đếm ngược'}
            >
              <Clock
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                  isPractice
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : is5Mins
                    ? 'text-rose-600 animate-spin'
                    : is10Mins
                    ? 'text-amber-600'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              />
              <span className="text-xs sm:text-sm md:text-base tracking-wider font-bold">
                {formattedTime}
              </span>
              <button
                onClick={onToggleTimer}
                className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-0.5 rounded hover:bg-slate-200/60 dark:hover:bg-slate-700/60 touch-manipulation"
                title={isTimerRunning ? 'Tạm dừng đồng hồ' : 'Tiếp tục tính giờ'}
              >
                {isTimerRunning ? (
                  <Pause className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                ) : (
                  <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 dark:text-emerald-400" />
                )}
              </button>
            </div>
          )}

          {/* Theme switcher */}
          <button
            onClick={onCycleTheme}
            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl transition-all touch-manipulation"
            title={`Giao diện: ${theme === 'dark' ? 'Tối' : theme === 'light' ? 'Sáng' : 'Hệ thống'} (Bấm để đổi)`}
          >
            {theme === 'dark' ? (
              <Moon className="w-4 h-4 text-indigo-400" />
            ) : theme === 'light' ? (
              <Sun className="w-4 h-4 text-amber-500" />
            ) : (
              <Laptop className="w-4 h-4 text-blue-500" />
            )}
          </button>

          {/* History Button */}
          <button
            onClick={onOpenHistory}
            className="p-2 sm:px-3 sm:py-1.5 flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl transition-all shadow-2xs touch-manipulation"
            title="Xem lịch sử các lượt thi đã làm"
          >
            <History className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            <span className="hidden md:inline">Lịch sử</span>
          </button>

          {/* Exam Set Switcher Button */}
          <button
            onClick={onOpenExamSelect}
            className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 text-xs sm:text-sm font-bold text-blue-700 dark:text-blue-300 hover:text-blue-800 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900 border border-blue-200 dark:border-blue-800 rounded-xl transition-all shadow-2xs active:scale-95 touch-manipulation"
            title="Đổi sang bộ đề khác hoặc luyện tập"
          >
            <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
            <span className="hidden sm:inline">Đổi Đề / Chế Độ</span>
            <span className="sm:hidden">Đổi Đề</span>
          </button>

          {/* Submit / End Practice Button */}
          {!isSubmitted && (
            <button
              onClick={onSubmitClick}
              className={`flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all active:scale-95 touch-manipulation shrink-0 ${
                isPractice
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-emerald-600/20'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-blue-600/20'
              }`}
            >
              {isPractice ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
              <span>{isPractice ? 'Kết thúc luyện tập' : 'Nộp bài'}</span>
              <span className="hidden lg:inline text-xs font-normal opacity-85">
                ({answeredCount}/{totalQuestions})
              </span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
