import React, { useState } from 'react';
import { BookOpen, Check, Dumbbell, Layers, Shuffle, Sparkles, X } from 'lucide-react';
import { EXAM_SETS, CHAPTERS, BANK } from '../data';
import { ChapterId, QuestionDifficulty, ExamMode } from '../types/quiz';

interface ExamSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentMode: ExamMode;
  currentExamId?: number;
  onStartExamSet: (examId: number) => void;
  onStartRandomExam: () => void;
  onStartChapterExam: (chapterIds: ChapterId[]) => void;
  onStartPractice: (
    chapterIds: ChapterId[],
    difficulty: QuestionDifficulty | 'all',
    count: number | 'all'
  ) => void;
}

export const ExamSelectModal: React.FC<ExamSelectModalProps> = ({
  isOpen,
  onClose,
  currentMode,
  currentExamId = 1,
  onStartExamSet,
  onStartRandomExam,
  onStartChapterExam,
  onStartPractice,
}) => {
  const [activeTab, setActiveTab] = useState<'exams' | 'chapterExam' | 'practice'>('exams');

  // State cho Thi Theo Chương
  const [selectedChaptersForExam, setSelectedChaptersForExam] = useState<ChapterId[]>([1, 3, 4, 5, 6, 7, 9]);

  // State cho Luyện Tập
  const [practiceChapters, setPracticeChapters] = useState<ChapterId[]>([1, 3, 4, 5, 6, 7, 9]);
  const [practiceDifficulty, setPracticeDifficulty] = useState<QuestionDifficulty | 'all'>('all');
  const [practiceCount, setPracticeCount] = useState<number | 'all'>(20);

  if (!isOpen) return null;

  const toggleChapterForExam = (id: ChapterId) => {
    setSelectedChaptersForExam((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const selectAllChaptersForExam = () => {
    setSelectedChaptersForExam([1, 3, 4, 5, 6, 7, 9]);
  };

  const togglePracticeChapter = (id: ChapterId) => {
    setPracticeChapters((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const selectAllPracticeChapters = () => {
    setPracticeChapters([1, 3, 4, 5, 6, 7, 9]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4 bg-gradient-to-r from-blue-700 to-indigo-800 text-white shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <Layers className="w-5 h-5 text-blue-200 shrink-0" />
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg font-bold truncate">Chọn Bộ Đề & Chế Độ Luyện Thi</h3>
              <p className="text-xs text-blue-200 truncate hidden xs:block">
                Hệ thống ngân hàng 1.400 câu trắc nghiệm chuẩn Pháp luật đại cương
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 active:scale-95 transition-all touch-manipulation shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switch */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 px-3 sm:px-6 pt-2 sm:pt-3 gap-1 sm:gap-2 overflow-x-auto no-scrollbar shrink-0">
          <button
            onClick={() => setActiveTab('exams')}
            className={`pb-2.5 sm:pb-3 px-2.5 sm:px-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-1.5 shrink-0 touch-manipulation ${
              activeTab === 'exams'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>5 Bộ Đề & Đề Ngẫu Nhiên</span>
          </button>
          <button
            onClick={() => setActiveTab('chapterExam')}
            className={`pb-2.5 sm:pb-3 px-2.5 sm:px-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-1.5 shrink-0 touch-manipulation ${
              activeTab === 'chapterExam'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Thi Theo Chương</span>
          </button>
          <button
            onClick={() => setActiveTab('practice')}
            className={`pb-2.5 sm:pb-3 px-2.5 sm:px-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-1.5 shrink-0 touch-manipulation ${
              activeTab === 'practice'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Dumbbell className="w-4 h-4" />
            <span>Luyện Tập Tự Do</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-3.5 sm:p-6 space-y-3 sm:space-y-4">
          {/* TAB 1: 5 BỘ ĐỀ & ĐỀ NGẪU NHIÊN */}
          {activeTab === 'exams' && (
            <div className="space-y-3">
              {/* Random 100 questions banner */}
              <div
                onClick={() => {
                  onStartRandomExam();
                  onClose();
                }}
                className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200 dark:border-amber-900/60 rounded-xl flex items-center justify-between cursor-pointer hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-amber-500 text-white rounded-xl shadow-xs group-hover:scale-105 transition-transform">
                    <Shuffle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-amber-950 dark:text-amber-200 flex items-center gap-1.5">
                      <span>Đề Thi Trộn Ngẫu Nhiên 100 Câu</span>
                      <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-200 rounded-md">
                        Mới & Bất ngờ
                      </span>
                    </h4>
                    <p className="text-xs text-amber-800 dark:text-amber-300 mt-0.5">
                      Rút ngẫu nhiên theo blueprint 7 chương & độ khó 35/45/20 chuẩn 90 phút.
                    </p>
                  </div>
                </div>
                <button className="px-3.5 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-lg shadow-xs transition-colors shrink-0">
                  Làm đề này
                </button>
              </div>

              {/* 5 Standard Exam Sets */}
              {EXAM_SETS.map((exam) => {
                const isSelected = currentMode === 'exam-set' && currentExamId === exam.id;
                return (
                  <div
                    key={exam.id}
                    onClick={() => {
                      onStartExamSet(exam.id);
                      onClose();
                    }}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50/70 dark:bg-blue-950/40 shadow-xs'
                        : 'border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-slate-50/60 dark:hover:bg-slate-800/40 bg-white dark:bg-slate-900'
                    }`}
                  >
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                          {exam.badge}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">
                          {exam.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                        {exam.description}
                      </p>
                      <div className="text-[11px] text-slate-400 dark:text-slate-500 pt-0.5">
                        ⏱ 100 câu • 90 phút • Đảo thứ tự câu và phương án mỗi lượt làm
                      </div>
                    </div>

                    <div className="shrink-0">
                      {isSelected ? (
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-bold">
                          <Check className="w-3.5 h-3.5" />
                          Đang chọn
                        </span>
                      ) : (
                        <button className="px-3.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-xs font-bold text-slate-700 dark:text-slate-200 transition-colors">
                          Chọn đề
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 2: THI THEO CHƯƠNG */}
          {activeTab === 'chapterExam' && (
            <div className="space-y-4">
              <div className="p-3.5 bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 rounded-xl text-xs text-blue-900 dark:text-blue-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="font-bold">Quy chế thi theo chương:</span> 100 câu / 90 phút chỉ lấy từ các chương được chọn, chia hạn ngạch theo tỷ lệ chương gốc (độ khó 30/45/25).
                </div>
                <button
                  type="button"
                  onClick={selectAllChaptersForExam}
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline shrink-0"
                >
                  Chọn tất cả
                </button>
              </div>

              <div className="space-y-2">
                {CHAPTERS.map((ch) => {
                  const isChecked = selectedChaptersForExam.includes(ch.id);
                  const count = (BANK[ch.id] || []).length;
                  return (
                    <label
                      key={ch.id}
                      className={`p-3 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                        isChecked
                          ? 'border-blue-500 bg-blue-50/40 dark:bg-blue-950/30 text-slate-900 dark:text-slate-100'
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 opacity-70'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleChapterForExam(ch.id)}
                          className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
                        />
                        <div className="min-w-0">
                          <div className="font-bold text-xs sm:text-sm truncate">
                            Chương {ch.id}: {ch.name}
                          </div>
                          <div className="text-[11px] text-slate-400 dark:text-slate-500">
                            {ch.shortName} • {count} câu hỏi trong ngân hàng
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-semibold px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded shrink-0">
                        {count} câu
                      </span>
                    </label>
                  );
                })}
              </div>

              <div className="pt-2">
                <button
                  disabled={selectedChaptersForExam.length === 0}
                  onClick={() => {
                    if (selectedChaptersForExam.length > 0) {
                      onStartChapterExam(selectedChaptersForExam);
                      onClose();
                    }
                  }}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white font-bold rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 text-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>
                    Bắt Đầu Thi Theo {selectedChaptersForExam.length} Chương Đã Chọn (100 Câu / 90 Phút)
                  </span>
                </button>
                {selectedChaptersForExam.length === 0 && (
                  <p className="text-center text-xs text-rose-500 mt-1">
                    Vui lòng chọn ít nhất 1 chương để bắt đầu thi!
                  </p>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: LUYỆN TẬP TỰ DO */}
          {activeTab === 'practice' && (
            <div className="space-y-4">
              <div className="p-3.5 bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 rounded-xl text-xs text-emerald-900 dark:text-emerald-200">
                <div className="font-bold">Đặc điểm chế độ Luyện tập:</div>
                <ul className="list-disc list-inside space-y-0.5 mt-1 text-[11px] text-emerald-800 dark:text-emerald-300">
                  <li>Không giới hạn thời gian đếm ngược (đồng hồ bấm giờ tăng dần).</li>
                  <li>Chọn đáp án xong lập tức khoá câu và hiện ngay ĐÚNG/SAI + Căn cứ pháp lý + Lời giải.</li>
                  <li>Bảng câu hỏi tô màu xanh/đỏ tức thì.</li>
                </ul>
              </div>

              {/* Lọc chương */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200">
                  <span>1. Chọn chương ôn luyện ({practiceChapters.length}/7):</span>
                  <button
                    type="button"
                    onClick={selectAllPracticeChapters}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Chọn tất cả
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {CHAPTERS.map((ch) => {
                    const isChecked = practiceChapters.includes(ch.id);
                    return (
                      <label
                        key={ch.id}
                        className={`p-2.5 rounded-lg border text-xs flex items-center justify-between gap-2 cursor-pointer transition-all ${
                          isChecked
                            ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 font-semibold'
                            : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 opacity-60'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => togglePracticeChapter(ch.id)}
                            className="rounded text-emerald-600"
                          />
                          <span className="truncate">Chương {ch.id}: {ch.shortName}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 shrink-0">
                          {(BANK[ch.id] || []).length}c
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Lọc độ khó */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                  2. Chọn mức độ khó:
                </label>
                <div className="grid grid-cols-4 gap-2 text-xs font-semibold">
                  {[
                    { id: 'all', label: 'Tất cả' },
                    { id: 'dễ', label: 'Dễ' },
                    { id: 'trung bình', label: 'Trung bình' },
                    { id: 'vận dụng', label: 'Vận dụng' },
                  ].map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setPracticeDifficulty(d.id as QuestionDifficulty | 'all')}
                      className={`py-2 rounded-xl border text-center transition-all ${
                        practiceDifficulty === d.id
                          ? 'border-emerald-600 bg-emerald-600 text-white font-bold shadow-xs'
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Số câu */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                  3. Số câu hỏi luyện tập:
                </label>
                <div className="grid grid-cols-5 gap-2 text-xs font-semibold">
                  {([10, 20, 50, 100, 'all'] as const).map((cnt) => (
                    <button
                      key={cnt}
                      type="button"
                      onClick={() => setPracticeCount(cnt)}
                      className={`py-2 rounded-xl border text-center transition-all ${
                        practiceCount === cnt
                          ? 'border-emerald-600 bg-emerald-600 text-white font-bold shadow-xs'
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      {cnt === 'all' ? 'Tất cả' : `${cnt} câu`}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  disabled={practiceChapters.length === 0}
                  onClick={() => {
                    if (practiceChapters.length > 0) {
                      onStartPractice(practiceChapters, practiceDifficulty, practiceCount);
                      onClose();
                    }
                  }}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white font-bold rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 text-sm"
                >
                  <Dumbbell className="w-4 h-4" />
                  <span>Bắt Đầu Luyện Tập Ngay</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
