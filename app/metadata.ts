import { Metadata } from 'next'
import { generateSEO } from '@/lib/seo'

export function generateMetadata(lang: string): Metadata {
  const path = '/' // 默认路径，子页面会覆盖这个值
  
  return generateSEO({ lang, path })
} 