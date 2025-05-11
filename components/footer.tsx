"use client"

import { useLanguage } from "@/context/language-context"
import Link from "next/link"

export default function Footer() {
  const { t, language } = useLanguage()

  return (
    <footer className="bg-amber-100 dark:bg-amber-900/30 border-t border-amber-200 dark:border-amber-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href={`/${language}/about`}
                  className="hover:text-amber-600 dark:hover:text-amber-400"
                >
                  {t("footer.aboutUs")}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${language}/faq`}
                  className="hover:text-amber-600 dark:hover:text-amber-400"
                >
                  {t("footer.faq")}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${language}/privacy`}
                  className="hover:text-amber-600 dark:hover:text-amber-400"
                >
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${language}/terms`}
                  className="hover:text-amber-600 dark:hover:text-amber-400"
                >
                  {t("footer.terms")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">{t("footer.friends")}</h3>
            <ul className="space-y-2">
              <li>
                <Link  
                  target="_blank"
                  href="https://www.online-guitartuner.com/"
                  className="hover:text-amber-600 dark:hover:text-amber-400"
                >
                  Online Guitar Tuner
                </Link>
              </li>
              <li>
                <Link 
                  target="_blank"
                  href="https://animalbrainrot.com/"
                  className="hover:text-amber-600 dark:hover:text-amber-400"
                >
                  AI Brainrot Animals
                </Link>
              </li>
              <li>
                <Link 
                  target="_blank"
                  href="https://braingames.quest/"
                  className="hover:text-amber-600 dark:hover:text-amber-400"
                >
                  Brain Games
                </Link>
              </li>
              <li>
                <Link 
                  target="_blank"
                  href="https://cattlecrazy3d.com/"
                  className="hover:text-amber-600 dark:hover:text-amber-400"
                >
                  Crazy Cattle 3D
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">{t("footer.contact")}</h3>
            <p className="text-sm">{t("footer.contactInfo")}</p>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-amber-200 dark:border-amber-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {t("footer.rights")}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
            {t("footer.quote")}
          </div>
        </div>
      </div>
    </footer>
  )
}
