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
    "subtitle": "在工位很想你，但不在动物园，也不爱穿条纹。",
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
    "subtitle": "上班时是马，下班时是神。主打一个赛博身份切换自如。",
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
    "id": "PRO_WKD_002",
    "title": "跑路马",
    "subtitle": "一种写代码时经常幻想、但永远不敢执行的终极解决方案。",
    "timeTag": "workday_normal",
    "jobTag": ["programmer", "engineer", "general"]
  },
  {
    "id": "PRO_OT_002",
    "title": "救火马",
    "subtitle": "哪里线上报警，哪里就有我。生产环境的守护者，头发的终结者。",
    "timeTag": "overtime_night",
    "jobTag": ["programmer", "engineer", "manager", "general"]
  },
  {
    "id": "PRO_MON_001",
    "title": "重启马",
    "subtitle": "每周一早上，都要花两小时给大脑和开发环境执行一次艰难的重启。",
    "timeTag": "monday",
    "jobTag": ["programmer", "designer", "pm_operator", "engineer", "general"]
  },
  {
    "id": "DES_MON_001",
    "title": "改稿马",
    "subtitle": "周一的命，是“感觉不对”和“再出一版”给的。",
    "timeTag": "monday",
    "jobTag": ["designer", "pm_operator", "marketer", "general"]
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
    "id": "PM_OT_001",
    "title": "撕烤马",
    "subtitle": "深夜不是用来睡觉的，是用来“撕”需求优先级和“烤”虑项目风险的。",
    "timeTag": "overtime_night",
    "jobTag": ["pm_operator", "manager", "general"]
  },
  {
    "id": "PM_WKD_002",
    "title": "开会马",
    "subtitle": "日程表上唯一的确定性：永远有下一个会。沟通永动机，实干绊脚石。",
    "timeTag": "workday_normal",
    "jobTag": ["pm_operator", "manager", "professional", "general"]
  },
  {
    "id": "PM_OFF_001",
    "title": "背锅马",
    "subtitle": "项目成功了是团队的，出问题了是我的。锅的重量，是职场的体重。",
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
    "id": "GEN_WEEKEND_OT_001",
    "title": "奉献马",
    "subtitle": "当别人在享受生活时，我在享受福报。周末的工位，是我一个人的朝圣路。",
    "timeTag": "overtime_weekend",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },
  {
    "id": "PRO_WEEKEND_OT_001",
    "title": "上线马",
    "subtitle": "“为了系统的稳定，周末的约会/游戏/睡眠，都是可以牺牲的”——发布宣言。",
    "timeTag": "overtime_weekend",
    "jobTag": ["programmer", "engineer", "pm_operator", "general"]
  },
  {
    "id": "GEN_OT_001",
    "title": "充电马",
    "subtitle": "白天电量耗尽，深夜靠外卖和短视频勉强回血5%，撑不到明天太阳升起。",
    "timeTag": "overtime_night",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },
  {
    "id": "PM_FRI_001",
    "title": "恐慌马",
    "subtitle": "每周五下午都像开盲盒，祈祷不要开出‘紧急需求’或‘周末线上故障’大礼包。",
    "timeTag": "friday_evening",
    "jobTag": ["pm_operator", "manager", "programmer", "engineer", "general"]
  },
  {
    "id": "MRK_OFF_001",
    "title": "24小时待机马",
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
    "id": "PRO_WKD_003",
    "title": "引擎马",
    "subtitle": "我的编程能力，90%体现在对搜索引擎关键词的精准把握上。",
    "timeTag": "workday_normal",
    "jobTag": ["programmer", "engineer", "designer", "pm_operator", "general"]
  },
  {
    "id": "DES_WKD_002",
    "title": "版权刺客马",
    "subtitle": "找图两小时，用时五分钟，剩下的时间全花在确认‘这到底能不能商用’上。",
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
    "id": "GEN_NOON_002",
    "title": "探险马",
    "subtitle": "每日灵魂拷问：是点开熟悉但难吃的外卖，还是去探索公司食堂的新‘惊喜’？",
    "timeTag": "workday_noon",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },
  {
    "id": "GEN_OFF_003",
    "title": "下班失联马",
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
    "id": "PM_MON_001",
    "title": "焦虑马",
    "subtitle": "每周一早上，都要把上周的‘摸鱼’和‘救火’，编织成一份闪闪发光的功劳簿。",
    "timeTag": "monday",
    "jobTag": ["pm_operator", "manager", "marketer", "general"]
  },
  {
    "id": "MRK_HOL_001",
    "title": "气氛马",
    "subtitle": "每个节日，都是我们制造消费冲动的战场。没有需求，就创造需求。",
    "timeTag": "after_holiday",
    "jobTag": ["marketer", "pm_operator", "general"]
  },
  {
    "id": "GEN_WKD_004",
    "title": "自闭马",
    "subtitle": "戴上耳机，世界与我无关。不是真的在听歌，只是想买个‘勿扰’结界。",
    "timeTag": "workday_normal",
    "jobTag": ["programmer", "designer", "pm_operator", "engineer", "professional", "general"]
  },
  {
    "id": "PRO_FRI_001",
    "title": "恐惧马",
    "subtitle": "提交代码像交试卷，等待同事 review 的心情，像等待一场公开处刑。",
    "timeTag": "friday_evening",
    "jobTag": ["programmer", "engineer", "general"]
  },
  {
    "id": "DES_WKD_003",
    "title": "模特马",
    "subtitle": "毕生作品，大多以躺在精美样机里的形态，出现在客户的提案PPT里。",
    "timeTag": "workday_normal",
    "jobTag": ["designer", "pm_operator", "marketer", "general"]
  },
  {
    "id": "PM_OT_002",
    "title": "挖掘马",
    "subtitle": "从客户一句模糊的‘想要个厉害的’，挖掘出五十页需求文档，我愿称自己为职场考古学家。",
    "timeTag": "overtime_night",
    "jobTag": ["pm_operator", "marketer", "general"]
  },
  {
    "id": "MRK_OT_002",
    "title": "数据马",
    "subtitle": "KPI 如山倒。阅读量、点击率、转化数…每一个数字背后，都是刷新的手指和焦虑的心。",
    "timeTag": "overtime_night",
    "jobTag": ["marketer", "pm_operator", "general"]
  },
  {
    "id": "GEN_WEEKEND_OT_002",
    "title": "被抓马",
    "subtitle": "周末的快乐，总结束于一句‘不好意思，有个急事…’。计划？不存在的。",
    "timeTag": "overtime_weekend",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },
  {
    "id": "PRO_HOL_001",
    "title": "稻草马",
    "subtitle": "节后归来，不仅要处理新需求，还要偿还假期前疯狂欠下的技术债。骆驼背上最后一根稻草。",
    "timeTag": "after_holiday",
    "jobTag": ["programmer", "engineer", "pm_operator", "general"]
  },
  {
    "id": "DES_HOL_001",
    "title": "赛博马",
    "subtitle": "放了个假回来，发现流行的设计风格又变了。我还在复古，世界已经赛博。",
    "timeTag": "after_holiday",
    "jobTag": ["designer", "pm_operator", "marketer", "general"]
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
    "title": "周一马",
    "subtitle": "周一不想上班的牛马。",
    "timeTag": "monday",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },
  {
    "id": "PRO_WKD_004",
    "title": "复制粘贴马",
    "subtitle": "我的编程艺术，在于精准地找到那段能用的代码，然后优雅地复制粘贴。",
    "timeTag": "workday_normal",
    "jobTag": ["programmer", "pm_operator", "general"]
  },
  {
    "id": "DES_WKD_004",
    "title": "像素马",
    "subtitle": "能一眼看出两个图层差了一个像素，却看不清自己日益后移的发际线。",
    "timeTag": "workday_normal",
    "jobTag": ["designer", "engineer", "general"]
  },
  {
    "id": "PM_WKD_004",
    "title": "驯兽马",
    "subtitle": "主要工作是挥舞着Deadline的鞭子，试图让进度这头野兽跑得快一点。",
    "timeTag": "workday_normal",
    "jobTag": ["pm_operator", "manager", "general"]
  },
  {
    "id": "MRK_WKD_004",
    "title": "彩虹马",
    "subtitle": "把客户的每个普通想法，都夸成是改变行业的 genius idea。",
    "timeTag": "workday_normal",
    "jobTag": ["marketer", "pm_operator", "general"]
  },
  {
    "id": "GEN_OT_002",
    "title": "夜宵马",
    "subtitle": "加班唯一的慰藉，是楼下那家永远亮着灯的便利店和热量爆炸的关东煮。",
    "timeTag": "overtime_night",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
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
    "subtitle": "线上聊天‘宝子~’，线下见面‘总~’。热情是职业假面，回家后电量负100%。",
    "timeTag": "overtime_night",
    "jobTag": ["marketer", "professional", "general"]
  },
  {
    "id": "GEN_FRI_001",
    "title": "预备马",
    "subtitle": "从周五下午三点开始，生理和心理都已提前进入周末‘战备’休息状态。",
    "timeTag": "friday_evening",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },
  {
    "id": "PRO_FRI_002",
    "title": "埋雷马",
    "subtitle": "为了准时下班，在代码里留下一些‘精妙’的注释：‘此处逻辑待优化，详见下个迭代。’",
    "timeTag": "friday_evening",
    "jobTag": ["programmer", "engineer", "pm_operator", "general"]
  },
  {
    "id": "DES_FRI_002",
    "title": "跑路马",
    "subtitle": "周五下班前十分钟发出设计稿，然后火速关闭一切通讯工具，深藏功与名。",
    "timeTag": "friday_evening",
    "jobTag": ["designer", "pm_operator", "marketer", "general"]
  },
  {
    "id": "ALL_WEEKEND_OT_001",
    "title": "天选打工马",
    "subtitle": "当全世界都在享受阳光和沙发时，我被命运选中，独自守护公司的服务器与KPI。",
    "timeTag": "overtime_weekend",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
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
    "id": "GEN_NOON_003",
    "title": "昏迷马",
    "subtitle": "趴在工位上午睡十分钟，醒来时需要花五分钟确认自己是谁、在哪、要干什么。",
    "timeTag": "workday_noon",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
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
    "id": "PRO_WKD_005",
    "title": "技术马",
    "subtitle": "热衷于学习各种新技术框架，像松鼠囤积坚果，虽然大多数永远用不上。",
    "timeTag": "workday_normal",
    "jobTag": ["programmer", "engineer", "general"]
  },
  {
    "id": "DES_WKD_005",
    "title": "素材马",
    "subtitle": "电脑里存了10个T的设计素材，每次做新项目时依然觉得‘没有合适的’。",
    "timeTag": "workday_normal",
    "jobTag": ["designer", "pm_operator", "marketer", "general"]
  },
  {
    "id": "GEN_OT_003",
    "title": "打车马",
    "subtitle": "深夜加班后，一边心疼打车费，一边精算如何贴发票才能刚好凑满报销额度。",
    "timeTag": "overtime_night",
    "jobTag": ["professional", "manager", "pm_operator", "marketer", "general"]
  },
  {
    "id": "PM_OT_004",
    "title": "进度马",
    "subtitle": "拥有神秘力量：能将‘刚开完需求评审会’的状态，在周报里描述为‘已完成30%’。",
    "timeTag": "overtime_night",
    "jobTag": ["pm_operator", "manager", "marketer", "general"]
  },
  {
    "id": "MRK_OFF_002",
    "title": "广告马",
    "subtitle": "私人朋友圈早已沦陷，每隔三条就是公司广告。朋友问我：你是不是被绑架了？",
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
    "subtitle": "每周一开晨会，身体在工区，大脑还在周末的峡谷里遨游。",
    "timeTag": "monday",
    "jobTag": ["programmer", "designer", "pm_operator", "engineer", "professional", "manager", "general"]
  },
  {
    "id": "DES_MON_002",
    "title": "枯竭马",
    "subtitle": "周一的大脑像被周末晒干的沙漠，挤不出一点创意的水分。",
    "timeTag": "monday",
    "jobTag": ["designer", "pm_operator", "marketer", "general"]
  },
  {
    "id": "GEN_FRI_003",
    "title": "失聪马",
    "subtitle": "周五下午，自动过滤领导说的‘这个不急，周末有空看看’等危险词汇。",
    "timeTag": "friday_evening",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },
  {
    "id": "ALL_HOL_001",
    "title": "亢奋马",
    "subtitle": "假期前一天，工作效率归零，只剩下对自由的无限向往和坐立难安的等待。",
    "timeTag": "off_work",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },
  {
    "id": "PRO_WEEKEND_OT_002",
    "title": "炼丹马",
    "subtitle": "周末的使命：守着自动化部署和测试脚本，像道士炼丹一样，祈祷这一次发布成功。",
    "timeTag": "overtime_weekend",
    "jobTag": ["programmer", "engineer", "pm_operator", "general"]
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
    "id": "PRO_OT_005",
    "title": "考古马",
    "subtitle": "深夜，在浩如烟海的系统日志里，拿着放大镜寻找那个导致崩溃的远古bug化石。",
    "timeTag": "overtime_night",
    "jobTag": ["programmer", "engineer", "general"]
  },
  {
    "id": "GEN_OFF_005",
    "title": "通勤马",
    "subtitle": "早晚高峰的地铁就是我的战场，练就了金鸡独立刷手机、夹缝求生睡回笼觉的神功。",
    "timeTag": "off_work",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  },
  {
    "id": "DES_OFF_001",
    "title": "审美PTSD马",
    "subtitle": "下班后看到丑logo、排版混乱的传单会生理性不适，但又忍不住职业病发作去分析。",
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
    "id": "GEN_WKD_008",
    "title": "养生朋克马",
    "subtitle": "一边熬夜加班，一边泡枸杞水；一边吃油腻外卖，一边吃护肝片。主打一个对冲。",
    "timeTag": "workday_normal",
    "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
  }
];