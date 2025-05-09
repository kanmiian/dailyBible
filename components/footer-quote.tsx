"use client"

import { useRandomQuote } from "@/hooks/useRandomQuote"
import { useLanguage } from "@/context/language-context"

export default function FooterQuote() {
  const { quote, source } = useRandomQuote()
  const { language } = useLanguage()

  return (
    <div className="text-center md:text-right">
      <p className="text-sm text-amber-700 dark:text-amber-400 italic">
        {language === "zh" ? quote.zh : quote.en}
      </p>
      <p className="text-xs text-amber-600 dark:text-amber-500 mt-1">
        — {language === "zh" ? source.zh : source.en}
      </p>
    </div>
  )
} 