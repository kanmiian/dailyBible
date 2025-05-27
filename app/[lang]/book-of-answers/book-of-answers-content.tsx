"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { useRandomAnswer } from "@/hooks/useRandomAnswer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import AboutFaq from "@/components/about-faq"

export default function BookOfAnswersContent({ lang }: { lang: string }) {
  const { t, language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const { answer, getRandomAnswer } = useRandomAnswer()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    getRandomAnswer()
    setMounted(true)
  }, [getRandomAnswer])

  const handleOpenBook = () => {
    setIsOpen(true)
    getRandomAnswer()
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto">
        <h1 className="text-3xl font-serif text-amber-900 dark:text-amber-100 mb-8 text-center">
          {t("nav.book-of-answers")}
        </h1>

        <Card className="p-6 bg-amber-50 dark:bg-amber-900 border-amber-200 dark:border-amber-800">
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
                      {answer && (
                        <div className="h-full flex flex-col">
                          <div className="flex-grow">
                            <h2 className="text-xl font-semibold text-amber-800 dark:text-amber-200 mb-4 text-center">
                              {t("answers.your_answer")}
                            </h2>
                            <div className="bg-[rgb(254,243,199)] dark:bg-amber-900/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800/30">
                              <p className="text-amber-700 dark:text-amber-400 text-lg mb-4">
                                {answer.content[language]}
                              </p>
                              <p className="text-amber-600 dark:text-amber-300 text-right italic">
                                — {answer.reference[language]}
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
        </Card>
        
        <section className="mt-12 p-6 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
        <div className="prose prose-amber dark:prose-invert max-w-none">
          <h2 className="text-2xl font-serif text-amber-900 dark:text-amber-100 mb-4">
            {language === "en" ? "Find Divine Guidance Through Bible Answers" : "通过圣经答案寻找神圣指引"}
          </h2>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {language === "en" 
              ? "Welcome to the Bible Book of Answers, where ancient biblical wisdom meets modern life's questions. Each answer is carefully selected from the Bible's timeless teachings to provide guidance, comfort, and direction. Our collection of Bible answers draws from the rich tradition of biblical wisdom literature, offering practical insights rooted in the Bible's eternal truths. Whether you're seeking guidance for life's challenges or looking for biblical wisdom to apply to your daily decisions, the Bible Book of Answers provides meaningful direction from God's word."
              : "欢迎来到圣经答案之书，在这里，古老的圣经智慧与现代生活的问题相遇。每个答案都经过精心挑选，来自圣经永恒的教导，为您提供指引、安慰和方向。我们的圣经答案集汲取了丰富的圣经智慧文学传统，提供植根于圣经永恒真理的实用见解。无论您是在寻求生活挑战的指引，还是在寻找可以应用到日常决策中的圣经智慧，圣经答案之书都能为您提供来自神的话语的有意义指导。"
            }
          </p>
          <p className="text-lg text-amber-800 dark:text-amber-200">
            {language === "en"
              ? "The Bible's wisdom is as relevant today as it was thousands of years ago. Our Bible Book of Answers helps you connect with this timeless wisdom through carefully selected biblical passages. From the Psalms to the Proverbs, from the Gospels to the Epistles, each Bible answer is chosen to provide meaningful guidance for your specific situation. Let the Bible's eternal truths illuminate your path and transform your life through the power of God's word."
              : "圣经的智慧在今天和几千年前一样重要。我们的圣经答案之书通过精心挑选的圣经经文帮助您与这种永恒的智慧建立联系。从诗篇到箴言，从福音书到书信，每个圣经答案都经过选择，为您的具体情况提供有意义的指导。让圣经的永恒真理通过神的话语的力量照亮您的道路并改变您的生活。"
            }
          </p>
        </div>
      </section>
      </div>
    </div>
  )
} 