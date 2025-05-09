"use client"

import { useLanguage } from "@/context/language-context"

export default function FAQContent() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">{t("faq.title")}</h1>
      <div className="prose prose-lg">
        <h2>{t("faq.general.title")}</h2>
        
        <h3>{t("faq.general.what.q")}</h3>
        <p>{t("faq.general.what.a")}</p>

        <h3>{t("faq.general.free.q")}</h3>
        <p>{t("faq.general.free.a")}</p>

        <h2>{t("faq.content.title")}</h2>

        <h3>{t("faq.content.frequency.q")}</h3>
        <p>{t("faq.content.frequency.a")}</p>

        <h3>{t("faq.content.bilingual.q")}</h3>
        <p>{t("faq.content.bilingual.a")}</p>

        <h3>{t("faq.content.accuracy.q")}</h3>
        <p>{t("faq.content.accuracy.a")}</p>

        <h2>{t("faq.technical.title")}</h2>

        <h3>{t("faq.technical.language.q")}</h3>
        <p>{t("faq.technical.language.a")}</p>

        <h3>{t("faq.technical.favorites.q")}</h3>
        <p>{t("faq.technical.favorites.a")}</p>

        <h2>{t("faq.account.title")}</h2>

        <h3>{t("faq.account.create.q")}</h3>
        <p>{t("faq.account.create.a")}</p>

        <h3>{t("faq.account.security.q")}</h3>
        <p>{t("faq.account.security.a")}</p>

        <h2>{t("faq.community.title")}</h2>

        <h3>{t("faq.community.share.q")}</h3>
        <p>{t("faq.community.share.a")}</p>

        <h3>{t("faq.community.report.q")}</h3>
        <p>{t("faq.community.report.a")}</p>

        <h2>{t("faq.contact.title")}</h2>

        <h3>{t("faq.contact.support.q")}</h3>
        <p>{t("faq.contact.support.a")}</p>

        <h3>{t("faq.contact.custom.q")}</h3>
        <p>{t("faq.contact.custom.a")}</p>
      </div>
    </div>
  )
} 