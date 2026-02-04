import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zh from './locales/zh.json';
import en from './locales/en.json';

// 获取默认语言:始终基于系统语言
const getDefaultLanguage = (): string => {
    // 检测系统语言
    const systemLanguage = navigator.language || navigator.languages?.[0] || '';

    // 如果系统语言是中文,返回 'zh'
    if (systemLanguage.startsWith('zh')) {
        return 'zh';
    }

    // 其他语言默认使用英文
    return 'en';
};

// 初始化 i18next
i18n
    .use(initReactI18next)
    .init({
        resources: {
            zh: { translation: zh },
            en: { translation: en }
        },
        lng: getDefaultLanguage(),
        fallbackLng: 'zh',
        interpolation: {
            escapeValue: false // React 已经处理了 XSS
        }
    });

export default i18n;
