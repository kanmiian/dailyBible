"use client"

import { useLanguage } from "@/context/language-context"
import Link from "next/link"
import { useState } from "react"
import { useRandomVerse } from "@/hooks/useRandomVerse"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft } from "lucide-react"

export default function BookOfAnswersContent({ lang }: { lang: string }) {
  const { t, language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const { verse, getRandomVerse } = useRandomVerse()

  const handleOpenBook = () => {
    setIsOpen(true)
    getRandomVerse()
  }

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif text-amber-950 dark:text-amber-100 mb-8 text-center">
          {t("answers.title")}
        </h1>
        <p className="text-lg text-amber-800 dark:text-amber-200 mb-8 text-center">
          {t("answers.subtitle")}
        </p>

        <div className="space-y-8">
          <div className="bg-ivory dark:bg-dark-brown p-6 rounded-lg shadow-sm">
            {!isOpen && (
              <p className="text-amber-700 dark:text-amber-400 mb-6 text-center">
                {t("answers.instruction")}
              </p>
            )}
            <div className="relative h-[400px] perspective-1000">
              <AnimatePresence mode="wait">
                {!isOpen ? (
                  <motion.div
                    key="closed"
                    initial={{ rotateY: 0 }}
                    exit={{ rotateY: -90, opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-lg shadow-xl cursor-pointer overflow-hidden group"
                    onClick={handleOpenBook}
                    style={{ 
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "hidden",
                      background: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)"
                    }}
                  >
                    {/* Corner fold effect */}
                    <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[100px] border-r-[100px] border-b-transparent border-r-amber-800/20 group-hover:border-r-amber-800/30 transition-all duration-300"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center transform transition-all duration-300 group-hover:scale-105">
                        <span className="text-amber-900 text-xl font-serif block mb-4">
                          {t("answers.open_book")}
                        </span>
                        <div className="w-16 h-1 bg-amber-900/30 mx-auto rounded-full group-hover:w-20 transition-all duration-300"></div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: 90, opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 bg-ivory dark:bg-dark-brown rounded-lg shadow-xl p-8"
                    style={{ 
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "hidden",
                      transformOrigin: "center center"
                    }}
                  >
                    {verse && (
                      <div className="h-full flex flex-col">
                        <div className="flex-grow">
                          <h2 className="text-xl font-semibold text-amber-800 dark:text-amber-200 mb-4 text-center">
                            {t("answers.your_answer")}
                          </h2>
                          <div className="bg-[rgb(254,243,199)] dark:bg-amber-900/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800/30">
                            <p className="text-amber-700 dark:text-amber-400 text-lg mb-4">
                              {verse.text[language]}
                            </p>
                            <p className="text-amber-600 dark:text-amber-300 text-right italic">
                              — {verse.reference[language]}
                            </p>
                          </div>
                        </div>
                        <div className="mt-8 flex justify-between items-center">
                          <Link
                            href={`/${language}`}
                            className="inline-flex items-center justify-center px-6 py-3 border border-amber-200 dark:border-amber-800 text-base font-medium rounded-md text-amber-900 dark:text-amber-200 bg-ivory dark:bg-dark-brown hover:bg-amber-50 dark:hover:bg-amber-900 transition-colors duration-300 shadow-sm divine-button cross-reveal relative overflow-hidden"
                          >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            {t("answers.back")}
                          </Link>
                          <button
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 transition-colors duration-300 shadow-sm divine-button cross-reveal relative overflow-hidden"
                          >
                            {t("answers.try_again")}
                          </button>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 