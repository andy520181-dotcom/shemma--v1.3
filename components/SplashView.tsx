import React, { useEffect } from 'react';

interface SplashViewProps {
    onComplete: () => void;
}

export const SplashView: React.FC<SplashViewProps> = ({ onComplete }) => {
    useEffect(() => {
        // 2.5秒后自动跳转到主页面
        const timer = setTimeout(() => {
            onComplete();
        }, 2500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center">
            {/* Logo容器 */}
            <div className="flex flex-col items-center animate-in fade-in duration-700">
                {/* 蓝色圆形Logo */}
                <div className="w-32 h-32 rounded-full bg-[#0F52BA] flex items-center justify-center mb-8 shadow-lg">
                    {/* 白色马头SVG */}
                    <svg
                        width="80"
                        height="80"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M70 30C70 30 65 25 60 25C55 25 50 28 48 32C46 28 42 25 38 25C34 25 30 28 30 35C30 35 28 40 28 45C28 50 30 55 35 60C40 65 50 75 50 75C50 75 60 65 65 60C70 55 72 50 72 45C72 40 70 35 70 30Z"
                            fill="white"
                        />
                        <path
                            d="M45 20C45 20 40 15 35 20C30 25 32 35 35 40C38 45 45 50 45 50"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                {/* 应用标题 */}
                <h1 className="text-3xl font-medium text-black mb-2 tracking-wide">
                    Shemma神么玛
                </h1>

                {/* 副标题 */}
                <p className="text-base text-gray-400 font-light tracking-wider">
                    今天你是什么马
                </p>
            </div>
        </div>
    );
};
