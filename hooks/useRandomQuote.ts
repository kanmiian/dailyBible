import { useEffect, useState } from 'react'
import bibleVerses from '@/lib/bible-verses.json'

interface BibleVerse {
  id: number
  text: {
    zh: string
    en: string
  }
  reference: {
    zh: string
    en: string
  }
}

// 使用一个稳定的随机数生成函数
function getStableRandomIndex(length: number, seed: string): number {
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return Math.abs(hash) % length
}

export function useRandomQuote() {
  const [quote, setQuote] = useState<BibleVerse | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      // 使用当前日期作为种子来生成稳定的随机数
      const today = new Date().toISOString().split('T')[0]
      const randomIndex = getStableRandomIndex(bibleVerses.length, today)
      setQuote(bibleVerses[randomIndex])
    }
  }, [mounted])

  // 在服务器端渲染时返回一个固定的引用
  if (!mounted) {
    const defaultVerse = bibleVerses[0]
    return {
      quote: defaultVerse.text,
      source: defaultVerse.reference
    }
  }

  if (!quote) return { quote: { zh: '', en: '' }, source: { zh: '', en: '' } }

  return {
    quote: quote.text,
    source: quote.reference
  }
} 