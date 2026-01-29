/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./index.tsx",
        "./App.tsx",
        "./components/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'SF Pro Text',
                    'SF Pro Display',
                    'system-ui',
                    'sans-serif'
                ],
            },
            colors: {
                // 自定义颜色
                primary: "#f4af25",
                "wechat-green": "#07C160",
                "ios-blue": "#007AFF",
                "ios-gray": "#8E8E93",
                "ios-bg": "#F2F2F7",
                // 明确添加所需的gray色阶
                gray: {
                    50: '#F9FAFB',
                    100: '#F3F4F6',
                    200: '#E5E7EB',
                    300: '#D1D5DB',
                    400: '#9CA3AF',
                    500: '#6B7280',
                    600: '#4B5563',
                    700: '#374151',
                    800: '#1F2937',
                    900: '#111827',
                },
                // 确保white和black也存在
                white: '#FFFFFF',
                black: '#000000',
            },
            boxShadow: {
                'ios-card': '0 12px 60px -15px rgba(0, 0, 0, 0.06), 0 4px 12px -2px rgba(0, 0, 0, 0.02)',
                'glow': '0 0 25px rgba(244, 175, 37, 0.2)',
            },
            keyframes: {
                breathe: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.03)' },
                }
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
                'breathe': 'breathe 4s ease-in-out infinite',
            }
        },
    },
    plugins: [],
}
