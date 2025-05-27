import { Metadata } from "next"

export const metadata: Record<string, Metadata> = {
  // ... existing metadata ...
  "bible-verse-picker": {
    title: {
      template: "%s | Bible Light",
      default: "Bible Verse Selection - Find Your Daily Inspiration",
    },
    description: "Discover meaningful Bible verses through our interactive selection tool. Get daily inspiration, share verses with others, and create beautiful verse images.",
    alternates: {
      canonical: "http://localhost:3000/bible-verse-picker",
      languages: {
        "en": "http://localhost:3000/en/bible-verse-picker",
        "zh": "http://localhost:3000/zh/bible-verse-picker",
      },
    },
    openGraph: {
      title: "Bible Verse Selection - Find Your Daily Inspiration",
      description: "Discover meaningful Bible verses through our interactive selection tool. Get daily inspiration, share verses with others, and create beautiful verse images.",
      url: "http://localhost:3000/bible-verse-picker",
      siteName: "Bible Light",
      locale: "en_US",
      type: "website",
    },
  },
  "zh/bible-verse-picker": {
    title: {
      template: "%s | 圣经之光",
      default: "圣经经文选择 - 寻找每日灵感",
    },
    description: "通过我们的互动选择工具发现有意义的圣经经文。获取每日灵感，与他人分享经文，并创建精美的经文图片。",
    alternates: {
      canonical: "http://localhost:3000/zh/bible-verse-picker",
      languages: {
        "en": "http://localhost:3000/en/bible-verse-picker",
        "zh": "http://localhost:3000/zh/bible-verse-picker",
      },
    },
    openGraph: {
      title: "圣经经文选择 - 寻找每日灵感",
      description: "通过我们的互动选择工具发现有意义的圣经经文。获取每日灵感，与他人分享经文，并创建精美的经文图片。",
      url: "http://localhost:3000/zh/bible-verse-picker",
      siteName: "圣经之光",
      locale: "zh_CN",
      type: "website",
    },
  },
  "en/bible-verse-picker": {
    title: {
      template: "%s | Bible Light",
      default: "Bible Verse Selection - Find Your Daily Inspiration",
    },
    description: "Discover meaningful Bible verses through our interactive selection tool. Get daily inspiration, share verses with others, and create beautiful verse images.",
    alternates: {
      canonical: "http://localhost:3000/en/bible-verse-picker",
      languages: {
        "en": "http://localhost:3000/en/bible-verse-picker",
        "zh": "http://localhost:3000/zh/bible-verse-picker",
      },
    },
    openGraph: {
      title: "Bible Verse Selection - Find Your Daily Inspiration",
      description: "Discover meaningful Bible verses through our interactive selection tool. Get daily inspiration, share verses with others, and create beautiful verse images.",
      url: "http://localhost:3000/en/bible-verse-picker",
      siteName: "Bible Light",
      locale: "en_US",
      type: "website",
    },
  },
} 