import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/app/globals.css"
import { LanguageProvider } from "@/context/language-context"
import { ThemeProvider } from "@/context/theme-context"
import GoogleAnalytics from "@/components/google-analytics"
import GoogleAdsense from "@/components/google-adsense"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
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
