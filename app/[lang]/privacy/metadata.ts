import { Metadata } from "next"
import { generateSEO } from "@/lib/seo"

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const lang = params.lang
  return generateSEO({ lang, path: '/privacy' })
} 