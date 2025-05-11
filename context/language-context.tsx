"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { usePathname, useRouter } from "next/navigation"

type Language = "zh" | "en"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  zh: {
    // Navigation
    "nav.home": "首页",
    "nav.daily_story": "每日圣经故事",
    "nav.book_of_answers": "圣经答案之书",
    "nav.faq": "常见问题",

    // Home
    "home.title": "每日圣经故事 - 让圣经智慧照亮生活",
    "home.navTitle": "圣经之光 · 照亮人生",
    "home.subtitle": "通过每日精选的圣经故事，让神的智慧指引你的每一天",
    "home.getStarted": "开始探索圣经故事",
    "home.aboutWebsite.title": "探索圣经故事的宝库",
    "home.aboutWebsite.description": "欢迎来到每日圣经故事平台，这里汇集了圣经中最精彩的故事，从创世纪到启示录。我们精心挑选的圣经故事不仅帮助您了解圣经的历史，更能让您从中获得生活的智慧和力量。每个故事都配有详细的解释和应用指南，帮助您将圣经的教导应用到日常生活中。",
    "home.aboutWebsite.features.title": "核心功能",
    "home.aboutWebsite.features.multilingual": "中英双语圣经故事，满足不同语言需求",
    "home.aboutWebsite.features.dailyVerses": "每日更新的圣经故事，带您探索圣经的奥秘",
    "home.aboutWebsite.features.bookOfAnswers": "圣经答案之书，为您解答生活中的困惑",
    "home.aboutWebsite.features.userFriendly": "简洁直观的界面，轻松浏览圣经故事",
    "home.bibleIntro.title": "圣经故事：永恒的智慧宝库",
    "home.bibleIntro.description": "圣经中蕴含着无数精彩的故事，从亚当夏娃到耶稣基督，从大卫王到使徒保罗。这些故事不仅记录了历史，更传递着永恒的真理。通过阅读这些故事，我们可以学习如何面对生活的挑战，如何建立与神的关系，如何活出更有意义的人生。",
    "home.bibleIntro.keyPoints.title": "圣经故事的价值",
    "home.bibleIntro.keyPoints.divineInspiration": "神所启示的真理，指引人生方向",
    "home.bibleIntro.keyPoints.historicalSignificance": "跨越千年的历史见证，展现神的作为",
    "home.bibleIntro.keyPoints.spiritualGuidance": "通过故事传递的属灵智慧，帮助灵命成长",
    "home.bibleIntro.keyPoints.culturalImpact": "影响人类文明的经典故事，塑造价值观",
    "home.dailyBibleStory.title": "每日圣经故事",
    "home.dailyBibleStory.description": "每天精选一个圣经故事，带您深入探索圣经的奥秘。每个故事都配有详细的解释和现代应用，帮助您理解故事背后的真理，并将其应用到日常生活中。无论是创世记的创造故事，还是福音书中的耶稣比喻，都能让您获得新的启示和力量。",
    "home.dailyBibleStory.readNow": "阅读今日圣经故事",
    "home.dailyBibleStory.features.title": "故事特色",
    "home.dailyBibleStory.features.dailyStories": "365天不间断更新，每天都有新故事",
    "home.dailyBibleStory.features.interactive": "互动式阅读体验，深入理解故事",
    "home.dailyBibleStory.features.reflection": "故事反思与讨论，促进灵命成长",
    "home.dailyBibleStory.features.growth": "个人灵修记录，追踪属灵成长",
    "home.bookOfAnswers.title": "圣经答案之书",
    "home.bookOfAnswers.description": "当您在生活中遇到困惑时，让圣经故事为您指引方向。通过圣经答案之书，您可以找到与您当前处境相关的圣经故事，从中获得智慧和指引。无论是工作、家庭还是人际关系的问题，都能在圣经故事中找到答案。",
    "home.bookOfAnswers.tryNow": "寻找圣经答案",
    "home.bookOfAnswers.features.title": "答案特色",
    "home.bookOfAnswers.features.divineGuidance": "基于圣经原文的智慧指引",
    "home.bookOfAnswers.features.personalReflection": "个性化故事推荐，贴合您的需求",
    "home.bookOfAnswers.features.spiritualGrowth": "通过故事促进灵命成长",
    "home.bookOfAnswers.features.dailyWisdom": "每日更新故事，持续获得智慧",

    // Footer
    "footer.rights": "© 2024 圣经智慧指南. 保留所有权利。",
    "footer.quote": "你的话是我脚前的灯，是我路上的光（诗篇119:105）",
    "footer.quickLinks": "快速链接",
    "footer.friends": "友情链接",
    "footer.aboutUs": "关于我们",
    "footer.faq": "常见问题",
    "footer.privacy": "隐私政策",
    "footer.terms": "服务条款",
    "footer.contact": "联系我们",
    "footer.contactInfo": "如有任何问题，请随时联系我们",

    // Theme
    "theme.light": "浅色模式",
    "theme.dark": "深色模式",

    // Language
    "lang.zh": "中文",
    "lang.en": "English",

    // About
    "about.title": "关于圣经平台",
    "about.content": "我们是由圣经学者、神学家和数字传教士组成的圣经团队，致力于将圣经的活水泉源引入数字荒漠。通过深度解构圣经故事、开发智能圣经学习工具，我们让每个屏幕都成为传播圣经真理的电子约柜，使徒行传28:31的使命在元宇宙时代得着全新诠释。",
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
    "privacy.title": "圣经平台隐私政策",
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
    "terms.title": "圣经平台服务条款",
    "terms.content": "进入本圣经平台即表示您同意遵循圣经原则和数字十诫，以敬畏之心使用本平台。",
    "terms.acceptance.title": "圣经圣约确认",
    "terms.acceptance.content": "使用即视为与圣经平台立约，如同亚伯拉罕之约般神圣不可违",
    "terms.usage.title": "圣经平台守则",
    "terms.usage.content": "禁止：曲解圣经、商业滥用圣言、传播异端等违背圣经教导的行为",
    "terms.intellectual.title": "圣经知识产权",
    "terms.intellectual.content": "所有内容均受圣经版权法（提摩太后书3:16）和数字十诫保护",
    "terms.liability.title": "圣经平台免责",
    "terms.liability.content": "对于擅自错误应用圣经教导导致的后果，本平台不承担属灵责任",
    "terms.termination.title": "圣经圣约终止",
    "terms.termination.content": "若发现亵渎圣经行为，将立即关闭访问权限并移交属灵法庭",
    "terms.contact.title": "联系我们",
    "terms.contact.content": "若有圣经相关问题，欢迎联系我们",

    // Verse
    "verse.paste": "复制圣经经文",
    "verse.copy": "复制",
    "verse.refresh": "刷新",
    "story.title": "每日圣经金句",
    "story.subtitle": "探索圣经中的永恒智慧",
    "story.back_home": "返回圣经首页",
    "story.read_another": "阅读另一个圣经金句",
    "answers.title": "圣经答案之书",
    "answers.subtitle": "在圣经智慧中寻找指引",
    "answers.instruction": "点击打开圣经答案之书",
    "answers.open_book": "打开圣经",
    "answers.your_answer": "你的圣经指引",
    "answers.back": "返回圣经首页",
    "answers.try_again": "再次寻求圣经指引",

    // FAQ
    "faq.title": "圣经常见问题",
    "faq.general.title": "圣经一般问题",
    "faq.content.title": "圣经内容相关",
    "faq.content.frequency.q": "每日圣经金句多久更新一次？",
    "faq.content.frequency.a": "每日圣经金句会在每天凌晨自动更新，确保您每天都能获得新的圣经灵修指引。同时，您也可以随时点击刷新按钮获取新的圣经金句。",
    "faq.content.accuracy.q": "圣经答案之书的答案准确吗？",
    "faq.content.accuracy.a": "我们的圣经答疑系统基于权威的圣经译本和神学注释，由专业的圣经学者团队审核。每个圣经答案都经过严格筛选，确保符合圣经教导。",
    "faq.content.bilingual.q": "为什么有些圣经内容只显示中文或英文？",
    "faq.content.bilingual.a": "我们正在持续完善圣经双语内容，目前部分圣经内容可能暂时只有单一语言版本。我们会优先确保核心圣经功能（如每日圣经金句、圣经答案之书）提供完整的中英文支持。",
    "faq.general.what.q": "什么是圣经智慧灯塔？",
    "faq.general.what.a": "圣经智慧灯塔是一个数字平台，旨在通过现代科技传播圣经的永恒智慧。我们提供每日圣经金句、互动问答系统等多语言服务，帮助用户在生活中实践圣经教导。",
    "faq.general.q1": "如何使用圣经答案之书？",
    "faq.general.a1": "只需点击打开圣经，系统会随机为您提供一段圣经经文作为指引。您可以随时刷新获取新的圣经指引。",
    "faq.general.q2": "如何切换圣经语言？",
    "faq.general.a2": "在页面右上角可以切换圣经中文和英文。系统会自动记住您的圣经语言偏好。",
    "faq.general.q3": "如何获取每日圣经金句？",
    "faq.general.a3": "访问每日圣经金句页面，系统会随机展示一个圣经金句。您可以点击【阅读另一个圣经金句】按钮获取新的金句。",
    "faq.general.free.q": "使用圣经智慧灯塔需要付费吗？",
    "faq.general.free.a": "圣经智慧灯塔完全免费开放，我们秉承圣经教导，让每个人都能免费获取神的智慧。所有圣经功能，包括每日圣经金句、圣经答案之书等，都可以免费使用。",
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
    "nav.home": "Home",
    "nav.daily_story": "Daily Bible Story",
    "nav.book_of_answers": "Book of Answers",
    "nav.faq": "FAQ",

    // Home
    "home.navTitle": "Bible Light - Illuminate Life",
    "home.title": "Daily Bible Stories - Let Biblical Wisdom Illuminate Your Life",
    "home.subtitle": "Discover God's wisdom through carefully selected Bible stories every day",
    "home.getStarted": "Explore Bible Stories",
    "home.aboutWebsite.title": "Explore the Treasure of Bible Stories",
    "home.aboutWebsite.description": "Welcome to the Daily Bible Stories platform, where we bring together the most inspiring stories from Genesis to Revelation. Our carefully selected Bible stories not only help you understand biblical history but also provide wisdom and strength for daily living. Each story comes with detailed explanations and practical applications to help you apply biblical teachings to your life.",
    "home.aboutWebsite.features.title": "Core Features",
    "home.aboutWebsite.features.multilingual": "Bilingual Bible stories in Chinese and English",
    "home.aboutWebsite.features.dailyVerses": "Daily updated Bible stories exploring biblical mysteries",
    "home.aboutWebsite.features.bookOfAnswers": "Book of Answers to guide your life's questions",
    "home.aboutWebsite.features.userFriendly": "Intuitive interface for easy Bible story navigation",
    "home.bibleIntro.title": "Bible Stories: Eternal Wisdom Treasury",
    "home.bibleIntro.description": "The Bible contains countless inspiring stories, from Adam and Eve to Jesus Christ, from King David to Apostle Paul. These stories not only record history but also convey eternal truths. Through reading these stories, we learn how to face life's challenges, build a relationship with God, and live a more meaningful life.",
    "home.bibleIntro.keyPoints.title": "Value of Bible Stories",
    "home.bibleIntro.keyPoints.divineInspiration": "God-revealed truths guiding life's direction",
    "home.bibleIntro.keyPoints.historicalSignificance": "Millennium-spanning historical testimonies",
    "home.bibleIntro.keyPoints.spiritualGuidance": "Spiritual wisdom through stories for growth",
    "home.bibleIntro.keyPoints.culturalImpact": "Classic stories shaping human civilization",
    "home.dailyBibleStory.title": "Daily Bible Stories",
    "home.dailyBibleStory.description": "Each day features a carefully selected Bible story, taking you deep into biblical mysteries. Every story includes detailed explanations and modern applications to help you understand the truths behind the stories and apply them to daily life. From Genesis creation stories to Jesus' parables in the Gospels, each story brings new revelations and strength.",
    "home.dailyBibleStory.readNow": "Read Today's Bible Story",
    "home.dailyBibleStory.features.title": "Story Features",
    "home.dailyBibleStory.features.dailyStories": "365 days of continuous updates",
    "home.dailyBibleStory.features.interactive": "Interactive reading experience",
    "home.dailyBibleStory.features.reflection": "Story reflection and discussion",
    "home.dailyBibleStory.features.growth": "Personal devotion tracking",
    "home.bookOfAnswers.title": "Bible Book of Answers",
    "home.bookOfAnswers.description": "When you face life's questions, let Bible stories guide you. Through the Book of Answers, you can find Bible stories relevant to your current situation, gaining wisdom and guidance. Whether it's work, family, or relationship issues, you'll find answers in Bible stories.",
    "home.bookOfAnswers.tryNow": "Find Bible Answers",
    "home.bookOfAnswers.features.title": "Answer Features",
    "home.bookOfAnswers.features.divineGuidance": "Wisdom based on original Bible texts",
    "home.bookOfAnswers.features.personalReflection": "Personalized story recommendations",
    "home.bookOfAnswers.features.spiritualGrowth": "Spiritual growth through stories",
    "home.bookOfAnswers.features.dailyWisdom": "Daily updated stories for continuous wisdom",

    // Footer
    "footer.rights": "© 2024 Biblical Wisdom Guide. All rights reserved.",
    "footer.quote": "Your word is a lamp to my feet and a light to my path (Psalm 119:105)",
    "footer.quickLinks": "Quick Links",
    "footer.friends": "Friends",
    "footer.aboutUs": "About Us",
    "footer.faq": "FAQ",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.contact": "Contact Us",
    "footer.contactInfo": "Feel free to reach out if you have any questions",

    // Theme
    "theme.light": "Light Mode",
    "theme.dark": "Dark Mode",

    // Language
    "lang.zh": "中文",
    "lang.en": "English",

    // About
    "about.title": "About Bible Platform",
    "about.content": "We are a sacred Bible task force of Bible scholars, theologians, and digital missionaries, called to channel living water from Bible wells into digital deserts. Through deep analysis of Bible stories and innovative Bible tools, we transform every screen into an electronic Bible Ark, reinterpreting Acts 28:31 for the metaverse generation.",
    "about.mission": "Great Bible Commission",
    "about.mission.content": "To unlock Bible mysteries through technology, building a global Bible wisdom network making disciples of all nations (Matthew 28:19-20)",
    "about.vision": "Bible Vision",
    "about.vision.content": "Constructing a Bible metaverse where digital natives experience Bible narratives in VR, actualizing Revelation 7:9 worship scenes in cyberspace",
    "about.values": "Bible Core Values",
    "about.values.faith": "Rooted in Bible Truth",
    "about.values.integrity": "Upholding Bible Integrity",
    "about.values.service": "Bible Servanthood",
    "about.values.excellence": "Pursuing Bible Excellence",

    // Privacy Policy
    "privacy.title": "Bible Privacy Policy",
    "privacy.content": "We guard user privacy as Bible temple treasures. This policy details how we collect, protect, and use data according to Bible principles.",
    "privacy.collection.title": "Bible Data Gathering",
    "privacy.collection.content": "Following Bible guidance, we collect only essential Bible growth data: devotion progress, Bible reading patterns, prayer requests",
    "privacy.usage.title": "Bible Data Usage",
    "privacy.usage.content": "Your data serves Bible purposes: personalized Bible recommendations, Bible growth analytics, intercessory ministry support",
    "privacy.protection.title": "Bible-Grade Security",
    "privacy.protection.content": "Implementing Bible-level firewalls and Bible encryption to safeguard digital sanctity",
    "privacy.rights.title": "Bible User Rights",
    "privacy.rights.content": "Entitlements include: Bible data access, Bible forgetfulness, correction rights aligned with Bible grace",
    "privacy.contact.title": "Contact Us",
    "privacy.contact.content": "For Bible-related questions, feel free to reach out.",

    // Terms of Use
    "terms.title": "Bible Terms of Service",
    "terms.content": "Entering this Bible sanctuary signifies agreement to abide by Bible principles and digital commandments.",
    "terms.acceptance.title": "Bible Covenant Confirmation",
    "terms.acceptance.content": "Usage constitutes Bible covenant, binding as Bible promise",
    "terms.usage.title": "Bible Sanctuary Code",
    "terms.usage.content": "Prohibited: Bible twisting, commercial exploitation, heresy propagation",
    "terms.intellectual.title": "Bible Copyright",
    "terms.intellectual.content": "All content protected under Bible IP Laws (2 Timothy 3:16) and Digital Commandments",
    "terms.liability.title": "Bible Disclaimer",
    "terms.liability.content": "Not liable for misapplication of Bible teachings",
    "terms.termination.title": "Bible Covenant Termination",
    "terms.termination.content": "Access revoked for Bible blasphemy, cases referred to Bible courts",
    "terms.contact.title": "Contact Us",
    "terms.contact.content": "For Bible-related questions, feel free to reach out.",

    // Verse
    "verse.paste": "Copy Bible Verse",
    "verse.copy": "Copy",
    "verse.refresh": "Refresh",
    "story.title": "Daily Bible Verse",
    "story.subtitle": "Explore Bible Wisdom",
    "story.back_home": "Back to Bible Home",
    "story.read_another": "Read Another Bible Verse",
    "answers.title": "Bible Book of Answers",
    "answers.subtitle": "Find Bible Guidance",
    "answers.instruction": "Click to open the Bible Book of Answers",
    "answers.open_book": "Open the Bible",
    "answers.your_answer": "Your Bible Guidance",
    "answers.back": "Back to Bible Home",
    "answers.try_again": "Seek Bible Guidance Again",

    // FAQ
    "faq.title": "Bible FAQs",
    "faq.general.title": "General Bible Questions",
    "faq.content.title": "Bible Content Related",
    "faq.content.frequency.q": "How often are the daily Bible verses updated?",
    "faq.content.frequency.a": "Daily Bible verses are automatically updated at midnight each day, ensuring you receive fresh Bible guidance daily. You can also click the refresh button at any time to get a new Bible verse.",
    "faq.content.accuracy.q": "How accurate are the answers in the Bible Book of Answers?",
    "faq.content.accuracy.a": "Our Bible answer system is based on authoritative Bible translations and theological commentaries, reviewed by a team of Bible scholars. Each Bible answer undergoes rigorous screening to ensure alignment with Bible teachings.",
    "faq.content.bilingual.q": "Why are some Bible contents only available in Chinese or English?",
    "faq.content.bilingual.a": "We are continuously improving our Bible bilingual content. Currently, some Bible content may only be available in one language. We prioritize ensuring that core Bible features (such as daily Bible verses and the Bible Book of Answers) provide complete Chinese and English support.",
    "faq.general.what.q": "What is the Bible Lighthouse?",
    "faq.general.what.a": "The Bible Lighthouse is a digital platform dedicated to spreading eternal Bible wisdom through modern technology. We offer multilingual Bible services including daily Bible verses and interactive Bible Q&A systems to help users apply Bible teachings in their lives.",
    "faq.general.q1": "How do I use the Bible Book of Answers?",
    "faq.general.a1": "Simply click to open the Bible, and the system will provide you with a random Bible verse as guidance. You can refresh at any time to get new Bible guidance.",
    "faq.general.q2": "How do I switch Bible languages?",
    "faq.general.a2": "You can switch between Bible Chinese and Bible English in the top right corner of the page. The system will remember your Bible language preference.",
    "faq.general.q3": "How do I get daily Bible verses?",
    "faq.general.a3": "Visit the Daily Bible Verse page, and the system will randomly display a Bible verse. You can click the 'Read Another Bible Verse' button to get a new verse.",
    "faq.general.free.q": "Is there a cost to use the Bible Lighthouse?",
    "faq.general.free.a": "The Bible Lighthouse is completely free to use. Following Bible teachings, we believe in making God's Bible wisdom accessible to everyone. All Bible features, including daily Bible verses and the Bible Book of Answers, are available at no cost.",
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

export function LanguageProvider({ 
  children,
  initialLang = "en"
}: { 
  children: ReactNode
  initialLang?: Language 
}) {
  const [language, setLanguageState] = useState<Language>(initialLang)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    // 从 URL 路径获取语言
    const pathLang = pathname.split('/')[1]
    if (pathLang === 'zh' || pathLang === 'en') {
      setLanguageState(pathLang)
    }
  }, [pathname])

  const setLanguage = (lang: Language) => {
    if (lang === language) return // 如果语言没有改变，不执行任何操作
    
    setLanguageState(lang)
    // 更新 URL 路径
    const newPath = pathname.replace(/^\/[^/]+/, `/${lang}`)
    router.push(newPath)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}