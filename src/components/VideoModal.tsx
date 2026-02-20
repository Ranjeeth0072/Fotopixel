import { X } from 'lucide-react';
import React from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoSrc }) => {
  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Prevent modal close when clicking inside content
  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark/90 p-0"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12 bg-dark-foreground/10 hover:bg-dark-foreground/20 rounded-full flex items-center justify-center text-dark-foreground transition-colors z-50"
      >
        <X className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      {/* Video Content */}
      <div
        className="w-screen h-screen flex items-center justify-center"
        onClick={stopPropagation}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <iframe
              src={videoSrc}
              className="w-full h-full object-contain"
              style={{ aspectRatio: '16/9', maxHeight: '100vh', maxWidth: '100vw', background: 'black' }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Video Preview"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
