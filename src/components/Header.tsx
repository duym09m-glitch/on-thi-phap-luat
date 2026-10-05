import React from 'react';
import { History, Moon, Sun, Scale } from 'lucide-react';
import { useTheme } from '../lib/theme';
import { navigate } from '../lib/router';

interface HeaderProps {
  currentPath: string;
  onNavigateHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigateHome }) => {
  const [theme, toggleTheme] = useTheme();

  const handleBrandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      navigate('/');
    }
  };

  const handleHistoryClick = () => {
    navigate('/history');
  };

  return (
    <header className="sticky top-0 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <button
          onClick={handleBrandClick}
          className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1 -ml-1 transition"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-500 text-white flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white leading-none">
                Pháp Luật Đại Cương
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                1.400 câu
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
              Thi trắc nghiệm sinh viên
            </p>
          </div>
        </button>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {currentPath !== '/history' && (
            <button
              onClick={handleHistoryClick}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition"
              title="Lịch sử bài thi"
              aria-label="Lịch sử bài thi"
            >
              <History className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span className="hidden sm:inline">Lịch sử</span>
            </button>
          )}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 transition"
            title={theme === 'dark' ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
            aria-label="Chuyển đổi giao diện"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
