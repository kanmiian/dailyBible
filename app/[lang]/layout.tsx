import { LanguageProvider } from "@/context/language-context"
import { ThemeProvider } from "next-themes"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import "@/app/globals.css"
import { generateMetadata as generateLangMetadata } from "../metadata"

type Props = {
  params: { lang: string }
}

export async function generateMetadata({ params }: Props) {
  return generateLangMetadata(params.lang)
}

function ClientLayout({ children, lang }: { children: React.ReactNode; lang: string }) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <body className="min-h-screen bg-ivory dark:bg-dark-brown text-amber-950 dark:text-amber-100">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow pt-16">
                {children}
              </main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return <ClientLayout lang={params.lang}>{children}</ClientLayout>
}