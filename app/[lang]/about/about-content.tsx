"use client"

import { useLanguage } from "@/context/language-context"

export default function AboutContent({ lang }: { lang: string }) {
  const { t, language } = useLanguage();

  return (
    <>
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif text-amber-950 dark:text-amber-100 mb-8">
            {t("about.title")}
          </h1>
          <div className="prose prose-amber dark:prose-invert max-w-none">
            <p className="text-lg text-amber-800 dark:text-amber-200 mb-6">
              {t("about.content")}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 dark:text-amber-100">
              {t("about.mission")}
            </h2>
            <p className="text-lg text-amber-800 dark:text-amber-200 mb-6">
              {t("about.mission.content")}
            </p>
            <p className="text-lg text-amber-800 dark:text-amber-200 mb-6">
              {language === "en" ?
                "Our mission extends beyond mere information sharing. We strive to create a digital sanctuary where seekers of all backgrounds can encounter the transformative power of biblical wisdom. Through careful curation and thoughtful presentation, we aim to make ancient scriptural truths accessible and applicable to contemporary life challenges." :
                "我们的使命不仅仅是分享信息。我们致力于创建一个数字圣所，让各种背景的寻求者都能体验到圣经智慧的转化力量。通过精心策划和深思熟虑的呈现，我们旨在使古老的圣经真理变得易于理解，并能应用于当代生活挑战。"
              }
            </p>
            <p className="text-lg text-amber-800 dark:text-amber-200 mb-6">
              {language === "en" ?
                "We believe that Scripture contains timeless principles that can guide individuals through life's complexities. Our platform serves as a bridge connecting these eternal truths with modern seekers, offering daily inspiration, practical wisdom, and spiritual nourishment." :
                "我们相信圣经包含永恒的原则，可以引导个人度过生活的复杂性。我们的平台作为连接这些永恒真理与现代寻求者的桥梁，提供每日灵感、实用智慧和灵性滋养。"
              }
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 dark:text-amber-100">
              {t("about.vision")}
            </h2>
            <p className="text-lg text-amber-800 dark:text-amber-200 mb-6">
              {t("about.vision.content")}
            </p>
            <p className="text-lg text-amber-800 dark:text-amber-200 mb-6">
              {language === "en" ?
                "Our vision encompasses a global community where biblical wisdom transcends cultural, linguistic, and geographical boundaries. We envision a platform that harnesses technology to create immersive spiritual experiences, allowing users to engage with Scripture in innovative and meaningful ways." :
                "我们的愿景包括一个全球社区，圣经智慧超越文化、语言和地理界限。我们设想一个平台，利用技术创造沉浸式灵性体验，让用户以创新和有意义的方式与圣经互动。"
              }
            </p>
            <p className="text-lg text-amber-800 dark:text-amber-200 mb-6">
              {language === "en" ?
                "We are committed to continuous innovation, ensuring that our platform evolves to meet the changing needs of our users while remaining firmly rooted in biblical truth. Through cutting-edge features like our Book of Answers and Daily Bible Stories, we aim to make Scripture exploration an engaging and transformative journey." :
                "我们致力于持续创新，确保我们的平台不断发展以满足用户不断变化的需求，同时牢固扎根于圣经真理。通过我们的答案之书和每日圣经故事等前沿功能，我们旨在使圣经探索成为一个引人入胜且变革性的旅程。"
              }
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 dark:text-amber-100">
              {t("about.values")}
            </h2>
            <ul className="list-disc pl-6 mb-6 space-y-4">
              <li className="text-lg text-amber-800 dark:text-amber-200">
                <span className="font-semibold">{t("about.values.faith")}</span>
                <p className="mt-1">
                  {language === "en" ?
                    "We approach our work with unwavering faith in the divine inspiration and authority of Scripture. Every feature and piece of content on our platform is developed with reverence for God's Word and a commitment to biblical accuracy." :
                    "我们以对圣经神圣启示和权威的坚定信仰来开展工作。我们平台上的每一个功能和内容都是以对上帝话语的敬畏和对圣经准确性的承诺而开发的。"
                  }
                </p>
              </li>
              <li className="text-lg text-amber-800 dark:text-amber-200">
                <span className="font-semibold">{t("about.values.integrity")}</span>
                <p className="mt-1">
                  {language === "en" ?
                    "Integrity guides all our operations. We are committed to transparency, honesty, and ethical practices in how we develop our platform, handle user data, and present biblical content. We strive to be worthy of our users' trust in every aspect of our service." :
                    "诚信指导我们所有的运营。我们致力于在开发平台、处理用户数据和呈现圣经内容方面保持透明、诚实和道德实践。我们努力在服务的各个方面都值得用户的信任。"
                  }
                </p>
              </li>
              <li className="text-lg text-amber-800 dark:text-amber-200">
                <span className="font-semibold">{t("about.values.service")}</span>
                <p className="mt-1">
                  {language === "en" ?
                    "We view our work as service to both God and our users. This servant-hearted approach influences how we design features, respond to feedback, and continuously improve our platform. We measure success not just by metrics but by how effectively we serve our community." :
                    "我们将我们的工作视为对上帝和用户的服务。这种服务心态影响着我们如何设计功能、回应反馈并不断改进我们的平台。我们衡量成功不仅仅是通过指标，而是通过我们有效服务社区的程度。"
                  }
                </p>
              </li>
              <li className="text-lg text-amber-800 dark:text-amber-200">
                <span className="font-semibold">{t("about.values.excellence")}</span>
                <p className="mt-1">
                  {language === "en" ?
                    "We pursue excellence in all aspects of our platform, from technical performance to content quality. We believe that offering our best honors God and serves our users well. This commitment drives our continuous learning, innovation, and refinement." :
                    "我们在平台的各个方面追求卓越，从技术性能到内容质量。我们相信提供最好的服务荣耀上帝并很好地服务于我们的用户。这一承诺推动我们不断学习、创新和完善。"
                  }
                </p>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 dark:text-amber-100">
              {language === "en" ? "Our Team" : "我们的团队"}
            </h2>
            <p className="text-lg text-amber-800 dark:text-amber-200 mb-6">
              {language === "en" ?
                "Behind Biblical Wisdom Guide is a diverse team of passionate individuals who bring together expertise in theology, technology, design, and content creation. Our team members share a common commitment to biblical truth and a desire to make Scripture accessible to a global audience." :
                "圣经智慧指南背后是一个多元化的团队，由热情的个人组成，他们将神学、技术、设计和内容创作方面的专业知识结合在一起。我们的团队成员共同致力于圣经真理，并希望使圣经对全球受众易于理解。"
              }
            </p>
            <p className="text-lg text-amber-800 dark:text-amber-200 mb-6">
              {language === "en" ?
                "We collaborate with biblical scholars, pastors, and ministry leaders to ensure the theological depth and accuracy of our content. Our development team works tirelessly to create an intuitive, accessible platform that delivers a seamless user experience across devices and languages." :
                "我们与圣经学者、牧师和事工领袖合作，确保我们内容的神学深度和准确性。我们的开发团队不懈努力，创建一个直观、易于访问的平台，在各种设备和语言中提供无缝的用户体验。"
              }
            </p>
          </div>
        </div>
      </div>

      {/* 关于介绍和说明 Section */}
      <section className="mt-16 bg-amber-50 dark:bg-amber-900/20 rounded-lg p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-amber-900 dark:text-amber-100 text-center">{t("about.title")}</h2>
        <p className="text-lg text-amber-800 dark:text-amber-200 mb-2 text-center">{t("about.content")}</p>
      </section>
    </>
  )
} 