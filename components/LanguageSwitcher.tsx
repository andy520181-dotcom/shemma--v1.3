import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'zh' ? 'en' : 'zh';
        i18n.changeLanguage(newLang);
        // 不再保存到localStorage,每次启动都恢复到系统语言
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center justify-center px-2.5 py-1 rounded-full bg-gray-50 hover:bg-gray-100 active:bg-gray-200 transition-colors text-gray-600"
            aria-label="切换语言 / Switch Language"
        >
            <span className="text-sm font-light">
                {i18n.language === 'zh' ? '中' : 'EN'}
            </span>
        </button>
    );
};
