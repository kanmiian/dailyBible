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

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Biblical Wisdom Guide",
  description: "Your daily source of biblical wisdom and guidance",
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
      </head>
      <body className={`${inter.className} bg-amber-50 dark:bg-amber-950 min-h-screen`}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-grow pt-16">
                {children}
              </main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
        <GoogleAdsense />
      </body>
    </html>
  )
}
