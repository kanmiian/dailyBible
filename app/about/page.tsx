import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata(
  "About Us - Bible Daily",
  "Learn about Bible Daily's mission to share Bible stories and promote spiritual growth through daily readings.",
  "/about"
)

import AboutContent from "./about-content"

export default function AboutPage() {
  return <AboutContent />
} 