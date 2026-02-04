import React, { useEffect, useState } from 'react';

interface SplashViewProps {
    onComplete: () => void;
}

export const SplashView: React.FC<SplashViewProps> = ({ onComplete }) => {
    const [show, setShow] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // 1秒后才显示启动页
        const showTimer = setTimeout(() => {
            setShow(true);
        }, 1000);

        // 2.5秒后开始淡出（1秒延迟 + 0.5秒淡入 + 1秒停留）
        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        }, 2500);

        // 3.5秒后完全跳转（1秒延迟 + 0.5秒淡入 + 1秒停留 + 1秒淡出）
        const completeTimer = setTimeout(() => {
            onComplete();
        }, 3500);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(fadeTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    // 初始不显示
    if (!show) {
        return null;
    }

    return (
        <div className={`fixed inset-0 bg-white flex flex-col items-center justify-end pb-20 transition-opacity duration-[1000ms] ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
            {/* Logo和文案容器 - 上下排列 */}
            <div className="flex flex-col items-center gap-1 animate-in fade-in duration-[500ms]">
                {/* 纯文字Logo - Matoto马吐吐 */}
                <h1 className="text-lg font-medium text-[#231815] tracking-wide">
                    Matoto马吐吐
                </h1>

                {/* 副标题 */}
                <p className="text-xs text-gray-400 font-light tracking-wider">
                    打工牛马一吐为快
                </p>
            </div>
        </div>
    );
};
