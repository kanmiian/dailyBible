"use client"

import { useLanguage } from "@/context/language-context"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage()
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ivory dark:bg-dark-brown border-b border-amber-200 dark:border-amber-800/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link
              href={`/${language}`}
              className="flex items-center text-amber-900 dark:text-amber-100 hover:text-amber-700 dark:hover:text-amber-300 transition-colors duration-300"
            >
              <span className="text-xl font-serif">{t("nav.home")}</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href={`/${language}/daily-bible-story`}
              className={`text-amber-900 dark:text-amber-100 hover:text-amber-700 dark:hover:text-amber-300 transition-colors duration-300 ${
                pathname?.includes("daily-bible-story") ? "font-medium" : ""
              }`}
            >
              {t("nav.daily_story")}
            </Link>
            <Link
              href={`/${language}/book-of-answers`}
              className={`text-amber-900 dark:text-amber-100 hover:text-amber-700 dark:hover:text-amber-300 transition-colors duration-300 ${
                pathname?.includes("book-of-answers") ? "font-medium" : ""
              }`}
            >
              {t("nav.book_of_answers")}
            </Link>
            <button
              onClick={() => setLanguage(language === "en" ? "zh" : "en")}
              className="text-amber-900 dark:text-amber-100 hover:text-amber-700 dark:hover:text-amber-300 transition-colors duration-300"
            >
              {t(`lang.${language === "en" ? "zh" : "en"}`)}
            </button>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-amber-900 dark:text-amber-100 hover:text-amber-700 dark:hover:text-amber-300 transition-colors duration-300"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 