import React, { useEffect, useState } from 'react';

interface ScanningViewProps {
  imageSrc: string;
}

export const ScanningView: React.FC<ScanningViewProps> = ({ imageSrc }) => {
  // Use floating point number for smooth circle animation
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate from 0 to 99 over 3000ms
    const duration = 3000;
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Calculate progress based on time (Linear)
      // We keep it as a float for smooth SVG rendering
      const nextProgress = Math.min(99, (elapsed / duration) * 99);
      
      setProgress(nextProgress);

      if (elapsed < duration) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-hidden text-[#1C1C1E]">
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="flex flex-col items-center gap-12 w-full">
          
          <div className="text-center">
            <p className="text-[17px] font-light text-gray-400 tracking-[0.15em] mb-4">
              正在感应马力...
            </p>
          </div>

          {/* 
            Container: 300px flex centered parent (Matches HomeView).
          */}
          <div className="relative w-[300px] h-[300px] flex items-center justify-center">
            
            {/* SVG Ring (300px) - Absolute Positioned */}
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 300 300">
                <circle className="text-gray-100" cx="150" cy="150" r="148" fill="transparent" stroke="currentColor" strokeWidth="1.2" />
                <circle 
                    // Changed to light gray (gray-300) and removed blue drop-shadow
                    className="text-gray-300" 
                    cx="150" cy="150" r="148" 
                    fill="transparent" 
                    stroke="currentColor" 
                    strokeWidth="1.2" 
                    strokeDasharray={930}
                    // Use exact float value for smooth, synchronized rotation
                    strokeDashoffset={930 - (930 * progress / 100)}
                    strokeLinecap="round"
                />
            </svg>

            {/* Avatar (280px) - Centered by Parent Flex */}
            {/* Changed shadow color from blue-tinted to neutral gray/black */}
            <div className="relative w-[280px] h-[280px] rounded-full overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] bg-gray-50 z-10 border-4 border-gray-50 flex items-center justify-center">
              <img src={imageSrc} alt="Scanning" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="text-center">
            <span className="text-[48px] font-extralight text-[#1C1C1E] tracking-tight">
                {/* Floor the number for text display */}
                {Math.floor(progress)}%
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};