import { Metadata } from "next"
import { generateSEO } from "@/lib/seo"
import BookOfAnswersContent from "./book-of-answers-content"

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  return generateSEO({ lang: params.lang, path: '/book-of-answers' })
}

export default function BookOfAnswersPage({ params }: { params: { lang: string } }) {
  return <BookOfAnswersContent lang={params.lang} />
} 