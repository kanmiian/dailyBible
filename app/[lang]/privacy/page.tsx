import PrivacyContent from "./privacy-content"

export default function PrivacyPage({ params }: { params: { lang: string } }) {
  return <PrivacyContent lang={params.lang} />
}