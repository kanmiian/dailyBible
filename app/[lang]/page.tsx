import { Metadata } from 'next'
import HomeContent from './home-content'
import { generateSEO } from '@/lib/seo'

type Props = {
  params: { lang: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const lang = resolvedParams.lang === 'zh' || resolvedParams.lang === 'en' ? resolvedParams.lang : 'en'
  return await generateSEO({ lang, path: '/' })
}

export default async function HomePage({ params }: Props) {
  const lang = params.lang === 'zh' || params.lang === 'en' ? params.lang : 'en'
  return <HomeContent lang={lang} />
}