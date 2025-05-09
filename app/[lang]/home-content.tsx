"use client"

import { useLanguage } from "@/context/language-context"
import Link from "next/link"
import RandomVerse from "@/components/random-verse"
import { ArrowRight } from "lucide-react"

export default function HomeContent({ lang }: { lang: string }) {
  const { t } = useLanguage()

  return (
    <main className="flex-1">
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