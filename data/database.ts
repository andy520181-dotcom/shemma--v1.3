// 定义数据库条目的接口
export interface HorseEntry {
  id: string;
  title: string;
  subtitle: string;
  timeTag: string;
  jobTag: string[];
}

// 完整的马系人格数据库
export const HORSES_DATA: HorseEntry[] = [
  {
    "id": "GEN_WKD_001",
    "title": "班马",
    "subtitle": "一只上着普通班的普通马，略通一点人性。",
    "timeTag": "workday_normal",
    "jobTag": ["manager", "pm_operator", "professional", "general"]
  },
  {
    "id": "GEN_NOON_001",
    "title": "饿了马",
    "subtitle": "上午的工作消耗了90%的脑细胞，剩下10%在疯狂思考中午吃什么。",
    "timeTag": "workday_noon",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },
  {
    "id": "GEN_OFF_001",
    "title": "卡急马",
    "subtitle": "身体在工位，灵魂已在打卡机前完成百米冲刺。",
    "timeTag": "friday_evening",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },
  {
    "id": "GEN_OFF_002",
    "title": "神马",
    "subtitle": "上班时是马，下班时是神。",
    "timeTag": "off_work",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },
  {
    "id": "GEN_OFF_003",
    "title": "ok马",
    "subtitle": "ok啊，都OK的，我反正刑呢。",
    "timeTag": "off_work",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },

  {
    "id": "GEN_OFF_005",
    "title": "骡马",
    "subtitle": "条条大路通罗马，此路不通另寻踏马。",
    "timeTag": "off_work",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },
  {
    "id": "GEN_WKD_002",
    "title": "奴马",
    "subtitle": "哦哟喂~领导吉祥。",
    "timeTag": "off_work",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },
  {
    "id": "GEN_WKD_008",
    "title": "木马",
    "subtitle": "生性不爱笑，不通人性。",
    "timeTag": "off_work",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },

  {
    "id": "GEN_WKD_009",
    "title": "踏马",
    "subtitle": "每天都在问候TM但消息从未发出。",
    "timeTag": "off_work",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },
  {
    "id": "GEN_WKD_010",
    "title": "黄阿马",
    "subtitle": "我是办公室最有想法的牛马，有事起奏，无事退朝。",
    "timeTag": "off_work",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },
  {
    "id": "GEN_WKD_011",
    "title": "刀马",
    "subtitle": "每天上班唯一想做的事，狠狠地刀刀这个世界。",
    "timeTag": "off_work",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },
  {
    "id": "GEN_WKD_012",
    "title": "胡马",
    "subtitle": "在办公室遇到不懂的就胡言乱语。",
    "timeTag": "off_work",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },

  {
    "id": "PRO_OT_001",
    "title": "肝马",
    "subtitle": "需求说“马上好”，我就“马上改”。循环往复，直至燃烧殆尽。",
    "timeTag": "overtime_night",
    "jobTag": ["programmer", "designer", "engineer", "general"]
  },
  {
    "id": "PRO_WKD_001",
    "title": "代马",
    "subtitle": "生活处处在找我的bug，但我本人就是那个最大的bug。",
    "timeTag": "workday_normal",
    "jobTag": ["programmer", "engineer", "general"]
  },
  {
    "id": "DES_OT_001",
    "title": "肝图马",
    "subtitle": "白天沟通，晚上创作。灵感总在 Deadline 前变身超级赛亚马。",
    "timeTag": "overtime_night",
    "jobTag": ["designer", "pm_operator", "engineer", "general"]
  },
  {
    "id": "DES_WKD_001",
    "title": "对齐马",
    "subtitle": "一生都在致力于让像素、色彩和老板的审美达成完美的哲学统一。",
    "timeTag": "workday_normal",
    "jobTag": ["designer", "pm_operator", "marketer", "general"]
  },
  {
    "id": "DES_FRI_001",
    "title": "苦苦马",
    "subtitle": "周五临下班收到新需求：“要五彩斑斓的黑，还要流光溢彩的白。”",
    "timeTag": "friday_evening",
    "jobTag": ["designer", "pm_operator", "marketer", "general"]
  },
  {
    "id": "PM_WKD_002",
    "title": "开会马",
    "subtitle": "日程表上唯一的确定性：永远有下一个会。",
    "timeTag": "workday_normal",
    "jobTag": ["pm_operator", "manager", "professional", "general"]
  },
  {
    "id": "PM_OFF_001",
    "title": "背锅马",
    "subtitle": "项目成功了是团队的，出问题了是我的。",
    "timeTag": "off_work",
    "jobTag": ["pm_operator", "manager", "general"]
  },
  {
    "id": "MRK_WKD_001",
    "title": "吹牛马",
    "subtitle": "把一分成果讲成十分辉煌，是职场必备的修辞学与想象力综合考试。",
    "timeTag": "workday_normal",
    "jobTag": ["marketer", "pm_operator", "manager", "general"]
  },
  {
    "id": "MRK_OT_001",
    "title": "应酬马",
    "subtitle": "客户的酒喝不完，公司的单签不完。胃和业绩，总有一个在路上。",
    "timeTag": "overtime_night",
    "jobTag": ["marketer", "manager", "professional", "general"]
  },
  {
    "id": "MRK_WKD_002",
    "title": "追魂马",
    "subtitle": "“您好，方案看了吗？”“在吗？反馈一下？”——日常扮演客户的专属提醒助手。",
    "timeTag": "workday_normal",
    "jobTag": ["marketer", "pm_operator", "professional", "general"]
  },
  {
    "id": "GEN_MON_001",
    "title": "开工马",
    "subtitle": "开工大吉，马上有钱",
    "timeTag": "monday",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },
  {
    "id": "GEN_HOL_001",
    "title": "节后综合马",
    "subtitle": "假期有多惬意，返工就有多滞涩。灵魂还在度假，肉身已打卡。",
    "timeTag": "after_holiday",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },
  {
    "id": "PRO_WEEKEND_OT_001",
    "title": "上线马",
    "subtitle": "“为了系统的稳定，周末的约会/游戏/睡眠，都是可以牺牲的”。",
    "timeTag": "overtime_weekend",
    "jobTag": ["programmer", "engineer", "pm_operator", "general"]
  },
  {
    "id": "MRK_OFF_001",
    "title": "待机马",
    "subtitle": "微信置顶全是客户群，洗澡都要把手机带进浴室，生怕错过一个亿（的订单）。",
    "timeTag": "off_work",
    "jobTag": ["marketer", "manager", "professional", "general"]
  },
  {
    "id": "GEN_WKD_003",
    "title": "摸鱼马",
    "subtitle": "在带薪如厕和网页切屏中，寻找短暂的自由与生命的真谛。",
    "timeTag": "workday_normal",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },
  {
    "id": "DES_WKD_002",
    "title": "版权马",
    "subtitle": "找图两小时，用时五分钟，剩下的时间全花在确认‘这到底能不能商用’上。",
    "timeTag": "workday_normal",
    "jobTag": ["designer", "pm_operator", "marketer", "general"]
  },

  {
    "id": "DES_WKD_006",
    "title": "苹什马",
    "subtitle": "凭什么?这个方案通不过行吧，甲方爸爸你说了算。",
    "timeTag": "workday_normal",
    "jobTag": ["designer", "pm_operator", "marketer", "general"]
  },
  {
    "id": "PM_WKD_003",
    "title": "中转马",
    "subtitle": "核心工作：把老板的话翻译给技术，再把技术的话美化给老板。",
    "timeTag": "workday_normal",
    "jobTag": ["pm_operator", "manager", "general"]
  },
  {
    "id": "MRK_WKD_003",
    "title": "数据马",
    "subtitle": "给平平无奇的数据报表，涂上最亮眼的口红（指重点标红和增长曲线）。",
    "timeTag": "workday_normal",
    "jobTag": ["marketer", "pm_operator", "manager", "general"]
  },
  {
    "id": "GEN_OFF_006",
    "title": "失联马",
    "subtitle": "走出公司大门的那一刻，所有工作群消息自动进入‘消息免打扰’的平行宇宙。",
    "timeTag": "off_work",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },
  {
    "id": "DES_OT_003",
    "title": "字体马",
    "subtitle": "一生行走江湖，只为寻找那个老板说“我好像在哪见过”的免费可商用字体。",
    "timeTag": "overtime_night",
    "jobTag": ["designer", "pm_operator", "marketer", "general"]
  },
  {
    "id": "MRK_HOL_001",
    "title": "气氛马",
    "subtitle": "每个节日，都是我们制造消费冲动的战场。没有需求，就创造需求。",
    "timeTag": "after_holiday",
    "jobTag": ["marketer", "pm_operator", "general"]
  },
  {
    "id": "PM_OT_002",
    "title": "挖掘马",
    "subtitle": "从客户一句模糊的‘想要个厉害的’，挖掘出十页需求文档。",
    "timeTag": "overtime_night",
    "jobTag": ["pm_operator", "marketer", "general"]
  },
  {
    "id": "GEN_WKD_005",
    "title": "电梯马",
    "subtitle": "每天最紧张的60秒，是和领导单独困在电梯里，必须没话找话的漫长旅程。",
    "timeTag": "workday_normal",
    "jobTag": ["professional", "engineer", "programmer", "designer", "general"]
  },
  {
    "id": "ALL_EVER_001",
    "title": "牛马",
    "subtitle": "无需多言。懂的都懂。这是所有确诊的起点，也是终点。",
    "timeTag": "workday_normal",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },
  {
    "id": "GEN_MON_002",
    "title": "一马",
    "subtitle": "周一不想上班的牛马。",
    "timeTag": "monday",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },
  {
    "id": "DES_WKD_004",
    "title": "像素马",
    "subtitle": "能一眼看出两个图层差了几个像素，却看不清自己日益后移的发际线。",
    "timeTag": "workday_normal",
    "jobTag": ["designer", "engineer", "general"]
  },
  {
    "id": "MRK_WKD_004",
    "title": "彩虹马",
    "subtitle": "把客户的每个普通想法，都夸成是改变行业的 genius idea。",
    "timeTag": "workday_normal",
    "jobTag": ["marketer", "pm_operator", "general"]
  },
  {
    "id": "PRO_OT_004",
    "title": "调参马",
    "subtitle": "面对玄学般的bug，我的主要手段是玄学般地调整参数，祈祷奇迹发生。",
    "timeTag": "overtime_night",
    "jobTag": ["programmer", "engineer", "general"]
  },
  {
    "id": "DES_OT_004",
    "title": "版本马",
    "subtitle": "“最终版_v2_确认版_这回真不改了_定稿_Final_真的Final版.psd”，是我的代表作。",
    "timeTag": "overtime_night",
    "jobTag": ["designer", "pm_operator", "general"]
  },
  {
    "id": "PM_OT_003",
    "title": "画饼马",
    "subtitle": "给团队画饼，也给自己画饼。饼画多了，偶尔自己也会信，然后更饿了。",
    "timeTag": "overtime_night",
    "jobTag": ["pm_operator", "manager", "marketer", "general"]
  },
  {
    "id": "MRK_OT_003",
    "title": "面具马",
    "subtitle": "线上聊天‘宝子~’，线下见面‘总~’。",
    "timeTag": "overtime_night",
    "jobTag": ["marketer", "professional", "general"]
  },
  {
    "id": "GEN_FRI_001",
    "title": "预备马",
    "subtitle": "从周五下午开始，生理和心理都已提前进入周末‘战备’休息状态。",
    "timeTag": "friday_evening",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },
  {
    "id": "DES_FRI_002",
    "title": "跑路马",
    "subtitle": "周五下班前十分钟发出设计稿，然后火速关闭一切通讯工具，深藏功与名。",
    "timeTag": "friday_evening",
    "jobTag": ["designer", "pm_operator", "marketer", "general"]
  },
  {
    "id": "GEN_HOL_002",
    "title": "恐慌马",
    "subtitle": "长假最后一天，沉浸在‘明天就要上班’的巨大悲伤与焦虑中，无法享受最后的快乐。",
    "timeTag": "after_holiday",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },
  {
    "id": "PRO_HOL_002",
    "title": "拜年马",
    "subtitle": "春节假期的主要工作：在家族群里抢红包，以及在技术群里回答线上报警的问题。",
    "timeTag": "after_holiday",
    "jobTag": ["programmer", "engineer", "manager", "general"]
  },
  {
    "id": "PM_NOON_001",
    "title": "咖啡马",
    "subtitle": "午后的会议，全靠早上的 Double Espresso 和下午的冰美式轮流吊着一口仙气。",
    "timeTag": "workday_noon",
    "jobTag": ["pm_operator", "manager", "marketer", "professional", "general"]
  },
  {
    "id": "MRK_WKD_005",
    "title": "PPT马",
    "subtitle": "每天的工作就是用华丽的辞藻和夸张的图表，编织一件名叫‘汇报’的皇帝新衣。",
    "timeTag": "workday_normal",
    "jobTag": ["marketer", "pm_operator", "manager", "professional", "general"]
  },
  {
    "id": "DES_WKD_005",
    "title": "素材马",
    "subtitle": "电脑里存了10个T的设计素材，每次做新项目时依然觉得‘没有合适的’。",
    "timeTag": "workday_normal",
    "jobTag": ["designer", "pm_operator", "marketer", "general"]
  },
  {
    "id": "MRK_OFF_002",
    "title": "广告马",
    "subtitle": "私人朋友圈早已沦陷，每隔三条就是公司广告。",
    "timeTag": "off_work",
    "jobTag": ["marketer", "pm_operator", "general"]
  },
  {
    "id": "GEN_WKD_006",
    "title": "沉思马",
    "subtitle": "每天最宝贵的独处和深度思考时间，是在公司厕所的马桶上完成的。",
    "timeTag": "workday_normal",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },
  {
    "id": "PRO_MON_002",
    "title": "梦游马",
    "subtitle": "每周一开晨会，身体在工区，大脑还在梦游。",
    "timeTag": "monday",
    "jobTag": ["programmer", "designer", "pm_operator", "engineer", "professional", "manager", "general"]
  },
  {
    "id": "DES_WEEKEND_OT_001",
    "title": "宝宝马",
    "subtitle": "甲方总在周末忽然变成需要立刻喂奶（看方案）的宝宝，而我是不配休息的奶妈。",
    "timeTag": "overtime_weekend",
    "jobTag": ["designer", "pm_operator", "marketer", "general"]
  },
  {
    "id": "GEN_WKD_007",
    "title": "幽灵马",
    "subtitle": "存在感稀薄，默默完成工作，不参与八卦，是团建时会被忘记叫的那一个。",
    "timeTag": "workday_normal",
    "jobTag": ["programmer", "designer", "engineer", "professional", "general"]
  },
  {
    "id": "MRK_WKD_006",
    "title": "KPI马",
    "subtitle": "随时随地，都能在心里飞速计算出当前进度距离季度KPI还差多少个百分点。",
    "timeTag": "workday_normal",
    "jobTag": ["marketer", "pm_operator", "manager", "general"]
  },
  {
    "id": "PM_WKD_005",
    "title": "翻译马",
    "subtitle": "核心技能：把技术黑话翻译成人话给老板，再把老板的‘商业愿景’翻译成需求给技术。",
    "timeTag": "workday_normal",
    "jobTag": ["pm_operator", "manager", "general"]
  },
  {
    "id": "GEN_OFF_007",
    "title": "通勤马",
    "subtitle": "早晚高峰的地铁就是我的战场，练就了金鸡独立刷手机、夹缝求生睡回笼觉的神功。",
    "timeTag": "off_work",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },
  {
    "id": "DES_OFF_001",
    "title": "审美PTSD马",
    "subtitle": "看到丑logo、排版混乱的传单会生理性不适，但又忍不住职业病发作去分析。",
    "timeTag": "off_work",
    "jobTag": ["designer", "pm_operator", "marketer", "general"]
  },
  {
    "id": "MRK_OT_004",
    "title": "追瓜马",
    "subtitle": "凌晨刷到微博爆了，第一反应不是吃瓜，是跳起来想：我们品牌怎么蹭上这个热点？",
    "timeTag": "overtime_night",
    "jobTag": ["marketer", "pm_operator", "general"]
  },
  {
    "id": "GEN_WKD_013",
    "title": "养生朋克马",
    "subtitle": "一边熬夜加班，一边泡枸杞水；一边吃油腻外卖，一边吃护肝片。主打一个对冲。",
    "timeTag": "workday_normal",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  }];
