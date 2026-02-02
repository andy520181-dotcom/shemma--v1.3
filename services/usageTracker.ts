// 使用追踪模块 - 管理用户使用次数和已显示结果
export interface UsageData {
    count: number;           // 使用次数
    shownIds: string[];      // 已显示的结果ID列表
    lastDate: string;        // 最后使用日期（YYYY-MM-DD）
}

const STORAGE_KEY = 'matoto_usage_data';

/**
 * 获取今天的日期字符串 (YYYY-MM-DD)
 */
function getTodayString(): string {
    const now = new Date();
    return now.toISOString().substring(0, 10);
}

/**
 * 从LocalStorage获取使用数据
 */
export function getUsageData(): UsageData {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);

        if (!stored) {
            return {
                count: 0,
                shownIds: [],
                lastDate: getTodayString()
            };
        }

        const data: UsageData = JSON.parse(stored);

        // 检查日期，如果跨天则重置
        if (data.lastDate !== getTodayString()) {
            return {
                count: 0,
                shownIds: [],
                lastDate: getTodayString()
            };
        }

        return data;
    } catch (error) {
        console.error('读取使用数据失败:', error);
        return {
            count: 0,
            shownIds: [],
            lastDate: getTodayString()
        };
    }
}

/**
 * 保存使用数据到LocalStorage
 */
export function saveUsageData(data: UsageData): void {
    try {
        data.lastDate = getTodayString();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
        console.error('保存使用数据失败:', error);
    }
}

/**
 * 增加使用次数
 */
export function incrementUsage(): void {
    const data = getUsageData();
    data.count++;
    saveUsageData(data);
    console.log(`📊 使用次数: ${data.count}`);
}

/**
 * 判断是否应该启用多样性模式（使用3次及以上）
 */
export function shouldUseDiversity(): boolean {
    const data = getUsageData();
    return data.count >= 3;
}

/**
 * 记录已显示的结果ID
 */
export function recordShownResult(resultId: string): void {
    const data = getUsageData();
    if (!data.shownIds.includes(resultId)) {
        data.shownIds.push(resultId);
        saveUsageData(data);
    }
}

/**
 * 检查结果是否已显示过
 */
export function hasShown(resultId: string): boolean {
    const data = getUsageData();
    return data.shownIds.includes(resultId);
}

/**
 * 清空已显示记录（用于测试或重置）
 */
export function resetShownResults(): void {
    const data = getUsageData();
    data.shownIds = [];
    saveUsageData(data);
    console.log('🔄 已重置显示记录');
}
