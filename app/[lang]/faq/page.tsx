import { Metadata } from "next"
import { generateSEO } from "@/lib/seo"
import FAQContent from "./faq-content"

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  return generateSEO({ lang: params.lang, path: "/faq" })
}

export default function FAQPage({ params }: { params: { lang: string } }) {
  return <FAQContent lang={params.lang} />
}