import React from 'react';
import { 
  AlertCircle, 
  Clock, 
  Layers, 
  Pause, 
  Play, 
  Send, 
  ShieldCheck 
} from 'lucide-react';
import { ExamSet } from '../types/quiz';

interface HeaderProps {
  currentExam: ExamSet;
  timeLeftSeconds: number;
  isTimerRunning: boolean;
  onToggleTimer: () => void;
  onOpenExamSelect: () => void;
  onSubmitClick: () => void;
  isSubmitted: boolean;
  answeredCount: number;
  totalQuestions: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentExam,
  timeLeftSeconds,
  isTimerRunning,
  onToggleTimer,
  onOpenExamSelect,
  onSubmitClick,
  isSubmitted,
  answeredCount,
  totalQuestions,
}) => {
  // Format seconds to HH:MM:SS
  const hours = Math.floor(timeLeftSeconds / 3600);
  const minutes = Math.floor((timeLeftSeconds % 3600) / 60);
  const seconds = timeLeftSeconds % 60;

  const formattedTime = `${hours > 0 ? `${hours < 10 ? '0' : ''}${hours}:` : ''}${
    minutes < 10 ? '0' : ''
  }${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  const isLowTime = timeLeftSeconds <= 600 && timeLeftSeconds > 0; // Under 10 mins
  const isCriticalTime = timeLeftSeconds <= 180 && timeLeftSeconds > 0; // Under 3 mins

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs pt-safe">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-3">
        {/* Left: Clean Responsive Branding */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 shrink-0">
            <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6" />
          </div>

          <div className="min-w-0">
            <h1 className="text-sm sm:text-lg font-black text-slate-900 leading-tight tracking-tight truncate">
              <span className="hidden sm:inline">Pháp Luật Đại Cương</span>
              <span className="sm:hidden">Pháp Luật ĐC</span>
            </h1>
            <p className="text-[11px] sm:text-xs text-slate-500 font-medium hidden md:block">
              Hệ thống trắc nghiệm chuẩn 500 câu hỏi
            </p>
          </div>
        </div>

        {/* Right: Countdown Timer, Select Exam Set & Submit */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Timer Display */}
          {!isSubmitted && (
            <div
              className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl border font-mono transition-all shadow-xs ${
                isCriticalTime
                  ? 'bg-rose-50 border-rose-300 text-rose-700 animate-pulse font-bold'
                  : isLowTime
                  ? 'bg-amber-50 border-amber-300 text-amber-800 font-bold'
                  : 'bg-slate-100/90 border-slate-200 text-slate-800 font-semibold'
              }`}
            >
              <Clock
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                  isCriticalTime
                    ? 'text-rose-600 animate-spin'
                    : isLowTime
                    ? 'text-amber-600'
                    : 'text-slate-500'
                }`}
              />
              <span className="text-xs sm:text-sm md:text-base tracking-wider font-bold">
                {formattedTime}
              </span>
              <button
                onClick={onToggleTimer}
                className="text-slate-400 hover:text-slate-700 p-0.5 rounded hover:bg-slate-200/60 touch-manipulation"
                title={isTimerRunning ? 'Tạm dừng đồng hồ' : 'Tiếp tục tính giờ'}
              >
                {isTimerRunning ? (
                  <Pause className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                ) : (
                  <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600" />
                )}
              </button>
            </div>
          )}

          {/* Exam Set Switcher Button */}
          <button
            onClick={onOpenExamSelect}
            className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 text-xs sm:text-sm font-bold text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition-all shadow-2xs active:scale-95 touch-manipulation"
            title="Chọn bộ đề 1 đến 5 hoặc ôn theo chương"
          >
            <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
            <span className="hidden sm:inline">Chọn Bộ Đề (1-5)</span>
            <span className="sm:hidden">5 Đề</span>
          </button>

          {/* Submit Exam Button */}
          {!isSubmitted && (
            <button
              onClick={onSubmitClick}
              className="flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md shadow-blue-600/20 transition-all active:scale-95 touch-manipulation shrink-0"
            >
              <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Nộp bài</span>
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
