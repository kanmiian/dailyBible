import { LanguageProvider } from "@/context/language-context"
import { ThemeProvider } from "next-themes"
import "@/app/globals.css"
import { generateMetadata as generateLangMetadata } from "../metadata"
import LanguageLayoutContent from "@/components/language-layout-content"
import { Metadata } from "next"

type Props = {
  params: { lang: string }
  children: React.ReactNode
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = params.lang === 'zh' || params.lang === 'en' ? params.lang : 'en'
  return await generateLangMetadata(lang)
}

export default async function LanguageLayout({ children, params }: Props) {
  const lang = params.lang === 'zh' || params.lang === 'en' ? params.lang : 'en'
  
  return (
    <html lang={lang} suppressHydrationWarning>
      <body className="bg-ivory dark:bg-darker-brown">
        <LanguageProvider initialLang={lang}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange={false}
            storageKey="v0bible-theme"
            forcedTheme={undefined}
            themes={["light", "dark"]}
          >
            <LanguageLayoutContent lang={lang}>{children}</LanguageLayoutContent>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}