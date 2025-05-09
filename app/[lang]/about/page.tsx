import { Metadata } from "next"
import { generateSEO } from "@/lib/seo"
import AboutContent from "./about-content"

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  return generateSEO({ lang: params.lang, path: '/about' })
}

export default function AboutPage({ params }: { params: { lang: string } }) {
  return <AboutContent lang={params.lang} />
}