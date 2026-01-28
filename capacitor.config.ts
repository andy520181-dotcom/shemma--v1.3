import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.whorse.app',
  appName: 'WhoreApp',
  webDir: 'dist',
  server: {
    cleartext: true,
    androidScheme: 'https'
  },
  ios: {
    // 配置WebView不使用缓存，确保每次都加载最新内容
    preferredContentMode: 'mobile',
    // 允许 WebView 访问外部资源
    allowsLinkPreview: true,
    // 允许混合内容（HTTP 和 HTTPS）
    limitsNavigationsToAppBoundDomains: false
  }
};

export default config;
