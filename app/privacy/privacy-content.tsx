"use client"

import { useLanguage } from "@/context/language-context"

export default function PrivacyContent() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">{t("privacy.title")}</h1>
      <div className="prose prose-lg">
        <p className="text-gray-600 mb-8">{t("privacy.lastUpdated")}</p>

        <h2>{t("privacy.collection.title")}</h2>
        <p>{t("privacy.collection.content")}</p>
        <ul>
          <li>{t("privacy.collection.items.personal")}</li>
          <li>{t("privacy.collection.items.usage")}</li>
          <li>{t("privacy.collection.items.cookies")}</li>
        </ul>

        <h2>{t("privacy.use.title")}</h2>
        <p>{t("privacy.use.content")}</p>
        <ul>
          <li>{t("privacy.use.items.service")}</li>
          <li>{t("privacy.use.items.communication")}</li>
          <li>{t("privacy.use.items.improvement")}</li>
        </ul>

        <h2>{t("privacy.protection.title")}</h2>
        <p>{t("privacy.protection.content")}</p>

        <h2>{t("privacy.cookies.title")}</h2>
        <p>{t("privacy.cookies.content")}</p>

        <h2>{t("privacy.rights.title")}</h2>
        <p>{t("privacy.rights.content")}</p>
        <ul>
          <li>{t("privacy.rights.items.access")}</li>
          <li>{t("privacy.rights.items.correction")}</li>
          <li>{t("privacy.rights.items.deletion")}</li>
          <li>{t("privacy.rights.items.objection")}</li>
        </ul>

        <h2>{t("privacy.contact.title")}</h2>
        <p>{t("privacy.contact.content")}</p>
      </div>
    </div>
  )
} 