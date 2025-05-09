"use client"

import { useTheme } from "@/context/theme-context"
import { useLanguage } from "@/context/language-context"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()

  return (
    // 增强主题切换按钮效果
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center p-2 rounded-full transition-all duration-300 hover:bg-opacity-20 hover:bg-amber-500/10 dark:hover:bg-amber-300/10 holy-aura relative"
      aria-label={theme === "light" ? t("theme.dark") : t("theme.light")}
      suppressHydrationWarning
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-amber-700 dark:text-amber-300" />
      ) : (
        <Sun className="h-5 w-5 text-amber-700 dark:text-amber-300" />
      )}
    </button>
  )
}
