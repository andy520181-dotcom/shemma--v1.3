// 广告配置接口
export interface AdConfig {
    enabled: boolean;           // 是否启用广告
    imageUrl: string;           // 广告图片URL
    duration: number;           // 显示时长（秒）
    skipAfter: number;          // 几秒后显示跳过按钮
    link?: string;              // 点击跳转链接（可选）
    validUntil?: string;        // 有效期（YYYY-MM-DD格式，可选）
}

// 默认广告配置（降级使用）
export const DEFAULT_AD_CONFIG: AdConfig = {
    enabled: false,
    imageUrl: '',
    duration: 0,
    skipAfter: 0
};
