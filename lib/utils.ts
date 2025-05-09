import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import bibleVerses from "./bible-verses.json"
import bibleStories from "./bible-stories.json"
import type { BibleVerse, BibleStory } from "./types"

export async function getRandomVerse(): Promise<BibleVerse> {
  // In a real app, you might fetch this from an API
  const verses = bibleVerses as BibleVerse[]
  const randomIndex = Math.floor(Math.random() * verses.length)
  return verses[randomIndex]
}

export async function getRandomStory(): Promise<BibleStory> {
  // In a real app, you might fetch this from an API
  const stories = bibleStories as BibleStory[]
  const randomIndex = Math.floor(Math.random() * stories.length)
  return stories[randomIndex]
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
