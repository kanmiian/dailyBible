import { Metadata } from "next"

const BASE_URL = "https://bibleforu.info"

type SEOParams = {
  lang: string
  path: string
}

export function generateSEO({ lang, path }: SEOParams): Metadata {
  const isEnglish = lang === 'en'
  const fullPath = `/${lang}${path}`
  // 基础元数据配置
  const baseMetadata = {
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}${fullPath}`,
      languages: {
        'en': `${BASE_URL}/en${path}`,
        'zh': `${BASE_URL}/zh${path}`,
      },
    },
    openGraph: {
      type: 'website',
      siteName: isEnglish ? 'Biblical Wisdom Guide' : '圣经智慧指南',
      locale: isEnglish ? 'en_US' : 'zh_CN',
      url: `${BASE_URL}${fullPath}`,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@bibleforu',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
  }

  // 根据路径返回对应的 SEO 配置
  switch (path) {
    case '/about':
      return {
        ...baseMetadata,
        title: isEnglish
          ? "About Our Bible Platform - Biblical Wisdom Guide"
          : "关于我们的圣经平台 - 圣经智慧指南",
        description: isEnglish
          ? "Learn about our Bible-focused mission, vision, and the team behind Biblical Wisdom Guide. Discover how we're making Bible wisdom accessible to everyone through our Bible platform."
          : "了解我们以圣经为核心的使命、愿景和圣经智慧指南背后的团队。探索我们如何通过圣经平台让圣经智慧对每个人都触手可及。",
        openGraph: {
          ...baseMetadata.openGraph,
          title: isEnglish
            ? "About Our Bible Platform - Biblical Wisdom Guide"
            : "关于我们的圣经平台 - 圣经智慧指南",
          description: isEnglish
            ? "Learn about our Bible-focused mission, vision, and the team behind Biblical Wisdom Guide. Discover how we're making Bible wisdom accessible to everyone through our Bible platform."
            : "了解我们以圣经为核心的使命、愿景和圣经智慧指南背后的团队。探索我们如何通过圣经平台让圣经智慧对每个人都触手可及。",
          images: [
            {
              url: `${BASE_URL}/images/about-og.jpg`,
              width: 1200,
              height: 630,
              alt: isEnglish ? "About Our Bible Platform" : "关于我们的圣经平台",
            },
          ],
        },
      }

    case '/faq':
      return {
        ...baseMetadata,
        title: isEnglish
          ? "Bible FAQs - Frequently Asked Questions About Our Bible Platform"
          : "圣经常见问题 - 关于我们圣经平台的常见问题解答",
        description: isEnglish
          ? "Find answers to common questions about our Bible platform. Learn about our Bible features, Bible content, and how to make the most of our Bible wisdom platform."
          : "查找有关我们圣经平台的常见问题答案。了解我们的圣经功能、圣经内容以及如何充分利用我们的圣经智慧平台。",
        openGraph: {
          ...baseMetadata.openGraph,
          title: isEnglish
            ? "Bible FAQs - Frequently Asked Questions About Our Bible Platform"
            : "圣经常见问题 - 关于我们圣经平台的常见问题解答",
          description: isEnglish
            ? "Find answers to common questions about our Bible platform. Learn about our Bible features, Bible content, and how to make the most of our Bible wisdom platform."
            : "查找有关我们圣经平台的常见问题答案。了解我们的圣经功能、圣经内容以及如何充分利用我们的圣经智慧平台。",
          images: [
            {
              url: `${BASE_URL}/images/faq-og.jpg`,
              width: 1200,
              height: 630,
              alt: isEnglish ? "Bible Platform FAQ" : "圣经平台常见问题",
            },
          ],
        },
      }

    case '/book-of-answers':
      return {
        ...baseMetadata,
        title: isEnglish
          ? "Bible Book of Answers - Get Bible Wisdom for Life's Questions"
          : "圣经答案之书 - 获取圣经智慧解答人生问题",
        description: isEnglish
          ? "Find Bible-based guidance through our unique Bible Book of Answers feature. Get Bible wisdom and Bible insights for your life's questions and challenges."
          : "通过我们独特的圣经答案之书功能发现基于圣经的指引。获取圣经智慧和圣经洞见，解答您生活中的问题和挑战。",
        openGraph: {
          ...baseMetadata.openGraph,
          title: isEnglish
            ? "Bible Book of Answers - Get Bible Wisdom for Life's Questions"
            : "圣经答案之书 - 获取圣经智慧解答人生问题",
          description: isEnglish
            ? "Find Bible-based guidance through our unique Bible Book of Answers feature. Get Bible wisdom and Bible insights for your life's questions and challenges."
            : "通过我们独特的圣经答案之书功能发现基于圣经的指引。获取圣经智慧和圣经洞见，解答您生活中的问题和挑战。",
          images: [
            {
              url: `${BASE_URL}/images/book-of-answers-og.jpg`,
              width: 1200,
              height: 630,
              alt: isEnglish ? "Bible Book of Answers Preview" : "圣经答案之书预览",
            },
          ],
        },
      }

    case '/daily-bible-story':
      return {
        ...baseMetadata,
        title: isEnglish
          ? "Daily Bible Stories - Your Daily Source of Bible Wisdom"
          : "每日圣经故事 - 您的每日圣经智慧来源",
        description: isEnglish
          ? "Discover daily Bible stories that inspire and guide. Each Bible story is carefully selected to provide Bible wisdom and practical Bible lessons for modern life."
          : "探索每日圣经故事，获得灵性启发。每个圣经故事都经过精心挑选，为现代生活提供圣经智慧和实用的圣经教训。",
        openGraph: {
          ...baseMetadata.openGraph,
          title: isEnglish
            ? "Daily Bible Stories - Your Daily Source of Bible Wisdom"
            : "每日圣经故事 - 您的每日圣经智慧来源",
          description: isEnglish
            ? "Discover daily Bible stories that inspire and guide. Each Bible story is carefully selected to provide Bible wisdom and practical Bible lessons for modern life."
            : "探索每日圣经故事，获得灵性启发。每个圣经故事都经过精心挑选，为现代生活提供圣经智慧和实用的圣经教训。",
          images: [
            {
              url: `${BASE_URL}/images/daily-bible-story-og.jpg`,
              width: 1200,
              height: 630,
              alt: isEnglish ? "Daily Bible Stories Preview" : "每日圣经故事预览",
            },
          ],
        },
      }

    case '/privacy':
      return {
        ...baseMetadata,
        title: isEnglish
          ? "Bible Platform Privacy Policy - Protecting Your Data"
          : "圣经平台隐私政策 - 保护您的数据",
        description: isEnglish
          ? "Learn about how we protect your privacy and handle your data on our Bible platform. Read our comprehensive Bible platform privacy policy."
          : "了解我们如何在圣经平台上保护您的隐私和处理您的数据。阅读我们的完整圣经平台隐私政策。",
        openGraph: {
          ...baseMetadata.openGraph,
          title: isEnglish
            ? "Bible Platform Privacy Policy - Protecting Your Data"
            : "圣经平台隐私政策 - 保护您的数据",
          description: isEnglish
            ? "Learn about how we protect your privacy and handle your data on our Bible platform. Read our comprehensive Bible platform privacy policy."
            : "了解我们如何在圣经平台上保护您的隐私和处理您的数据。阅读我们的完整圣经平台隐私政策。",
        },
      }

    case '/terms':
      return {
        ...baseMetadata,
        title: isEnglish
          ? "Bible Platform Terms of Use - Guidelines for Bible Study"
          : "圣经平台使用条款 - 圣经学习指南",
        description: isEnglish
          ? "Read our Bible platform terms of use to understand the guidelines for using our Bible study platform. Learn about your rights and responsibilities in Bible learning."
          : "阅读我们的圣经平台使用条款，了解使用我们圣经学习平台的指南。了解您在圣经学习中的权利和责任。",
        openGraph: {
          ...baseMetadata.openGraph,
          title: isEnglish
            ? "Bible Platform Terms of Use - Guidelines for Bible Study"
            : "圣经平台使用条款 - 圣经学习指南",
          description: isEnglish
            ? "Read our Bible platform terms of use to understand the guidelines for using our Bible study platform. Learn about your rights and responsibilities in Bible learning."
            : "阅读我们的圣经平台使用条款，了解使用我们圣经学习平台的指南。了解您在圣经学习中的权利和责任。",
        },
      }

    default:
      return {
        ...baseMetadata,
        title: isEnglish
          ? "Bible Daily - Your Daily Source for Bible Stories and Bible Wisdom"
          : "圣经每日 - 您的每日圣经故事和圣经智慧来源",
        description: isEnglish
          ? "Discover daily Bible stories, Bible guidance, and Bible wisdom in both English and Chinese. Your trusted Bible platform for spiritual growth."
          : "探索每日圣经故事、圣经指引和圣经智慧，支持中英文双语。您值得信赖的圣经灵修平台。",
        openGraph: {
          ...baseMetadata.openGraph,
          title: isEnglish
            ? "Bible Daily - Your Daily Source for Bible Stories and Bible Wisdom"
            : "圣经每日 - 您的每日圣经故事和圣经智慧来源",
          description: isEnglish
            ? "Discover daily Bible stories, Bible guidance, and Bible wisdom in both English and Chinese. Your trusted Bible platform for spiritual growth."
            : "探索每日圣经故事、圣经指引和圣经智慧，支持中英文双语。您值得信赖的圣经灵修平台。",
          images: [
            {
              url: `${BASE_URL}/images/home-og.jpg`,
              width: 1200,
              height: 630,
              alt: isEnglish ? "Bible Daily Homepage" : "圣经每日首页",
            },
          ],
        },
      }
  }
}