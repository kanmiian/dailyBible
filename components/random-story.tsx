"use client"

import { useState, useEffect, useRef } from "react"
import { getRandomStory } from "@/lib/utils"
import type { BibleStory } from "@/lib/types"
import { useLanguage } from "@/context/language-context"
import { RefreshCw, Copy, Check } from "lucide-react"

export default function RandomStory() {
  const [story, setStory] = useState<BibleStory | null>(null)
  const [loading, setLoading] = useState(true)
  const { t, language } = useLanguage()
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [copied, setCopied] = useState(false)
  const tooltipRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchStory = async () => {
      setLoading(true)
      const randomStory = await getRandomStory()
      setStory(randomStory)
      setLoading(false)
    }

    fetchStory()
  }, [])

  const handleRefresh = async () => {
    setIsRefreshing(true)
    const randomStory = await getRandomStory()
    setStory(randomStory)
    setTimeout(() => setIsRefreshing(false), 600) // 给动画一些时间
  }

  const copyToClipboard = () => {
    if (!story) return

    const textToCopy = `${language === "zh" ? story.title.zh : story.title.en}\n\n${language === "zh" ? story.content.zh : story.content.en}\n\n${language === "zh" ? story.reference.zh : story.reference.en}`
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
      <div className="story-card flex items-center justify-center py-16">
        <div className="animate-pulse flex flex-col items-center w-full">
          <div className="h-6 bg-amber-200/30 dark:bg-amber-800/30 rounded w-1/2 mb-8"></div>
          <div className="h-4 bg-amber-200/30 dark:bg-amber-800/30 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-amber-200/30 dark:bg-amber-800/30 rounded w-full mb-4"></div>
          <div className="h-4 bg-amber-200/30 dark:bg-amber-800/30 rounded w-2/3"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="story-card star-twinkle cross-reveal relative" onClick={copyToClipboard}>
      <div ref={tooltipRef} className="copy-tooltip">
        {copied ? "已复制!" : "点击复制"}
      </div>

      {story && (
        <>
          <h2 className="text-2xl md:text-3xl text-amber-950 dark:text-amber-100 mb-6 font-serif text-center transition-colors duration-300">
            {language === "zh" ? story.title.zh : story.title.en}
          </h2>
          <div className="prose prose-amber dark:prose-invert max-w-none mb-6 transition-colors duration-300">
            <p className="text-lg text-amber-900 dark:text-amber-200 leading-relaxed transition-colors duration-300">
              {language === "zh" ? story.content.zh : story.content.en}
            </p>
          </div>
          <p className="text-right text-amber-700 dark:text-amber-400 italic transition-colors duration-300">
            — {language === "zh" ? story.reference.zh : story.reference.en}
          </p>

          <div className="flex justify-between items-center mt-8">
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleRefresh()
              }}
              disabled={isRefreshing}
              className="inline-flex items-center text-sm text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300 transition-colors duration-300 holy-aura"
            >
              <RefreshCw className={`h-4 w-4 mr-1 ${isRefreshing ? "animate-spin" : ""}`} />
              {t("story.read_another")}
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                copyToClipboard()
              }}
              className="inline-flex items-center text-sm text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300 transition-colors duration-300 holy-aura"
            >
              {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
              {copied ? "已复制" : "复制"}
            </button>
          </div>
        </>
      )}
    </div>
  )
}
