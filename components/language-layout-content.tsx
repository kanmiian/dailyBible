"use client"

import { useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function LanguageLayoutContent({ 
  children, 
  lang 
}: { 
  children: React.ReactNode; 
  lang: string 
}) {
  // Update the HTML lang attribute to match the current language
  useEffect(() => {
    if (document && document.documentElement) {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}
