import { DiagnosisResult } from "../types";
import { HORSES_DATA, HorseEntry } from "../data/database";
import { isHoliday } from "../data/holidays";

// 1. Time Tag Generation Logic
function getTimeTag(date: Date): string {
  const day = date.getDay(); // 0 is Sunday
  const hour = date.getHours();

  // 1. 节假日判断（最高优先级）
  if (isHoliday(date)) {
    return 'off_work';
  }

  const isWeekend = day === 0 || day === 6;
  const isWorkday = !isWeekend;

  // 2. Monday (All Day)
  if (day === 1) {
    return 'monday';
  }

  // 3. Friday Evening (16:00 - 18:00)
  if (day === 5 && hour >= 16 && hour < 18) {
    return 'friday_evening';
  }

  // 4. Workday Logic
  if (isWorkday) {
    // Noon Break (12:00 - 13:00)
    if (hour >= 12 && hour < 13) {
      return 'workday_noon';
    }

    // Late Night Overtime (20:00+)
    if (hour >= 20) {
      return 'overtime_night';
    }

    // Normal Work Hours (9:00 - 18:00, excluding noon)
    // Already excluded 12-13.
    if ((hour >= 9 && hour < 18)) {
      return 'workday_normal';
    }

    // Off Work (Before 9:00 or 18:00-20:00)
    return 'off_work';
  }

  // 5. Weekend
  // Returns 'weekend_check' to allow matching both overtime and rest candidates
  return 'weekend_check';
}

// 2. Job Tag Mapping Logic
function mapToJobTag(profession: string): string {
  // If user didn't input profession, default to general (which covers "自由职业")
  if (!profession || !profession.trim()) {
    return 'general';
  }

  const p = profession.toLowerCase().replace(/\s+/g, '');

  // Define categories based on the new mapping table
  const categories = [
    {
      // Programmer & Tech
      tag: 'programmer',
      keywords: ["程序员", "工程师", "开发", "算法", "运维", "测试", "前端", "后端", "全栈", "数据", "人工智能", "ai", "大数据", "云计算", "物联网", "区块链", "网络安全", "嵌入式", "软件", "硬件", "it", "码农", "技术", "研发"]
    },
    {
      // Creative & Design
      tag: 'designer',
      keywords: ["设计", "设计师", "美术", "美工", "ui", "ux", "交互", "视觉", "平面", "原画", "插画", "动画", "三维", "3d", "建模", "渲染", "特效", "视频", "剪辑", "后期", "包装", "创意", "艺术", "广告"]
    },
    {
      // Product & Operations
      tag: 'pm_operator',
      keywords: ["产品", "产品经理", "运营", "用户运营", "内容运营", "活动运营", "电商运营", "新媒体运营", "策划", "文案", "编辑", "记者", "制片", "导演", "项目管理", "策划", "战略"]
    },
    {
      // Market & Sales
      tag: 'marketer',
      keywords: ["销售", "营销", "市场", "公关", "品牌", "推广", "媒介", "广告", "客户", "顾问", "商务", "渠道", "主播", "直播", "经纪人", "带货", "招商", "电商"]
    },
    {
      // Manufacturing & Engineering
      tag: 'engineer',
      keywords: ["机械", "电气", "电子", "通信", "自动化", "控制", "仪器", "汽车", "船舶", "航空", "航天", "土木", "建筑", "结构", "给排水", "暖通", "造价", "测绘", "地质", "采矿", "石油", "化工", "材料", "环境", "安全", "质量", "生产", "制造", "工艺", "技师"]
    },
    {
      // Professional Services
      tag: 'professional',
      keywords: ["教师", "教授", "讲师", "教练", "培训", "医生", "医师", "护士", "护工", "药师", "检验", "影像", "律师", "法务", "会计", "审计", "税务", "财务", "金融", "银行", "证券", "保险", "投资", "咨询", "顾问", "翻译", "导游", "乘务", "厨师", "营养", "健身", "教练", "社工", "警察", "消防", "军人"]
    },
    {
      // Management & Admin
      tag: 'manager',
      keywords: ["管理", "经理", "总监", "主管", "总裁", "ceo", "董事长", "负责人", "领导", "行政", "人事", "人力资源", "hr", "财务", "会计", "出纳", "秘书", "助理", "文员", "前台", "后勤", "采购", "供应链"]
    }
  ];

  for (const { tag, keywords } of categories) {
    if (keywords.some(k => p.includes(k))) {
      return tag;
    }
  }

  // Fallback: If no keywords match, default to 'general'
  return 'general';
}

// Helper for time matching (handles weekend ambiguity)
function matchTime(dbTime: string, queryTime: string): boolean {
  // 周末时不匹配任何特定时间标签，直接回退到通用标签匹配
  if (queryTime === 'weekend_check') {
    return false;
  }
  return dbTime === queryTime;
}

// 3. Core Matching Logic (Returns a list of candidates)
function findCandidates(timeTag: string, jobTag: string): HorseEntry[] {
  // Layer 1: Precise Match
  // timeTag == input AND jobTag includes input
  const layer1 = HORSES_DATA.filter(h =>
    matchTime(h.timeTag, timeTag) && h.jobTag.includes(jobTag)
  );
  if (layer1.length > 0) return layer1;

  // Layer 2: Time General Match
  // timeTag == input AND jobTag includes 'general'
  const layer2 = HORSES_DATA.filter(h =>
    matchTime(h.timeTag, timeTag) && h.jobTag.includes('general')
  );
  if (layer2.length > 0) return layer2;

  // Layer 3: Fallback Match
  // jobTag includes 'general' (Time ignored)
  const layer3 = HORSES_DATA.filter(h => h.jobTag.includes('general'));
  return layer3;
}

export const analyzeAvatar = async (
  base64Image: string,
  profession: string
): Promise<Partial<DiagnosisResult>> => {

  // 1. Parameter Preparation
  const now = new Date();

  const timeTag = getTimeTag(now);
  const jobTag = mapToJobTag(profession);

  // 2. Data Matching (Get Candidates)
  const candidates = findCandidates(timeTag, jobTag);

  // 3. Random Selection from Candidates
  const getRandomCandidate = () => {
    const source = candidates.length > 0 ? candidates : HORSES_DATA;
    const randomIndex = Math.floor(Math.random() * source.length);
    return source[randomIndex];
  };

  // Simulate a short "processing" delay (1.5 seconds) for UX
  // This is faster than AI API calls but provides a comfortable transition.
  await new Promise(resolve => setTimeout(resolve, 1500));

  const selectedHorse = getRandomCandidate();

  return formatResult(selectedHorse);
};

function formatResult(horse: HorseEntry): Partial<DiagnosisResult> {
  return {
    type: horse.title,
    fullTitle: horse.title,
    quote: horse.subtitle
  };
}
