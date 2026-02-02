// 中国法定节假日数据（2026-2030年）
// 数据来源：国务院办公厅关于节假日安排的通知

interface Holiday {
    name: string;
    start: string;  // YYYY-MM-DD
    end: string;    // YYYY-MM-DD
}

interface YearHolidays {
    [year: number]: Holiday[];
}

export const CHINA_HOLIDAYS: YearHolidays = {
    2026: [
        // 元旦：1月1日至3日放假调休，共3天
        { name: '元旦', start: '2026-01-01', end: '2026-01-03' },

        // 春节：2月15日至23日放假调休，共9天
        { name: '春节', start: '2026-02-15', end: '2026-02-23' },

        // 清明节：4月4日至6日放假调休，共3天
        { name: '清明节', start: '2026-04-04', end: '2026-04-06' },

        // 劳动节：5月1日至5日放假调休，共5天
        { name: '劳动节', start: '2026-05-01', end: '2026-05-05' },

        // 端午节：6月19日至21日放假调休，共3天
        { name: '端午节', start: '2026-06-19', end: '2026-06-21' },

        // 中秋节：9月25日至27日放假调休，共3天
        { name: '中秋节', start: '2026-09-25', end: '2026-09-27' },

        // 国庆节：10月1日至7日放假调休，共7天
        { name: '国庆节', start: '2026-10-01', end: '2026-10-07' }
    ]

    // 注：2027年及以后的节假日数据待国务院办公厅正式公布后更新
};

/**
 * 判断指定日期是否为中国法定节假日
 * @param date 要检查的日期
 * @returns 是否为节假日
 */
export function isHoliday(date: Date): boolean {
    const year = date.getFullYear();
    const holidays = CHINA_HOLIDAYS[year];

    // 如果没有该年份的数据，返回false
    if (!holidays) {
        console.warn(`节假日数据未包含${year}年，请更新holidays.ts文件`);
        return false;
    }

    // 格式化日期为 YYYY-MM-DD
    const dateStr = date.toISOString().substring(0, 10);

    // 检查是否在任何一个节假日区间内
    return holidays.some(holiday => {
        return dateStr >= holiday.start && dateStr <= holiday.end;
    });
}

/**
 * 获取指定日期所属的节假日名称
 * @param date 要检查的日期
 * @returns 节假日名称，如果不是节假日则返回null
 */
export function getHolidayName(date: Date): string | null {
    const year = date.getFullYear();
    const holidays = CHINA_HOLIDAYS[year];

    if (!holidays) return null;

    const dateStr = date.toISOString().substring(0, 10);

    const holiday = holidays.find(h => {
        return dateStr >= h.start && dateStr <= h.end;
    });

    return holiday ? holiday.name : null;
}
