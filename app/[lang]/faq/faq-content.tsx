"use client"

import { useLanguage } from "@/context/language-context"

export default function FAQContent({ lang }: { lang: string }) {
  const { t, language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif text-amber-950 dark:text-amber-100 mb-8 text-center">
          {t("faq.title")}
        </h1>

        <div className="prose prose-amber dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-amber-900 dark:text-amber-100">
              {t("faq.general.title")}
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-medium mb-3 text-amber-800 dark:text-amber-200">
                {t("faq.general.what.q")}
              </h3>
              <p className="text-lg text-amber-700 dark:text-amber-300 mb-4">
                {t("faq.general.what.a")}
              </p>
              <p className="text-lg text-amber-700 dark:text-amber-300">
                {language === "en" ?
                  "Biblical Wisdom Guide serves as a digital companion for those seeking to understand and apply biblical principles in their daily lives. Our platform combines ancient wisdom with modern technology to create an accessible, engaging experience for users of all backgrounds." :
                  "圣经智慧指南是那些寻求在日常生活中理解和应用圣经原则的人的数字伴侣。我们的平台将古老智慧与现代技术相结合，为各种背景的用户创造一种易于访问、引人入胜的体验。"
                }
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-medium mb-3 text-amber-800 dark:text-amber-200">
                {t("faq.general.free.q")}
              </h3>
              <p className="text-lg text-amber-700 dark:text-amber-300 mb-4">
                {t("faq.general.free.a")}
              </p>
              <p className="text-lg text-amber-700 dark:text-amber-300">
                {language === "en" ?
                  "We believe that biblical wisdom should be accessible to everyone. Our core features, including daily Bible stories, the Book of Answers, and basic search functionality, are completely free. Premium features, which include advanced study tools, personalized recommendations, and ad-free experience, are available through an optional subscription that helps support our ongoing development." :
                  "我们相信圣经智慧应该对每个人都是可获取的。我们的核心功能，包括每日圣经故事、答案之书和基本搜索功能，都是完全免费的。高级功能，包括高级学习工具、个性化推荐和无广告体验，可通过可选订阅获得，这有助于支持我们的持续开发。"
                }
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-medium mb-3 text-amber-800 dark:text-amber-200">
                {language === "en" ? "Do I need to create an account?" : "我需要创建账户吗？"}
              </h3>
              <p className="text-lg text-amber-700 dark:text-amber-300">
                {language === "en" ?
                  "While you can access many features without an account, creating a free account allows you to save favorite verses, track your reading progress, and personalize your experience. Account creation is simple, requiring only an email address and password, and we never share your personal information with third parties." :
                  "虽然您无需账户即可访问许多功能，但创建免费账户可让您保存喜爱的经文、跟踪阅读进度并个性化您的体验。账户创建很简单，只需要电子邮件地址和密码，我们绝不会与第三方共享您的个人信息。"
                }
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-amber-900 dark:text-amber-100">
              {t("faq.content.title")}
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-medium mb-3 text-amber-800 dark:text-amber-200">
                {t("faq.content.frequency.q")}
              </h3>
              <p className="text-lg text-amber-700 dark:text-amber-300 mb-4">
                {t("faq.content.frequency.a")}
              </p>
              <p className="text-lg text-amber-700 dark:text-amber-300">
                {language === "en" ?
                  "Our editorial team works diligently to provide fresh content daily. Each day brings new Bible stories, devotional reflections, and spiritual insights. We also regularly update our thematic collections and study resources to ensure you always have new material to explore and engage with." :
                  "我们的编辑团队努力每天提供新鲜内容。每天都会带来新的圣经故事、灵修反思和灵性洞见。我们还定期更新我们的主题集合和学习资源，确保您始终有新的材料可以探索和参与。"
                }
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-medium mb-3 text-amber-800 dark:text-amber-200">
                {t("faq.content.bilingual.q")}
              </h3>
              <p className="text-lg text-amber-700 dark:text-amber-300 mb-4">
                {t("faq.content.bilingual.a")}
              </p>
              <p className="text-lg text-amber-700 dark:text-amber-300">
                {language === "en" ?
                  "Our commitment to bilingual content stems from our desire to make biblical wisdom accessible across cultural and linguistic boundaries. Each piece of content undergoes careful translation and cultural adaptation to ensure that the spiritual essence and practical applications are effectively conveyed in both English and Chinese." :
                  "我们对双语内容的承诺源于我们希望使圣经智慧跨越文化和语言界限。每一段内容都经过仔细翻译和文化调适，以确保灵性精髓和实际应用在英文和中文中都能有效传达。"
                }
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-medium mb-3 text-amber-800 dark:text-amber-200">
                {t("faq.content.accuracy.q")}
              </h3>
              <p className="text-lg text-amber-700 dark:text-amber-300 mb-4">
                {t("faq.content.accuracy.a")}
              </p>
              <p className="text-lg text-amber-700 dark:text-amber-300">
                {language === "en" ?
                  "We take biblical accuracy very seriously. Our content team includes biblical scholars and theologians who carefully review all materials. We primarily use respected translations like NIV, ESV, and CUV (Chinese Union Version), and we provide contextual information to help readers understand historical and cultural nuances that might affect interpretation." :
                  "我们非常重视圣经的准确性。我们的内容团队包括圣经学者和神学家，他们仔细审查所有材料。我们主要使用受尊敬的译本，如NIV、ESV和和合本，并提供上下文信息，帮助读者理解可能影响解释的历史和文化细微差别。"
                }
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-amber-900 dark:text-amber-100">
              {language === "en" ? "Scripture Express Lane" : "圣经快速通道"}
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-medium mb-3 text-amber-800 dark:text-amber-200">
                {language === "en" ? "What is the Scripture Express Lane?" : "什么是圣经快速通道？"}
              </h3>
              <p className="text-lg text-amber-700 dark:text-amber-300">
                {language === "en" ?
                  "The Scripture Express Lane is our curated collection of quick access links to essential biblical resources and platform information. It provides streamlined navigation to our most important pages, including About Us, FAQ, Privacy Policy, and Terms of Service. This feature is designed to help you quickly find the information you need about our platform and services." :
                  "圣经快速通道是我们精心策划的快速访问链接集合，指向基本的圣经资源和平台信息。它提供了到我们最重要页面的简化导航，包括关于我们、常见问题、隐私政策和服务条款。此功能旨在帮助您快速找到有关我们平台和服务的信息。"
                }
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-medium mb-3 text-amber-800 dark:text-amber-200">
                {language === "en" ? "How can I best utilize the Scripture Express Lane?" : "如何最好地利用圣经快速通道？"}
              </h3>
              <p className="text-lg text-amber-700 dark:text-amber-300">
                {language === "en" ?
                  "The Scripture Express Lane is accessible from every page through our footer navigation. Use it whenever you need quick information about our platform, have questions about how features work, or want to understand our policies. It's particularly useful for new users who want to learn more about our mission and approach to biblical content, or for those who need to reference our terms or privacy practices." :
                  "圣经快速通道可通过我们的页脚导航从每个页面访问。当您需要有关我们平台的快速信息、对功能如何工作有疑问或想了解我们的政策时，请使用它。它对想了解更多关于我们的使命和圣经内容方法的新用户，或需要参考我们的条款或隐私实践的用户特别有用。"
                }
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-medium mb-3 text-amber-800 dark:text-amber-200">
                {language === "en" ? "Will more resources be added to the Scripture Express Lane?" : "圣经快速通道会添加更多资源吗？"}
              </h3>
              <p className="text-lg text-amber-700 dark:text-amber-300">
                {language === "en" ?
                  "Yes, we continuously evaluate and expand our Scripture Express Lane to include additional resources that our users find valuable. Future additions may include links to our blog, community forums, educational resources, and specialized study tools. We welcome user feedback on what additional quick access links would enhance your experience with Biblical Wisdom Guide." :
                  "是的，我们不断评估和扩展我们的圣经快速通道，以包括用户认为有价值的额外资源。未来的添加可能包括到我们博客、社区论坛、教育资源和专业学习工具的链接。我们欢迎用户就哪些额外的快速访问链接会增强您使用圣经智慧指南的体验提供反馈。"
                }
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-amber-900 dark:text-amber-100">
              {t("faq.contact.title")}
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-medium mb-3 text-amber-800 dark:text-amber-200">
                {language === "en" ? "How can I contact your support team?" : "如何联系您的支持团队？"}
              </h3>
              <p className="text-lg text-amber-700 dark:text-amber-300">
                {language === "en" ?
                  "Our support team is available to assist you with any questions or issues you may encounter. You can reach us through the contact form on our website, or by emailing bless@bibleforu.infoWe strive to respond to all inquiries within 24-48 hours during business days." :
                  "我们的支持团队可以帮助您解决您可能遇到的任何问题。您可以通过我们网站上的联系表单联系我们，或发送电子邮件至bless@bibleforu.info。我们努力在工作日内24-48小时内回复所有询问。"
                }
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3 text-amber-800 dark:text-amber-200">
                {language === "en" ? "Can I suggest new features or content?" : "我可以建议新功能或内容吗？"}
              </h3>
              <p className="text-lg text-amber-700 dark:text-amber-300">
                {language === "en" ?
                  "Absolutely! We value user feedback and actively incorporate suggestions into our development roadmap. You can submit feature requests and content ideas through our feedback form or by emailing bless@bibleforu.info. Many of our most popular features began as user suggestions, and we're always eager to hear how we can better serve your spiritual journey." :
                  "当然可以！我们重视用户反馈，并积极将建议纳入我们的开发路线图。您可以通过我们的反馈表单或发送电子邮件至bless@bibleforu.info提交功能请求和内容想法。我们许多最受欢迎的功能都始于用户建议，我们始终渴望听取如何更好地服务于您的灵性旅程。"
                }
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* FAQ介绍和说明 Section */}
      <section className="mt-16 bg-amber-50 dark:bg-amber-900/20 rounded-lg p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-amber-900 dark:text-amber-100 text-center">{t("faq.title")}</h2>
        <p className="text-lg text-amber-800 dark:text-amber-200 mb-2 text-center">{t("faq.subtitle")}</p>
      </section>
    </div>
  )
} 