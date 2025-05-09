"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { usePathname } from "next/navigation"

type Language = "zh" | "en"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  zh: {
    // Navigation
    "nav.home": "圣经典藏首页",
    "nav.daily_story": "每日圣经金句",
    "nav.book_of_answers": "圣经答疑册",

    // Home
    "home.title": "圣言之光 · 照亮人生",
    "home.subtitle": "在圣经的永恒智慧中锚定生命，汲取超凡力量与心灵安宁",
    "home.getStarted": "开启圣经智慧之旅",
    "home.aboutWebsite.title": "圣经数字圣殿的奥秘",
    "home.aboutWebsite.description": "欢迎莅临圣经智慧灯塔——您每日不可或缺的灵性指南。我们精心构建的数字平台将圣经的古老智慧与现代生活无缝连接，通过深度解析圣经故事、提供实时互动指引，让上帝的话语成为您每日生活的明灯。",
    "home.aboutWebsite.features.title": "圣经核心特色功能",
    "home.aboutWebsite.features.multilingual": "圣经多语言支持，全球信徒共沐圣言",
    "home.aboutWebsite.features.dailyVerses": "每日精选圣经经文与灵修反思",
    "home.aboutWebsite.features.bookOfAnswers": "圣经启示录互动问答系统",
    "home.aboutWebsite.features.userFriendly": "圣经主题沉浸式导航体验",
    "home.bibleIntro.title": "圣经：永恒的生命之书",
    "home.bibleIntro.description": "圣经不仅是人类文明的瑰宝，更是上帝亲授的生命指南。这部跨越千年的圣典通过66卷书卷、1189章圣经故事和31,102节经文，持续为21世纪的信徒提供超凡智慧。每一则圣经故事都是神与人对话的见证，每句经文都蕴藏着改变生命的神圣力量。",
    "home.bibleIntro.keyPoints.title": "圣经核心启示",
    "home.bibleIntro.keyPoints.divineInspiration": "圣灵默示的圣经文本权威性",
    "home.bibleIntro.keyPoints.historicalSignificance": "跨越4000年的圣经历史脉络",
    "home.bibleIntro.keyPoints.spiritualGuidance": "圣经故事中的现代生活解决方案",
    "home.bibleIntro.keyPoints.culturalImpact": "圣经智慧对全球文明的奠基性影响",
    "home.dailyBibleStory.title": "每日圣经金句",
    "home.dailyBibleStory.description": "每日清晨，让圣经金句成为您灵修的晨星。我们精选从创世纪到启示录的经典经文，配合多媒体互动功能，带您身临其境体验圣经智慧。每个金句都配有现代应用指南，让古老圣经智慧点亮您的数字生活。",
    "home.dailyBibleStory.readNow": "即刻进入圣经金句",
    "home.dailyBibleStory.features.title": "圣经金句特色",
    "home.dailyBibleStory.features.dailyStories": "365天不间断圣经金句供应",
    "home.dailyBibleStory.features.interactive": "圣经场景3D沉浸式体验",
    "home.dailyBibleStory.features.reflection": "圣经智慧反思日记功能",
    "home.dailyBibleStory.features.growth": "个人圣经灵性成长轨迹追踪",
    "home.bookOfAnswers.title": "圣经答疑册",
    "home.bookOfAnswers.description": "当人生遭遇迷雾时，让圣经成为您的GPS导航系统。通过人工智能驱动的圣经智慧引擎，我们将从66卷圣经书卷中为您提取属天答案。无论是职场抉择还是家庭关系，圣经的永恒真理都将给出超越时空的完美指引。",
    "home.bookOfAnswers.tryNow": "获取圣经答案",
    "home.bookOfAnswers.features.title": "圣经答疑优势",
    "home.bookOfAnswers.features.divineGuidance": "基于圣经原文的神圣指引",
    "home.bookOfAnswers.features.personalReflection": "圣经经文个性化匹配系统",
    "home.bookOfAnswers.features.spiritualGrowth": "圣经智慧成长评估报告",
    "home.bookOfAnswers.features.dailyWisdom": "圣经金句智能推送服务",

    // Footer
    "footer.rights": "圣经智慧版权神圣不可侵犯",
    "footer.quote": "圣经话语是脚前的灯，路上的光，更是数字时代的永恒坐标（诗篇119:105）",
    "footer.quickLinks": "快速查经通道",
    "footer.aboutUs": "关于本站（圣经使命）",
    "footer.faq": "常见圣经问题",
    "footer.privacy": "隐私政策",
    "footer.terms": "服务条款",
    "footer.contact": "联系我们",
    "footer.contactInfo": "若有圣经相关问题，欢迎联系我们",

    // Theme
    "theme.light": "圣经晨光模式",
    "theme.dark": "圣经星空模式",

    // Language
    "lang.zh": "圣经中文",
    "lang.en": "Holy English",

    // About
    "about.title": "关于本站（圣经使命）",
    "about.content": "我们是由圣经学者、神学家和数字传教士组成的圣工团队，致力于将圣经的活水泉源引入数字荒漠。通过深度解构圣经故事、开发智能圣经学习工具，我们让每个屏幕都成为传播圣经真理的电子约柜，使徒行传28:31的使命在元宇宙时代得着全新诠释。",
    "about.mission": "圣经大使命",
    "about.mission.content": "运用创新科技解封圣经奥秘，建立全球性圣经智慧网络，使万民成为圣经门徒（马太福音28:19-20）",
    "about.vision": "圣经异象",
    "about.vision.content": "构建圣经元宇宙生态，让每个数字原住民都能在虚拟现实中亲历圣经故事，使启示录7:9的敬拜场景在数字空间得着实现",
    "about.values": "圣经核心价值",
    "about.values.faith": "扎根圣经真理",
    "about.values.integrity": "持守圣经诚信",
    "about.values.service": "效法圣经服侍",
    "about.values.excellence": "追求圣经卓越",

    // Privacy Policy
    "privacy.title": "隐私政策",
    "privacy.content": "我们视用户隐私为圣经教导的圣殿至宝。本政策详细说明我们如何以圣经原则收集、保管和使用您的神圣数据。",
    "privacy.collection.title": "圣经数据收集",
    "privacy.collection.content": "依照圣经教导，我们仅收集必要信息：灵修进度、圣经阅读记录、祷告事项等属灵成长数据",
    "privacy.usage.title": "圣经数据应用",
    "privacy.usage.content": "您的数据将用于：个性化圣经推荐、属灵成长分析、教会代祷事工等神圣用途",
    "privacy.protection.title": "圣经级防护",
    "privacy.protection.content": "采用启示录级别的加密技术，建立但以理书式的数据防火墙，确保用户隐私安全",
    "privacy.rights.title": "圣经用户权柄",
    "privacy.rights.content": "您享有：数据访问权、遗忘权（参照圣经赦罪之恩）、更正权等属灵权利",
    "privacy.contact.title": "联系我们",
    "privacy.contact.content": "若有圣经相关问题，欢迎联系我们",

    // Terms of Use
    "terms.title": "服务条款",
    "terms.content": "进入本圣殿即表示您同意遵循圣经原则和数字十诫，以敬畏之心使用本平台。",
    "terms.acceptance.title": "圣约确认",
    "terms.acceptance.content": "使用即视为与平台立约，如同亚伯拉罕之约般神圣不可违",
    "terms.usage.title": "圣殿守则",
    "terms.usage.content": "禁止：曲解圣经、商业滥用圣言、传播异端等违背圣经教导的行为",
    "terms.intellectual.title": "圣经知识产权",
    "terms.intellectual.content": "所有内容均受圣经版权法（提摩太后书3:16）和数字十诫保护",
    "terms.liability.title": "圣殿免责",
    "terms.liability.content": "对于擅自错误应用圣经教导导致的后果，本殿不承担属灵责任",
    "terms.termination.title": "圣约终止",
    "terms.termination.content": "若发现亵渎圣经行为，将立即关闭访问权限并移交属灵法庭",
    "terms.contact.title": "联系我们",
    "terms.contact.content": "若有圣经相关问题，欢迎联系我们",

    // Verse
    "verse.paste": "复制经文",
    "verse.copy": "复制",
    "verse.refresh": "刷新",
    "story.title": "每日圣经金句",
    "story.subtitle": "探索圣经中的永恒智慧",
    "story.back_home": "返回首页",
    "story.read_another": "阅读另一个金句",
    "answers.title": "圣经答疑册",
    "answers.subtitle": "在圣经智慧中寻找指引",
    "answers.instruction": "点击打开圣经答疑册",
    "answers.open_book": "打开圣经",
    "answers.your_answer": "你的圣经指引",
    "answers.back": "返回首页",
    "answers.try_again": "再次寻求指引",

    // FAQ
    "faq.title": "常见圣经问题",
    "faq.general.title": "一般问题",
    "faq.content.title": "内容相关",
    "faq.content.frequency.q": "每日圣经金句多久更新一次？",
    "faq.content.frequency.a": "每日圣经金句会在每天凌晨自动更新，确保您每天都能获得新的灵修指引。同时，您也可以随时点击刷新按钮获取新的金句。",
    "faq.content.accuracy.q": "圣经答疑册的答案准确吗？",
    "faq.content.accuracy.a": "我们的圣经答疑系统基于权威的圣经译本和神学注释，由专业的圣经学者团队审核。每个答案都经过严格筛选，确保符合圣经教导。",
    "faq.content.bilingual.q": "为什么有些内容只显示中文或英文？",
    "faq.content.bilingual.a": "我们正在持续完善双语内容，目前部分内容可能暂时只有单一语言版本。我们会优先确保核心功能（如每日圣经金句、圣经答疑册）提供完整的中英文支持。",
    "faq.general.what.q": "什么是圣经智慧灯塔？",
    "faq.general.what.a": "圣经智慧灯塔是一个数字平台，旨在通过现代科技传播圣经的永恒智慧。我们提供每日圣经金句、互动问答系统等多语言服务，帮助用户在生活中实践圣经教导。",
    "faq.general.q1": "如何使用圣经答疑册？",
    "faq.general.a1": "只需点击打开圣经，系统会随机为您提供一段圣经经文作为指引。您可以随时刷新获取新的指引。",
    "faq.general.q2": "如何切换语言？",
    "faq.general.a2": "在页面右上角可以切换中文和英文。系统会自动记住您的语言偏好。",
    "faq.general.q3": "如何获取每日圣经金句？",
    "faq.general.a3": "访问每日圣经金句页面，系统会随机展示一个圣经金句。您可以点击【阅读另一个金句】按钮获取新的金句。",
    "faq.general.free.q": "使用圣经智慧灯塔需要付费吗？",
    "faq.general.free.a": "圣经智慧灯塔完全免费开放，我们秉承圣经教导，让每个人都能免费获取神的智慧。所有功能，包括每日圣经金句、圣经答疑册等，都可以免费使用。",
    "faq.contact.title": "联系我们",
    "faq.contact.content": "若有圣经相关问题，欢迎联系我们",
    "faq.contact.email": "电子邮件",
    "faq.contact.wechat": "微信",
    "faq.contact.phone": "电话",
    "faq.contact.address": "地址",
    "faq.contact.hours": "工作时间",
  },
  en: {
    // Navigation
    "nav.home": "Holy Scripture Hub",
    "nav.daily_story": "Daily Bible Verse",
    "nav.book_of_answers": "Book of Answers",

    // Home
    "home.title": "BibleForU – Light from the Word",
    "home.subtitle": "Anchor Your Soul in Timeless Biblical Truths, Harvest Supernatural Strength and Divine Peace",
    "home.getStarted": "Embark on Biblical Journey",
    "home.aboutWebsite.title": "Digital Sanctuary of Scripture",
    "home.aboutWebsite.description": "Welcome to the Lighthouse of Biblical Wisdom - Your daily spiritual navigation system. We bridge ancient biblical truths with modern life through immersive Bible story experiences and AI-powered scriptural guidance, making God's Word a living compass for digital generations.",
    "home.aboutWebsite.features.title": "Core Biblical Features",
    "home.aboutWebsite.features.multilingual": "Multilingual Bible Access for Global Disciples",
    "home.aboutWebsite.features.dailyVerses": "Curated Daily Bible Passages & Devotions",
    "home.aboutWebsite.features.bookOfAnswers": "Interactive Scripture Answer Engine",
    "home.aboutWebsite.features.userFriendly": "Immersive Bible Navigation Interface",
    "home.bibleIntro.title": "Bible: The Eternal Book of Life",
    "home.bibleIntro.description": "More than a historical relic, the Bible is God's living love letter containing 66 sacred books, 1,189 chapters of biblical narratives, and 31,102 verses of divine wisdom. Each Bible story forms a mosaic of God's redemptive plan, every verse carrying transformative power for 21st-century believers.",
    "home.bibleIntro.keyPoints.title": "Biblical Cornerstones",
    "home.bibleIntro.keyPoints.divineInspiration": "Spirit-Breathed Scriptural Authority",
    "home.bibleIntro.keyPoints.historicalSignificance": "4,000-Year Biblical Timeline",
    "home.bibleIntro.keyPoints.spiritualGuidance": "Life Solutions from Bible Stories",
    "home.bibleIntro.keyPoints.culturalImpact": "Bible's Foundational Global Influence",
    "home.dailyBibleStory.title": "Daily Bible Verse",
    "home.dailyBibleStory.description": "Start each dawn with living Bible verses. Journey from Genesis to Revelation through multimedia-enhanced biblical passages. Experience the power of scripture in interactive 4D. Each verse comes with modern application guides, making ancient wisdom relevant today.",
    "home.dailyBibleStory.readNow": "Enter Biblical Verse",
    "home.dailyBibleStory.features.title": "Scriptural Experience Features",
    "home.dailyBibleStory.features.dailyStories": "365-Day Bible Verse Journey",
    "home.dailyBibleStory.features.interactive": "3D Bible Scene Immersion",
    "home.dailyBibleStory.features.reflection": "Scriptural Reflection Journal",
    "home.dailyBibleStory.features.growth": "Personal Spiritual Growth Analytics",
    "home.bookOfAnswers.title": "Book of Answers",
    "home.bookOfAnswers.description": "When life's crossroads appear, let biblical wisdom be your GPS. Our AI-driven scripture engine mines answers from 66 sacred books. Whether career dilemmas or family matters, receive transcendent guidance from eternal biblical truths.",
    "home.bookOfAnswers.tryNow": "Seek Biblical Answers",
    "home.bookOfAnswers.features.title": "Divine Answer Advantages",
    "home.bookOfAnswers.features.divineGuidance": "Original Language Scripture Analysis",
    "home.bookOfAnswers.features.personalReflection": "Personalized Verse Matching System",
    "home.bookOfAnswers.features.spiritualGrowth": "Spiritual Progress Reports",
    "home.bookOfAnswers.features.dailyWisdom": "AI-Curated Bible Verse Alerts",

    // Footer
    "footer.rights": "Sacred Copyright of Biblical Wisdom",
    "footer.quote": "Your Word is a lamp to my feet and a light to my path - now my digital compass (Psalm 119:105)",
    "footer.quickLinks": "Quick Bible Finder",
    "footer.aboutUs": "About This Site",
    "footer.faq": "Bible FAQs",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.contact": "Contact Us",
    "footer.contactInfo": "For Bible-related questions, feel free to reach out.",

    // Theme
    "theme.light": "Bible Daylight",
    "theme.dark": "Celestial Night",

    // Language
    "lang.zh": "Chinese",
    "lang.en": "English",

    // About
    "about.title": "About This Site",
    "about.content": "We are a sacred task force of Bible scholars, theologians, and digital missionaries, called to channel living water from biblical wells into digital deserts. Through deep analysis of Bible stories and innovative scripture tools, we transform every screen into an electronic Ark of the Covenant, reinterpreting Acts 28:31 for the metaverse generation.",
    "about.mission": "Great Biblical Commission",
    "about.mission.content": "To unlock scripture mysteries through technology, building a global Bible wisdom network making disciples of all nations (Matthew 28:19-20)",
    "about.vision": "Biblical Vision",
    "about.vision.content": "Constructing a Bible metaverse where digital natives experience scripture narratives in VR, actualizing Revelation 7:9 worship scenes in cyberspace",
    "about.values": "Scriptural Core Values",
    "about.values.faith": "Rooted in Biblical Truth",
    "about.values.integrity": "Upholding Scriptural Integrity",
    "about.values.service": "Christ-like Servanthood",
    "about.values.excellence": "Pursuing Divine Excellence",

    // Privacy Policy
    "privacy.title": "Privacy Policy",
    "privacy.content": "We guard user privacy as temple treasures. This policy details how we collect, protect, and use data according to biblical principles.",
    "privacy.collection.title": "Sacred Data Gathering",
    "privacy.collection.content": "Following scriptural guidance, we collect only essential spiritual growth data: devotion progress, Bible reading patterns, prayer requests",
    "privacy.usage.title": "Divine Data Usage",
    "privacy.usage.content": "Your data serves holy purposes: personalized scripture recommendations, spiritual growth analytics, intercessory ministry support",
    "privacy.protection.title": "Revelation-Grade Security",
    "privacy.protection.content": "Implementing Daniel-level firewalls and Apocalypse encryption to safeguard digital sanctity",
    "privacy.rights.title": "Scriptural User Rights",
    "privacy.rights.content": "Entitlements include: data access, redemptive forgetfulness, correction rights aligned with biblical grace",
    "privacy.contact.title": "Contact Us",
    "privacy.contact.content": "For Bible-related questions, feel free to reach out.",

    // Terms of Use
    "terms.title": "Terms of Service",
    "terms.content": "Entering this sanctuary signifies agreement to abide by biblical principles and digital commandments.",
    "terms.acceptance.title": "Covenant Confirmation",
    "terms.acceptance.content": "Usage constitutes sacred covenant, binding as Abrahamic promise",
    "terms.usage.title": "Sanctuary Code",
    "terms.usage.content": "Prohibited: Scripture twisting, commercial exploitation, heresy propagation",
    "terms.intellectual.title": "Sacred Copyright",
    "terms.intellectual.content": "All content protected under Biblical IP Laws (2 Timothy 3:16) and Digital Commandments",
    "terms.liability.title": "Divine Disclaimer",
    "terms.liability.content": "Not liable for misapplication of biblical teachings",
    "terms.termination.title": "Covenant Termination",
    "terms.termination.content": "Access revoked for blasphemy, cases referred to spiritual courts",
    "terms.contact.title": "Contact Us",
    "terms.contact.content": "For Bible-related questions, feel free to reach out.",

    // Verse
    "verse.paste": "Copy Verse",
    "verse.copy": "Copy",
    "verse.refresh": "Refresh",
    "story.title": "Daily Bible Verse",
    "story.subtitle": "Explore Eternal Wisdom in the Bible",
    "story.back_home": "Back to Home",
    "story.read_another": "Read Another Verse",
    "answers.title": "Book of Answers",
    "answers.subtitle": "Find Guidance in Biblical Wisdom",
    "answers.instruction": "Click to open the Book of Answers",
    "answers.open_book": "Open the Book",
    "answers.your_answer": "Your Biblical Guidance",
    "answers.back": "Back to Home",
    "answers.try_again": "Seek Guidance Again",

    // FAQ
    "faq.title": "Bible FAQs",
    "faq.general.title": "General Questions",
    "faq.content.title": "Content Related",
    "faq.content.frequency.q": "How often are the daily Bible verses updated?",
    "faq.content.frequency.a": "Daily Bible verses are automatically updated at midnight each day, ensuring you receive fresh spiritual guidance daily. You can also click the refresh button at any time to get a new verse.",
    "faq.content.accuracy.q": "How accurate are the answers in the Book of Answers?",
    "faq.content.accuracy.a": "Our biblical answer system is based on authoritative Bible translations and theological commentaries, reviewed by a team of biblical scholars. Each answer undergoes rigorous screening to ensure alignment with biblical teachings.",
    "faq.content.bilingual.q": "Why are some contents only available in Chinese or English?",
    "faq.content.bilingual.a": "We are continuously improving our bilingual content. Currently, some content may only be available in one language. We prioritize ensuring that core features (such as daily Bible verses and the Book of Answers) provide complete Chinese and English support.",
    "faq.general.what.q": "What is the Lighthouse of Biblical Wisdom?",
    "faq.general.what.a": "The Lighthouse of Biblical Wisdom is a digital platform dedicated to spreading eternal biblical wisdom through modern technology. We offer multilingual services including daily Bible verses and interactive Q&A systems to help users apply biblical teachings in their lives.",
    "faq.general.q1": "How do I use the Book of Answers?",
    "faq.general.a1": "Simply click to open the book, and the system will provide you with a random biblical verse as guidance. You can refresh at any time to get new guidance.",
    "faq.general.q2": "How do I switch languages?",
    "faq.general.a2": "You can switch between Chinese and English in the top right corner of the page. The system will remember your language preference.",
    "faq.general.q3": "How do I get daily Bible verses?",
    "faq.general.a3": "Visit the Daily Bible Verse page, and the system will randomly display a Bible verse. You can click the 'Read Another Verse' button to get a new verse.",
    "faq.general.free.q": "Is there a cost to use the Lighthouse of Biblical Wisdom?",
    "faq.general.free.a": "The Lighthouse of Biblical Wisdom is completely free to use. Following biblical teachings, we believe in making God's wisdom accessible to everyone. All features, including daily Bible verses and the Book of Answers, are available at no cost.",
    "faq.contact.title": "Contact Us",
    "faq.contact.content": "For Bible-related questions, feel free to reach out.",
    "faq.contact.email": "Email",
    "faq.contact.wechat": "WeChat",
    "faq.contact.phone": "Phone",
    "faq.contact.address": "Address",
    "faq.contact.hours": "Business Hours",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    // First priority: Get language from URL path
    const langFromPath = pathname?.split('/')[1]
    if (langFromPath === 'zh' || langFromPath === 'en') {
      setLanguageState(langFromPath)
      if (typeof window !== 'undefined') {
        localStorage.setItem("language", langFromPath)
      }
      return
    }

    // Second priority: Get language from localStorage if available
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage && (savedLanguage === "zh" || savedLanguage === "en")) {
        setLanguageState(savedLanguage)
        return
      }
    }

    // Default to English if no language is specified
    setLanguageState("en")
    if (typeof window !== 'undefined') {
      localStorage.setItem("language", "en")
    }
  }, [pathname])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem("language", lang)
    }
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}