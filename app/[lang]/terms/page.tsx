import TermsContent from "./terms-content"

export default function TermsPage({ params }: { params: { lang: string } }) {
  return <TermsContent lang={params.lang} />
}