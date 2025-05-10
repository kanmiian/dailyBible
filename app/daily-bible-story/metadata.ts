import { Metadata } from "next"
import { generateSEO } from "@/lib/seo"

export async function generateMetadata(): Promise<Metadata> {
  return generateSEO({ lang: 'en', path: '/daily-bible-story' })
} 