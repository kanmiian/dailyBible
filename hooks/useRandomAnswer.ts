import { useState, useCallback } from 'react'

interface Answer {
  title: {
    en: string
    zh: string
  }
  reference: {
    en: string
    zh: string
  }
  content: {
    en: string
    zh: string
  }
}

// Sample answers - replace with your actual answers
const answers: Answer[] = [
  {
    title: {
      en: "God's Plan for You",
      zh: "神对你的计划"
    },
    reference: {
      en: "Jeremiah 29:11",
      zh: "耶利米书 29:11"
    },
    content: {
      en: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.",
      zh: "耶和华说：我知道我向你们所怀的意念是赐平安的意念，不是降灾祸的意念，要叫你们末后有指望。"
    }
  },
  {
    title: {
      en: "Strength in Christ",
      zh: "在基督里的力量"
    },
    reference: {
      en: "Philippians 4:13",
      zh: "腓立比书 4:13"
    },
    content: {
      en: "I can do all things through Christ who strengthens me.",
      zh: "我靠着那加给我力量的，凡事都能做。"
    }
  },
  {
    title: {
      en: "The Lord is My Shepherd",
      zh: "耶和华是我的牧者"
    },
    reference: {
      en: "Psalm 23:1",
      zh: "诗篇 23:1"
    },
    content: {
      en: "The LORD is my shepherd, I lack nothing.",
      zh: "耶和华是我的牧者，我必不至缺乏。"
    }
  }
]

export function useRandomAnswer() {
  const [answer, setAnswer] = useState<Answer | null>(null)

  const getRandomAnswer = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * answers.length)
    setAnswer(answers[randomIndex])
  }, [])

  return { answer, getRandomAnswer }
} 