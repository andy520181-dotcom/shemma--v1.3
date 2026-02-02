import { AdConfig, DEFAULT_AD_CONFIG } from '../types/ad';

// 远程配置URL - 使用GitHub Pages托管
const AD_CONFIG_URL = 'https://andy520181-dotcom.github.io/shemma--v1.3/ad-config.json';

// LocalStorage缓存键
const CACHE_KEY = 'matoto_ad_config';
const CACHE_TIMESTAMP_KEY = 'matoto_ad_config_timestamp';

// 缓存有效期（24小时，单位：毫秒）
const CACHE_DURATION = 24 * 60 * 60 * 1000;

/**
 * 从远程获取广告配置
 */
export async function fetchAdConfig(): Promise<AdConfig> {
    try {
        const response = await fetch(AD_CONFIG_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // 设置3秒超时
            signal: AbortSignal.timeout(3000)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const config: AdConfig = await response.json();

        // 验证配置有效性
        if (isConfigValid(config)) {
            // 缓存到LocalStorage
            setCachedConfig(config);
            return config;
        } else {
            console.warn('广告配置无效，使用默认配置');
            return DEFAULT_AD_CONFIG;
        }
    } catch (error) {
        console.error('获取广告配置失败:', error);
        // 尝试使用缓存配置
        const cached = getCachedConfig();
        return cached || DEFAULT_AD_CONFIG;
    }
}

/**
 * 获取缓存的广告配置
 */
export function getCachedConfig(): AdConfig | null {
    try {
        const cached = localStorage.getItem(CACHE_KEY);
        const timestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);

        if (!cached || !timestamp) {
            return null;
        }

        // 检查缓存是否过期
        const cacheAge = Date.now() - parseInt(timestamp, 10);
        if (cacheAge > CACHE_DURATION) {
            console.log('缓存已过期');
            return null;
        }

        const config: AdConfig = JSON.parse(cached);

        // 验证配置有效性
        if (isConfigValid(config)) {
            return config;
        }

        return null;
    } catch (error) {
        console.error('读取缓存配置失败:', error);
        return null;
    }
}

/**
 * 设置缓存的广告配置
 */
export function setCachedConfig(config: AdConfig): void {
    try {
        localStorage.setItem(CACHE_KEY, JSON.stringify(config));
        localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
        console.log('广告配置已缓存');
    } catch (error) {
        console.error('缓存广告配置失败:', error);
    }
}

/**
 * 检查配置是否有效
 */
export function isConfigValid(config: AdConfig): boolean {
    // 基本字段验证
    if (typeof config.enabled !== 'boolean') return false;
    if (typeof config.duration !== 'number' || config.duration < 0) return false;
    if (typeof config.skipAfter !== 'number' || config.skipAfter < 0) return false;

    // 如果启用广告，必须有图片URL
    if (config.enabled && !config.imageUrl) return false;

    // 检查有效期
    if (config.validUntil) {
        const validDate = new Date(config.validUntil);
        const now = new Date();

        // 如果已过期，视为无效
        if (validDate < now) {
            console.log('广告已过期');
            return false;
        }
    }

    return true;
}

/**
 * 获取广告配置（优先使用缓存，后台更新）
 */
export async function getAdConfig(): Promise<AdConfig> {
    // 先返回缓存（如果有）
    const cached = getCachedConfig();

    // 后台异步更新配置
    fetchAdConfig().catch(err => {
        console.error('后台更新广告配置失败:', err);
    });

    // 如果有有效缓存，使用缓存
    if (cached) {
        return cached;
    }

    // 没有缓存，等待远程获取
    return fetchAdConfig();
}
