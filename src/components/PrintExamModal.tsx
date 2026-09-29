import React, { useState } from 'react';
import { Download, FileText, Printer, X } from 'lucide-react';
import { ExamSet, Question } from '../types/quiz';

interface PrintExamModalProps {
  isOpen: boolean;
  onClose: () => void;
  exam: ExamSet;
  questions: Question[];
}

export const PrintExamModal: React.FC<PrintExamModalProps> = ({
  isOpen,
  onClose,
  exam,
  questions,
}) => {
  const [includeAnswers, setIncludeAnswers] = useState(true);
  const [includeExplanations, setIncludeExplanations] = useState(true);

  if (!isOpen) return null;

  const handlePrint = () => {
    // Open a new printable window
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

    const contentHtml = `
      <!DOCTYPE html>
      <html lang="vi">
      <head>
        <meta charset="utf-8" />
        <title>${exam.title} - Pháp luật đại cương</title>
        <style>
          @page { margin: 15mm 15mm; size: A4; }
          body { font-family: "Times New Roman", Times, serif; font-size: 13pt; line-height: 1.45; color: #111; margin: 0; padding: 20px; }
          .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 12px; margin-bottom: 20px; }
          .title { font-size: 16pt; font-weight: bold; text-transform: uppercase; margin: 5px 0; }
          .meta { font-size: 11pt; font-style: italic; color: #444; }
          .student-info { display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 12pt; border: 1px dashed #666; padding: 10px 15px; }
          .question-item { margin-bottom: 16px; page-break-inside: avoid; }
          .question-text { font-weight: bold; margin-bottom: 6px; }
          .options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 15px; margin-left: 10px; }
          .option-row { font-size: 12pt; }
          .answer-box { margin-top: 6px; padding: 6px 10px; background-color: #f0f7ff; border-left: 3px solid #0066cc; font-size: 11pt; }
          .correct-ans { font-weight: bold; color: #007700; }
          .legal-ref { font-style: italic; color: #555; }
        </style>
      </head>
      <body>
        <div class="header">
          <div style="font-weight: bold; font-size: 12pt;">BỘ GIÁO DỤC VÀ ĐÀO TẠO • NGÂN HÀNG CÂU HỎI ĐẠI HỌC</div>
          <div class="title">${exam.title}</div>
          <div class="meta">Học phần: Pháp Luật Đại Cương (Không chuyên luật) • Thời gian làm bài: 90 phút • Số câu: ${questions.length} câu</div>
        </div>

        <div class="student-info">
          <div>Họ và tên thí sinh: ..............................................................</div>
          <div>Mã số sinh viên: ..................................</div>
          <div>Lớp: .........................</div>
        </div>

        <div>
          ${questions
            .map(
              (q, idx) => `
            <div class="question-item">
              <div class="question-text">Câu ${idx + 1}: ${q.question}</div>
              <div class="options-grid">
                ${q.options
                  .map(
                    (opt, optIdx) => `
                  <div class="option-row">
                    <strong>${OPTION_LETTERS[optIdx]}.</strong> ${opt}
                  </div>
                `
                  )
                  .join('')}
              </div>
              ${
                includeAnswers
                  ? `
                <div class="answer-box">
                  <span class="correct-ans">Đáp án đúng: ${OPTION_LETTERS[q.correctAnswer]}</span>
                  ${
                    includeExplanations && q.explanation
                      ? `<br /><span>• Giải thích: ${q.explanation}</span>`
                      : ''
                  }
                  ${
                    includeExplanations && q.legalReference
                      ? `<br /><span class="legal-ref">• Căn cứ pháp lý: ${q.legalReference}</span>`
                      : ''
                  }
                </div>
              `
                  : ''
              }
            </div>
          `
            )
            .join('')}
        </div>
        <script>
          window.onload = function() { window.print(); }
        </script>
      </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(contentHtml);
    printWindow.document.close();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white">
          <div className="flex items-center gap-2">
            <Printer className="w-5 h-5 text-blue-400" />
            <h3 className="text-base font-bold">In & Tải Đề Thi Dưới Dạng PDF</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 leading-relaxed">
            Hệ thống sẽ mở hộp thoại in của trình duyệt. Bạn có thể chọn máy in hoặc lưu về dạng file <strong>PDF</strong> để in trên giấy A4 hoặc ôn tập ngoại tuyến.
          </div>

          <div className="space-y-3 pt-1">
            <label className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
              <input
                type="checkbox"
                checked={includeAnswers}
                onChange={(e) => setIncludeAnswers(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
              />
              <div className="text-xs">
                <span className="font-bold text-slate-800 block">Kèm đáp án đúng dưới mỗi câu</span>
                <span className="text-slate-500">Phù hợp để làm tài liệu học thuộc lòng</span>
              </div>
            </label>

            {includeAnswers && (
              <label className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                <input
                  type="checkbox"
                  checked={includeExplanations}
                  onChange={(e) => setIncludeExplanations(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                />
                <div className="text-xs">
                  <span className="font-bold text-slate-800 block">Kèm lời giải thích & Căn cứ điều luật</span>
                  <span className="text-slate-500">Trích dẫn Bộ luật Dân sự, Hình sự, Doanh nghiệp...</span>
                </div>
              </label>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl"
          >
            Hủy
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md transition-all active:scale-95"
          >
            <Printer className="w-4 h-4" />
            Bắt đầu In / Xuất PDF
          </button>
        </div>
      </div>
    </div>
  );
};
