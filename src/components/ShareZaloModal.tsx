import React, { useState } from 'react';
import { Share2, Copy, Check, ExternalLink, QrCode, MessageCircle, X, Download } from 'lucide-react';
import { ExamSet } from '../types/quiz';

interface ShareZaloModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentExam: ExamSet;
}

export const ShareZaloModal: React.FC<ShareZaloModalProps> = ({
  isOpen,
  onClose,
  currentExam,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Shared Public App URL that anyone on internet can open without logging in
  const PUBLIC_APP_URL = 'https://ais-pre-4r7hbryd2tlfjyawekizzx-859460567964.asia-southeast1.run.app';

  // Build the full shareable URL with query params
  const getShareUrl = () => {
    if (typeof window !== 'undefined') {
      const origin = window.location.origin;
      // If running inside dev preview container, replace with the public preview link
      if (origin.includes('ais-dev-')) {
        return `${PUBLIC_APP_URL}?exam=${currentExam.id}`;
      }
      return `${origin}${window.location.pathname}?exam=${currentExam.id}`;
    }
    return `${PUBLIC_APP_URL}?exam=${currentExam.id}`;
  };

  const shareUrl = getShareUrl();

  const messageText = `Đề thi trắc nghiệm Pháp luật đại cương (100 câu - 90 phút): "${currentExam.title}". Mời bạn vào cùng làm bài kiểm tra thử nhé: ${shareUrl}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenZaloWeb = () => {
    // Open Zalo chat web or direct share link
    const zaloShareUrl = `https://chat.zalo.me/`;
    window.open(zaloShareUrl, '_blank');
  };

  // Inline QR Code SVG generator
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="flex items-center gap-2">
            <Share2 className="w-5 h-5 text-blue-200" />
            <h3 className="text-lg font-bold">Chia Sẻ Đề Thi Qua Zalo & Lớp Học</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <div className="p-3.5 bg-blue-50 border border-blue-100 rounded-xl text-sm text-blue-900 leading-relaxed">
            <span className="font-semibold text-blue-800">Đang chọn:</span> {currentExam.title} (100 câu - 90 phút).
            <p className="mt-1 text-blue-700 text-xs">
              Người nhận chỉ cần nhấp vào link là có thể làm bài thi ngay trên điện thoại hoặc máy tính mà không cần cài đặt app.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="space-y-3">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
              Liên kết làm bài trực tiếp
            </label>
            <div className="flex items-center gap-2 p-2 bg-slate-50 border border-slate-200 rounded-xl">
              <input
                type="text"
                readOnly
                value={shareUrl}
                className="w-full bg-transparent px-2 text-sm text-slate-800 font-mono truncate focus:outline-none"
              />
              <button
                onClick={handleCopyLink}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all shadow-sm ${
                  copied
                    ? 'bg-emerald-600 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    Đã sao chép!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Sao chép link
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Zalo Direct Button */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <button
              onClick={handleCopyMessage}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 hover:border-blue-500 hover:bg-blue-50/50 text-slate-700 text-sm font-semibold transition-all"
            >
              <Copy className="w-4 h-4 text-blue-600" />
              Copy lời nhắn gửi Zalo
            </button>
            <button
              onClick={handleOpenZaloWeb}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0068ff] hover:bg-[#0052cc] text-white text-sm font-semibold shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Mở Zalo gửi ngay
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </button>
          </div>

          {/* Offline File Section for sending directly via Zalo */}
          <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-emerald-600 text-white rounded-lg">
                <Download className="w-4 h-4" />
              </span>
              <div>
                <h4 className="text-xs font-bold text-emerald-950 uppercase tracking-wide">
                  Cách tốt nhất: Gửi File Chạy Trên Điện Thoại (Offline 100%)
                </h4>
                <p className="text-[11px] text-emerald-800">
                  Không cần máy chủ! File tự chạy trên mọi máy tính và điện thoại.
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Bạn tải file <code className="px-1.5 py-0.5 bg-white rounded border border-emerald-300 font-mono text-[11px] text-emerald-900 font-bold">.html</code> về máy, sau đó <strong>đính kèm gửi qua Zalo</strong> cho bạn bè. Mọi người chỉ cần bấm vào file trên điện thoại là làm bài thi ngay!
            </p>

            <a
              href="/TracNghiem_PhapLuatDaiCuong_500Cau.html"
              download="TracNghiem_PhapLuatDaiCuong_500Cau.html"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all active:scale-98"
            >
              <Download className="w-4 h-4" />
              Tải File Về Máy Để Gửi Zalo (.html)
            </a>
          </div>

          {/* QR Code Section */}
          <div className="pt-2 border-t border-slate-100 flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mb-2">
              <QrCode className="w-4 h-4 text-slate-400" />
              Quét mã QR bằng Camera Zalo trên điện thoại
            </div>
            <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-inner">
              <img
                src={qrApiUrl}
                alt="QR Code Đề thi Pháp luật đại cương"
                className="w-36 h-36 object-contain rounded-lg"
                loading="lazy"
              />
            </div>
            <span className="text-[11px] text-slate-400 mt-1.5">
              Bạn bè quét mã QR để mở đề thi lập tức
            </span>
          </div>
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
