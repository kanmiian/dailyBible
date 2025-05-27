"use client"

import { useLanguage } from "@/context/language-context"
import Link from "next/link"
import { useRandomStory } from "@/hooks/useRandomStory"
import { ArrowLeft } from "lucide-react"
import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

export default function DailyBibleStoryContent({ lang }: { lang: string }) {
  const { t, language } = useLanguage()
  const { story, getRandomStory } = useRandomStory()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    getRandomStory()
    setMounted(true)
  }, [getRandomStory])

  if (!mounted) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8">

      <Card className="p-6 bg-amber-50 dark:bg-amber-900 border-amber-200 dark:border-amber-800">
        <h1 className="text-3xl md:text-4xl font-serif text-amber-950 dark:text-amber-100 mb-8 text-center">
        {t("nav.daily_bible_story")}
        </h1>
        <p className="text-lg text-amber-800 dark:text-amber-200 mb-8 text-center">
          {t("story.subtitle")}
        </p>
        
        <div className="space-y-6">
          {story && (
            <div className="bg-[rgb(254,243,199)] dark:bg-amber-900/20 p-8 rounded-lg border border-amber-200 dark:border-amber-800/30 shadow-lg">
              <div className="mb-6">
                <h2 className="text-2xl font-serif text-amber-900 dark:text-amber-100 mb-2">
                  {story.title[language]}
                </h2>
                <p className="text-amber-700 dark:text-amber-300 text-sm italic">
                  {story.reference[language]}
                </p>
              </div>
              <div className="prose prose-amber dark:prose-invert max-w-none">
                <p className="text-lg text-amber-800 dark:text-amber-200 leading-relaxed">
                  {story.content[language]}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href={`/${language}`}
            className="inline-flex items-center justify-center px-6 py-3 border border-amber-200 dark:border-amber-800 text-base font-medium rounded-md text-amber-900 dark:text-amber-200 bg-ivory dark:bg-dark-brown hover:bg-amber-50 dark:hover:bg-amber-900 transition-colors duration-300 shadow-sm divine-button cross-reveal relative overflow-hidden"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("story.back_home")}
          </Link>
          <button
            onClick={getRandomStory}
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 transition-colors duration-300 shadow-sm divine-button cross-reveal relative overflow-hidden"
          >
            {t("story.read_another")}
          </button>
        </div>
      </Card>

      <section className="mt-12 p-6 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
        <div className="prose prose-amber dark:prose-invert max-w-none">
          <h2 className="text-2xl font-serif text-amber-900 dark:text-amber-100 mb-4">
            {language === "en" ? "Discover the Power of Bible Stories" : "探索圣经故事的力量"}
          </h2>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {language === "en" 
              ? "Welcome to our Daily Bible Stories platform, where the timeless wisdom of the Bible comes alive through engaging narratives. Each Bible story is carefully selected to provide spiritual nourishment and practical lessons for modern life. Our collection of Bible stories spans from Genesis to Revelation, offering a comprehensive journey through the Bible's most inspiring tales. Whether you're new to Bible stories or a long-time student of the Bible, our daily Bible stories will help you connect with God's word in a meaningful way."
              : "欢迎来到我们的每日圣经故事平台，在这里，圣经的永恒智慧通过引人入胜的叙述变得生动。每个圣经故事都经过精心挑选，为现代生活提供灵性滋养和实践教训。我们的圣经故事集从创世记到启示录，为您提供一次穿越圣经最鼓舞人心的故事的全面旅程。无论您是圣经故事的新手还是长期学习者，我们的每日圣经故事都将帮助您以有意义的方式与神的话语建立联系。"
            }
          </p>
          <p className="text-lg text-amber-800 dark:text-amber-200">
            {language === "en"
              ? "Our Bible stories are more than just historical accounts - they are living narratives that continue to inspire and guide. From the creation story in Genesis to the parables of Jesus in the Gospels, each Bible story offers unique insights and practical wisdom for daily living. Join us on this journey through the Bible's most powerful stories, and discover how these ancient tales can transform your life today."
              : "我们的圣经故事不仅仅是历史记载，而是继续激励和指导的活生生的叙述。从创世记中的创世故事到福音书中耶稣的比喻，每个圣经故事都为日常生活提供独特的见解和实用智慧。加入我们，一起探索圣经中最有力的故事，发现这些古老的故事如何能在今天改变您的生活。"
            }
          </p>
        </div>
      </section>
    </div>
  )
} 