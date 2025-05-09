import { Metadata } from "next"
import { generateSEO } from "@/lib/seo"
import TermsContent from "./terms-content"

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  return generateSEO({ lang: params.lang, path: '/terms' })
}

export default function TermsPage({ params }: { params: { lang: string } }) {
  return <TermsContent lang={params.lang} />
}