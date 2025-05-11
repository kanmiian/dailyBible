"use client"

import { useLanguage } from "@/context/language-context"
import Link from "next/link"
import RandomVerse from "@/components/random-verse"
import { ArrowRight } from "lucide-react"

export default function HomeContent({ lang }: { lang: string }) {
  const { t } = useLanguage()

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                {t("home.title")}
              </h1>
              <p className="mx-auto max-w-[700px] text-amber-700 dark:text-amber-400 md:text-xl">
                {t("home.subtitle")}
              </p>
            </div>
            
            {/* Random Verse Section */}
            <div className="w-full max-w-3xl">
              <RandomVerse />
            </div>
          </div>
        </div>
      </section>

      {/* About Website Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-amber-50 dark:bg-amber-900/20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {t("home.aboutWebsite.title")}
              </h2>
              <p className="text-amber-700 dark:text-amber-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("home.aboutWebsite.description")}
              </p>
              <p className="text-amber-700 dark:text-amber-400 md:text-lg/relaxed">
                {lang === "en" 
                  ? "Our platform brings the timeless wisdom of the Bible to life through engaging Bible stories and interactive features. Whether you're seeking daily inspiration or deeper biblical understanding, our carefully curated Bible stories and resources are designed to enrich your spiritual journey."
                  : "我们的平台通过引人入胜的圣经故事和互动功能，让圣经的永恒智慧焕发生机。无论您是在寻求每日灵感还是更深入的圣经理解，我们精心策划的圣经故事和资源都旨在丰富您的灵性旅程。"
                }
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-full max-w-[500px] rounded-lg bg-amber-100 dark:bg-amber-800/30 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200/50 to-transparent dark:from-amber-700/50 rounded-lg"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-4">{t("home.aboutWebsite.features.title")}</h3>
                  <ul className="space-y-2">
                    {["multilingual", "dailyVerses", "bookOfAnswers", "userFriendly"].map((feature) => (
                      <li key={feature} className="flex items-center text-amber-700 dark:text-amber-400">
                        <span className="mr-2">•</span>
                        {t(`home.aboutWebsite.features.${feature}`)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bible Introduction Section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-full max-w-[500px] rounded-lg bg-amber-100 dark:bg-amber-800/30 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200/50 to-transparent dark:from-amber-700/50 rounded-lg"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-4">{t("home.bibleIntro.keyPoints.title")}</h3>
                  <ul className="space-y-2">
                    {["divineInspiration", "historicalSignificance", "spiritualGuidance", "culturalImpact"].map((point) => (
                      <li key={point} className="flex items-center text-amber-700 dark:text-amber-400">
                        <span className="mr-2">•</span>
                        {t(`home.bibleIntro.keyPoints.${point}`)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {t("home.bibleIntro.title")}
              </h2>
              <p className="text-amber-700 dark:text-amber-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("home.bibleIntro.description")}
              </p>
              <p className="text-amber-700 dark:text-amber-400 md:text-lg/relaxed">
                {lang === "en"
                  ? "The Bible, a collection of sacred texts, contains numerous Bible stories that have shaped civilizations and guided countless lives. These Bible stories, from Genesis to Revelation, offer profound insights into human nature, divine wisdom, and spiritual truths. Through our platform, we make these Bible stories accessible and relevant to modern readers."
                  : "圣经作为一部神圣文本的集合，包含了无数塑造文明并指导无数生命的圣经故事。从创世记到启示录，这些圣经故事为人类本性、神圣智慧和灵性真理提供了深刻的见解。通过我们的平台，我们使这些圣经故事对现代读者来说既易于理解又具有现实意义。"
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Bible Story Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-amber-50 dark:bg-amber-900/20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {t("home.dailyBibleStory.title")}
              </h2>
              <p className="text-amber-700 dark:text-amber-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("home.dailyBibleStory.description")}
              </p>
              <p className="text-amber-700 dark:text-amber-400 md:text-lg/relaxed">
                {lang === "en"
                  ? "Each day, we present a carefully selected Bible story that resonates with contemporary life. These Bible stories are not just historical accounts but living narratives that continue to inspire and guide. From the creation story to the parables of Jesus, each Bible story offers unique insights and practical wisdom for daily living."
                  : "每天，我们都会呈现一个精心挑选的、与当代生活产生共鸣的圣经故事。这些圣经故事不仅仅是历史记载，而是继续激励和指导的活生生的叙述。从创世故事到耶稣的比喻，每个圣经故事都为日常生活提供独特的见解和实用智慧。"
                }
              </p>
              <div className="flex space-x-4">
                <Link
                  href={`/${lang}/daily-bible-story`}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-amber-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus-visible:ring-amber-600"
                >
                  {t("home.dailyBibleStory.readNow")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-full max-w-[500px] rounded-lg bg-amber-100 dark:bg-amber-800/30 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200/50 to-transparent dark:from-amber-700/50 rounded-lg"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-4">{t("home.dailyBibleStory.features.title")}</h3>
                  <ul className="space-y-2">
                    {["dailyStories", "interactive", "reflection", "growth"].map((feature) => (
                      <li key={feature} className="flex items-center text-amber-700 dark:text-amber-400">
                        <span className="mr-2">•</span>
                        {t(`home.dailyBibleStory.features.${feature}`)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book of Answers Section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {t("home.bookOfAnswers.title")}
              </h2>
              <p className="text-amber-700 dark:text-amber-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("home.bookOfAnswers.description")}
              </p>
              <p className="text-amber-700 dark:text-amber-400 md:text-lg/relaxed">
                {lang === "en"
                  ? "Drawing from the rich tapestry of Bible stories and biblical wisdom, our Book of Answers provides divine guidance for life's questions. Each response is rooted in biblical principles and illustrated through relevant Bible stories, offering both spiritual insight and practical application."
                  : "我们的答案之书从丰富的圣经故事和圣经智慧中汲取灵感，为人生问题提供神圣指引。每个回答都植根于圣经原则，并通过相关的圣经故事进行说明，既提供灵性洞见，又提供实际应用。"
                }
              </p>
              <div className="flex space-x-4">
                <Link
                  href={`/${lang}/book-of-answers`}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-amber-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus-visible:ring-amber-600"
                >
                  {t("home.bookOfAnswers.tryNow")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-full max-w-[500px] rounded-lg bg-amber-100 dark:bg-amber-800/30 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200/50 to-transparent dark:from-amber-700/50 rounded-lg"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-4">{t("home.bookOfAnswers.features.title")}</h3>
                  <ul className="space-y-2">
                    {["divineGuidance", "personalReflection", "spiritualGrowth", "dailyWisdom"].map((feature) => (
                      <li key={feature} className="flex items-center text-amber-700 dark:text-amber-400">
                        <span className="mr-2">•</span>
                        {t(`home.bookOfAnswers.features.${feature}`)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 