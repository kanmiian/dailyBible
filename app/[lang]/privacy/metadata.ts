import { Metadata } from "next"
import { generateSEO } from "@/lib/seo"

type Props = {
  params: { lang: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return generateSEO({ lang: params.lang, path: '/privacy' })
} 