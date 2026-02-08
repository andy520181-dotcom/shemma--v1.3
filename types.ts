export enum AppView {
  SPLASH = 'SPLASH',
  AGREEMENT = 'AGREEMENT',
  LOGIN = 'LOGIN',
  HOME = 'HOME',
  RESULT = 'RESULT',
  SHARE = 'SHARE',
  SETTINGS = 'SETTINGS'
}

export interface DiagnosisResult {
  id: string;
  date: string;
  image: string; // Base64 or URL
  type: string; // e.g., "代码"
  fullTitle: string; // e.g., "代码马"
  quote: string; // e.g., "生活处处在找我的bug..."
  nickname: string; // User's nickname
  profession: string; // User's profession
}