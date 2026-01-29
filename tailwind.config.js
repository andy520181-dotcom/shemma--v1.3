/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./index.tsx",
        "./App.tsx",
        "./components/**/*.{ts,tsx}",
        "./services/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"SF Pro Text"',
                    '"SF Pro Display"',
                    '"PingFang SC"',
                    '"Hiragino Sans GB"',
                    '"Microsoft YaHei"',
                    'sans-serif'
                ],
            },
            colors: {
                primary: "#f4af25",
                "wechat-green": "#07C160",
                "ios-blue": "#007AFF",
                "ios-gray": "#8E8E93",
                "ios-bg": "#F2F2F7",
            },
            boxShadow: {
                'ios-card': '0 12px 60px -15px rgba(0, 0, 0, 0.06), 0 4px 12px -2px rgba(0, 0, 0, 0.02)',
                'glow': '0 0 25px rgba(244, 175, 37, 0.2)',
            },
            keyframes: {
                breathe: {
                    '0%, 100%': { transform: 'translate(-40px, -60px) scale(1)' },
                    '50%': { transform: 'translate(-40px, -60px) scale(1.03)' },
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
