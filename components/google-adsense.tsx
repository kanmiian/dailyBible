"use client"

import Script from "next/script"

export default function GoogleAdsense() {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1787814795629825"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  )
} 