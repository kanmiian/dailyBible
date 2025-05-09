import type { Metadata } from "next"
import BookOfAnswers from "@/components/book-of-answers"
import { generateSEO } from "@/lib/seo"

export async function generateMetadata(): Promise<Metadata> {
  return generateSEO({ lang: 'en', path: '/book-of-answers' })
}

export default function BookOfAnswersPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <BookOfAnswers />
    </main>
  )
}
