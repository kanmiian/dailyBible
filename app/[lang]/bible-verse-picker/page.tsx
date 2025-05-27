import { Metadata } from "next"
import { generateSEO } from "@/lib/seo"
import BibleVersePickerContent from "./bible-verse-picker-content"

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  return generateSEO({ lang: params.lang, path: '/bible-verse-picker' })
}

export default function BibleVersePickerPage() {
  return <BibleVersePickerContent />
} 