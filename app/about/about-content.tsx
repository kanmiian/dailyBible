"use client"

import { useLanguage } from "@/context/language-context"

export default function AboutContent() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">{t("about.title")}</h1>
      <div className="prose prose-lg">
        <h2>{t("about.mission.title")}</h2>
        <p>{t("about.mission.content")}</p>

        <h2>{t("about.story.title")}</h2>
        <p>{t("about.story.content")}</p>

        <h2>{t("about.offer.title")}</h2>
        <ul>
          {Array.isArray(t("about.offer.items")) && 
            (t("about.offer.items") as string[]).map((item, index) => (
              <li key={index}>{item}</li>
            ))
          }
        </ul>

        <h2>{t("about.approach.title")}</h2>
        <p>{t("about.approach.content")}</p>
        <ul>
          {Array.isArray(t("about.approach.items")) && 
            (t("about.approach.items") as string[]).map((item, index) => (
              <li key={index}>{item}</li>
            ))
          }
        </ul>

        <h2>{t("about.team.title")}</h2>
        <p>{t("about.team.content")}</p>

        <h2>{t("about.community.title")}</h2>
        <p>{t("about.community.content")}</p>

        <h2>{t("about.contact.title")}</h2>
        <p>{t("about.contact.content")}</p>
      </div>
    </div>
  )
} 