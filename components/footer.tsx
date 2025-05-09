"use client"

import { useLanguage } from "@/context/language-context"
import { useRandomQuote } from "@/hooks/useRandomQuote"
import Link from "next/link"
import dynamic from 'next/dynamic'

const FooterQuote = dynamic(() => import('./footer-quote'), {
  ssr: false
})

export default function Footer() {
  const { t, language } = useLanguage()

  return (
    <footer className="bg-ivory dark:bg-darker-brown border-t border-amber-200 dark:border-amber-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-300">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${language}/about`} className="text-sm text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-200 transition-colors duration-300">
                  {t("footer.aboutUs")}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/faq`} className="text-sm text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-200 transition-colors duration-300">
                  {t("footer.faq")}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/privacy`} className="text-sm text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-200 transition-colors duration-300">
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/terms`} className="text-sm text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-200 transition-colors duration-300">
                  {t("footer.terms")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-300">{t("footer.contact")}</h3>
            <p className="text-sm text-amber-700 dark:text-amber-400">
              {t("footer.contactInfo")}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-amber-200 dark:border-amber-900">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:justify-start">
              <p className="text-amber-700 dark:text-amber-400 text-sm transition-colors duration-300">
                &copy; {new Date().getFullYear()} {t("home.title")}. {t("footer.rights")}.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <FooterQuote />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
