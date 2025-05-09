import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata(
  "FAQ - Bible Daily",
  "Frequently asked questions about Bible Daily's Bible stories and services.",
  "/faq"
)

import FAQContent from "./faq-content"

export default function FAQPage() {
  return <FAQContent />
} 