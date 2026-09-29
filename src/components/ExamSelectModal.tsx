import React, { useState } from 'react';
import { BookOpen, Check, Layers, Shuffle, Sparkles, X } from 'lucide-react';
import { EXAM_SETS, CHAPTERS } from '../data';
import { ChapterId } from '../types/quiz';

interface ExamSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentExamId: number;
  onSelectExam: (examId: number) => void;
  onSelectChapterMode: (chapterId: ChapterId) => void;
  onSelectRandomExam: () => void;
}

export const ExamSelectModal: React.FC<ExamSelectModalProps> = ({
  isOpen,
  onClose,
  currentExamId,
  onSelectExam,
  onSelectChapterMode,
  onSelectRandomExam,
}) => {
  const [activeTab, setActiveTab] = useState<'exams' | 'chapters'>('exams');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
          <div className="flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-blue-200" />
            <div>
              <h3 className="text-lg font-bold">Chọn Bộ Đề Thi & Chế Độ Luyện Tập</h3>
              <p className="text-xs text-blue-200">
                Ngân hàng 500 câu trắc nghiệm chuẩn môn Pháp luật đại cương
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3 gap-2">
          <button
            onClick={() => setActiveTab('exams')}
            className={`pb-3 px-3 text-sm font-bold border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'exams'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            5 Bộ Đề Chuẩn (100 câu/90 phút)
          </button>
          <button
            onClick={() => setActiveTab('chapters')}
            className={`pb-3 px-3 text-sm font-bold border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'chapters'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Ôn Luyện Theo Từng Chương (1, 3, 4, 5, 6, 7, 9)
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {activeTab === 'exams' ? (
            <div className="space-y-3">
              {/* Random 100 questions banner */}
              <div
                onClick={() => {
                  onSelectRandomExam();
                  onClose();
                }}
                className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl flex items-center justify-between cursor-pointer hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-amber-500 text-white rounded-xl shadow-xs group-hover:scale-105 transition-transform">
                    <Shuffle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-amber-950 flex items-center gap-1.5">
                      <span>Đề Thi Trộn Ngẫu Nhiên 100 Câu</span>
                      <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 bg-amber-200 text-amber-900 rounded-md">
                        Mới & Bất ngờ
                      </span>
                    </h4>
                    <p className="text-xs text-amber-800 mt-0.5">
                      Hệ thống tự động rút ngẫu nhiên 100 câu từ kho 500 câu chuẩn để tạo đề thi hoàn toàn mới!
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-amber-700 group-hover:underline">
                  Bắt đầu &rarr;
                </span>
              </div>

              {/* 5 Exam Sets List */}
              <div className="space-y-2.5 pt-1">
                {EXAM_SETS.map((exam) => {
                  const isCurrent = exam.id === currentExamId;
                  return (
                    <div
                      key={exam.id}
                      onClick={() => {
                        onSelectExam(exam.id);
                        onClose();
                      }}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                        isCurrent
                          ? 'border-blue-600 bg-blue-50/70 ring-2 ring-blue-500/20 shadow-sm'
                          : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                              isCurrent
                                ? 'bg-blue-600 text-white'
                                : 'bg-slate-200 text-slate-700'
                            }`}
                          >
                            {exam.badge}
                          </span>
                          <h4 className="text-sm font-bold text-slate-900">
                            {exam.title}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-1">
                          {exam.description}
                        </p>
                        <div className="flex items-center gap-3 text-[11px] text-slate-500 pt-0.5">
                          <span>⏱ {exam.durationMinutes} phút</span>
                          <span>•</span>
                          <span>📝 {exam.questionCount} câu hỏi trắc nghiệm</span>
                        </div>
                      </div>

                      <div className="shrink-0">
                        {isCurrent ? (
                          <span className="flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-100 px-3 py-1.5 rounded-lg">
                            <Check className="w-3.5 h-3.5" />
                            Đang mở
                          </span>
                        ) : (
                          <button className="text-xs font-semibold text-slate-600 hover:text-blue-700 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-blue-400">
                            Làm đề này
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Chapters List */
            <div className="space-y-2.5">
              <p className="text-xs text-slate-600 mb-2">
                Chọn chương bạn muốn ôn tập sâu. Đã bỏ qua chương 2 và chương 8 theo đề cương học tập của bạn.
              </p>
              {CHAPTERS.map((ch) => (
                <div
                  key={ch.id}
                  onClick={() => {
                    onSelectChapterMode(ch.id);
                    onClose();
                  }}
                  className="p-4 rounded-xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/40 transition-all cursor-pointer flex items-center justify-between gap-3 group"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-100 text-indigo-800">
                        {ch.code}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-900">
                        {ch.name}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {ch.description}
                    </p>
                  </div>
                  <button className="shrink-0 text-xs font-semibold text-indigo-700 bg-indigo-50 group-hover:bg-indigo-600 group-hover:text-white px-3 py-1.5 rounded-lg transition-colors">
                    Luyện tập
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 bg-white border border-slate-200 hover:bg-slate-100 rounded-xl transition-all"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
