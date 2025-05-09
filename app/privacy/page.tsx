import type { Metadata } from "next"
import { generateSEO } from "@/lib/seo"
import PrivacyContent from "./privacy-content"

export async function generateMetadata(): Promise<Metadata> {
  return generateSEO({ lang: 'en', path: '/privacy' })
}

export default function PrivacyPage() {
  return <PrivacyContent />
}