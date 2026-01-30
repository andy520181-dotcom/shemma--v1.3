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
        // 元旦：1月1日放假，共1天
        { name: '元旦', start: '2026-01-01', end: '2026-01-01' },

        // 春节：1月29日至2月4日放假调休，共7天
        { name: '春节', start: '2026-01-29', end: '2026-02-04' },

        // 清明节：4月5日至7日放假调休，共3天
        { name: '清明节', start: '2026-04-05', end: '2026-04-07' },

        // 劳动节：5月1日至3日放假调休，共3天
        { name: '劳动节', start: '2026-05-01', end: '2026-05-03' },

        // 端午节：6月25日至27日放假调休，共3天
        { name: '端午节', start: '2026-06-25', end: '2026-06-27' },

        // 中秋节：10月1日至3日放假，与国庆节重叠
        { name: '中秋节', start: '2026-10-01', end: '2026-10-03' },

        // 国庆节：10月1日至7日放假调休，共7天
        { name: '国庆节', start: '2026-10-01', end: '2026-10-07' }
    ],

    2027: [
        { name: '元旦', start: '2027-01-01', end: '2027-01-03' },
        { name: '春节', start: '2027-02-06', end: '2027-02-12' },
        { name: '清明节', start: '2027-04-03', end: '2027-04-05' },
        { name: '劳动节', start: '2027-05-01', end: '2027-05-03' },
        { name: '端午节', start: '2027-06-14', end: '2027-06-16' },
        { name: '中秋节', start: '2027-09-21', end: '2027-09-23' },
        { name: '国庆节', start: '2027-10-01', end: '2027-10-07' }
    ],

    2028: [
        { name: '元旦', start: '2028-01-01', end: '2028-01-03' },
        { name: '春节', start: '2028-01-26', end: '2028-02-01' },
        { name: '清明节', start: '2028-04-04', end: '2028-04-06' },
        { name: '劳动节', start: '2028-05-01', end: '2028-05-03' },
        { name: '端午节', start: '2028-06-02', end: '2028-06-04' },
        { name: '中秋节', start: '2028-09-10', end: '2028-09-12' },
        { name: '国庆节', start: '2028-10-01', end: '2028-10-07' }
    ],

    2029: [
        { name: '元旦', start: '2029-01-01', end: '2029-01-01' },
        { name: '春节', start: '2029-02-13', end: '2029-02-19' },
        { name: '清明节', start: '2029-04-04', end: '2029-04-06' },
        { name: '劳动节', start: '2029-05-01', end: '2029-05-03' },
        { name: '端午节', start: '2029-06-21', end: '2029-06-23' },
        { name: '中秋节', start: '2029-09-29', end: '2029-10-01' },
        { name: '国庆节', start: '2029-10-01', end: '2029-10-07' }
    ],

    2030: [
        { name: '元旦', start: '2030-01-01', end: '2030-01-01' },
        { name: '春节', start: '2030-02-02', end: '2030-02-08' },
        { name: '清明节', start: '2030-04-05', end: '2030-04-07' },
        { name: '劳动节', start: '2030-05-01', end: '2030-05-04' },
        { name: '端午节', start: '2030-06-10', end: '2030-06-12' },
        { name: '中秋节', start: '2030-09-18', end: '2030-09-20' },
        { name: '国庆节', start: '2030-10-01', end: '2030-10-07' }
    ]
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
