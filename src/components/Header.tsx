import React from 'react';
import { 
  AlertCircle, 
  Clock, 
  Download,
  FileText, 
  Layers, 
  Maximize2, 
  Minimize2, 
  Pause, 
  Play, 
  Send, 
  Share2, 
  ShieldCheck 
} from 'lucide-react';
import { ExamSet } from '../types/quiz';

interface HeaderProps {
  currentExam: ExamSet;
  timeLeftSeconds: number;
  isTimerRunning: boolean;
  onToggleTimer: () => void;
  onOpenExamSelect: () => void;
  onOpenShareModal: () => void;
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
  onOpenShareModal,
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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Left: Branding & Current Exam Title */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                Pháp Luật Đại Cương
              </span>
              <span className="text-xs font-medium text-slate-500 hidden sm:inline-block">
                • 100 Câu Chuẩn 90 Phút
              </span>
            </div>
            <button
              onClick={onOpenExamSelect}
              className="group flex items-center gap-1.5 text-slate-900 hover:text-blue-600 transition-colors text-left"
              title="Nhấp để đổi sang bộ đề khác trong 5 bộ đề"
            >
              <h1 className="text-sm sm:text-base font-extrabold truncate">
                {currentExam.title}
              </h1>
              <span className="text-xs text-blue-600 font-semibold group-hover:underline hidden md:inline">
                (Đổi đề ▼)
              </span>
            </button>
          </div>
        </div>

        {/* Center / Right: Countdown Timer & CTA actions */}
        <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
          {/* Timer Display */}
          {!isSubmitted && (
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border font-mono transition-all shadow-xs ${
                isCriticalTime
                  ? 'bg-rose-50 border-rose-300 text-rose-700 animate-pulse font-bold'
                  : isLowTime
                  ? 'bg-amber-50 border-amber-300 text-amber-800 font-bold'
                  : 'bg-slate-100/80 border-slate-200 text-slate-800 font-semibold'
              }`}
            >
              <Clock
                className={`w-4 h-4 ${
                  isCriticalTime
                    ? 'text-rose-600 animate-spin'
                    : isLowTime
                    ? 'text-amber-600'
                    : 'text-slate-500'
                }`}
              />
              <span className="text-sm sm:text-base tracking-wider">
                {formattedTime}
              </span>
              <button
                onClick={onToggleTimer}
                className="text-slate-400 hover:text-slate-700 p-0.5 rounded hover:bg-slate-200/60"
                title={isTimerRunning ? 'Tạm dừng đồng hồ' : 'Tiếp tục tính giờ'}
              >
                {isTimerRunning ? (
                  <Pause className="w-3.5 h-3.5" />
                ) : (
                  <Play className="w-3.5 h-3.5 text-emerald-600" />
                )}
              </button>
            </div>
          )}

          {/* Share on Zalo Button */}
          <button
            onClick={onOpenShareModal}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold text-[#0068ff] bg-blue-50/80 hover:bg-blue-100 border border-blue-200 rounded-xl transition-all shadow-xs"
            title="Chia sẻ đề thi qua Zalo cho bạn bè hoặc nhóm lớp"
          >
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">Gửi Zalo</span>
          </button>

          {/* Download Offline HTML button */}
          <a
            href="/TracNghiem_PhapLuatDaiCuong_500Cau.html"
            download="TracNghiem_PhapLuatDaiCuong_500Cau.html"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-all shadow-xs"
            title="Tải 1 file .html duy nhất chạy trực tiếp trên điện thoại không cần mạng"
          >
            <Download className="w-4 h-4 text-emerald-600" />
            <span className="hidden md:inline">Tải File ĐT (.html)</span>
          </a>

          {/* Exam Set Switcher Button */}
          <button
            onClick={onOpenExamSelect}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-all shadow-xs"
            title="Chọn bộ đề 1 đến 5 hoặc ôn theo chương"
          >
            <Layers className="w-4 h-4 text-slate-500" />
            <span className="hidden md:inline">5 Bộ Đề</span>
          </button>

          {/* Submit Exam Button */}
          {!isSubmitted && (
            <button
              onClick={onSubmitClick}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md shadow-blue-600/20 transition-all active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
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
