import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Award, 
  BarChart3, 
  CheckCircle2, 
  Clock, 
  Download, 
  FileText, 
  ListFilter, 
  RotateCcw, 
  Sparkles, 
  XCircle 
} from 'lucide-react';
import { Question, ExamSet } from '../types/quiz';
import { CHAPTERS } from '../data/chapters';

interface ResultReportProps {
  exam: ExamSet;
  questions: Question[];
  userAnswers: Record<number, number>;
  timeSpentSeconds: number;
  onRetakeExam: () => void;
  onChangeExam: () => void;
  onOpenPrintModal: () => void;
  filterReview: 'all' | 'wrong' | 'correct' | number;
  onSetFilterReview: (filter: 'all' | 'wrong' | 'correct' | number) => void;
}

export const ResultReport: React.FC<ResultReportProps> = ({
  exam,
  questions,
  userAnswers,
  timeSpentSeconds,
  onRetakeExam,
  onChangeExam,
  onOpenPrintModal,
  filterReview,
  onSetFilterReview,
}) => {
  const total = questions.length;
  let correctCount = 0;
  let wrongCount = 0;
  let omittedCount = 0;

  questions.forEach((q) => {
    const userChoice = userAnswers[q.id];
    if (userChoice === undefined) {
      omittedCount++;
    } else if (userChoice === q.correctAnswer) {
      correctCount++;
    } else {
      wrongCount++;
    }
  });

  const score10 = Number(((correctCount / total) * 10).toFixed(2));

  // Determine Grade
  let gradeText = '';
  let gradeColor = '';
  let gradeBg = '';
  if (score10 >= 9.0) {
    gradeText = 'Xuất Sắc (Điểm A+)';
    gradeColor = 'text-emerald-700';
    gradeBg = 'bg-emerald-50 border-emerald-300';
  } else if (score10 >= 8.0) {
    gradeText = 'Giỏi (Điểm A)';
    gradeColor = 'text-blue-700';
    gradeBg = 'bg-blue-50 border-blue-300';
  } else if (score10 >= 6.5) {
    gradeText = 'Khá (Điểm B/B+)';
    gradeColor = 'text-indigo-700';
    gradeBg = 'bg-indigo-50 border-indigo-300';
  } else if (score10 >= 5.0) {
    gradeText = 'Trung Bình (Điểm C)';
    gradeColor = 'text-amber-700';
    gradeBg = 'bg-amber-50 border-amber-300';
  } else {
    gradeText = 'Chưa Đạt (Điểm D/F)';
    gradeColor = 'text-rose-700';
    gradeBg = 'bg-rose-50 border-rose-300';
  }

  // Format time spent
  const minutes = Math.floor(timeSpentSeconds / 60);
  const seconds = timeSpentSeconds % 60;
  const timeFormatted = `${minutes} phút ${seconds < 10 ? '0' : ''}${seconds} giây`;

  // Trigger celebration confetti if score is high
  useEffect(() => {
    if (score10 >= 7.0) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // Safe fallback if canvas-confetti is not loaded
      }
    }
  }, [score10]);

  // Chapter statistics
  const chapterStats = CHAPTERS.map((ch) => {
    const chQuestions = questions.filter((q) => q.chapterId === ch.id);
    const chTotal = chQuestions.length;
    const chCorrect = chQuestions.filter((q) => userAnswers[q.id] === q.correctAnswer).length;
    const chPercent = chTotal > 0 ? Math.round((chCorrect / chTotal) * 100) : 0;
    return {
      ...ch,
      total: chTotal,
      correct: chCorrect,
      percent: chPercent,
    };
  }).filter((ch) => ch.total > 0);

  return (
    <div className="space-y-6">
      {/* Top Banner Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 text-white p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-blue-200 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Kết Quả Bài Thi Đã Nộp
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                {exam.title}
              </h2>
              <p className="text-xs sm:text-sm text-blue-200 mt-1">
                Thời gian làm bài: {timeFormatted} (Quy định: 90 phút)
              </p>
            </div>

            {/* Main Score Dial */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-2xl text-center shadow-lg">
              <span className="text-xs uppercase tracking-wider text-blue-200 block font-semibold">
                Điểm Tổng Kết
              </span>
              <div className="text-4xl sm:text-5xl font-black tracking-tight text-white mt-1">
                {score10}
                <span className="text-xl text-blue-200 font-medium">/10</span>
              </div>
              <div className="mt-1 text-xs font-bold px-2.5 py-0.5 rounded-full bg-white text-blue-900 inline-block">
                {gradeText}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stat Boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 border-b border-slate-100">
          <div className="p-4 sm:p-5 flex items-center gap-3.5">
            <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-slate-800">
                {correctCount}
                <span className="text-xs text-slate-400 font-normal">/{total}</span>
              </div>
              <div className="text-xs text-slate-500 font-medium">Số câu đúng</div>
            </div>
          </div>

          <div className="p-4 sm:p-5 flex items-center gap-3.5">
            <div className="p-2.5 bg-rose-100 text-rose-700 rounded-xl">
              <XCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-slate-800">
                {wrongCount}
                <span className="text-xs text-slate-400 font-normal">/{total}</span>
              </div>
              <div className="text-xs text-slate-500 font-medium">Số câu sai</div>
            </div>
          </div>

          <div className="p-4 sm:p-5 flex items-center gap-3.5">
            <div className="p-2.5 bg-amber-100 text-amber-700 rounded-xl">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-slate-800">
                {minutes}p {seconds}s
              </div>
              <div className="text-xs text-slate-500 font-medium">Thời gian hoàn thành</div>
            </div>
          </div>

          <div className="p-4 sm:p-5 flex items-center gap-3.5">
            <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-slate-800">
                {Math.round((correctCount / total) * 100)}%
              </div>
              <div className="text-xs text-slate-500 font-medium">Tỷ lệ chính xác</div>
            </div>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="p-4 sm:p-5 bg-slate-50/70 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={onRetakeExam}
              className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              Làm lại đề này
            </button>
            <button
              onClick={onChangeExam}
              className="flex items-center gap-1.5 px-4 py-2 border border-slate-300 hover:bg-white text-slate-700 text-xs sm:text-sm font-semibold rounded-xl transition-all"
            >
              <FileText className="w-4 h-4 text-slate-500" />
              Chọn bộ đề khác (1-5)
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={onOpenPrintModal}
              className="flex items-center gap-1.5 px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all"
            >
              <Download className="w-4 h-4" />
              In / Tải PDF
            </button>
          </div>
        </div>
      </div>

      {/* Chapter Performance Breakdown */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-indigo-600" />
            <h3 className="text-base font-bold text-slate-900">
              Phân Tích Năng Lực Theo Từng Chương (Chương 1, 3, 4, 5, 6, 7, 9)
            </h3>
          </div>
          <span className="text-xs text-slate-500">Giúp bạn nhận biết phần còn yếu</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
          {chapterStats.map((ch) => (
            <div
              key={ch.id}
              className="p-3.5 bg-slate-50/70 border border-slate-200/80 rounded-xl space-y-2"
            >
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-800 truncate max-w-[220px]" title={ch.name}>
                  {ch.name}
                </span>
                <span className="font-bold text-slate-900">
                  {ch.correct}/{ch.total} câu ({ch.percent}%)
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    ch.percent >= 80
                      ? 'bg-emerald-500'
                      : ch.percent >= 50
                      ? 'bg-blue-500'
                      : 'bg-rose-500'
                  }`}
                  style={{ width: `${ch.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter review buttons */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <ListFilter className="w-4 h-4 text-slate-500" />
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Xem lại chi tiết bài làm:
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => onSetFilterReview('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              filterReview === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Tất cả ({total})
          </button>
          <button
            onClick={() => onSetFilterReview('wrong')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1 ${
              filterReview === 'wrong'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200'
            }`}
          >
            <XCircle className="w-3.5 h-3.5" />
            Chỉ câu sai ({wrongCount})
          </button>
          <button
            onClick={() => onSetFilterReview('correct')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1 ${
              filterReview === 'correct'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            Chỉ câu đúng ({correctCount})
          </button>
        </div>
      </div>
    </div>
  );
};
