/**
 * 本地内容过滤工具
 * 用于检测用户输入中的敏感词，防止不当内容
 */

// 敏感词库（扩展版）
const SENSITIVE_WORDS = {
    // 涉黄内容
    adult: [
        '色情', '裸体', '性爱', '黄色', '成人', '淫秽', '猥亵', '色狼',
        'porn', 'sex', 'nude', 'xxx', 'nsfw', 'erotic', 'xxx', '18禁',
        '福利', '约炮', '援交', 'escort',
    ],

    // 暴力/仇恨言论
    violence: [
        '杀人', '自杀', '恐怖', '暴力', '仇恨', '歧视', '屠杀', '虐待',
        '殴打', '伤害', '凶杀', '谋杀', '血腥',
        'kill', 'murder', 'suicide', 'terrorist', 'hate', 'racist',
        'violence', 'attack', 'assault', 'abuse', 'terror',
    ],

    // 毒品相关
    drugs: [
        '毒品', '大麻', '海洛因', '冰毒', '可卡因', '吸毒', '贩毒',
        '摇头丸', '鸦片', '白粉', '麻醉品',
        'drug', 'cocaine', 'heroin', 'marijuana', 'weed', 'cannabis',
        'meth', 'opium', 'narcotics', 'mdma', 'ecstasy',
    ],

    // 赌博相关
    gambling: [
        '赌博', '赌场', '博彩', '赌钱', '押注', '对赌', '赌局',
        '彩票', '六合彩', '赌注',
        'gambling', 'casino', 'betting', 'bet', 'gamble', 'lottery',
    ],

    // 政治敏感（基础）
    political: [
        '政变', '暴动', '革命', '推翻',
        'coup', 'revolution', 'overthrow',
    ],

    // 其他违规内容
    illegal: [
        '诈骗', '洗钱', '走私', '贩卖', '盗窃', '欺诈',
        '传销', '非法', '违法', '犯罪',
        'fraud', 'scam', 'illegal', 'crime', 'criminal', 'smuggle',
        'money laundering', 'theft',
    ],
};

// 将所有敏感词合并为一个数组
const ALL_SENSITIVE_WORDS: string[] = Object.values(SENSITIVE_WORDS).flat();

/**
 * 检测文本中是否包含敏感词
 * @param text 要检测的文本
 * @returns 如果包含敏感词返回true，否则返回false
 */
export const containsSensitiveContent = (text: string): boolean => {
    if (!text || text.trim() === '') {
        return false;
    }

    const lowerText = text.toLowerCase();

    // 检查是否包含任何敏感词
    return ALL_SENSITIVE_WORDS.some(word => {
        const lowerWord = word.toLowerCase();
        return lowerText.includes(lowerWord);
    });
};

/**
 * 验证文本内容是否安全
 * @param text 要验证的文本
 * @returns 验证结果对象 { isValid: boolean, message?: string }
 */
export const validateContent = (text: string): { isValid: boolean; message?: string } => {
    if (!text || text.trim() === '') {
        return { isValid: true };
    }

    if (containsSensitiveContent(text)) {
        return {
            isValid: false,
            message: 'content.sensitiveWordDetected',
        };
    }

    return { isValid: true };
};

/**
 * 清理文本中的敏感词（替换为星号）
 * @param text 要清理的文本
 * @returns 清理后的文本
 */
export const sanitizeContent = (text: string): string => {
    if (!text || text.trim() === '') {
        return text;
    }

    let sanitized = text;
    const lowerText = text.toLowerCase();

    ALL_SENSITIVE_WORDS.forEach(word => {
        const lowerWord = word.toLowerCase();
        const regex = new RegExp(word, 'gi');

        if (lowerText.includes(lowerWord)) {
            sanitized = sanitized.replace(regex, '*'.repeat(word.length));
        }
    });

    return sanitized;
};
