"use client"

import Link from "next/link"
import { useLanguage } from "@/context/language-context"
import { useTheme } from "next-themes"
import { Moon, Sun, Globe, Menu, Cross } from "lucide-react"
import { useState, useEffect } from "react"

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ivory dark:bg-darker-brown border-b border-amber-200 dark:border-amber-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href={`/${language}`} className="flex items-center">
              <span className="text-lg font-semibold text-amber-900 dark:text-amber-100">
                {t("home.navTitle")}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href={`/${language}`}
              className="text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-200 transition-colors duration-300"
            >
              {t("nav.home")}
            </Link>
            <Link
              href={`/${language}/daily-bible-story`}
              className="text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-200 transition-colors duration-300"
            >
              {t("nav.daily_bible_story")}
            </Link>
            <Link
              href={`/${language}/book-of-answers`}
              className="text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-200 transition-colors duration-300"
            >
              {t("nav.book-of-answers")}
            </Link>
            <Link
              href={`/${language}/bible-verse-picker`}
              className="text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-200 transition-colors duration-300"
            >
              {t("nav.bible-verse-picker")}
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://ko-fi.com/unisho"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center px-3 py-1.5 bg-amber-700 dark:bg-amber-600 text-white rounded-md hover:bg-amber-800 dark:hover:bg-amber-500 transition-colors duration-300"
            >
              <Cross className="h-4 w-4 mr-1.5" />
              <span className="text-sm font-medium">Buy me a coffee</span>
            </a>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-amber-900 dark:text-amber-100 hover:text-amber-700 dark:hover:text-amber-300 transition-colors duration-300"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setLanguage(language === "en" ? "zh" : "en")}
              className="p-2 text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-200 transition-colors duration-300"
              aria-label={language === "en" ? t("lang.zh") : t("lang.en")}
            >
              <Globe className="h-5 w-5" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-200 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-ivory dark:bg-darker-brown border-t border-amber-200 dark:border-amber-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="https://ko-fi.com/unisho"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 bg-amber-700 dark:bg-amber-600 text-white rounded-md hover:bg-amber-800 dark:hover:bg-amber-500 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <Cross className="h-4 w-4 mr-1.5" />
              <span className="text-sm font-medium">Buy me a coffee</span>
            </a>
            <Link
              href={`/${language}`}
              className="block px-3 py-2 text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-200 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              href={`/${language}/daily-bible-story`}
              className="block px-3 py-2 text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-200 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.daily_bible_story")}
            </Link>
            <Link
              href={`/${language}/book-of-answers`}
              className="block px-3 py-2 text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-200 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.book-of-answers")}
            </Link>
            <Link
              href={`/${language}/bible-verse-picker`}
              className="block px-3 py-2 text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-200 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.bible-verse-picker")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
} 