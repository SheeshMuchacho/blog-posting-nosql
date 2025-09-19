import type { PolicyDoc } from "@/components/policy/policy-template";
import type { LStr } from "@/lib/i18n";

const L = (en: string, ja: string, ko: string): LStr => ({ en, ja, ko });

export const TERMS_OF_SERVICE_DOC: PolicyDoc = {
  title: L("Terms of Use", "利用規約", "이용약관"),
  sections: [
    {
      paragraphs: [
        L(
          "Please read the following terms of use before using this site. By using this site, you agree to these terms. If you do not agree to our terms and conditions, please do not use this site.",
          "本サイトをご利用になる前に以下の利用規約をお読みください。本サイトを利用することで、本規約に同意したものとみなします。本規約に同意いただけない場合は、本サイトをご利用にならないでください。",
          "본 사이트를 이용하시기 전에 아래 이용약관을 읽어 주십시오. 본 사이트를 이용하시면 본 약관에 동의한 것으로 간주됩니다. 약관에 동의하지 않으시면 사이트를 이용하지 마십시오."
        ),
        L(
          "These terms of use govern your use of the content, materials and resources available on the Acumen Intelligence website through various means.",
          "本利用規約は、Acumen Intelligence のウェブサイト上で様々な手段により提供されるコンテンツ、資料、およびリソースの利用に適用されます。",
          "본 이용약관은 Acumen Intelligence 웹사이트에서 다양한 방식으로 제공되는 콘텐츠, 자료 및 리소스의 이용에 적용됩니다."
        ),
      ],
    },

    // Customer Responsibilities
    {
      heading: L("Customer Responsibilities", "利用者の責任", "이용자의 책임"),
      paragraphs: [
        L(
          "Acumen Intelligence materials and resources may not be sold and you are responsible to Acumen Intelligence for your use of the resources. By downloading Acumen Intelligence resources, you agree that you may not provide access to these resources to any unauthorized third party without Acumen Intelligence’s written consent, and you may not use them in any advertising, promotional or marketing materials.",
          "Acumen Intelligence の資料やリソースは販売できません。利用者はこれらのリソースの使用について Acumen Intelligence に対して責任を負います。Acumen Intelligence のリソースをダウンロードすることにより、Acumen Intelligence の書面による同意なく、権限のない第三者に提供しないこと、ならびに広告・販促・マーケティング用途で使用しないことに同意したものとします。",
          "Acumen Intelligence의 자료와 리소스는 판매할 수 없습니다. 귀하는 해당 리소스의 사용에 대해 Acumen Intelligence에 책임을 집니다. 리소스를 다운로드함으로써, Acumen Intelligence의 서면 동의 없이 무단 제3자에게 접근을 제공하지 않으며, 광고·홍보·마케팅 자료에 사용하지 않음을 동의합니다."
        ),
      ],
    },

    // Acceptance Policy
    {
      heading: L("Acceptance Policy", "受入れポリシー", "수용 정책"),
      paragraphs: [
        L(
          "In accordance with the standards established by Acumen Intelligence, you warrant that you will:",
          "Acumen Intelligence が定める基準に従い、以下を保証します。",
          "Acumen Intelligence가 정한 기준에 따라, 귀하는 다음을 보장합니다."
        ),
      ],
      list: [
        L("Use this Site for lawful purposes only.", "本サイトを適法な目的のみに利用すること。", "본 사이트를 합법적인 목적에만 사용할 것."),
        L("Agree to our intellectual property rights.", "当社の知的財産権を尊重・遵守すること。", "당사의 지식재산권을 인정하고 준수할 것."),
        L(
          "Not use profane, vulgar, inflammatory, libelous or similarly disrespectful language in any forum created by this site.",
          "本サイト上のいかなるフォーラムにおいても、冒涜的・卑俗・扇情的・名誉毀損的その他不適切な表現を用いないこと。",
          "본 사이트의 어떤 포럼에서도 모욕적·상스러운·선동적·명예훼손적 또는 유사한 부적절한 언어를 사용하지 않을 것."
        ),
      ],
    },

    // General Provisions
    {
      heading: L("General Provisions", "一般条項", "일반 규정"),
      paragraphs: [
        L(
          "This Agreement shall be governed by and construed in accordance with the laws of the State of United States of America, without regard to principles of conflicts of law. The terms and conditions set forth in this Agreement, together with any specific Acumen Intelligence content provided, constitute the entire agreement between you and Acumen Intelligence with respect to the subject matter. Any additional or different terms and conditions contained in any other document (which may include, but are not limited to, a purchase order) shall be of no force and effect.",
          "本契約は、抵触法の原則に関わらず、合衆国の州法に準拠し、これに従って解釈されます。本契約に定める条件および Acumen Intelligence が提供する特定のコンテンツは、本件に関する利用者と Acumen Intelligence との完全な合意を構成します。その他の文書（注文書等を含むがこれに限られない）に含まれる追加または相違する条件は、効力を有しません。",
          "본 계약은 국제사법 원칙과 무관하게 미합중국 해당 주법에 따르며, 그에 따라 해석됩니다. 본 계약의 조건과 Acumen Intelligence가 제공하는 특정 콘텐츠는 본 건에 관한 귀하와 Acumen Intelligence 간의 완전한 합의를 구성합니다. 다른 문서(구매주문서 등을 포함하되 이에 한정되지 않음)에 포함된 추가 또는 상이한 조건은 효력이 없습니다."
        ),
      ],
    },

    // Privacy
    {
      heading: L("Privacy", "プライバシー", "프라이버시"),
      paragraphs: [
        L(
          "Use of the Service is subject to Acumen Intelligence’s Privacy Policy. By using the Service, you acknowledge and agree to Acumen Intelligence’s Privacy Policy, including use and disclosure of information.",
          "本サービスの利用には Acumen Intelligence のプライバシーポリシーが適用されます。本サービスを利用することで、情報の利用および開示を含むプライバシーポリシーに同意したものとみなされます。",
          "서비스 이용에는 Acumen Intelligence의 개인정보 처리방침이 적용됩니다. 서비스를 이용함으로써 정보의 이용 및 공개를 포함한 해당 방침에 동의한 것으로 간주됩니다."
        ),
      ],
    },

    // Clients
    {
      heading: L("Acumen Intelligence Clients", "Acumen Intelligence の顧客", "Acumen Intelligence 고객"),
      paragraphs: [
        L(
          "If you are an Acumen Intelligence customer, your use of the Website or Resources may be subject to these Terms and Conditions.",
          "Acumen Intelligence の顧客である場合、ウェブサイトまたはリソースの利用は本規約の適用対象となることがあります。",
          "Acumen Intelligence의 고객인 경우, 웹사이트 또는 리소스의 이용은 본 약관의 적용을 받을 수 있습니다."
        ),
        L(
          "If our terms and conditions and privacy policy are not acceptable to you, please do not use this website.",
          "本規約およびプライバシーポリシーに同意いただけない場合は、本ウェブサイトを利用しないでください。",
          "본 약관 및 개인정보 처리방침에 동의하지 않으시면 본 웹사이트를 이용하지 마십시오."
        ),
      ],
    },

    // Change
    {
      heading: L("Change", "変更", "변경"),
      paragraphs: [
        L(
          "Acumen Intelligence reserves the right to change the terms at any time at its discretion. By using the Acumen Intelligence website, you agree to be bound by any such changes. This Privacy Statement and Policy does not create any contractual obligations for any other person or entity.",
          "Acumen Intelligence は、裁量によりいつでも本規約を変更する権利を留保します。ウェブサイトを利用することで、変更後の規約に拘束されることに同意したものとみなされます。本プライバシー声明およびポリシーは、他の個人または法人に対して契約上の義務を生じさせるものではありません。",
          "Acumen Intelligence는 재량에 따라 언제든 약관을 변경할 수 있습니다. 웹사이트를 이용함으로써 귀하는 그러한 변경에 구속되는 데 동의합니다. 본 프라이버시 성명 및 정책은 다른 개인 또는 법인에 계약상 의무를 발생시키지 않습니다."
        ),
      ],
    },

    // Copyright
    {
      heading: L("Notice of Copyright Claim", "著作権に関する通知", "저작권 고지"),
      paragraphs: [
        L(
          "Copyright © 2025, Acumen Intelligence. All rights reserved. No part of the Acumen Intelligence website may be copied, modified, distributed or reproduced in any form or by any means without the prior permission of Acumen Intelligence.",
          "Copyright © 2025, Acumen Intelligence. 無断転載・複製・改変・配布を禁じます。Acumen Intelligence の事前の許可なく、本ウェブサイトのいかなる部分も、いかなる方法でも複製・改変・配布することはできません。",
          "Copyright © 2025, Acumen Intelligence. 무단 전재·복제·수정을 금합니다. Acumen Intelligence의 사전 허가 없이 본 웹사이트의 어떠한 부분도 어떠한 형태나 방법으로도 복제·변경·배포할 수 없습니다."
        ),
      ],
    },
  ],
};
