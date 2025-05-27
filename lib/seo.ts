import { Metadata } from "next"

const BASE_URL = "https://bibleforu.info"

type SEOParams = {
  lang: string
  path: string
}

export async function generateSEO({ lang, path }: SEOParams): Promise<Metadata> {
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
    case '/':
      return {
        ...baseMetadata,
        title: isEnglish ? "Biblical Wisdom Guide" : "圣经智慧指南",
        description: isEnglish
          ? "Your daily source of biblical wisdom and guidance"
          : "您的每日圣经智慧和指引来源",
        openGraph: {
          ...baseMetadata.openGraph,
          title: isEnglish ? "Biblical Wisdom Guide" : "圣经智慧指南",
          description: isEnglish
            ? "Your daily source of biblical wisdom and guidance"
            : "您的每日圣经智慧和指引来源",
          images: [
            {
              url: `${BASE_URL}/images/home-og.jpg`,
              width: 1200,
              height: 630,
              alt: isEnglish ? "Biblical Wisdom Guide" : "圣经智慧指南",
            },
          ],
        },
      }

    case '/about':
      return {
        ...baseMetadata,
        title: isEnglish
          ? "About Us - Biblical Wisdom Guide"
          : "关于我们 - 圣经智慧指南",
        description: isEnglish
          ? "Learn about our mission, vision, and the team behind Biblical Wisdom Guide. Discover how we're making biblical wisdom accessible to everyone."
          : "了解我们的使命、愿景和圣经智慧指南背后的团队。探索我们如何让圣经智慧对每个人都触手可及。",
        openGraph: {
          ...baseMetadata.openGraph,
          title: isEnglish
            ? "About Us - Biblical Wisdom Guide"
            : "关于我们 - 圣经智慧指南",
          description: isEnglish
            ? "Learn about our mission, vision, and the team behind Biblical Wisdom Guide. Discover how we're making biblical wisdom accessible to everyone."
            : "了解我们的使命、愿景和圣经智慧指南背后的团队。探索我们如何让圣经智慧对每个人都触手可及。",
          images: [
            {
              url: `${BASE_URL}/images/about-og.jpg`,
              width: 1200,
              height: 630,
              alt: isEnglish ? "About Biblical Wisdom Guide" : "关于圣经智慧指南",
            },
          ],
        },
      }

    case '/faq':
      return {
        ...baseMetadata,
        title: isEnglish
          ? "Frequently Asked Questions - Biblical Wisdom Guide"
          : "常见问题 - 圣经智慧指南",
        description: isEnglish
          ? "Find answers to common questions about Biblical Wisdom Guide. Learn about our features, content, and how to make the most of our platform."
          : "查找有关圣经智慧指南的常见问题的答案。了解我们的功能、内容以及如何充分利用我们的平台。",
        openGraph: {
          ...baseMetadata.openGraph,
          title: isEnglish
            ? "Frequently Asked Questions - Biblical Wisdom Guide"
            : "常见问题 - 圣经智慧指南",
          description: isEnglish
            ? "Find answers to common questions about Biblical Wisdom Guide. Learn about our features, content, and how to make the most of our platform."
            : "查找有关圣经智慧指南的常见问题的答案。了解我们的功能、内容以及如何充分利用我们的平台。",
          images: [
            {
              url: `${BASE_URL}/images/faq-og.jpg`,
              width: 1200,
              height: 630,
              alt: isEnglish ? "Biblical Wisdom Guide FAQ" : "圣经智慧指南常见问题",
            },
          ],
        },
      }

    case '/book-of-answers':
      return {
        ...baseMetadata,
        title: isEnglish
          ? "Book of Answers - Biblical Wisdom Guide"
          : "答案之书 - 圣经智慧指南",
        description: isEnglish
          ? "Find divine guidance through our unique Book of Answers feature. Get biblical wisdom and insights for your life's questions and challenges."
          : "通过我们独特的答案之书功能发现神圣指引。获取圣经智慧和洞见，解答您生活中的问题和挑战。",
        openGraph: {
          ...baseMetadata.openGraph,
          title: isEnglish
            ? "Book of Answers - Biblical Wisdom Guide"
            : "答案之书 - 圣经智慧指南",
          description: isEnglish
            ? "Find divine guidance through our unique Book of Answers feature. Get biblical wisdom and insights for your life's questions and challenges."
            : "通过我们独特的答案之书功能发现神圣指引。获取圣经智慧和洞见，解答您生活中的问题和挑战。",
          images: [
            {
              url: `${BASE_URL}/images/book-of-answers-og.jpg`,
              width: 1200,
              height: 630,
              alt: isEnglish ? "Book of Answers Preview" : "答案之书预览",
            },
          ],
        },
      }

    case '/daily-bible-story':
      return {
        ...baseMetadata,
        title: isEnglish
          ? "Daily Bible Stories - Biblical Wisdom Guide"
          : "每日圣经故事 - 圣经智慧指南",
        description: isEnglish
          ? "Discover daily Bible stories that inspire and guide. Each story is carefully selected to provide spiritual nourishment and practical lessons for modern life."
          : "探索每日圣经故事，获得灵性启发。每个故事都经过精心挑选，为现代生活提供灵性滋养和实践教训。",
        openGraph: {
          ...baseMetadata.openGraph,
          title: isEnglish
            ? "Daily Bible Stories - Biblical Wisdom Guide"
            : "每日圣经故事 - 圣经智慧指南",
          description: isEnglish
            ? "Discover daily Bible stories that inspire and guide. Each story is carefully selected to provide spiritual nourishment and practical lessons for modern life."
            : "探索每日圣经故事，获得灵性启发。每个故事都经过精心挑选，为现代生活提供灵性滋养和实践教训。",
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

    case '/bible-verse-picker':
        return {
          ...baseMetadata,
          title: isEnglish
            ? "Random Bible Verse - Get Inspired by Scripture"
            : "随机圣经金句 - 从经文中获得灵感",
          description: isEnglish
            ? "Draw a random Bible verse to uplift your spirit and reflect on God's word. Perfect for daily meditation and sharing with friends."
            : "随机抽取一段圣经经文，激励你的灵魂，沉思上帝的话语。适合每日默想和与朋友分享。",
          alternates: {
            canonical: `${BASE_URL}/${lang}/bible-verse-picker`,
            languages: {
              'en': `${BASE_URL}/en/bible-verse-picker`,
              'zh': `${BASE_URL}/zh/bible-verse-picker`,
            },
          },
          openGraph: {
            ...baseMetadata.openGraph,
            title: isEnglish
              ? "Random Bible Verse - Get Inspired by Scripture"
              : "随机圣经金句 - 从经文中获得灵感",
            description: isEnglish
              ? "Draw a random Bible verse to uplift your spirit and reflect on God's word. Perfect for daily meditation and sharing with friends."
              : "随机抽取一段圣经经文，激励你的灵魂，沉思上帝的话语。适合每日默想和与朋友分享。",
            images: [
              {
                url: `${BASE_URL}/images/random-bible-verse-og.jpg`,
                width: 1200,
                height: 630,
                alt: isEnglish ? "Random Bible Verse Preview" : "随机圣经金句预览",
              },
            ],
          },
      }

    case '/privacy':
      return {
        ...baseMetadata,
        title: isEnglish
          ? "Privacy Policy - Biblical Wisdom Guide"
          : "隐私政策 - 圣经智慧指南",
        description: isEnglish
          ? "Learn about how we protect your privacy and handle your data on the Biblical Wisdom Guide platform. Read our comprehensive privacy policy."
          : "了解我们如何在圣经智慧指南平台上保护您的隐私和处理您的数据。阅读我们的完整隐私政策。",
        openGraph: {
          ...baseMetadata.openGraph,
          title: isEnglish
            ? "Privacy Policy - Biblical Wisdom Guide"
            : "隐私政策 - 圣经智慧指南",
          description: isEnglish
            ? "Learn about how we protect your privacy and handle your data on the Biblical Wisdom Guide platform. Read our comprehensive privacy policy."
            : "了解我们如何在圣经智慧指南平台上保护您的隐私和处理您的数据。阅读我们的完整隐私政策。",
        },
      }

    case '/terms':
      return {
        ...baseMetadata,
        title: isEnglish
          ? "Terms of Use - Biblical Wisdom Guide"
          : "使用条款 - 圣经智慧指南",
        description: isEnglish
          ? "Read our terms of use to understand the guidelines and conditions for using the Biblical Wisdom Guide platform. Learn about your rights and responsibilities."
          : "阅读我们的使用条款，了解使用圣经智慧指南平台的指南和条件。了解您的权利和责任。",
        openGraph: {
          ...baseMetadata.openGraph,
          title: isEnglish
            ? "Terms of Use - Biblical Wisdom Guide"
            : "使用条款 - 圣经智慧指南",
          description: isEnglish
            ? "Read our terms of use to understand the guidelines and conditions for using the Biblical Wisdom Guide platform. Learn about your rights and responsibilities."
            : "阅读我们的使用条款，了解使用圣经智慧指南平台的指南和条件。了解您的权利和责任。",
        },
      }

    default:
      return {
        ...baseMetadata,
        title: isEnglish
          ? "Bible Daily - Your Daily Source for Bible Stories"
          : "圣经智慧指南 - 您的每日圣经故事来源",
        description: isEnglish
          ? "Your daily source of biblical wisdom and guidance"
          : "您的每日圣经智慧和指引来源",
        openGraph: {
          ...baseMetadata.openGraph,
          title: isEnglish
            ? "Bible Daily - Your Daily Source for Bible Stories"
            : "圣经智慧指南 - 您的每日圣经故事来源",
          description: isEnglish
            ? "Your daily source of biblical wisdom and guidance"
            : "您的每日圣经智慧和指引来源",
        },
      }
  }
}

export function getSEOMetadata(): Metadata {
  return {
    title: {
      default: 'BibleForU - Your Daily Biblical Wisdom Guide',
      template: '%s | BibleForU'
    },
    description: 'Your daily source of biblical wisdom and guidance. Access daily Bible stories, answers to life questions, and spiritual guidance in English and Chinese.',
    applicationName: 'BibleForU',
    authors: [{ name: 'BibleForU Team' }],
    generator: 'Next.js',
    keywords: ['Bible', 'Christian', 'Spiritual Guidance', 'Daily Devotion', 'Bible Study'],
    referrer: 'origin-when-cross-origin',
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'white' },
      { media: '(prefers-color-scheme: dark)', color: 'black' }
    ],
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-site-verification',
    },
    alternates: {
      canonical: 'https://bibleforu.info',
      languages: {
        'en': 'https://bibleforu.info/en',
        'zh': 'https://bibleforu.info/zh',
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://bibleforu.info',
      siteName: 'BibleForU',
      title: 'BibleForU - Your Daily Biblical Wisdom Guide',
      description: 'Your daily source of biblical wisdom and guidance',
      images: [
        {
          url: 'https://bibleforu.info/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'BibleForU',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'BibleForU - Your Daily Biblical Wisdom Guide',
      description: 'Your daily source of biblical wisdom and guidance',
      images: ['https://bibleforu.info/twitter-image.jpg'],
      creator: '@bibleforu',
    },
  };
}