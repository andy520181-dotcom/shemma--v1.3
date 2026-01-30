import React from 'react';
import { DiagnosisResult } from '../types';
import { MapPin, User, AtSign, ChevronRight } from 'lucide-react';
import { ResultCard } from './ResultCard';

interface ShareViewProps {
    data: DiagnosisResult;
    onCancel: () => void;
    onPost: () => void;
}

export const ShareView: React.FC<ShareViewProps> = ({ data, onCancel, onPost }) => {
    // Scaling calculation:
    // Target thumbnail width: 100px (inside the 120px container padding/borders)
    // Original Card width: 340px (roughly)
    // Scale factor: 100 / 340 approx 0.29

    return (
        <div className="flex flex-col min-h-screen bg-white transition-colors duration-300">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md px-4 h-12 flex items-center justify-between">
                <button onClick={onCancel} className="text-[16px] text-black font-normal active:opacity-50 transition-opacity">
                    取消
                </button>
                <button onClick={onPost} className="bg-wechat-green text-white px-4 py-1.5 rounded-[4px] text-[15px] font-medium active:opacity-70 transition-opacity">
                    发表
                </button>
            </header>

            <main className="flex-1 overflow-y-auto">
                {/* Text Area */}
                <div className="px-5 py-4 bg-white">
                    <textarea
                        className="w-full bg-transparent border-none p-0 focus:ring-0 text-[17px] text-black leading-relaxed resize-none min-h-[80px] font-light placeholder-gray-300"
                        placeholder="这一刻的想法..."
                        defaultValue={`原来我真的是${data.fullTitle}本码... @SHEMMA神么玛`}
                    />
                </div>

                {/* Result Card Thumbnail (Real Component Scaled Down) */}
                <div className="px-5 mb-8">
                    <div className="w-[120px] h-[180px] bg-[#F2F2F7] rounded-lg border border-gray-100 overflow-hidden flex items-start justify-center relative cursor-pointer active:opacity-80 transition-opacity">

                        {/* 
                    Scaling Wrapper 
                    We render the real ResultCard at a fixed large width (e.g. 340px)
                    Then scale it down to fit into the 120px container.
                */}
                        <div
                            className="absolute top-2 left-1/2"
                            style={{
                                width: '340px', // Base width for the card to render correctly
                                transform: 'translateX(-50%) scale(0.28)',
                                transformOrigin: 'top center'
                            }}
                        >
                            <ResultCard data={data} readOnly={true} />
                        </div>

                        {/* Overlay to catch clicks and prevent interaction with the scaled card */}
                        <div className="absolute inset-0 z-10" />
                    </div>
                </div>

                {/* Options List */}
                <div className="bg-white border-t border-b border-gray-100">
                    <div className="flex items-center px-5 py-4 border-b border-gray-100 active:bg-gray-50 transition-colors cursor-pointer">
                        <MapPin className="w-5 h-5 text-gray-500 mr-4" />
                        <span className="flex-1 text-[17px] text-black font-light">所在位置</span>
                        <ChevronRight className="w-5 h-5 text-gray-300" />
                    </div>
                    <div className="flex items-center px-5 py-4 border-b border-gray-100 active:bg-gray-50 transition-colors cursor-pointer">
                        <User className="w-5 h-5 text-gray-500 mr-4" />
                        <span className="flex-1 text-[17px] text-black font-light">谁可以看</span>
                        <span className="text-[17px] text-gray-400 mr-1 font-light">公开</span>
                        <ChevronRight className="w-5 h-5 text-gray-300" />
                    </div>
                    <div className="flex items-center px-5 py-4 active:bg-gray-50 transition-colors cursor-pointer">
                        <AtSign className="w-5 h-5 text-gray-500 mr-4" />
                        <span className="flex-1 text-[17px] text-black font-light">提醒谁看</span>
                        <ChevronRight className="w-5 h-5 text-gray-300" />
                    </div>
                </div>
            </main>
        </div>
    );
};