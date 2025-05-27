import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/app/globals.css"
import { LanguageProvider } from "@/context/language-context"
import { ThemeProvider } from "@/context/theme-context"
import GoogleAnalytics from "@/components/google-analytics"
import GoogleAdsense from "@/components/google-adsense"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Script from "next/script"
import { Toaster } from '@/components/ui/toaster'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { getSEOMetadata } from '@/lib/seo'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  ...getSEOMetadata(),
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const reviewStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Biblical Wisdom Guide",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "125"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "John Doe"
        },
        "reviewBody": "This app has been incredibly helpful in my daily Bible study."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.5"
        },
        "author": {
          "@type": "Person",
          "name": "Jane Smith"
        },
        "reviewBody": "Great resource for biblical wisdom and guidance."
      }
    ]
  }

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is BibleForU?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'BibleForU is a comprehensive Bible study platform that provides daily Bible stories, answers to life questions, and spiritual guidance in both English and Chinese.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How can I use BibleForU?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'You can read daily Bible stories, explore answers to life questions, and access spiritual guidance through our user-friendly interface. The platform is available in both English and Chinese.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is BibleForU free to use?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, BibleForU is completely free to use. We believe in making spiritual guidance accessible to everyone.'
        }
      }
    ]
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(reviewStructuredData)
          }}
        />
        <link rel="alternate" hrefLang="en" href="https://bibleforu.info/en" />
        <link rel="alternate" hrefLang="zh" href="https://bibleforu.info/zh" />
        <link rel="alternate" hrefLang="x-default" href="https://bibleforu.info" />
        <Script
          id="faq-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      </head>
      <body className={`${inter.className} bg-amber-50 dark:bg-amber-950 min-h-screen`}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-grow pt-16 background-content-container">
                {children}
              </main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
        <GoogleAdsense />
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
