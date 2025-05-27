"use client"

import { useState, useRef, useEffect } from "react"
import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { toast } from "sonner"
import html2canvas from "html2canvas"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Loader2 } from "lucide-react"
import AboutFaq from "@/components/about-faq"

export default function BibleVersePickerContent({ lang }: { lang: string }) {
  const { t, language } = useLanguage()
  const [isDrawing, setIsDrawing] = useState(false)
  const [selectedVerse, setSelectedVerse] = useState<string | null>(null)
  const [showMessage, setShowMessage] = useState(false)
  const [messageType, setMessageType] = useState<'goodLuck' | 'holySpirit'>('goodLuck')
  const verseRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const [showPreview, setShowPreview] = useState(false)
  const [currentVerse, setCurrentVerse] = useState<string | null>(null)
  const [isGeneratingImage, setIsGeneratingImage] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isDrawing) {
      interval = setInterval(() => {
        const verseList = verses[language as keyof typeof verses]
        const randomIndex = Math.floor(Math.random() * verseList.length)
        setCurrentVerse(verseList[randomIndex])
      }, 100)
    }
    return () => clearInterval(interval)
  }, [isDrawing, language])

  // Sample verses - replace with your actual verses
  const verses = {
    en: [
      "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future. - Jeremiah 29:11",
      "I can do all things through Christ who strengthens me. - Philippians 4:13",
      "The LORD is my shepherd, I lack nothing. - Psalm 23:1",
    ],
    zh: [
      "耶和华说：我知道我向你们所怀的意念是赐平安的意念，不是降灾祸的意念，要叫你们末后有指望。 - 耶利米书 29:11",
      "我靠着那加给我力量的，凡事都能做。 - 腓立比书 4:13",
      "耶和华是我的牧者，我必不至缺乏。 - 诗篇 23:1",
    ],
  }

  const startDrawing = () => {
    setIsDrawing(true)
    setShowMessage(false)
    setSelectedVerse(null)
    setCurrentVerse(null)
  }

  const stopDrawing = () => {
    setIsDrawing(false)
    if (currentVerse) {
      setSelectedVerse(currentVerse)
      setShowMessage(true)
      setMessageType(Math.random() > 0.5 ? 'goodLuck' : 'holySpirit')
    }
  }

  const copyVerse = async () => {
    if (selectedVerse) {
      try {
        await navigator.clipboard.writeText(selectedVerse)
        toast.success(t("verse.copy_success"))
      } catch (err) {
        toast.error(t("verse.copy_error"))
      }
    }
  }

  const shareVerse = async () => {
    if (selectedVerse) {
      try {
        // 构建 Twitter 分享 URL
        const twitterText = encodeURIComponent(selectedVerse)
        const twitterUrl = `https://twitter.com/intent/tweet?text=${twitterText}`
        
        // 打开 Twitter 分享窗口
        window.open(twitterUrl, '_blank', 'width=600,height=400')
      } catch (err) {
        toast.error(t("verse.share_error"))
      }
    }
  }

  const generateImage = async () => {
    if (verseRef.current) {
      try {
        setIsGeneratingImage(true)
        // 创建一个临时div来生成图片
        const tempDiv = document.createElement('div')
        tempDiv.style.backgroundImage = "url('/images/background.webp')"
        tempDiv.style.backgroundSize = "cover"
        tempDiv.style.backgroundPosition = "center"
        tempDiv.style.position = "relative"
        tempDiv.style.minHeight = "200px"
        tempDiv.style.display = "flex"
        tempDiv.style.alignItems = "center"
        tempDiv.style.justifyContent = "center"
        tempDiv.style.padding = "1.5rem"
        
        // 添加半透明遮罩
        const overlay = document.createElement('div')
        overlay.style.position = "absolute"
        overlay.style.inset = "0"
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.3)"
        tempDiv.appendChild(overlay)

        // 添加经文内容
        const content = document.createElement('div')
        content.style.position = "relative"
        content.style.zIndex = "10"
        content.style.color = "white"
        content.style.fontSize = "1.25rem"
        content.style.fontFamily = "serif"
        content.style.textAlign = "center"
        content.textContent = selectedVerse
        tempDiv.appendChild(content)

        // 将临时div添加到body
        document.body.appendChild(tempDiv)

        // 生成图片
        const canvas = await html2canvas(tempDiv, {
          backgroundColor: null,
          scale: 2,
        })

        // 移除临时div
        document.body.removeChild(tempDiv)

        const imageUrl = canvas.toDataURL("image/png")
        setPreviewImage(imageUrl)
        setShowPreview(true)
      } catch (err) {
        toast.error(t("verse.image_error"))
      } finally {
        setIsGeneratingImage(false)
      }
    }
  }

  const copyImage = async () => {
    if (previewImage) {
      try {
        const response = await fetch(previewImage)
        const blob = await response.blob()
        await navigator.clipboard.write([
          new ClipboardItem({
            [blob.type]: blob
          })
        ])
        toast.success(t("verse.copy_image_success"))
      } catch (err) {
        toast.error(t("verse.copy_image_error"))
      }
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto">
        <h1 className="text-3xl font-serif text-amber-900 dark:text-amber-100 mb-8 text-center">
          {t("nav.bible-verse-picker")}
        </h1>

        <div className="mb-8 text-center">
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {t("verse.introduction")}
          </p>
          <p className="text-amber-700 dark:text-amber-300">
            {t("verse.how_to_use")}
          </p>
        </div>

        <Card className="p-6 bg-amber-50 dark:bg-amber-900 border-amber-200 dark:border-amber-800">
          <div 
            ref={verseRef} 
            className="text-center mb-6 relative min-h-[200px] flex items-center justify-center"
            style={{
              backgroundImage: "url('/images/background.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 p-6">
              {showMessage && !isGeneratingImage && (
                <p className="text-lg font-medium text-white mb-4">
                  {messageType === 'goodLuck' ? t("verse.good_luck") : t("verse.holy_spirit")}
                </p>
              )}
              <p className="text-xl font-serif text-white">
                {isDrawing ? currentVerse : (selectedVerse || t("verse.start_message"))}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={isDrawing ? stopDrawing : startDrawing}
              className="bg-amber-600 hover:bg-amber-700 text-white"
            >
              {isDrawing ? t("verse.stop") : t("verse.start")}
            </Button>

            {selectedVerse && (
              <>
                <Button
                  onClick={copyVerse}
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900"
                >
                  {t("verse.copy")}
                </Button>
                <Button
                  onClick={shareVerse}
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900"
                >
                  {t("verse.share")}
                </Button>
                <Button
                  onClick={generateImage}
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900"
                  disabled={isGeneratingImage}
                >
                  {isGeneratingImage ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t("verse.generating")}
                    </>
                  ) : (
                    t("verse.share_image")
                  )}
                </Button>
              </>
            )}
          </div>
        </Card>

        <Dialog open={showPreview} onOpenChange={setShowPreview}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{t("verse.preview_title")}</DialogTitle>
            </DialogHeader>
            <div className="relative aspect-[4/3] w-full">
              {previewImage && (
                <Image
                  src={previewImage}
                  alt="Verse Preview"
                  fill
                  className="object-contain"
                />
              )}
            </div>
            <div className="flex justify-end gap-4">
              <Button
                onClick={copyImage}
                variant="outline"
                className="border-amber-600 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900"
              >
                {t("verse.copy_image")}
              </Button>
              <Button
                onClick={() => setShowPreview(false)}
                className="bg-amber-600 hover:bg-amber-700 text-white"
              >
                {t("verse.close")}
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <section className="mt-12 p-6 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
        <div className="prose prose-amber dark:prose-invert max-w-none">
          <h2 className="text-2xl font-serif text-amber-900 dark:text-amber-100 mb-4">
            {language === "en" ? "Discover Inspiring Bible Verses" : "发现鼓舞人心的圣经经文"}
          </h2>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {language === "en" 
              ? "Welcome to our Bible Verse Picker, where you can discover powerful and inspiring verses from the Bible. Each verse is carefully selected to provide spiritual nourishment and guidance for your daily life. Our collection of Bible verses spans from Genesis to Revelation, offering a comprehensive selection of God's word. Whether you're seeking comfort, wisdom, or inspiration, our Bible Verse Picker helps you connect with the timeless truths of the Bible."
              : "欢迎来到我们的圣经经文选择器，在这里您可以发现来自圣经的有力和鼓舞人心的经文。每节经文都经过精心挑选，为您的日常生活提供灵性滋养和指导。我们的圣经经文集从创世记到启示录，为您提供全面的神的话语。无论您是在寻求安慰、智慧还是灵感，我们的圣经经文选择器都能帮助您与圣经的永恒真理建立联系。"
            }
          </p>
          <p className="text-lg text-amber-800 dark:text-amber-200">
            {language === "en"
              ? "The Bible's verses are a source of eternal wisdom and guidance. Our Bible Verse Picker helps you discover these powerful words through carefully selected passages. From the Psalms to the Gospels, from the Prophets to the Epistles, each Bible verse is chosen to provide meaningful inspiration for your spiritual journey. Let the Bible's eternal words illuminate your path and transform your life through the power of God's message."
              : "圣经的经文是永恒智慧和指引的源泉。我们的圣经经文选择器通过精心挑选的段落帮助您发现这些有力的话语。从诗篇到福音书，从先知书到书信，每节圣经经文都经过选择，为您的灵性旅程提供有意义的灵感。让圣经的永恒话语通过神的信息的力量照亮您的道路并改变您的生活。"
            }
          </p>
        </div>
      </section>
      </div>
    </div>
  )
} 