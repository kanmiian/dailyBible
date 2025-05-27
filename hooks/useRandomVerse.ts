"use client"

import { useState, useCallback } from 'react'

interface Verse {
  text: {
    en: string
    zh: string
  }
  reference: {
    en: string
    zh: string
  }
}

// Sample verses - replace with your actual verses
const verses: Verse[] = [
  {
    text: {
      en: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.",
      zh: "耶和华说：我知道我向你们所怀的意念是赐平安的意念，不是降灾祸的意念，要叫你们末后有指望。"
    },
    reference: {
      en: "Jeremiah 29:11",
      zh: "耶利米书 29:11"
    }
  },
  {
    text: {
      en: "I can do all things through Christ who strengthens me.",
      zh: "我靠着那加给我力量的，凡事都能做。"
    },
    reference: {
      en: "Philippians 4:13",
      zh: "腓立比书 4:13"
    }
  },
  {
    text: {
      en: "The LORD is my shepherd, I lack nothing.",
      zh: "耶和华是我的牧者，我必不至缺乏。"
    },
    reference: {
      en: "Psalm 23:1",
      zh: "诗篇 23:1"
    }
  }
]

export function useRandomVerse() {
  const [verse, setVerse] = useState<Verse | null>(null)

  const getRandomVerse = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * verses.length)
    setVerse(verses[randomIndex])
  }, [])

  return { verse, getRandomVerse }
} 