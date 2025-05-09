import type { Metadata } from "next"
import { generateSEO } from "@/lib/seo"
import TermsContent from "./terms-content"

export async function generateMetadata(): Promise<Metadata> {
  return generateSEO({ lang: 'en', path: '/terms' })
}

export default function TermsPage() {
  return <TermsContent />
}