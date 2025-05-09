"use client"

import { useLanguage } from "@/context/language-context"
import LanguageText from "@/components/language-text"

export default function PrivacyContent({ lang }: { lang: string }) {
  const { t, language } = useLanguage()

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif text-amber-950 dark:text-amber-100 mb-8 text-center">
          {t("privacy.title")}
        </h1>

        <div className="prose prose-amber dark:prose-invert max-w-none">
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-6">
            {t("privacy.content")}
          </p>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-6">
            <LanguageText
              en="At Biblical Wisdom Guide, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site."
              zh="在圣经智慧指南，我们非常重视您的隐私。本隐私政策解释了当您访问我们的网站和使用我们的服务时，我们如何收集、使用、披露和保护您的信息。请仔细阅读本隐私政策。如果您不同意本隐私政策的条款，请不要访问本网站。"
            />
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 dark:text-amber-100">
            {t("privacy.collection.title")}
          </h2>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {t("privacy.collection.content")}
          </p>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            <LanguageText
              en="We collect information that you provide directly to us, including:"
              zh="我们收集您直接提供给我们的信息，包括："
            />
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-lg text-amber-800 dark:text-amber-200">
              <LanguageText
                en="Account information (name, email address, password)"
                zh="账户信息（姓名、电子邮件地址、密码）"
              />
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              <LanguageText
                en="Profile information (preferences, language settings)"
                zh="个人资料信息（偏好、语言设置）"
              />
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              <LanguageText
                en="Communication preferences"
                zh="通信偏好"
              />
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 dark:text-amber-100">
            {t("privacy.usage.title")}
          </h2>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {t("privacy.usage.content")}
          </p>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            <LanguageText
              en="We use the information we collect to:"
              zh="我们使用收集的信息来："
            />
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-lg text-amber-800 dark:text-amber-200">
              <LanguageText
                en="Provide, maintain, and improve our services"
                zh="提供、维护和改进我们的服务"
              />
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              <LanguageText
                en="Process and complete transactions"
                zh="处理和完成交易"
              />
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              <LanguageText
                en="Send you technical notices and support messages"
                zh="向您发送技术通知和支持消息"
              />
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              <LanguageText
                en="Communicate with you about products, services, and events"
                zh="与您沟通产品、服务和活动"
              />
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 dark:text-amber-100">
            {t("privacy.sharing.title")}
          </h2>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {t("privacy.sharing.content")}
          </p>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            <LanguageText
              en="We may share your information with:"
              zh="我们可能与以下各方共享您的信息："
            />
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-lg text-amber-800 dark:text-amber-200">
              <LanguageText
                en="Service providers who perform services on our behalf"
                zh="代表我们执行服务的服务提供商"
              />
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              <LanguageText
                en="Professional advisors"
                zh="专业顾问"
              />
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              <LanguageText
                en="Law enforcement when required by law"
                zh="法律要求时的执法部门"
              />
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 dark:text-amber-100">
            {t("privacy.security.title")}
          </h2>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {t("privacy.security.content")}
          </p>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            <LanguageText
              en="We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of transmission over the Internet or electronic storage is 100% secure."
              zh="我们实施适当的技术和组织措施，以保护您的个人信息免受未经授权或非法的处理、意外丢失、破坏或损害。但是，通过互联网传输或电子存储的方法都不是100%安全的。"
            />
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 dark:text-amber-100">
            {t("privacy.rights.title")}
          </h2>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {t("privacy.rights.content")}
          </p>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            <LanguageText
              en="You have the right to:"
              zh="您有权："
            />
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-lg text-amber-800 dark:text-amber-200">
              <LanguageText
                en="Access your personal information"
                zh="访问您的个人信息"
              />
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              <LanguageText
                en="Correct inaccurate information"
                zh="更正不准确的信息"
              />
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              <LanguageText
                en="Request deletion of your information"
                zh="请求删除您的信息"
              />
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              <LanguageText
                en="Object to processing of your information"
                zh="反对处理您的信息"
              />
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 dark:text-amber-100">
            {t("privacy.contact.title")}
          </h2>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {t("privacy.contact.content")}
          </p>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            <LanguageText
              en="If you have any questions about this Privacy Policy, please contact us at:"
              zh="如果您对本隐私政策有任何问题，请通过以下方式联系我们："
            />
          </p>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800/30 mb-6">
            <p className="text-lg text-amber-800 dark:text-amber-200 mb-2">
              <LanguageText
                en="Email: privacy@biblicalwisdomguide.com"
                zh="电子邮件：privacy@biblicalwisdomguide.com"
              />
            </p>
            <p className="text-lg text-amber-800 dark:text-amber-200">
              <LanguageText
                en="Address: 123 Scripture Lane, Faith City, FC 12345"
                zh="地址：信仰城市，圣经巷123号，邮编：12345"
              />
            </p>
          </div>
          <p className="text-lg text-amber-800 dark:text-amber-200 italic text-center mt-8">
            <LanguageText
              en="Last Updated: October 15, 2023"
              zh="最后更新：2023年10月15日"
            />
          </p>
        </div>
      </div>
    </div>
  )
} 