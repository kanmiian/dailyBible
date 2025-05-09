export interface BibleVerse {
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
