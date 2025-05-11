"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/context/language-context"

type BibleVerse = {
  text: string
  reference: string
}

export default function RandomBibleVerse({ lang }: { lang: string }) {
  const { t } = useLanguage()
  const [verse, setVerse] = useState<BibleVerse | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRandomVerse = async () => {
      try {
        const response = await fetch(`/api/random-verse?lang=${lang}`)
        if (!response.ok) throw new Error('Failed to fetch verse')
        const data = await response.json()
        setVerse(data)
      } catch (error) {
        console.error('Error fetching random verse:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRandomVerse()
  }, [lang])

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-24 bg-amber-100 dark:bg-amber-900/20 rounded-lg"></div>
      </div>
    )
  }

  if (!verse) {
    return null
  }

  return (
    <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800/30">
      <blockquote className="text-lg text-amber-800 dark:text-amber-200 italic mb-2">
        "{verse.text}"
      </blockquote>
      <p className="text-right text-amber-700 dark:text-amber-300">
        — {verse.reference}
      </p>
    </div>
  )
} 