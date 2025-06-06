"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/context/language-context"
import ThemeToggle from "@/components/theme-toggle"
import LanguageSwitcher from "@/components/language-switcher"
import { Cross } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { t, language } = useLanguage()

  const navItems = [
    { href: `/${language}`, label: t("nav.home") },
    { href: `/${language}/daily-bible-story`, label: t("nav.daily_bible_story") },
    { href: `/${language}/book-of-answers`, label: t("nav.book-of-answers") },
    { href: `/${language}/bible-verse-picker`, label: t("nav.bible-verse-picker") },
  ]

  const isActive = (path: string) => pathname === path

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ivory dark:bg-darker-brown border-b border-amber-200 dark:border-amber-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16" suppressHydrationWarning>
          <div>
            <Link href={`/${language}`} className="text-lg font-serif text-amber-900 dark:text-amber-100 hover:text-amber-700 dark:hover:text-amber-300 transition-colors duration-300">
              {t("home.navTitle")}
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-200 transition-colors duration-300 ${
                  isActive(item.href) ? "font-medium" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4" suppressHydrationWarning>
            <a
              href="https://ko-fi.com/unisho"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center px-3 py-1.5 bg-amber-700 dark:bg-amber-600 text-white rounded-md hover:bg-amber-800 dark:hover:bg-amber-500 transition-colors duration-300"
            >
              <Cross className="h-4 w-4 mr-1.5" />
              <span className="text-sm font-medium">Buy me a coffee</span>
            </a>
            <ThemeToggle />
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-amber-600 dark:text-amber-300 hover:text-amber-700 dark:hover:text-amber-200 hover:bg-amber-100 dark:hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500 transition-colors duration-300"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              suppressHydrationWarning
            >
              <span className="sr-only">打开主菜单</span>
              {/* Icon when menu is closed */}
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-200 transition-colors duration-300 ${
                  isActive(item.href) ? "font-medium" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
