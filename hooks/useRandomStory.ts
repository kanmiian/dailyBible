import { useState, useCallback } from 'react'
import bibleStories from '@/lib/bible-stories.json'

export interface BibleStory {
  id: number
  title: {
    zh: string
    en: string
  }
  content: {
    zh: string
    en: string
  }
  reference: {
    zh: string
    en: string
  }
}

export function useRandomStory() {
  const [story, setStory] = useState<BibleStory | null>(null)

  const getRandomStory = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * bibleStories.length)
    setStory(bibleStories[randomIndex])
  }, [])

  return { story, getRandomStory }
} 