import { Metadata } from "next"

const BASE_URL = "https://bibleforu.info"

export function generateMetadata(
  title: string,
  description: string,
  path: string = ""
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}${path}`,
      languages: {
        'en': '/en' + path,
        'zh': '/zh' + path,
      },
    },
    metadataBase: new URL(BASE_URL),
    openGraph: {
      url: path,
    },
  }
} 