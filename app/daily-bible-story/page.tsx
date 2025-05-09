"use client"

import type { Metadata } from "next"
import RandomStory from "@/components/random-story"
import Link from "next/link"
import { useLanguage } from "@/context/language-context"
import { ArrowLeft, BookOpen } from "lucide-react"
import { generateSEO } from "@/lib/seo"

export async function generateMetadata(): Promise<Metadata> {
  return generateSEO({ lang: 'en', path: '/daily-bible-story' })
}

export default function DailyBibleStory() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-24 bg-gradient-to-b from-amber-50 to-ivory dark:from-dark-brown dark:to-darker-brown transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-serif font-light text-amber-950 dark:text-amber-100 mb-6 text-center star-twinkle transition-colors duration-300">
            {t("story.title")}
          </h1>
          <p className="text-lg md:text-xl text-amber-800 dark:text-amber-200 mb-12 font-light text-center transition-colors duration-300">
            {t("story.subtitle")}
          </p>

          <div className="w-full">
            <RandomStory />
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="divine-button inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-amber-900 dark:text-amber-200 bg-ivory dark:bg-dark-brown border border-amber-200 dark:border-amber-800 hover:bg-amber-50 dark:hover:bg-amber-900 transition-all duration-300 shadow-md hover:shadow-lg cross-reveal relative overflow-hidden"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              {t("story.back_home")}
            </Link>
            <Link
              href="/book-of-answers"
              className="divine-button inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-md hover:shadow-lg cross-reveal relative overflow-hidden"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              {t("home.consult_book")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
