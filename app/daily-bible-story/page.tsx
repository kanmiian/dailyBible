import { Metadata } from "next"
import { generateSEO } from "@/lib/seo"
import DailyBibleStoryClient from "./client"

export async function generateMetadata(): Promise<Metadata> {
  return generateSEO({ lang: 'en', path: '/daily-bible-story' })
}

export default function DailyBibleStoryPage() {
  return <DailyBibleStoryClient />
}
