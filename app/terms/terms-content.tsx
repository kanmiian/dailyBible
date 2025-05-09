"use client"

import { useLanguage } from "@/context/language-context"

export default function TermsContent() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">{t("terms.title")}</h1>
      <div className="prose prose-lg">
        <p className="text-gray-600 mb-8">{t("terms.lastUpdated")}</p>

        <h2>{t("terms.acceptance.title")}</h2>
        <p>{t("terms.acceptance.content")}</p>

        <h2>{t("terms.eligibility.title")}</h2>
        <p>{t("terms.eligibility.content")}</p>

        <h2>{t("terms.account.title")}</h2>
        <p>{t("terms.account.content")}</p>
        <ul>
          <li>{t("terms.account.items.accuracy")}</li>
          <li>{t("terms.account.items.security")}</li>
          <li>{t("terms.account.items.notification")}</li>
        </ul>

        <h2>{t("terms.content.title")}</h2>
        <p>{t("terms.content.content")}</p>
        <ul>
          <li>{t("terms.content.items.ownership")}</li>
          <li>{t("terms.content.items.license")}</li>
          <li>{t("terms.content.items.restrictions")}</li>
        </ul>

        <h2>{t("terms.conduct.title")}</h2>
        <p>{t("terms.conduct.content")}</p>
        <ul>
          <li>{t("terms.conduct.items.respectful")}</li>
          <li>{t("terms.conduct.items.lawful")}</li>
          <li>{t("terms.conduct.items.appropriate")}</li>
        </ul>

        <h2>{t("terms.termination.title")}</h2>
        <p>{t("terms.termination.content")}</p>

        <h2>{t("terms.changes.title")}</h2>
        <p>{t("terms.changes.content")}</p>

        <h2>{t("terms.contact.title")}</h2>
        <p>{t("terms.contact.content")}</p>
      </div>
    </div>
  )
} 