import { Metadata } from "next"
import { generateSEO } from "@/lib/seo"
import PrivacyContent from "./privacy-content"

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  return generateSEO({ lang: params.lang, path: '/privacy' })
}

export default function PrivacyPage({ params }: { params: { lang: string } }) {
  return <PrivacyContent lang={params.lang} />
}