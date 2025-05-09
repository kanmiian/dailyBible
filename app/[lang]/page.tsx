import { Metadata } from 'next'
import HomeContent from './home-content'
import { generateSEO } from '@/lib/seo'

type Props = {
  params: { lang: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return generateSEO({ lang: params.lang, path: '/' })
}

export default function Home({ params }: Props) {
  return <HomeContent lang={params.lang} />
}