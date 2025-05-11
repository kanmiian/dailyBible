import { NextResponse } from 'next/server'

const verses = {
  en: [
    {
      text: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.",
      reference: "Jeremiah 29:11"
    },
    {
      text: "I can do all things through Christ who strengthens me.",
      reference: "Philippians 4:13"
    },
    {
      text: "The LORD is my shepherd, I lack nothing.",
      reference: "Psalm 23:1"
    },
    {
      text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.",
      reference: "Joshua 1:9"
    },
    {
      text: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
      reference: "Proverbs 3:5-6"
    }
  ],
  zh: [
    {
      text: "耶和华说：我知道我向你们所怀的意念是赐平安的意念，不是降灾祸的意念，要叫你们末后有指望。",
      reference: "耶利米书 29:11"
    },
    {
      text: "我靠着那加给我力量的，凡事都能做。",
      reference: "腓立比书 4:13"
    },
    {
      text: "耶和华是我的牧者，我必不至缺乏。",
      reference: "诗篇 23:1"
    },
    {
      text: "我岂没有吩咐你吗？你当刚强壮胆！不要惧怕，也不要惊惶，因为你无论往哪里去，耶和华你的神必与你同在。",
      reference: "约书亚记 1:9"
    },
    {
      text: "你要专心仰赖耶和华，不可倚靠自己的聪明。在你一切所行的事上，都要认定他，他必指引你的路。",
      reference: "箴言 3:5-6"
    }
  ]
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const lang = searchParams.get('lang') || 'en'
  
  const langVerses = verses[lang as keyof typeof verses] || verses.en
  const randomVerse = langVerses[Math.floor(Math.random() * langVerses.length)]
  
  return NextResponse.json(randomVerse)
} 