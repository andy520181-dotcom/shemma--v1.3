// 定义数据库条目的接口
export interface HorseEntry {
    id: string;
    title: string;
    subtitle: string;
    timeTag: string;
    jobTag: string[];
}

// English version - Complete Horse Personality Database
export const HORSES_DATA_EN: HorseEntry[] = [
    {
        "id": "GEN_WKD_001",
        "title": "Zebra",
        "subtitle": "An ordinary horse working an ordinary job, somewhat familiar with human nature.",
        "timeTag": "workday_normal",
        "jobTag": ["manager", "pm_operator", "professional", "general"]
    },
    {
        "id": "GEN_NOON_001",
        "title": "Hungry Horse",
        "subtitle": "Morning work consumed 90% of brain cells, the remaining 10% obsessively thinking about lunch.",
        "timeTag": "workday_noon",
        "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
    },
    {
        "id": "GEN_OFF_001",
        "title": "Rush Horse",
        "subtitle": "Body at the desk, soul already completing a 100-meter sprint to the time clock.",
        "timeTag": "friday_evening",
        "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
    },
    {
        "id": "GEN_OFF_002",
        "title": "Divine Horse",
        "subtitle": "A horse at work, a god after hours.",
        "timeTag": "off_work",
        "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
    },
    {
        "id": "GEN_OFF_003",
        "title": "OK Horse",
        "subtitle": "OK yeah, all OK, I'm suffering anyway.",
        "timeTag": "off_work",
        "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
    },
    {
        "id": "GEN_OFF_005",
        "title": "Mule Horse",
        "subtitle": "All roads lead to Rome, if this road doesn't work, find another damn way.",
        "timeTag": "off_work",
        "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
    },
    {
        "id": "GEN_WKD_002",
        "title": "Slave Horse",
        "subtitle": "Oh my~ Greetings to the boss.",
        "timeTag": "off_work",
        "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
    },
    {
        "id": "GEN_WKD_008",
        "title": "Wooden Horse",
        "subtitle": "By nature doesn't like to laugh, doesn't understand human nature.",
        "timeTag": "off_work",
        "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
    },
    {
        "id": "GEN_WKD_009",
        "title": "Damn Horse",
        "subtitle": "Cursing every day but messages never sent.",
        "timeTag": "off_work",
        "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
    },
    {
        "id": "GEN_WKD_010",
        "title": "Emperor Horse",
        "subtitle": "I'm the most opinionated workhorse in the office, report if there's business, dismissed if not.",
        "timeTag": "off_work",
        "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
    },
    {
        "id": "GEN_WKD_011",
        "title": "Knife Horse",
        "subtitle": "The only thing I want to do at work every day is ruthlessly stab this world.",
        "timeTag": "off_work",
        "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
    },
    {
        "id": "GEN_WKD_012",
        "title": "Nonsense Horse",
        "subtitle": "When encountering something I don't understand at the office, I just talk nonsense.",
        "timeTag": "off_work",
        "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
    },
    {
        "id": "PRO_OT_001",
        "title": "Liver Horse",
        "subtitle": "Requirements say 'almost done', I say 'almost fixed'. Cycle repeats until burnout.",
        "timeTag": "overtime_night",
        "jobTag": ["programmer", "designer", "engineer", "general"]
    },
    {
        "id": "PRO_WKD_001",
        "title": "Code Horse",
        "subtitle": "Life keeps finding my bugs, but I myself am the biggest bug.",
        "timeTag": "workday_normal",
        "jobTag": ["programmer", "engineer", "general"]
    },
    {
        "id": "DES_OT_001",
        "title": "Design Liver Horse",
        "subtitle": "Communicate during the day, create at night. Inspiration transforms into Super Saiyan before the deadline.",
        "timeTag": "overtime_night",
        "jobTag": ["designer", "pm_operator", "engineer", "general"]
    },
    {
        "id": "DES_WKD_001",
        "title": "Align Horse",
        "subtitle": "Lifelong dedication to achieving perfect philosophical unity of pixels, colors, and boss's aesthetics.",
        "timeTag": "workday_normal",
        "jobTag": ["designer", "pm_operator", "marketer", "general"]
    },
    {
        "id": "DES_FRI_001",
        "title": "Bitter Horse",
        "subtitle": "Friday before leaving, received new requirements: 'Want colorful black, plus dazzling white.'",
        "timeTag": "friday_evening",
        "jobTag": ["designer", "pm_operator", "marketer", "general"]
    },
    {
        "id": "PM_WKD_002",
        "title": "Meeting Horse",
        "subtitle": "The only certainty in the calendar: there's always another meeting.",
        "timeTag": "workday_normal",
        "jobTag": ["pm_operator", "manager", "professional", "general"]
    },
    {
        "id": "PM_OFF_001",
        "title": "Scapegoat Horse",
        "subtitle": "Project success is the team's, problems are mine.",
        "timeTag": "off_work",
        "jobTag": ["pm_operator", "manager", "general"]
    },
    {
        "id": "MRK_WKD_001",
        "title": "Boast Horse",
        "subtitle": "Turning one achievement into ten glories is a comprehensive exam of workplace rhetoric and imagination.",
        "timeTag": "workday_normal",
        "jobTag": ["marketer", "pm_operator", "manager", "general"]
    },
    {
        "id": "MRK_OT_001",
        "title": "Socialize Horse",
        "subtitle": "Client's drinks never finish, company contracts never end. Stomach and performance, always one on the road.",
        "timeTag": "overtime_night",
        "jobTag": ["marketer", "manager", "professional", "general"]
    },
    {
        "id": "MRK_WKD_002",
        "title": "Chase Horse",
        "subtitle": "'Hello, did you see the proposal?' 'Are you there? Can you give feedback?' — Daily acting as client's dedicated reminder assistant.",
        "timeTag": "workday_normal",
        "jobTag": ["marketer", "pm_operator", "professional", "general"]
    },
    {
        "id": "GEN_MON_001",
        "title": "Cheer Horse",
        "subtitle": "Oh my, a new week has started, got to keep going.",
        "timeTag": "monday",
        "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
    },
    {
        "id": "GEN_HOL_001",
        "title": "Post-Holiday Syndrome Horse",
        "subtitle": "How pleasant the vacation, how sluggish the return. Soul still on vacation, body already clocked in.",
        "timeTag": "after_holiday",
        "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
    },
    {
        "id": "PRO_WEEKEND_OT_001",
        "title": "Deploy Horse",
        "subtitle": "'For system stability, weekend dates/games/sleep are all sacrificable.'",
        "timeTag": "overtime_weekend",
        "jobTag": ["programmer", "engineer", "pm_operator", "general"]
    },
    {
        "id": "MRK_OFF_001",
        "title": "Standby Horse",
        "subtitle": "WeChat pinned all client groups, even bring phone into bathroom, afraid to miss a billion (dollar order).",
        "timeTag": "off_work",
        "jobTag": ["marketer", "manager", "professional", "general"]
    },
    {
        "id": "GEN_WKD_003",
        "title": "Slack Horse",
        "subtitle": "In paid toilet time and screen switching, seeking brief freedom and life's true meaning.",
        "timeTag": "workday_normal",
        "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
    },
    {
        "id": "DES_WKD_002",
        "title": "Copyright Horse",
        "subtitle": "Two hours finding images, five minutes using them, remaining time spent on 'Can this be used commercially?'",
        "timeTag": "workday_normal",
        "jobTag": ["designer", "pm_operator", "marketer", "general"]
    },
    {
        "id": "DES_WKD_006",
        "title": "Why Horse",
        "subtitle": "Why? This proposal doesn't pass? Fine, client boss you call the shots.",
        "timeTag": "workday_normal",
        "jobTag": ["designer", "pm_operator", "marketer", "general"]
    },
    {
        "id": "PM_WKD_003",
        "title": "Relay Horse",
        "subtitle": "Core work: translating boss's words to tech, then beautifying tech's words back to boss.",
        "timeTag": "workday_normal",
        "jobTag": ["pm_operator", "manager", "general"]
    },
    {
        "id": "MRK_WKD_003",
        "title": "Data Horse",
        "subtitle": "Applying the brightest lipstick (bold red and growth curves) to mediocre data reports.",
        "timeTag": "workday_normal",
        "jobTag": ["marketer", "pm_operator", "manager", "general"]
    },
    {
        "id": "GEN_OFF_006",
        "title": "Ghosted Horse",
        "subtitle": "The moment I walk out the office door, all work group messages automatically enter the 'Do Not Disturb' parallel universe.",
        "timeTag": "off_work",
        "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
    },
    {
        "id": "DES_OT_003",
        "title": "Font Horse",
        "subtitle": "Wandering the world, just to find that free commercial-use font the boss says 'I've seen somewhere'.",
        "timeTag": "overtime_night",
        "jobTag": ["designer", "pm_operator", "marketer", "general"]
    },
    {
        "id": "MRK_HOL_001",
        "title": "Vibe Horse",
        "subtitle": "Every holiday is our battlefield to manufacture consumer impulse. No demand? Create demand.",
        "timeTag": "after_holiday",
        "jobTag": ["marketer", "pm_operator", "general"]
    },
    {
        "id": "PM_OT_002",
        "title": "Mining Horse",
        "subtitle": "From client's vague 'want something awesome', mining out a ten-page requirement doc.",
        "timeTag": "overtime_night",
        "jobTag": ["pm_operator", "marketer", "general"]
    },
    {
        "id": "GEN_WKD_005",
        "title": "Elevator Horse",
        "subtitle": "The most tense 60 seconds of every day, stuck alone with the boss in elevator, must chat awkwardly.",
        "timeTag": "workday_normal",
        "jobTag": ["professional", "engineer", "programmer", "designer", "general"]
    },
    {
        "id": "ALL_EVER_001",
        "title": "Corporate Slave",
        "subtitle": "No need for words. Those who know, know. This is the starting point and endpoint of all diagnoses.",
        "timeTag": "workday_normal",
        "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
    },
    {
        "id": "GEN_MON_002",
        "title": "One Horse",
        "subtitle": "A horse that doesn't want to work on Monday.",
        "timeTag": "monday",
        "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
    },
    {
        "id": "DES_WKD_004",
        "title": "Pixel Horse",
        "subtitle": "Can spot two layers off by pixels at a glance, but can't see my own receding hairline.",
        "timeTag": "workday_normal",
        "jobTag": ["designer", "engineer", "general"]
    },
    {
        "id": "MRK_WKD_004",
        "title": "Rainbow Horse",
        "subtitle": "Praising every ordinary client idea as an industry-changing genius idea.",
        "timeTag": "workday_normal",
        "jobTag": ["marketer", "pm_operator", "general"]
    },
    {
        "id": "PRO_OT_004",
        "title": "Parameter Horse",
        "subtitle": "Facing mystical bugs, my main method is mystically adjusting parameters, praying for miracles.",
        "timeTag": "overtime_night",
        "jobTag": ["programmer", "engineer", "general"]
    },
    {
        "id": "DES_OT_004",
        "title": "Version Horse",
        "subtitle": "'Final_v2_Confirmed_Really_Not_Changing_Finalized_Final_Really_Final.psd'",
        "timeTag": "overtime_night",
        "jobTag": ["designer", "pm_operator", "general"]
    },
    {
        "id": "PM_OT_003",
        "title": "Pie Horse",
        "subtitle": "Drawing pies for the team, also for myself. Too many pies drawn, occasionally I believe them, then get hungrier.",
        "timeTag": "overtime_night",
        "jobTag": ["pm_operator", "manager", "marketer", "general"]
    },
    {
        "id": "MRK_OT_003",
        "title": "Mask Horse",
        "subtitle": "Online chat 'sweetie~', offline meeting 'boss~'.",
        "timeTag": "overtime_night",
        "jobTag": ["marketer", "professional", "general"]
    },
    {
        "id": "GEN_FRI_001",
        "title": "Ready Horse",
        "subtitle": "From Friday afternoon, physically and mentally already enter weekend 'combat readiness' rest state.",
        "timeTag": "friday_evening",
        "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
    },
    {
        "id": "DES_FRI_002",
        "title": "Escape Horse",
        "subtitle": "Send out design ten minutes before Friday leaving, then quickly close all communication tools, hiding merit and fame.",
        "timeTag": "friday_evening",
        "jobTag": ["designer", "pm_operator", "marketer", "general"]
    },
    {
        "id": "GEN_HOL_002",
        "title": "Panic Horse",
        "subtitle": "Last day of long holiday, immersed in 'back to work tomorrow' enormous sadness and anxiety, unable to enjoy final happiness.",
        "timeTag": "after_holiday",
        "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
    },
    {
        "id": "PRO_HOL_002",
        "title": "New Year Horse",
        "subtitle": "Main work during Spring Festival holiday: sending New Year messages in family groups, grabbing red envelopes.",
        "timeTag": "spring_festival",
        "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
    },
    {
        "id": "PM_NOON_001",
        "title": "Coffee Horse",
        "subtitle": "Afternoon meetings all rely on morning Double Espresso and afternoon iced Americano taking turns keeping me alive.",
        "timeTag": "workday_noon",
        "jobTag": ["pm_operator", "manager", "marketer", "professional", "general"]
    },
    {
        "id": "MRK_WKD_005",
        "title": "PPT Horse",
        "subtitle": "Daily work is using gorgeous rhetoric and exaggerated charts to weave a piece called 'Report' emperor's new clothes.",
        "timeTag": "workday_normal",
        "jobTag": ["marketer", "pm_operator", "manager", "professional", "general"]
    },
    {
        "id": "DES_WKD_005",
        "title": "Material Horse",
        "subtitle": "Computer stores 10TB of design materials, every new project still feels 'nothing suitable'.",
        "timeTag": "workday_normal",
        "jobTag": ["designer", "pm_operator", "marketer", "general"]
    },
    {
        "id": "MRK_OFF_002",
        "title": "Ad Horse",
        "subtitle": "Personal moments already fallen, every third post is company advertisement.",
        "timeTag": "off_work",
        "jobTag": ["marketer", "pm_operator", "general"]
    },
    {
        "id": "GEN_WKD_006",
        "title": "Meditation Horse",
        "subtitle": "Most precious alone time and deep thinking time of the day, completed on company restroom toilet.",
        "timeTag": "workday_normal",
        "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
    },
    {
        "id": "PRO_MON_002",
        "title": "Sleepwalk Horse",
        "subtitle": "Every Monday morning meeting, body in work area, brain still sleepwalking.",
        "timeTag": "monday",
        "jobTag": ["programmer", "designer", "pm_operator", "engineer", "professional", "manager", "general"]
    },
    {
        "id": "DES_WEEKEND_OT_001",
        "title": "Baby Horse",
        "subtitle": "Client always suddenly becomes baby needing immediate feeding (seeing proposals) on weekends, and I'm the nanny who doesn't deserve rest.",
        "timeTag": "overtime_weekend",
        "jobTag": ["designer", "pm_operator", "marketer", "general"]
    },
    {
        "id": "GEN_WKD_007",
        "title": "Ghost Horse",
        "subtitle": "Thin presence, silently completing work, not participating in gossip, the one forgotten when team building.",
        "timeTag": "workday_normal",
        "jobTag": ["programmer", "designer", "engineer", "professional", "general"]
    },
    {
        "id": "MRK_WKD_006",
        "title": "KPI Horse",
        "subtitle": "Anytime, anywhere, can rapidly calculate in my mind how many percentage points current progress is from quarterly KPI.",
        "timeTag": "workday_normal",
        "jobTag": ["marketer", "pm_operator", "manager", "general"]
    },
    {
        "id": "PM_WKD_005",
        "title": "Translator Horse",
        "subtitle": "Core skill: translating tech jargon into human language for boss, then translating boss's 'business vision' into requirements for tech.",
        "timeTag": "workday_normal",
        "jobTag": ["pm_operator", "manager", "general"]
    },
    {
        "id": "GEN_OFF_007",
        "title": "Commute Horse",
        "subtitle": "Rush hour subway is my battlefield, mastered kung fu of smartphone golden rooster stance and cramped survival sleep.",
        "timeTag": "off_work",
        "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
    },
    {
        "id": "DES_OFF_001",
        "title": "Aesthetic PTSD Horse",
        "subtitle": "Seeing ugly logos, messy layouts causes physical discomfort, but can't help professional instinct to analyze.",
        "timeTag": "off_work",
        "jobTag": ["designer", "pm_operator", "marketer", "general"]
    },
    {
        "id": "MRK_OT_004",
        "title": "Trending Horse",
        "subtitle": "Scrolling at midnight sees Weibo explode, first reaction not eating melon, but jumping up thinking: how does our brand ride this trend?",
        "timeTag": "overtime_night",
        "jobTag": ["marketer", "pm_operator", "general"]
    },
    {
        "id": "GEN_WKD_013",
        "title": "Wellness Punk Horse",
        "subtitle": "Working overtime late while brewing goji berries; eating greasy takeout while taking liver pills. Mastering the art of hedging.",
        "timeTag": "workday_normal",
        "jobTag": ["programmer", "designer", "pm_operator", "marketer", "engineer", "professional", "manager", "general"]
    }
];
