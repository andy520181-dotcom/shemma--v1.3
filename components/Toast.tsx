import React from 'react';
import { Check } from 'lucide-react';

interface ToastProps {
  show: boolean;
  message?: string;
}

export const Toast: React.FC<ToastProps> = ({ show, message = "已保存到相册" }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[80] pointer-events-none">
      <div className="bg-black/70 backdrop-blur-xl w-[158px] h-[158px] rounded-[28px] shadow-2xl flex flex-col items-center justify-center p-4 animate-in fade-in zoom-in duration-200">
        <Check className="w-16 h-16 text-white mb-4 stroke-[3]" />
        <p className="text-white text-base text-center leading-tight font-medium tracking-wide">
          {message}
        </p>
      </div>
    </div>
  );
};
