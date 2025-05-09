"use client"

import { useLanguage } from "@/context/language-context"
import Link from "next/link"
import { useRandomStory } from "@/hooks/useRandomStory"
import { ArrowLeft } from "lucide-react"
import { useEffect } from "react"

export default function DailyBibleStoryContent({ lang }: { lang: string }) {
  const { t, language } = useLanguage()
  const { story, getRandomStory } = useRandomStory()

  // Load a random story when the component mounts
  useEffect(() => {
    getRandomStory()
  }, [getRandomStory])

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif text-amber-950 dark:text-amber-100 mb-8 text-center">
          {t("story.title")}
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

        <div className="mt-8 flex justify-between items-center">
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
      </div>
    </main>
  )
} 