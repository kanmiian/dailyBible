"use client"

import { useLanguage } from "@/context/language-context"

export default function PrivacyContent({ lang }: { lang: string }) {
  const { t, language } = useLanguage();

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
            {language === "en" ?
              "At Biblical Wisdom Guide, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our platform. By accessing or using our services, you agree to the terms outlined in this policy." :
              "在圣经智慧指南，我们致力于保护您的隐私并确保您个人信息的安全。本隐私政策解释了我们在您使用我们的平台时如何收集、使用和保护您的数据。通过访问或使用我们的服务，您同意本政策中概述的条款。"
            }
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 dark:text-amber-100">
            {t("privacy.collection.title")}
          </h2>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {t("privacy.collection.content")}
          </p>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {language === "en" ?
              "We collect information that you voluntarily provide when creating an account, such as your name, email address, and password. We may also collect non-personal information about your device and how you interact with our platform, including:" :
              "我们收集您在创建账户时自愿提供的信息，如您的姓名、电子邮件地址和密码。我们还可能收集有关您的设备以及您如何与我们的平台互动的非个人信息，包括："
            }
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "Usage data (pages visited, features used, time spent)" : "使用数据（访问的页面、使用的功能、花费的时间）"}
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "Device information (browser type, operating system, screen resolution)" : "设备信息（浏览器类型、操作系统、屏幕分辨率）"}
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "IP address and general location data" : "IP地址和一般位置数据"}
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "Cookies and similar tracking technologies" : "Cookie和类似的跟踪技术"}
            </li>
          </ul>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {language === "en" ?
              "We do not collect or store any payment information directly. All payment processing is handled by secure third-party payment processors who maintain their own privacy policies." :
              "我们不直接收集或存储任何支付信息。所有支付处理都由安全的第三方支付处理商处理，他们维护自己的隐私政策。"
            }
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 dark:text-amber-100">
            {t("privacy.usage.title")}
          </h2>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {t("privacy.usage.content")}
          </p>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {language === "en" ?
              "We use the information we collect for the following purposes:" :
              "我们将收集的信息用于以下目的："
            }
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "To provide, maintain, and improve our services" : "提供、维护和改进我们的服务"}
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "To personalize your experience and deliver content relevant to your interests" : "个性化您的体验并提供与您兴趣相关的内容"}
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "To communicate with you about updates, features, and promotional offers (if you opt in)" : "与您沟通有关更新、功能和促销优惠（如果您选择接收）"}
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "To monitor and analyze usage patterns and trends" : "监控和分析使用模式和趋势"}
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "To detect, prevent, and address technical issues or security breaches" : "检测、预防和解决技术问题或安全漏洞"}
            </li>
          </ul>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {language === "en" ?
              "We do not sell, rent, or lease your personal information to third parties. We may share non-personal, aggregated data with trusted partners for analytical purposes, but this information cannot be used to identify you individually." :
              "我们不会出售、出租或租赁您的个人信息给第三方。我们可能会与受信任的合作伙伴共享非个人的、汇总的数据用于分析目的，但这些信息不能用于识别您的个人身份。"
            }
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 dark:text-amber-100">
            {t("privacy.protection.title")}
          </h2>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {t("privacy.protection.content")}
          </p>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {language === "en" ?
              "We implement a variety of security measures to maintain the safety of your personal information, including:" :
              "我们实施各种安全措施来维护您个人信息的安全，包括："
            }
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "Secure Socket Layer (SSL) encryption for all data transmissions" : "所有数据传输的安全套接层（SSL）加密"}
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "Regular security assessments and vulnerability testing" : "定期安全评估和漏洞测试"}
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "Password hashing and secure storage practices" : "密码哈希和安全存储实践"}
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "Access controls limiting employee access to user data" : "限制员工访问用户数据的访问控制"}
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "Regular backups and disaster recovery planning" : "定期备份和灾难恢复计划"}
            </li>
          </ul>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {language === "en" ?
              "While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to implementing and maintaining reasonable security practices." :
              "虽然我们努力使用商业上可接受的方式来保护您的个人信息，但通过互联网传输或电子存储的方法都不是100%安全的。我们不能保证绝对的安全性，但我们致力于实施和维护合理的安全实践。"
            }
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 dark:text-amber-100">
            {t("privacy.rights.title")}
          </h2>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {t("privacy.rights.content")}
          </p>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {language === "en" ?
              "You have certain rights regarding your personal information, including:" :
              "您对您的个人信息拥有某些权利，包括："
            }
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "The right to access and review your personal information" : "访问和审查您个人信息的权利"}
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "The right to correct inaccurate or incomplete information" : "纠正不准确或不完整信息的权利"}
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "The right to request deletion of your account and personal data" : "请求删除您的账户和个人数据的权利"}
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "The right to opt out of marketing communications" : "选择退出营销通信的权利"}
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "The right to data portability (receiving your data in a structured format)" : "数据可携带性的权利（以结构化格式接收您的数据）"}
            </li>
          </ul>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {language === "en" ?
              "To exercise these rights, please contact us using the information provided in the Contact section below. We will respond to your request within a reasonable timeframe, typically within 30 days." :
              "要行使这些权利，请使用下面联系部分中提供的信息联系我们。我们将在合理的时间范围内回应您的请求，通常在30天内。"
            }
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 dark:text-amber-100">
            {t("privacy.contact.title")}
          </h2>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {t("privacy.contact.content")}
          </p>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {language === "en" ?
              "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:" :
              "如果您对本隐私政策或我们的数据实践有任何问题、疑虑或请求，请通过以下方式联系我们："
            }
          </p>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800/30 mb-6">
            <p className="text-lg text-amber-800 dark:text-amber-200 mb-2">
              {language === "en" ? "Email: bless@bibleforu.info" : "电子邮件：bless@bibleforu.info"}
            </p>
          </div>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {language === "en" ?
              "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website and, where appropriate, sending you a notification. We encourage you to review this policy periodically to stay informed about how we protect your information." :
              "我们可能会不时更新本隐私政策，以反映我们实践的变化或出于法律、运营或监管原因。我们将通过在我们的网站上发布更新的政策，并在适当的情况下向您发送通知，来通知您任何重大变更。我们鼓励您定期查看本政策，以了解我们如何保护您的信息。"
            }
          </p>
        </div>
      </div>

      {/* 隐私政策介绍和说明 Section */}
      <section className="mt-16 bg-amber-50 dark:bg-amber-900/20 rounded-lg p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-amber-900 dark:text-amber-100 text-center">{t("privacy.title")}</h2>
        <p className="text-lg text-amber-800 dark:text-amber-200 mb-2 text-center">{t("privacy.subtitle")}</p>
      </section>
    </div>
  )
} 