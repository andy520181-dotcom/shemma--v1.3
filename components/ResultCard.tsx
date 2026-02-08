import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DiagnosisResult } from '../types';
import { Share as ShareIcon } from 'lucide-react';
import { validateContent } from '../utils/contentFilter';

interface ResultCardProps {
    data: DiagnosisResult;
    onUpdateData?: (newData: DiagnosisResult) => void;
    readOnly?: boolean;
    onShareClick?: () => void;
    className?: string;
}

export const ResultCard: React.FC<ResultCardProps> = ({
    data,
    onUpdateData,
    readOnly = false,
    onShareClick,
    className
}) => {
    const { t } = useTranslation();
    // Editing States
    const [isEditingType, setIsEditingType] = useState(false);
    const [isEditingQuote, setIsEditingQuote] = useState(false);
    const [tempType, setTempType] = useState(data.type);
    const [tempQuote, setTempQuote] = useState(data.quote);

    // Content validation error
    const [contentError, setContentError] = useState<string | null>(null);

    // Refs
    const typeInputRef = useRef<HTMLInputElement>(null);
    const quoteInputRef = useRef<HTMLTextAreaElement>(null);
    const longPressTimerRef = useRef<number | null>(null);

    useEffect(() => {
        setTempType(data.type);
        setTempQuote(data.quote);
    }, [data]);

    useEffect(() => {
        if (isEditingType && typeInputRef.current) {
            typeInputRef.current.focus();
        }
    }, [isEditingType]);

    useEffect(() => {
        if (isEditingQuote && quoteInputRef.current) {
            quoteInputRef.current.focus();
            quoteInputRef.current.style.height = 'auto';
            quoteInputRef.current.style.height = quoteInputRef.current.scrollHeight + 'px';
        }
    }, [isEditingQuote]);

    // Dynamic font size
    const getFontSizeClass = (text: string) => {
        if (text.length <= 2) return "text-6xl";
        if (text.length === 3) return "text-5xl";
        return "text-4xl";
    };

    // Long Press Logic
    const handleLongPressStart = (field: 'type' | 'quote') => {
        if (readOnly) return;
        longPressTimerRef.current = window.setTimeout(() => {
            if (field === 'type') setIsEditingType(true);
            if (field === 'quote') setIsEditingQuote(true);
            if (navigator.vibrate) navigator.vibrate(50);
        }, 600);
    };

    const handleLongPressEnd = () => {
        if (longPressTimerRef.current) {
            clearTimeout(longPressTimerRef.current);
            longPressTimerRef.current = null;
        }
    };

    // Save Logic
    const handleSaveType = () => {
        // 验证内容
        const validation = validateContent(tempType);
        if (!validation.isValid) {
            setContentError(validation.message || 'content.sensitiveWordDetected');
            setTimeout(() => setContentError(null), 3000);
            setTempType(data.type); // Revert to original if validation fails
            setIsEditingType(false); // Exit editing mode
            return;
        }

        setIsEditingType(false);
        if (onUpdateData && tempType.trim()) {
            onUpdateData({ ...data, type: tempType.trim() });
        } else {
            setTempType(data.type);
        }
    };

    const handleSaveQuote = () => {
        // 验证内容
        const validation = validateContent(tempQuote);
        if (!validation.isValid) {
            setContentError(validation.message || 'content.sensitiveWordDetected');
            setTimeout(() => setContentError(null), 3000);
            setTempQuote(data.quote); // Revert to original if validation fails
            setIsEditingQuote(false); // Exit editing mode
            return;
        }

        setIsEditingQuote(false);
        if (onUpdateData && tempQuote.trim()) {
            onUpdateData({ ...data, quote: tempQuote.trim() });
        } else {
            setTempQuote(data.quote);
        }
    };

    const handleQuoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const val = e.target.value.slice(0, 100);
        setTempQuote(val);
        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
    };

    return (
        <div
            className={`w-full h-full overflow-hidden flex flex-col relative transition-all duration-300 ease-in-out ${readOnly ? 'rounded-[2.5rem] border border-[#E5E5E5]' : 'rounded-[2.5rem] shadow-ios-card border border-white/50'} ${readOnly ? 'bg-white' : className ?? 'bg-white'}`}
        >
            {/* Container Padding - Flex column, justify-between */}
            <div className="flex flex-col items-center w-full pt-2 px-6 pb-6 h-full justify-between">

                {/* Header Row */}
                <div className="w-full flex items-center justify-between shrink-0" style={{ marginTop: readOnly ? '0px' : '20px' }}>

                    {/* Logo Container - New combined logo with text */}
                    <div className={`flex items-center justify-center ${readOnly ? 'h-[32px]' : 'h-[38.4px]'}`}>
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
                                <tspan x="0" y="0">{t('app.name')}</tspan>
                            </text>
                        </svg>
                    </div>

                    {/* Share Button (Only in interactive mode) */}
                    {!readOnly && onShareClick && (
                        <div className="h-8 flex items-center justify-center -mt-[10px]">
                            <button
                                onClick={onShareClick}
                                className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center text-black/60 active:scale-90 active:bg-gray-100 transition-all hover:bg-gray-100"
                            >
                                <ShareIcon className="w-4 h-4" strokeWidth={2} />
                            </button>
                        </div>
                    )}
                </div>

                {/* Middle Content Wrapper - 头像本身居中 */}
                <div className="absolute top-1/2 left-0 right-0 flex flex-col items-center" style={{ transform: 'translateY(-130px)' }}>

                    {/* 昵称和职业 - 移到头像上方，负margin向上移动 */}
                    <div className="text-center mb-1 w-full flex flex-col items-center shrink-0 relative z-10" style={{ marginTop: '-120px' }}>
                        <h2 className="text-[#333333] text-[18px] mb-0 font-light tracking-tighter break-words px-4">[{data.nickname}]</h2>
                        {data.profession && (
                            <p className="text-[#333333] text-sm mb-2 font-light tracking-tight break-words px-4">{data.profession}</p>
                        )}
                    </div>

                    {/* Avatar Container - 独立容器确保头像区域不会被其他内容覆盖 */}
                    <div className="w-full flex justify-center shrink-0 mb-4" style={{ marginTop: '20px' }}>
                        <div className="relative w-[260px] h-[260px] rounded-full overflow-hidden border-[8px] border-gray-50 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]">
                            <img src={data.image} alt="Avatar" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Result Text Area - 诊断类型 */}
                    <div className="text-center mb-3 w-full flex flex-col items-center shrink-0">
                        {/* Editable Type/Title */}
                        <div className="relative min-w-[50%] flex justify-center mt-1">
                            {isEditingType ? (
                                <input
                                    ref={typeInputRef}
                                    value={tempType}
                                    maxLength={16}
                                    onChange={(e) => setTempType(e.target.value.slice(0, 16))}
                                    onBlur={handleSaveType}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSaveType()}
                                    className={`bg-transparent text-center text-[#333333] font-medium outline-none border-none p-0 w-full caret-[#333333] break-words ${getFontSizeClass(tempType)}`}
                                />
                            ) : (
                                <div
                                    className={`inline-block px-4 py-2 select-none relative ${readOnly ? '' : 'group cursor-pointer'}`}
                                    onMouseDown={() => handleLongPressStart('type')}
                                    onMouseUp={handleLongPressEnd}
                                    onMouseLeave={handleLongPressEnd}
                                    onTouchStart={() => handleLongPressStart('type')}
                                    onTouchEnd={handleLongPressEnd}
                                    onContextMenu={(e) => e.preventDefault()}
                                >
                                    <span className={`text-[#333333] tracking-wider font-medium break-words ${getFontSizeClass(data.type)}`}>
                                        {data.type}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Editable Quote - 独立容器 */}
                    <div className="w-full px-2 text-center mt-0 flex justify-center relative shrink-0">
                        {isEditingQuote ? (
                            <textarea
                                ref={quoteInputRef}
                                value={tempQuote}
                                maxLength={100}
                                onChange={handleQuoteChange}
                                onBlur={handleSaveQuote}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault();
                                        handleSaveQuote();
                                    }
                                }}
                                className="w-full bg-transparent text-gray-500 text-lg font-light outline-none border-none p-0 text-center resize-none overflow-hidden caret-gray-500 break-words"
                                rows={2}
                            />
                        ) : (
                            <div
                                className={`inline-block relative select-none p-2 rounded-lg transition-colors ${readOnly ? '' : 'cursor-pointer active:bg-gray-50/50'}`}
                                onMouseDown={() => handleLongPressStart('quote')}
                                onMouseUp={handleLongPressEnd}
                                onMouseLeave={handleLongPressEnd}
                                onTouchStart={() => handleLongPressStart('quote')}
                                onTouchEnd={handleLongPressEnd}
                                onContextMenu={(e) => e.preventDefault()}
                            >
                                <p className="text-[#333333] text-lg leading-relaxed font-light break-words">
                                    "{data.quote}"
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer Watermark - 只在非只读模式显示 */}
                {!readOnly && (
                    <div className="flex flex-col items-center gap-1 shrink-0 mt-2">
                        <div className="w-4 h-4 rounded-full bg-black opacity-10"></div>
                        <p className="text-[#333333] text-[12px] tracking-wide font-light">{t('result.longPressHint')}</p>

                        {/* Privacy Links */}
                        <div className="flex items-center gap-2 mt-1 text-[11px] text-[#999999]">
                            <button
                                onClick={() => window.open(t('settings.privacyPolicyUrl'), '_blank')}
                                className="hover:text-ios-blue transition-colors"
                            >
                                {t('settings.privacyPolicy')}
                            </button>
                            <span>|</span>
                            <button
                                onClick={() => window.open(t('settings.userAgreementUrl'), '_blank')}
                                className="hover:text-ios-blue transition-colors"
                            >
                                {t('settings.userAgreement')}
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Content Validation Error Toast */}
            {contentError && (
                <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
                    <div className="bg-red-500 text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium">
                        {t(contentError)}
                    </div>
                </div>
            )}
        </div>
    );
};