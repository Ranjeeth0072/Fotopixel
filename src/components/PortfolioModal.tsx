import { X, ZoomIn, ZoomOut } from 'lucide-react';
import { useState } from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  beforeImage: string;
  afterImage: string;
}

const PortfolioModal = ({ isOpen, onClose, beforeImage, afterImage }: PortfolioModalProps) => {
  const [zoom, setZoom] = useState(1);

  if (!isOpen) return null;

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 2));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 0.5));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark/90 p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12 bg-dark-foreground/10 hover:bg-dark-foreground/20 rounded-full flex items-center justify-center text-dark-foreground transition-colors"
      >
        <X className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Zoom Controls */}
      <div className="absolute top-4 left-4 flex gap-2">
        <button
          onClick={handleZoomOut}
          className="w-10 h-10 md:w-12 md:h-12 bg-dark-foreground/10 hover:bg-dark-foreground/20 rounded-full flex items-center justify-center text-dark-foreground transition-colors"
        >
          <ZoomOut className="w-4 h-4 md:w-5 md:h-5" />
        </button>
        <button
          onClick={handleZoomIn}
          className="w-10 h-10 md:w-12 md:h-12 bg-dark-foreground/10 hover:bg-dark-foreground/20 rounded-full flex items-center justify-center text-dark-foreground transition-colors"
        >
          <ZoomIn className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>

      {/* Content */}
      <div
        className="w-full max-w-5xl overflow-auto"
        style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}
      >
        <BeforeAfterSlider
          beforeImage={beforeImage}
          afterImage={afterImage}
          className="h-[50vh] md:h-[70vh] w-full"
        />
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-dark-foreground/60 text-xs md:text-sm text-center">
        Drag the slider to compare before and after
      </div>
    </div>
  );
};

export default PortfolioModal;