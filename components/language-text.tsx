"use client"

import { useLanguage } from "@/context/language-context"

interface LanguageTextProps {
  en: string;
  zh: string;
}

export default function LanguageText({ en, zh }: LanguageTextProps) {
  const { language } = useLanguage();
  
  return language === "en" ? en : zh;
}
