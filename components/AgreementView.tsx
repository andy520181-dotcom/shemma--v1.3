import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';

interface AgreementViewProps {
    onAgree: () => void;
}

export const AgreementView: React.FC<AgreementViewProps> = ({ onAgree }) => {
    const { t } = useTranslation();
    const [isChecked, setIsChecked] = useState(false);
    const [showError, setShowError] = useState(false);

    // 使用国际化配置中的链接，支持中英文自动切换
    const privacyUrl = t('settings.privacyPolicyUrl');
    const userAgreementUrl = t('settings.userAgreementUrl');

    const handleLinkClick = (url: string) => {
        window.open(url, '_blank');
    };

    const handleAgree = () => {
        if (!isChecked) {
            setShowError(true);
            setTimeout(() => setShowError(false), 3000);
            return;
        }
        onAgree();
    };

    return (
        <div className="flex flex-col h-screen overflow-hidden bg-white relative">
            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center px-8 pb-20">

                {/* App Logo - Square Icon */}
                <div className="mb-8">
                    <div className="w-28 h-28 rounded-[24px] overflow-hidden shadow-lg">
                        <img
                            src="/app-icon.png"
                            alt="App Icon"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-[24px] font-medium text-gray-900 mb-12">
                    {t('agreement.title')}
                </h1>

            </main>

            {/* Bottom Section - Fixed */}
            <div className="shrink-0 pb-8 px-6 bg-white">

                {/* Agreement Checkbox */}
                <div className="mb-4 flex items-start gap-3">
                    <button
                        onClick={() => setIsChecked(!isChecked)}
                        className={`shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${isChecked
                            ? 'bg-ios-blue border-ios-blue'
                            : 'bg-white border-gray-300'
                            }`}
                    >
                        {isChecked && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                    </button>

                    <div className="flex-1 text-[13px] text-gray-600 leading-relaxed">
                        {t('agreement.agreePrefix')}
                        <button
                            onClick={() => handleLinkClick(userAgreementUrl)}
                            className="text-ios-blue mx-1"
                        >
                            {t('agreement.userAgreement')}
                        </button>
                        {t('agreement.and')}
                        <button
                            onClick={() => handleLinkClick(privacyUrl)}
                            className="text-ios-blue mx-1"
                        >
                            {t('agreement.privacyPolicy')}
                        </button>
                    </div>
                </div>

                {/* Error Message */}
                {showError && (
                    <div className="mb-3 text-center">
                        <p className="text-[12px] text-red-500">
                            {t('agreement.pleaseAgree')}
                        </p>
                    </div>
                )}

                {/* Agree Button */}
                <button
                    onClick={handleAgree}
                    className={`w-full h-[50px] rounded-full text-[16px] font-medium transition-all ${isChecked
                        ? 'bg-ios-blue text-white active:scale-[0.98] shadow-sm'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                >
                    {t('agreement.agreeButton')}
                </button>
            </div>
        </div>
    );
};
