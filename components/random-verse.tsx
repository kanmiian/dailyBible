"use client"

import { useState, useEffect, useRef } from "react"
import { getRandomVerse } from "@/lib/utils"
import type { BibleVerse } from "@/lib/types"
import { useLanguage } from "@/context/language-context"
import { RefreshCw, Copy, Check } from "lucide-react"

export default function RandomVerse() {
  const [verse, setVerse] = useState<BibleVerse | null>(null)
  const [loading, setLoading] = useState(true)
  const { t, language } = useLanguage()
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [copied, setCopied] = useState(false)
  const tooltipRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchVerse = async () => {
      setLoading(true)
      const randomVerse = await getRandomVerse()
      setVerse(randomVerse)
      setLoading(false)
    }

    fetchVerse()
  }, [])

  const handleRefresh = async () => {
    setIsRefreshing(true)
    const randomVerse = await getRandomVerse()
    setVerse(randomVerse)
    setTimeout(() => setIsRefreshing(false), 600) // 给动画一些时间
  }

  const copyToClipboard = () => {
    if (!verse) return

    const textToCopy = `${language === "zh" ? verse.text.zh : verse.text.en} - ${language === "zh" ? verse.reference.zh : verse.reference.en}`
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true)
      if (tooltipRef.current) {
        tooltipRef.current.classList.add("visible")
      }

      setTimeout(() => {
        setCopied(false)
        if (tooltipRef.current) {
          tooltipRef.current.classList.remove("visible")
        }
      }, 2000)
    })
  }

  if (loading) {
    return (
      <div className="verse-card flex items-center justify-center py-16" suppressHydrationWarning>
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-4 bg-amber-200/30 dark:bg-amber-800/30 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-amber-200/30 dark:bg-amber-800/30 rounded w-1/2"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="verse-card star-twinkle cross-reveal relative" onClick={copyToClipboard} suppressHydrationWarning>
      <div ref={tooltipRef} className="copy-tooltip" suppressHydrationWarning>
        {copied ? t("verse.copied") : t("verse.click_to_copy")}
      </div>

      {verse && (
        <>
          <p className="text-xl md:text-2xl text-amber-950 dark:text-amber-100 mb-4 font-serif leading-relaxed transition-colors duration-300" suppressHydrationWarning>
            {language === "zh" ? verse.text.zh : verse.text.en}
          </p>
          <p className="text-right text-amber-700 dark:text-amber-400 italic transition-colors duration-300" suppressHydrationWarning>
            — {language === "zh" ? verse.reference.zh : verse.reference.en}
          </p>

          <div className="flex justify-between items-center mt-6">
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleRefresh()
              }}
              disabled={isRefreshing}
              className="inline-flex items-center text-sm text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300 transition-colors duration-300 holy-aura"
            >
              <RefreshCw className={`h-4 w-4 mr-1 ${isRefreshing ? "animate-spin" : ""}`} />
              {t("verse.refresh")}
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                copyToClipboard()
              }}
              className="inline-flex items-center text-sm text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300 transition-colors duration-300 holy-aura"
            >
              {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
              {copied ? t("verse.copied") : t("verse.copy")}
            </button>
          </div>
        </>
      )}
    </div>
  )
}
