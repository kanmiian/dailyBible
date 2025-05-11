"use client"

import { useLanguage } from "@/context/language-context"
import RandomBibleVerse from "@/components/random-bible-verse"

export default function TermsContent({ lang }: { lang: string }) {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif text-amber-950 dark:text-amber-100 mb-8 text-center">
          {t("terms.title")}
        </h1>

        <div className="prose prose-amber dark:prose-invert max-w-none">
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-6">
            {t("terms.content")}
          </p>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-6">
            {language === "en" ?
              "These Terms of Service ('Terms') govern your access to and use of Biblical Wisdom Guide, including any content, functionality, and services offered on or through our website and mobile applications (collectively, the 'Service'). Please read these Terms carefully before using our Service." :
              "这些服务条款（'条款'）规定了您访问和使用圣经智慧指南的条件，包括我们网站和移动应用程序上提供的任何内容、功能和服务（统称为'服务'）。在使用我们的服务之前，请仔细阅读这些条款。"
            }
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 dark:text-amber-100">
            {t("terms.acceptance.title")}
          </h2>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {t("terms.acceptance.content")}
          </p>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {language === "en" ?
              "By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service. Your continued use of the Service following the posting of revised Terms means that you accept and agree to the changes." :
              "通过访问或使用我们的服务，您同意受这些条款的约束。如果您不同意条款的任何部分，您可能无法访问服务。在修订条款发布后继续使用服务意味着您接受并同意这些变更。"
            }
          </p>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {language === "en" ?
              "We may update these Terms from time to time to reflect changes to our practices, service offerings, or legal requirements. The most current version will always be posted on our website with the effective date clearly indicated. We encourage you to review these Terms periodically to stay informed about our policies." :
              "我们可能会不时更新这些条款，以反映我们实践、服务产品或法律要求的变化。最新版本将始终发布在我们的网站上，并清楚标明生效日期。我们鼓励您定期查看这些条款，以了解我们的政策。"
            }
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 dark:text-amber-100">
            {t("terms.usage.title")}
          </h2>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {t("terms.usage.content")}
          </p>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {language === "en" ?
              "You may use our Service only for lawful purposes and in accordance with these Terms. You agree not to use our Service:" :
              "您只能出于合法目的并按照这些条款使用我们的服务。您同意不会使用我们的服务："
            }
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "In any way that violates any applicable federal, state, local, or international law or regulation" : "以任何违反适用的联邦、州、地方或国际法律或法规的方式"}
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "To transmit, or procure the sending of, any advertising or promotional material, including any 'junk mail', 'chain letter', 'spam', or any other similar solicitation" : "传输或促使发送任何广告或促销材料，包括任何'垃圾邮件'、'连锁信'、'垃圾信息'或任何其他类似的招揽"}
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "To impersonate or attempt to impersonate Biblical Wisdom Guide, a Biblical Wisdom Guide employee, another user, or any other person or entity" : "冒充或试图冒充圣经智慧指南、圣经智慧指南员工、另一用户或任何其他人或实体"}
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which may harm Biblical Wisdom Guide or users of the Service" : "从事任何其他限制或抑制任何人使用或享受服务的行为，或可能伤害圣经智慧指南或服务用户的行为"}
            </li>
          </ul>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {language === "en" ?
              "Additionally, you agree not to:" :
              "此外，您同意不会："
            }
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "Use the Service in any manner that could disable, overburden, damage, or impair the site or interfere with any other party's use of the Service" : "以任何可能使网站瘫痪、过载、损坏或损害或干扰任何其他方使用服务的方式使用服务"}
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "Use any robot, spider, or other automatic device, process, or means to access the Service for any purpose, including monitoring or copying any of the material on the Service" : "使用任何机器人、蜘蛛或其他自动设备、过程或方法出于任何目的访问服务，包括监控或复制服务上的任何材料"}
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "Use any manual process to monitor or copy any of the material on the Service or for any other unauthorized purpose" : "使用任何手动过程监控或复制服务上的任何材料或用于任何其他未经授权的目的"}
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Service, the server on which the Service is stored, or any server, computer, or database connected to the Service" : "试图获取未经授权的访问权限、干扰、损坏或破坏服务的任何部分、存储服务的服务器或与服务连接的任何服务器、计算机或数据库"}
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 dark:text-amber-100">
            {t("terms.intellectual.title")}
          </h2>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {t("terms.intellectual.content")}
          </p>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {language === "en" ?
              "The Service and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Biblical Wisdom Guide, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws." :
              "服务及其全部内容、功能和功能（包括但不限于所有信息、软件、文本、显示、图像、视频和音频，以及设计、选择和排列）均由圣经智慧指南、其许可方或此类材料的其他提供者拥有，并受美国和国际版权、商标、专利、商业秘密和其他知识产权或专有权利法律的保护。"
            }
          </p>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {language === "en" ?
              "These Terms permit you to use the Service for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Service, except as follows:" :
              "这些条款允许您仅将服务用于个人、非商业用途。您不得复制、分发、修改、创建衍生作品、公开展示、公开表演、重新发布、下载、存储或传输我们服务上的任何材料，除非如下所示："
            }
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials" : "您的计算机可能会在RAM中临时存储此类材料的副本，这是您访问和查看这些材料的附带行为"}
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "You may store files that are automatically cached by your Web browser for display enhancement purposes" : "您可以存储由您的Web浏览器自动缓存以增强显示目的的文件"}
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "You may print or download one copy of a reasonable number of pages of the Service for your own personal, non-commercial use and not for further reproduction, publication, or distribution" : "您可以打印或下载服务的合理数量页面的一份副本，供您自己的个人、非商业用途使用，而不是为了进一步复制、出版或分发"}
            </li>
            <li className="text-lg text-amber-800 dark:text-amber-200">
              {language === "en" ? "If we provide social media features with certain content, you may take such actions as are enabled by such features" : "如果我们提供带有某些内容的社交媒体功能，您可以采取此类功能所启用的行动"}
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 dark:text-amber-100">
            {t("terms.liability.title")}
          </h2>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {t("terms.liability.content")}
          </p>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {language === "en" ?
              "To the fullest extent provided by law, in no event will Biblical Wisdom Guide, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Service, any websites linked to it, any content on the Service or such other websites, including any direct, indirect, special, incidental, consequential, or punitive damages, including but not limited to, personal injury, pain and suffering, emotional distress, loss of revenue, loss of profits, loss of business or anticipated savings, loss of use, loss of goodwill, loss of data, and whether caused by tort (including negligence), breach of contract, or otherwise, even if foreseeable." :
              "在法律允许的最大范围内，圣经智慧指南、其附属机构或其许可方、服务提供商、员工、代理人、高级职员或董事在任何情况下均不对因您使用或无法使用服务、与之链接的任何网站、服务上或此类其他网站上的任何内容而产生的或与之相关的任何类型的损害承担责任，包括任何直接、间接、特殊、附带、后果性或惩罚性损害，包括但不限于人身伤害、痛苦和痛苦、情感困扰、收入损失、利润损失、业务或预期储蓄损失、使用损失、商誉损失、数据损失，无论是由侵权行为（包括疏忽）、违约或其他原因引起的，即使是可预见的。"
            }
          </p>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {language === "en" ?
              "The foregoing does not affect any liability which cannot be excluded or limited under applicable law." :
              "上述规定不影响根据适用法律不能排除或限制的任何责任。"
            }
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 dark:text-amber-100">
            {t("terms.termination.title")}
          </h2>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {t("terms.termination.content")}
          </p>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {language === "en" ?
              "We may terminate or suspend your access to all or part of the Service, without notice, for any conduct that we, in our sole discretion, believe violates these Terms or is harmful to other users of the Service, us, or third parties, or for any other reason." :
              "我们可能会终止或暂停您对服务的全部或部分访问，恕不另行通知，对于我们自行决定认为违反这些条款或对服务的其他用户、我们或第三方有害的任何行为，或出于任何其他原因。"
            }
          </p>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {language === "en" ?
              "Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service or contact us to request account deletion. All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability." :
              "终止后，您使用服务的权利将立即停止。如果您希望终止您的账户，您可以简单地停止使用服务或联系我们请求删除账户。这些条款中所有按其性质应在终止后继续有效的条款应在终止后继续有效，包括但不限于所有权条款、保证免责声明、赔偿和责任限制。"
            }
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 dark:text-amber-100">
            {t("terms.contact.title")}
          </h2>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {t("terms.contact.content")}
          </p>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
            {language === "en" ?
              "If you have any questions about these Terms, please contact us at:" :
              "如果您对这些条款有任何问题，请通过以下方式联系我们："
            }
          </p>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800/30 mb-6">
            <p className="text-lg text-amber-800 dark:text-amber-200 mb-2">
              {language === "en" ? "Email: bless@bibleforu.info" : "电子邮件：bless@bibleforu.info"}
            </p>
          </div>

          <div className="mt-16 text-center">
            <RandomBibleVerse lang={lang} />
          </div>
        </div>
      </div>
    </div>
  )
} 