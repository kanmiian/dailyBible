"use client"

import { useState, useRef } from "react"
import { useLanguage } from "@/context/language-context"
import { getRandomVerse } from "@/lib/utils"
import type { BibleVerse } from "@/lib/types"
import Link from "next/link"
import { ArrowLeft, BookOpen } from "lucide-react"

export default function BookOfAnswers() {
  const { t, language } = useLanguage()
  const [stage, setStage] = useState<"thinking" | "animation" | "answer">("thinking")
  const [verse, setVerse] = useState<BibleVerse | null>(null)
  const bookRef = useRef<HTMLDivElement>(null)

  const handleOpenBook = async () => {
    setStage("animation")

    // 获取随机经文
    const randomVerse = await getRandomVerse()
    setVerse(randomVerse)

    // 播放翻书动画后显示答案
    setTimeout(() => {
      setStage("answer")
    }, 1500)
  }

  const handleReset = () => {
    setStage("thinking")
    setVerse(null)
  }

  return (
    <section className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-24 bg-gradient-to-b from-amber-50 to-ivory dark:from-dark-brown dark:to-darker-brown transition-colors duration-300">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-3xl md:text-5xl font-serif font-light text-amber-950 dark:text-amber-100 mb-6 text-center transition-colors duration-300 star-twinkle">
          {t("answers.title")}
        </h1>
        <p className="text-lg md:text-xl text-amber-800 dark:text-amber-200 mb-12 font-light text-center transition-colors duration-300">
          {t("answers.subtitle")}
        </p>

        <div className="w-full max-w-2xl mx-auto">
          {stage === "thinking" && (
            <div className="flex flex-col items-center">
              <div className="mb-10 text-center">
                <p className="text-xl text-amber-900 dark:text-amber-200 mb-8 transition-colors duration-300">
                  {t("answers.instruction")}
                </p>
                <button
                  onClick={handleOpenBook}
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-amber-600 to-amber-700 rounded-md shadow-lg overflow-hidden transition-all duration-300 hover:from-amber-700 hover:to-amber-800 hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 active:shadow-md divine-button cross-reveal relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <BookOpen className="mr-2 h-5 w-5" />
                  {t("answers.open_book")}
                </button>
              </div>

              <div className="mt-8 w-full max-w-md">
                <div className="book-closed w-full h-64 md:h-80 bg-gradient-to-r from-amber-800 to-amber-700 rounded-lg shadow-xl flex items-center justify-center transform transition-all duration-500 hover:shadow-2xl star-twinkle">
                  <div className="book-spine absolute h-full w-8 left-1/2 -ml-4 bg-amber-900"></div>
                  <div className="book-cover w-full h-full rounded-lg bg-gradient-to-r from-amber-700 to-amber-600 flex items-center justify-center p-6">
                    <h3 className="text-2xl font-serif text-amber-100 text-center">
                      {language === "zh" ? "圣经" : "Holy Bible"}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          )}

          {stage === "animation" && (
            <div className="flex flex-col items-center">
              <div className="w-full max-w-md">
                <div
                  ref={bookRef}
                  className="book-opening w-full h-64 md:h-80 bg-amber-100 rounded-lg shadow-xl flex items-center justify-center overflow-hidden"
                >
                  <div className="book-left-page w-1/2 h-full bg-ivory transform origin-right animate-page-turn"></div>
                  <div className="book-right-page w-1/2 h-full bg-ivory"></div>
                </div>
              </div>
            </div>
          )}

          {stage === "answer" && verse && (
            <div className="flex flex-col items-center">
              <div className="w-full max-w-md mb-8">
                <div className="book-open w-full h-64 md:h-80 bg-amber-100 rounded-lg shadow-xl flex items-center justify-center p-4 star-twinkle">
                  <div className="book-pages w-full h-full bg-ivory rounded flex items-center justify-center p-6 overflow-y-auto">
                    <div className="text-center">
                      <h3 className="text-xl font-serif text-amber-950 mb-4">{t("answers.your_answer")}</h3>
                      <p className="text-lg text-amber-900 mb-4 font-serif italic">
                        "{language === "zh" ? verse.text.zh : verse.text.en}"
                      </p>
                      <p className="text-right text-amber-700">
                        — {language === "zh" ? verse.reference.zh : verse.reference.en}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 border border-amber-200 dark:border-amber-800 text-base font-medium rounded-md text-amber-900 dark:text-amber-200 bg-ivory dark:bg-dark-brown hover:bg-amber-50 dark:hover:bg-amber-900 transition-colors duration-300 shadow-sm divine-button cross-reveal relative overflow-hidden"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t("answers.back")}
                </Link>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 transition-colors duration-300 shadow-sm divine-button cross-reveal relative overflow-hidden"
                >
                  {t("answers.try_again")}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
