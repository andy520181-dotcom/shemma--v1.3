import React, { useEffect, useState } from 'react';
import { AdConfig } from '../types/ad';

interface AdViewProps {
    config: AdConfig;
    onComplete: () => void;
}

export const AdView: React.FC<AdViewProps> = ({ config, onComplete }) => {
    const [timeLeft, setTimeLeft] = useState(config.duration);
    const [showSkip, setShowSkip] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        // 预加载图片
        const img = new Image();
        img.onload = () => setImageLoaded(true);
        img.onerror = () => {
            console.error('广告图片加载失败');
            setImageError(true);
            // 图片加载失败，3秒后自动跳过
            setTimeout(() => onComplete(), 3000);
        };
        img.src = config.imageUrl;

        // 倒计时
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    onComplete();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        // 显示跳过按钮的延迟
        const skipTimer = setTimeout(() => {
            setShowSkip(true);
        }, config.skipAfter * 1000);

        return () => {
            clearInterval(timer);
            clearTimeout(skipTimer);
        };
    }, [config, onComplete]);

    // 跳过广告
    const handleSkip = () => {
        onComplete();
    };

    // 点击广告
    const handleAdClick = () => {
        if (config.link) {
            window.open(config.link, '_blank');
        }
    };

    // 如果图片加载失败，显示加载提示
    if (imageError) {
        return (
            <div className="fixed inset-0 bg-white flex items-center justify-center">
                <p className="text-gray-400">广告加载失败，即将跳过...</p>
            </div>
        );
    }

    // 等待图片加载
    if (!imageLoaded) {
        return (
            <div className="fixed inset-0 bg-white flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black animate-in fade-in duration-300">
            {/* 广告图片 */}
            <div
                className={`w-full h-full relative ${config.link ? 'cursor-pointer' : ''}`}
                onClick={handleAdClick}
            >
                <img
                    src={config.imageUrl}
                    alt="广告"
                    className="w-full h-full object-cover"
                />

                {/* 倒计时和跳过按钮 */}
                <div className="absolute top-safe right-4 top-4 flex items-center gap-2">
                    {/* 倒计时 */}
                    <div className="bg-black/50 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                        {timeLeft}s
                    </div>

                    {/* 跳过按钮 */}
                    {showSkip && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation(); // 防止触发广告点击
                                handleSkip();
                            }}
                            className="bg-black/50 text-white text-sm px-4 py-1 rounded-full backdrop-blur-sm active:scale-95 transition-transform hover:bg-black/70"
                        >
                            跳过
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
