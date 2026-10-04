import React, { useState } from 'react';
import { CheckCircle2, Download, FileSpreadsheet, FileText, Printer, X } from 'lucide-react';
import { Question } from '../types/quiz';

interface PrintExamModalProps {
  isOpen: boolean;
  onClose: () => void;
  examTitle: string;
  questions: Question[];
}

export type PrintMode = 'exam-sheet' | 'detailed-review';

export const PrintExamModal: React.FC<PrintExamModalProps> = ({
  isOpen,
  onClose,
  examTitle,
  questions,
}) => {
  const [printMode, setPrintMode] = useState<PrintMode>('exam-sheet');

  if (!isOpen) return null;

  const handlePrint = () => {
    const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

    // Bảng tô trắc nghiệm (Phiếu trả lời) cho Mode A
    const bubbleGridHtml = `
      <div class="bubble-sheet-container">
        <div class="bubble-sheet-title">PHIẾU TRẢ LỜI TRẮC NGHIỆM (${questions.length} CÂU)</div>
        <div class="bubble-grid">
          ${questions
            .map(
              (_, idx) => `
            <div class="bubble-row">
              <span class="bubble-num">${idx + 1}.</span>
              <span class="bubble-circle">A</span>
              <span class="bubble-circle">B</span>
              <span class="bubble-circle">C</span>
              <span class="bubble-circle">D</span>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    `;

    // Bảng đáp án ở cuối trang cho Mode A
    const answerKeyTableHtml = `
      <div class="page-break"></div>
      <div class="header">
        <div class="title">BẢNG ĐÁP ÁN ĐỀ THI - ${examTitle}</div>
        <div class="meta">Tổng số: ${questions.length} câu hỏi • Môn học: Pháp Luật Đại Cương</div>
      </div>
      <div class="answer-key-grid">
        ${questions
          .map(
            (q, idx) => `
          <div class="key-cell">
            <span class="key-num">${idx + 1}</span>
            <span class="key-ans">${OPTION_LETTERS[q.correctAnswer]}</span>
          </div>
        `
          )
          .join('')}
      </div>
    `;

    const questionsListHtml = questions
      .map((q, idx) => {
        const optionsHtml = q.options
          .map(
            (opt, optIdx) => `
            <div class="option-row">
              <strong>${OPTION_LETTERS[optIdx]}.</strong> ${opt}
            </div>
          `
          )
          .join('');

        let detailedExplanationHtml = '';
        if (printMode === 'detailed-review') {
          detailedExplanationHtml = `
            <div class="answer-box">
              <div class="correct-ans">➤ Đáp án đúng: ${OPTION_LETTERS[q.correctAnswer]}</div>
              ${
                q.explanation
                  ? `<div class="explanation-text"><strong>Giải thích:</strong> ${q.explanation}</div>`
                  : ''
              }
              ${
                q.legalReference
                  ? `<div class="legal-ref"><strong>Cơ sở pháp lý:</strong> ${q.legalReference}</div>`
                  : ''
              }
            </div>
          `;
        }

        return `
          <div class="question-item">
            <div class="question-text"><strong>Câu ${idx + 1}:</strong> ${q.question}</div>
            <div class="options-grid">${optionsHtml}</div>
            ${detailedExplanationHtml}
          </div>
        `;
      })
      .join('');

    const contentHtml = `
      <!DOCTYPE html>
      <html lang="vi">
      <head>
        <meta charset="utf-8" />
        <title>${examTitle} - Pháp luật đại cương</title>
        <style>
          @page { margin: 12mm 15mm; size: A4; }
          body { 
            font-family: "Times New Roman", Times, serif; 
            font-size: 12pt; 
            line-height: 1.4; 
            color: #000; 
            background: #fff !important; 
            margin: 0; 
            padding: 10px; 
          }
          .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 8px; margin-bottom: 14px; }
          .title { font-size: 15pt; font-weight: bold; text-transform: uppercase; margin: 4px 0; color: #000; }
          .meta { font-size: 10.5pt; font-style: italic; color: #333; }
          
          .student-info { 
            display: flex; 
            justify-content: space-between; 
            margin-bottom: 16px; 
            font-size: 11pt; 
            border: 1px dashed #555; 
            padding: 8px 12px; 
            color: #000; 
          }

          /* Bubble Sheet */
          .bubble-sheet-container {
            border: 1.5px solid #000;
            padding: 10px 14px;
            margin-bottom: 20px;
            page-break-inside: avoid;
          }
          .bubble-sheet-title {
            text-align: center;
            font-weight: bold;
            font-size: 12pt;
            margin-bottom: 8px;
            text-transform: uppercase;
          }
          .bubble-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 4px 10px;
            font-size: 10pt;
          }
          .bubble-row {
            display: flex;
            align-items: center;
            gap: 4px;
          }
          .bubble-num {
            font-weight: bold;
            width: 24px;
            text-align: right;
          }
          .bubble-circle {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 17px;
            height: 17px;
            border-radius: 50%;
            border: 1px solid #333;
            font-size: 8.5pt;
            font-weight: bold;
          }

          /* Questions */
          .question-item { margin-bottom: 14px; page-break-inside: avoid; }
          .question-text { font-size: 12pt; margin-bottom: 4px; color: #000; }
          .options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3px 12px; margin-left: 10px; }
          .option-row { font-size: 11.5pt; color: #000; }

          /* Detailed answers */
          .answer-box { 
            margin-top: 6px; 
            padding: 6px 10px; 
            background-color: #f1f5f9; 
            border-left: 3px solid #1e3a8a; 
            font-size: 10.5pt; 
            color: #000; 
          }
          .correct-ans { font-weight: bold; color: #047857; margin-bottom: 2px; }
          .explanation-text { margin-top: 3px; color: #1e293b; }
          .legal-ref { font-style: italic; color: #334155; margin-top: 3px; font-size: 10pt; }

          /* Answer key table */
          .answer-key-grid {
            display: grid;
            grid-template-columns: repeat(10, 1fr);
            gap: 5px;
            margin-top: 15px;
          }
          .key-cell {
            border: 1px solid #000;
            padding: 4px 2px;
            text-align: center;
          }
          .key-num { display: block; font-size: 9.5pt; color: #555; }
          .key-ans { display: block; font-weight: bold; font-size: 12pt; color: #000; }

          .page-break { page-break-before: always; }
        </style>
      </head>
      <body>
        <div class="header">
          <div style="font-weight: bold; font-size: 11pt; color: #000;">BỘ GIÁO DỤC VÀ ĐÀO TẠO • HỌC PHẦN PHÁP LUẬT ĐẠI CƯƠNG</div>
          <div class="title">${examTitle}</div>
          <div class="meta">
            ${
              printMode === 'exam-sheet'
                ? `Thời gian: 90 phút • Đề thi gồm ${questions.length} câu trắc nghiệm (Đã đảo thứ tự ngẫu nhiên)`
                : `Tài liệu ôn tập & giải chi tiết • ${questions.length} câu hỏi kèm căn cứ pháp lý`
            }
          </div>
        </div>

        <div class="student-info">
          <div>Họ và tên thí sinh: ..............................................................</div>
          <div>Mã số sinh viên: .............................. Phòng thi: .............</div>
        </div>

        ${printMode === 'exam-sheet' ? bubbleGridHtml : ''}

        <div class="questions-list">
          ${questionsListHtml}
        </div>

        ${printMode === 'exam-sheet' ? answerKeyTableHtml : ''}
      </body>
      </html>
    `;

    // In bằng iframe ẩn chuẩn iframe sandbox / dev server
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    document.body.appendChild(iframe);

    const doc = iframe.contentWindow?.document;
    if (doc) {
      doc.open();
      doc.write(contentHtml);
      doc.close();
      setTimeout(() => {
        iframe.contentWindow?.focus();
        iframe.contentWindow?.print();
        setTimeout(() => {
          document.body.removeChild(iframe);
        }, 2500);
      }, 500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-slate-800 to-slate-950 text-white shrink-0">
          <div className="flex items-center gap-2.5">
            <Printer className="w-5 h-5 text-slate-300" />
            <div>
              <h3 className="text-base font-bold">In & Xuất Đề Thi Ra File PDF</h3>
              <p className="text-xs text-slate-400">
                In bản đề chuẩn A4 với thứ tự câu và đáp án của phiên hiện tại
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Options */}
        <div className="p-5 sm:p-6 space-y-4">
          <div className="p-3.5 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 space-y-1">
            <div className="font-bold text-slate-800 dark:text-slate-100 truncate">
              Đề thi: {examTitle}
            </div>
            <div>
              Quy mô: <strong className="text-blue-600 dark:text-blue-400">{questions.length} câu trắc nghiệm</strong>
            </div>
            <div className="text-[11px] text-slate-400 pt-0.5">
              * Khuyến nghị: Trong cửa sổ in của trình duyệt, chọn <strong>"Lưu dưới dạng PDF" (Save as PDF)</strong> để tải về điện thoại / máy tính.
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
              Chọn định dạng in ấn:
            </label>

            {/* Mode A: Đề thi để in (có bảng tô trắc nghiệm + đáp án cuối trang) */}
            <div
              onClick={() => setPrintMode('exam-sheet')}
              className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                printMode === 'exam-sheet'
                  ? 'border-blue-500 bg-blue-50/70 dark:bg-blue-950/40 ring-1 ring-blue-500/30'
                  : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 bg-white dark:bg-slate-900'
              }`}
            >
              <input
                type="radio"
                name="printMode"
                checked={printMode === 'exam-sheet'}
                onChange={() => setPrintMode('exam-sheet')}
                className="w-4 h-4 text-blue-600 mt-0.5 focus:ring-blue-500"
              />
              <div className="text-xs space-y-1 flex-1">
                <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <FileSpreadsheet className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Đề thi để in (Có bảng tô trắc nghiệm + đáp án ở cuối trang)</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
                  Định dạng chuẩn phòng thi: Có phiếu tô trắc nghiệm A-B-C-D ở đầu trang, câu hỏi không hiện đáp án, và bảng tra đáp án tổng hợp ở trang cuối cùng.
                </p>
              </div>
            </div>

            {/* Mode B: Đề thi kèm lời giải chi tiết (phù hợp ôn tập) */}
            <div
              onClick={() => setPrintMode('detailed-review')}
              className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                printMode === 'detailed-review'
                  ? 'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/40 ring-1 ring-emerald-500/30'
                  : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 bg-white dark:bg-slate-900'
              }`}
            >
              <input
                type="radio"
                name="printMode"
                checked={printMode === 'detailed-review'}
                onChange={() => setPrintMode('detailed-review')}
                className="w-4 h-4 text-emerald-600 mt-0.5 focus:ring-emerald-500"
              />
              <div className="text-xs space-y-1 flex-1">
                <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Đề thi kèm lời giải chi tiết (Phù hợp ôn tập)</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
                  Mỗi câu hỏi có ngay đáp án đúng, giải thích chi tiết và trích dẫn điều khoản luật quy định cụ thể dưới từng câu.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-5 py-4 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs sm:text-sm font-semibold rounded-xl transition-colors"
          >
            Đóng lại
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all touch-manipulation"
          >
            <Printer className="w-4 h-4" />
            <span>Mở Lệnh In / Lưu PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};
