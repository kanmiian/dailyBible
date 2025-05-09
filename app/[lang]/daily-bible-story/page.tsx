import { Metadata } from "next"
import { generateSEO } from "@/lib/seo"
import DailyBibleStoryContent from "./daily-bible-story-content"

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  return generateSEO({ lang: params.lang, path: '/daily-bible-story' })
}

export default function DailyBibleStoryPage({ params }: { params: { lang: string } }) {
  return <DailyBibleStoryContent lang={params.lang} />
} 