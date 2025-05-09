"use client"

import { useLanguage } from "@/context/language-context"
import { Globe } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname()

  // 点击外部关闭下拉菜单
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleLanguageChange = (newLang: string) => {
    setLanguage(newLang as "zh" | "en")
    setIsOpen(false)

    // 获取当前路径，移除语言前缀
    const pathWithoutLang = pathname.replace(/^\/(zh|en)/, '')
    // 构建新的路径
    const newPath = `/${newLang}${pathWithoutLang}`
    router.push(newPath)
  }

  return (
    <div className="relative" ref={dropdownRef} suppressHydrationWarning>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center p-2 rounded-full transition-all duration-300 hover:bg-opacity-20 hover:bg-amber-500/10 dark:hover:bg-amber-300/10 holy-aura relative"
        aria-label="Change language"
        suppressHydrationWarning
      >
        <Globe className="h-5 w-5 text-amber-700 dark:text-amber-300" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-ivory dark:bg-dark-brown ring-1 ring-black ring-opacity-5 z-50 overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-top-5">
          <div className="py-1">
            <button
              onClick={() => handleLanguageChange("zh")}
              className={`${
                language === "zh"
                  ? "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
                  : "text-amber-900 dark:text-amber-200"
              } group flex w-full items-center px-4 py-2 text-sm hover:bg-amber-100 dark:hover:bg-amber-800 transition-colors duration-200`}
            >
              {t("lang.zh")}
            </button>
            <button
              onClick={() => handleLanguageChange("en")}
              className={`${
                language === "en"
                  ? "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
                  : "text-amber-900 dark:text-amber-200"
              } group flex w-full items-center px-4 py-2 text-sm hover:bg-amber-100 dark:hover:bg-amber-800 transition-colors duration-200`}
            >
              {t("lang.en")}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
