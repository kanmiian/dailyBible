"use client"

import { useState, useEffect } from 'react'
import bibleVerses from '@/lib/bible-verses.json'

type Verse = {
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

export function useRandomVerse() {
  const [verse, setVerse] = useState<Verse | null>(null)

  const getRandomVerse = () => {
    const randomIndex = Math.floor(Math.random() * bibleVerses.length)
    setVerse(bibleVerses[randomIndex])
  }

  useEffect(() => {
    getRandomVerse()
  }, [])

  return { verse, getRandomVerse }
} 