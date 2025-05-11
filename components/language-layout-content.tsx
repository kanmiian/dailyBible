"use client"

import { useLanguage } from "@/context/language-context"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

type Language = 'en' | 'zh'

interface LanguageLayoutContentProps {
  children: React.ReactNode
  lang: Language
}

export default function LanguageLayoutContent({ children, lang }: LanguageLayoutContentProps) {
  const { setLanguage } = useLanguage()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setLanguage(lang)
    setMounted(true)
  }, [lang, setLanguage])

  // 防止水合不匹配
  if (!mounted) {
    return null
  }

  return (
    <div className={`background-content-container min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'dark' : ''}`}>
      {children}
    </div>
  )
}
