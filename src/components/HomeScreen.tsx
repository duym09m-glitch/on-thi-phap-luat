import React, { useState } from 'react';
import {
  Award,
  CheckCircle2,
  Clock,
  Compass,
  FileText,
  Layers,
  Play,
  RotateCcw,
  Sparkles,
  Zap,
} from 'lucide-react';
import { Chapter, ExamConfig, ExamMode, ExamSession } from '../types';
import { APP_CONFIG } from '../config/app.config';
import { getTotalQuestionCount } from '../bank';

interface HomeScreenProps {
  chapters: Chapter[];
  activeSession: ExamSession | null;
  onResumeActiveSession: () => void;
  onDiscardActiveSession: () => void;
  onStartExam: (config: ExamConfig) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  chapters,
  activeSession,
  onResumeActiveSession,
  onDiscardActiveSession,
  onStartExam,
}) => {
  const [activeTab, setActiveTab] = useState<ExamMode>('preset');

  // Tab 1: Preset state
  const availablePresets = APP_CONFIG.presets.filter((p) =>
    p.chapters.some((c) => chapters.some((ch) => ch.number === c))
  );
  const [selectedPresetId, setSelectedPresetId] = useState<string>(
    availablePresets[0]?.id || ''
  );

  // Tab 2: Single Chapter state
  const [selectedChapterNumber, setSelectedChapterNumber] = useState<number>(
    chapters[0]?.number || 1
  );

  // Tab 3: Practice multi-chapter state
  const [selectedPracticeChapters, setSelectedPracticeChapters] = useState<number[]>(
    chapters.map((c) => c.number)
  );

  const totalBankQuestions = getTotalQuestionCount();

  const handleSelectAllPractice = () => {
    setSelectedPracticeChapters(chapters.map((c) => c.number));
  };

  const handleDeselectAllPractice = () => {
    setSelectedPracticeChapters([]);
  };

  const togglePracticeChapter = (chNum: number) => {
    setSelectedPracticeChapters((prev) =>
      prev.includes(chNum) ? prev.filter((n) => n !== chNum) : [...prev, chNum]
    );
  };

  // Start exam handler
  const handleStartExam = () => {
    if (activeTab === 'preset') {
      const preset = availablePresets.find((p) => p.id === selectedPresetId);
      if (!preset) return;
      onStartExam({
        mode: 'preset',
        title: preset.name,
        chapters: preset.chapters.filter((c) => chapters.some((ch) => ch.number === c)),
        presetId: preset.id,
        totalQuestions: APP_CONFIG.exam.totalQuestions,
        durationMinutes: APP_CONFIG.exam.durationMinutes,
      });
    } else if (activeTab === 'chapter') {
      const ch = chapters.find((c) => c.number === selectedChapterNumber);
      if (!ch) return;
      onStartExam({
        mode: 'chapter',
        title: `Thi ${ch.fullName}`,
        chapters: [ch.number],
        totalQuestions: Math.min(APP_CONFIG.exam.totalQuestions, ch.questionCount),
        durationMinutes: APP_CONFIG.exam.durationMinutes,
      });
    } else if (activeTab === 'practice') {
      if (selectedPracticeChapters.length === 0) return;
      onStartExam({
        mode: 'practice',
        title:
          selectedPracticeChapters.length === chapters.length
            ? 'Luyện tập toàn diện (Tất cả các chương)'
            : `Luyện tập (${selectedPracticeChapters.length} chương đã chọn)`,
        chapters: selectedPracticeChapters,
        totalQuestions: APP_CONFIG.exam.totalQuestions,
        durationMinutes: APP_CONFIG.exam.durationMinutes,
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-10 space-y-8 animate-in fade-in duration-300">
      {/* Ongoing Quiz Banner Alert */}
      {activeSession && !activeSession.completed && (
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
              <RotateCcw className="w-5 h-5 animate-spin-reverse" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                Bạn có bài thi đang làm dở
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                <span className="font-medium">{activeSession.title}</span> • Đã làm{' '}
                {Object.keys(activeSession.userAnswers).length}/{activeSession.questions.length} câu
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onDiscardActiveSession}
              className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition"
            >
              Bỏ bài
            </button>
            <button
              onClick={onResumeActiveSession}
              className="px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-amber-600 hover:bg-amber-700 text-white shadow-sm shadow-amber-600/20 transition flex items-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              Tiếp tục làm
            </button>
          </div>
        </div>
      )}

      {/* Hero Header */}
      <div className="text-center space-y-3 pt-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
          <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
          Ngân hàng đề thi trắc nghiệm Pháp luật đại cương
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          Hệ Thống Ôn Thi Trực Tuyến
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Chuẩn bị chu đáo và tự tin vượt qua học phần Pháp luật đại cương với{' '}
          <strong className="text-slate-800 dark:text-slate-200 font-semibold">
            {totalBankQuestions.toLocaleString('vi-VN')} câu hỏi
          </strong>{' '}
          chuẩn hóa, phân loại theo {chapters.length} chương và mức độ nhận thức.
        </p>

        {/* Feature Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-3 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>90 phút / 100 câu</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Rút đề ngẫu nhiên chuẩn xác</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Giải thích luật chi tiết</span>
          </div>
        </div>
      </div>

      {/* Mode Switch Tabs */}
      <div className="bg-slate-200/70 dark:bg-slate-800/70 p-1.5 rounded-2xl flex max-w-md mx-auto shadow-inner">
        <button
          onClick={() => setActiveTab('preset')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'preset'
              ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Layers className="w-4 h-4" />
          Đề mẫu
        </button>
        <button
          onClick={() => setActiveTab('chapter')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'chapter'
              ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <FileText className="w-4 h-4" />
          Theo chương
        </button>
        <button
          onClick={() => setActiveTab('practice')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'practice'
              ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Zap className="w-4 h-4" />
          Luyện tập
        </button>
      </div>

      {/* Tab 1: Preset */}
      {activeTab === 'preset' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {availablePresets.map((preset) => {
              const isSelected = selectedPresetId === preset.id;
              return (
                <div
                  key={preset.id}
                  onClick={() => setSelectedPresetId(preset.id)}
                  className={`cursor-pointer p-5 rounded-2xl border-2 text-left transition-all duration-200 relative overflow-hidden ${
                    isSelected
                      ? 'border-indigo-600 dark:border-indigo-500 bg-indigo-50/40 dark:bg-indigo-950/20 shadow-md shadow-indigo-500/5'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                          isSelected
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        <Layers className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white">
                        {preset.name}
                      </h3>
                    </div>
                    {isSelected && (
                      <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    )}
                  </div>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {preset.description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-1.5">
                    {preset.chapters.map((chNum) => {
                      const ch = chapters.find((c) => c.number === chNum);
                      if (!ch) return null;
                      return (
                        <span
                          key={chNum}
                          className="px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          Chương {chNum}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={handleStartExam}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold text-base shadow-lg shadow-indigo-600/25 transition-all inline-flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5 fill-current" />
              Bắt đầu làm đề mẫu (100 câu • 90 phút)
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: Single Chapter */}
      {activeTab === 'chapter' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {chapters.map((ch) => {
              const isSelected = selectedChapterNumber === ch.number;
              return (
                <div
                  key={ch.number}
                  onClick={() => setSelectedChapterNumber(ch.number)}
                  className={`cursor-pointer p-4 rounded-2xl border-2 text-left transition-all relative ${
                    isSelected
                      ? 'border-indigo-600 dark:border-indigo-500 bg-indigo-50/40 dark:bg-indigo-950/20 shadow-md shadow-indigo-500/5'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400">
                      Chương {ch.number}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {ch.questionCount} câu trong kho
                    </span>
                  </div>
                  <h4 className="mt-2 font-semibold text-sm sm:text-base text-slate-900 dark:text-white leading-snug line-clamp-2">
                    {ch.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    Rút ngẫu nhiên 100 câu trắc nghiệm
                  </p>
                </div>
              );
            })}
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={handleStartExam}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold text-base shadow-lg shadow-indigo-600/25 transition-all inline-flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5 fill-current" />
              Thi Chương {selectedChapterNumber} (100 câu • 90 phút)
            </button>
          </div>
        </div>
      )}

      {/* Tab 3: Practice */}
      {activeTab === 'practice' && (
        <div className="space-y-4">
          {/* Quick selectors */}
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
              Chọn các chương muốn luyện tập ({selectedPracticeChapters.length}/{chapters.length}):
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleSelectAllPractice}
                className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-semibold"
              >
                Chọn tất cả
              </button>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <button
                type="button"
                onClick={handleDeselectAllPractice}
                className="text-xs text-slate-500 dark:text-slate-400 hover:underline"
              >
                Bỏ chọn
              </button>
            </div>
          </div>

          {/* Chapters checkbox list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {chapters.map((ch) => {
              const isChecked = selectedPracticeChapters.includes(ch.number);
              return (
                <label
                  key={ch.number}
                  className={`flex items-start gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition select-none ${
                    isChecked
                      ? 'border-indigo-600 dark:border-indigo-500 bg-indigo-50/30 dark:bg-indigo-950/20'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => togglePracticeChapter(ch.number)}
                    className="mt-1 w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300 dark:border-slate-700"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase">
                      Chương {ch.number}
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white truncate">
                      {ch.title}
                    </p>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      {ch.questionCount} câu hỏi
                    </span>
                  </div>
                </label>
              );
            })}
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={handleStartExam}
              disabled={selectedPracticeChapters.length === 0}
              className={`w-full sm:w-auto px-8 py-3.5 rounded-2xl font-bold text-base shadow-lg transition-all inline-flex items-center justify-center gap-2 ${
                selectedPracticeChapters.length === 0
                  ? 'bg-slate-300 dark:bg-slate-800 text-slate-500 cursor-not-allowed shadow-none'
                  : 'bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white shadow-emerald-600/25'
              }`}
            >
              <Zap className="w-5 h-5 fill-current" />
              {selectedPracticeChapters.length === 0
                ? 'Vui lòng chọn ít nhất 1 chương'
                : 'Bắt đầu luyện tập (100 câu • 90 phút)'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
