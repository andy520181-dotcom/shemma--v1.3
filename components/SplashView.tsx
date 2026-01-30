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
            {/* Logo和文案容器 */}
            <div className="flex flex-col items-center animate-in fade-in duration-[500ms]">
                {/* Logo SVG - 使用ResultCard的logo */}
                <div className="h-[36px]" style={{ marginTop: '5px', marginBottom: '2px' }}>
                    <svg
                        viewBox="0 0 202.59 48.13"
                        className="h-full"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <style>{`
                            .cls-1 { fill: #fff; }
                            .cls-2 { fill: #1750a2; }
                            .cls-3 { 
                                fill: #231815;
                                font-size: 21.47px;
                                font-weight: 500;
                                letter-spacing: 0em;
                            }
                        `}</style>
                        <path className="cls-1" d="M34.93,17.47c0,4.31-1.56,8.26-4.15,11.31-3.2,3.77-7.98,6.17-13.32,6.17-2.59,0-5.04-.56-7.25-1.57C4.19,30.62,0,24.53,0,17.47,0,7.82,7.82,0,17.46,0s17.46,7.82,17.46,17.47Z" />
                        <path className="cls-2" d="M34.93,18.25c0,4.29-1.56,8.21-4.15,11.24-.56-1.55-1.6-2.68-3-3.5-.88-.52-1.85-.79-2.86-.94-1.1-.17-2.21-.23-3.31-.35-.91-.1-1.8-.26-2.62-.68-1.24-.62-2-1.6-2.17-2.99-.16-1.28,.06-2.5,.63-3.66,.09-.17,.2-.33,.33-.47,.09-.1,.09-.19,0-.30-.33-.43-.51-.92-.47-1.47,0-.09,.02-.18,.04-.31,.31,1.14,.96,1.93,2.04,2.34,.45,.17,.91,.25,1.39,.24,1.01-.02,1.89,.35,2.74,.83,.26,.15,.45,.37,.53,.66,.09,.33,.3,.5,.62,.57,.37,.08,.72,.22,1.1,.23,.32,0,.58-.11,.8-.33,.1-.1,.21-.2,.35-.24,.1-.03,.17-.09,.22-.17,.28-.55,.52-1.11,.53-1.75,0-.26-.08-.47-.26-.65-1.19-1.14-2.09-2.5-2.97-3.88-.07-.12-.12-.23-.07-.37,.04-.12,.04-.25,.04-.37,0-.17-.06-.30-.18-.41-.65-.59-1.23-1.24-1.79-1.91-.12-.15-.26-.28-.39-.42-.09-.08-.10-.15-.05-.26,.32-.62,.53-1.30,.60-2.07,0,0,0-.02,0-.04,0,0,.03-.30-.03-.36-.09-.09-.39,.08-.43,.10-.92,.50-1.93,1.87-1.93,1.87,0,0,.27-2.11,.17-2.62-.05-.28-.16-.34-.37-.16-.68,.54-1.33,1.21-1.91,2.07-.06,.09-.10,.16-.23,.17-1.41,.07-2.71,.52-3.97,1.14-.42,.21-.83,.46-1.21,.74-.05,.03-.11,.05-.13,.16,.83-.20,1.66-.35,2.50-.33-2.31,1.02-4.30,2.49-5.98,4.37-.83,.92-2.09,3.04-2.09,3.04,0,0,2.01-1.39,3.18-1.92-.26,.31-.52,.62-.77,.93-1.18,1.45-2.20,2.98-2.88,4.73-.19,.49-.35,.98-.46,1.49-.02,.08,1.70-1.83,2.77-2.65,.01,0-.17,.38-.28,.55-.81,1.31-1.52,2.66-1.92,4.16-.16,.59-.29,1.95-.22,1.97,.07,.02,1.16-2.20,1.89-3.12,.04-.05,.08-.09,.11-.13-.63,3.90-1.05,7.96,1.80,11.07C4.16,31.55,0,25.28,0,18.25,0,8.66,7.82,.88,17.46,.88s17.46,7.78,17.46,17.37Z" />
                        <text className="cls-3" transform="translate(44.97 25.65)">
                            <tspan x="0" y="0">SHEMMA神么玛</tspan>
                        </text>
                    </svg>
                </div>

                {/* 副标题 */}
                <p className="text-base text-gray-400 font-light tracking-wider">
                    今天你是什么马
                </p>
            </div>
        </div>
    );
};
