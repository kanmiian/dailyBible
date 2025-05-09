import { Metadata } from "next"
import { generateSEO } from "@/lib/seo"

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const { lang } = params
  return generateSEO({ lang, path: '/book-of-answers' })
} 