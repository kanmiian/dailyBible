"use client"

import { useLanguage } from "@/context/language-context"
import { Card } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface AboutFaqProps {
  type: 'daily-bible-story' | 'book-of-answers' | 'bible-verse-picker'
}

export default function AboutFaq({ type }: AboutFaqProps) {
  const { t } = useLanguage()

  return (
    <div className="mt-16 space-y-8">
      {/* About Section */}
      <section>
        <h2 className="text-2xl font-serif text-amber-900 dark:text-amber-100 mb-6 text-center">
          {t("about.title")}
        </h2>
        <Card className="p-6 bg-amber-50 dark:bg-amber-900 border-amber-200 dark:border-amber-800">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-amber-800 dark:text-amber-200">
              {t(`about.${type}.description`)}
            </p>
          </div>
        </Card>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl font-serif text-amber-900 dark:text-amber-100 mb-6 text-center">
          {t("faq.title")}
        </h2>
        <Card className="p-6 bg-amber-50 dark:bg-amber-900 border-amber-200 dark:border-amber-800">
          <Accordion type="single" collapsible className="w-full">
            {[1, 2, 3].map((index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-amber-800 dark:text-amber-200">
                  {t(`faq.${type}.question${index}`)}
                </AccordionTrigger>
                <AccordionContent className="text-amber-700 dark:text-amber-300">
                  {t(`faq.${type}.answer${index}`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </section>
    </div>
  )
} 