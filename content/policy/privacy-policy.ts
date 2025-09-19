import type { PolicyDoc } from "@/components/policy/policy-template";
import type { LStr } from "@/lib/i18n";

/** Helper to build LStr blocks */
const L = (en: string, ja: string, ko: string): LStr => ({ en, ja, ko });

export const PRIVACY_POLICY_DOC: PolicyDoc = {
  title: L("Privacy Policy", "プライバシーポリシー", "개인정보 처리방침"),
  sections: [
    // Intro
    {
      paragraphs: [
        L(
          "Welcome to Acumen Intelligence and our website at www.acumenintelligence.com (our “website”). At Acumen Intelligence, we are committed to protecting and respecting your privacy.",
          "Acumen Intelligence および当社ウェブサイト www.acumenintelligence.com（以下「当ウェブサイト」）へようこそ。Acumen Intelligence は、皆さまのプライバシーを保護し尊重することをお約束します。",
          "Acumen Intelligence 및 당사의 웹사이트 www.acumenintelligence.com(이하 “본 웹사이트”)에 오신 것을 환영합니다. Acumen Intelligence는 귀하의 개인정보를 보호하고 존중하기 위해 최선을 다합니다."
        ),
        L(
          "This privacy policy sets out the basis on which we will process any Personal Data that we may collect about you as a visitor to our website. This policy further sets out how we protect your privacy and your rights in respect of your Personal Data.",
          "本プライバシーポリシーは、当ウェブサイトの訪問者として当社が収集する可能性のある個人データの処理の前提を定めるものです。あわせて、当社によるプライバシー保護の方法および個人データに関する皆さまの権利についても説明します。",
          "본 개인정보 처리방침은 저희가 웹사이트 방문자로부터 수집할 수 있는 개인정보를 어떤 근거로 처리하는지 규정하며, 개인정보 보호 방식과 귀하의 권리에 대해서도 설명합니다."
        ),
      ],
    },

    // What is Personal Data?
    {
      heading: L("What is Personal Data?", "個人データとは何ですか？", "개인정보란 무엇입니까?"),
      paragraphs: [
        L(
          "Personal Data is information that makes it possible to identify a natural person. This includes, in particular, your name, date of birth, address, telephone number, e-mail address, and also your IP address. Anonymous data exists where no personal reference to the user can be made.",
          "個人データとは、自然人を識別できる情報を指します。氏名、生年月日、住所、電話番号、電子メールアドレス、さらに IP アドレスなどが含まれます。ユーザーに紐づけられない情報は匿名データとみなされます。",
          "개인정보는 자연인을 식별할 수 있는 정보를 말합니다. 이름, 생년월일, 주소, 전화번호, 이메일 주소, IP 주소 등이 이에 해당합니다. 사용자를 식별할 수 없는 정보는 익명 데이터로 봅니다."
        ),
      ],
    },

    // What is Processing?
    {
      heading: L("What is Processing?", "処理とは何ですか？", "처리란 무엇입니까?"),
      paragraphs: [
        L(
          '"Processing" means and covers virtually any handling of data.',
          "「処理」とは、データの事実上あらゆる取扱いを意味します。",
          "‘처리’란 데이터에 대한 사실상 모든 취급 행위를 의미합니다."
        ),
      ],
    },

    // What Law Applies?
    {
      heading: L("What Law Applies?", "適用される法律", "적용되는 법률"),
      paragraphs: [
        L(
          "We will only use your Personal Data in accordance with the applicable data protection laws, in particular Singapore's Personal Data Protection Act 2012 (PDPA) and the EU's General Data Protection Regulation (GDPR), and only as described in this Privacy Policy.",
          "当社は、適用されるデータ保護法、特にシンガポールの個人情報保護法（PDPA）および EU 一般データ保護規則（GDPR）に従い、本ポリシーに記載の範囲でのみ個人データを利用します。",
          "당사는 적용 가능한 데이터 보호법—특히 싱가포르 개인정보보호법(PDPA)과 EU 일반개인정보보호규정(GDPR)—에 따라 본 방침에 명시된 범위에서만 개인정보를 사용합니다."
        ),
      ],
    },

    // Controller
    {
      heading: L("Who is Responsible for Data Processing?", "データ処理の責任者", "개인정보 처리 책임자"),
      paragraphs: [
        L(
          "The responsible party is Acumen Intelligence Solutions Pte. Ltd of Midview City, 22 Sin Ming Lane, #06-79, 573969, Singapore (“Acumen Intelligence”, “we”, “us”, “our”). If you want to contact us or if you have any questions, you can reach us using our Contact Form.",
          "責任者は、Acumen Intelligence Solutions Pte. Ltd（所在地：Midview City, 22 Sin Ming Lane, #06-79, 573969, Singapore）です。ご質問は当社のコンタクトフォームからご連絡ください。",
          "책임 주체는 Acumen Intelligence Solutions Pte. Ltd(주소: Midview City, 22 Sin Ming Lane, #06-79, 573969, Singapore)입니다. 문의는 당사의 문의 양식을 통해 접수합니다."
        ),
      ],
    },

    // Legal bases
    {
      heading: L(
        "What are the Legal Bases for Processing Personal Data",
        "個人データ処理の法的根拠",
        "개인정보 처리의 법적 근거"
      ),
      paragraphs: [
        L(
          "In accordance with the PDPA and the GDPR, at least one of the following legal bases applies: (a) consent; (b) contract or pre-contractual measures; (c) legal obligation; or (d) legitimate interests, provided your interests are not overridden.",
          "PDPA および GDPR に基づき、少なくとも次のいずれかの法的根拠に該当する場合に処理します：（a）同意、（b）契約または契約前措置、（c）法的義務、（d）正当な利益（皆さまの利益が優越しない範囲）。",
          "PDPA 및 GDPR에 따라 다음 중 하나 이상에 해당하는 경우 처리합니다: (a) 동의, (b) 계약 또는 사전계약 조치, (c) 법적 의무, (d) 정당한 이익(귀하의 이익이 우선하지 않는 범위)."
        ),
      ],
    },

    // What we collect
    {
      heading: L("What Personal Data Do We Collect From You?", "どのような個人データを収集しますか？", "어떤 개인정보를 수집합니까?"),
      paragraphs: [
        L(
          "a) Personal Data that you give us: This includes information you provide by filling in forms on our website or corresponding with us by telephone, post, email, or otherwise (e.g., your name, address, email address, telephone number), information about your business relationship with us, and information about your requirements and interests.",
          "a）ご提供いただく個人データ：当ウェブサイト上のフォーム記入や、電話・郵送・電子メール等でのやり取りにより提供される情報（氏名、住所、メール、電話番号など）、当社との取引関係に関する情報、ニーズや関心に関する情報など。",
          "a) 귀하가 제공하는 개인정보: 웹사이트 양식 작성 또는 전화·우편·이메일 등으로 제공하는 정보(이름, 주소, 이메일, 전화번호 등), 당사와의 비즈니스 관계 정보, 요구사항 및 관심사 등."
        ),
        L(
          "We also process Personal Data involved in your use of our services, such as your contact information, full name, email, postal address, and phone number, and the data related to your use of our services and the contract between us, in order to provide our contractual services. This includes, in particular, our support, correspondence with you, invoicing, and fulfilment of our contractual, accounting, and tax obligations. In general, contract-related data is saved and stored using the services of Amazon (AWS).",
          "また、当社サービスの提供に必要な範囲で、連絡先、氏名、メール、住所、電話番号、当社サービスの利用状況や当社との契約に関するデータを処理します。これには、サポート対応、やり取り、請求、契約・会計・税務上の義務の履行が含まれます。契約関連データは一般に Amazon（AWS）に保存されます。",
          "또한 계약상 서비스 제공을 위해 연락처, 성명, 이메일, 주소, 전화번호, 서비스 이용 및 계약 관련 데이터를 처리합니다. 여기에는 지원, 서신 교환, 청구, 계약/회계/세무 의무 이행이 포함되며, 계약 관련 데이터는 일반적으로 Amazon(AWS)에 저장됩니다."
        ),
        L(
          "b) Personal Data that our website and other systems collect about you: If you visit our website, it will automatically collect some information about you and your visit, including the IP address used to connect your device to the Internet and information such as the pages on our site that you visit. This is used to monitor website performance and improve visitor experience.",
          "b）当ウェブサイトやその他のシステムが自動的に収集する個人データ：当ウェブサイトへの訪問時に、接続に使用された IP アドレスや閲覧ページ等の情報が自動収集されます。これらはウェブサイトのパフォーマンス監視や利用体験の改善のために用いられます。",
          "b) 웹사이트 및 기타 시스템이 자동으로 수집하는 개인정보: 방문 시 인터넷 연결에 사용된 IP 주소, 방문한 페이지 등 일부 정보가 자동 수집되며, 사이트 성능 모니터링과 사용자 경험 개선에 활용됩니다."
        ),
        L(
          "We use cookies on our website. As set out in the PDPA and the EU’s Privacy and Electronic Communications Directive (PECD), we need to obtain consent for the use of non-essential cookies. For further information on the cookies we use, please refer to our Cookie Policy.",
          "当ウェブサイトではクッキーを使用しています。PDPA および EU のプライバシー・電子通信指令（PECD）に従い、必須ではないクッキーの使用には同意が必要です。詳細はクッキーポリシーをご覧ください。",
          "본 웹사이트는 쿠키를 사용합니다. PDPA 및 EU 전자프라이버시지침(PECD)에 따라 비필수 쿠키 사용 시 동의를 받아야 합니다. 자세한 내용은 쿠키 정책을 참조하세요."
        ),
      ],
    },

    // Third-party services
    {
      heading: L("Data Processing Through Third-Party Services", "第三者サービスによるデータ処理", "제3자 서비스를 통한 데이터 처리"),
      paragraphs: [
        L(
          "We use the content or service offers of third-party providers, based on our legitimate interests, to integrate their content and services on our website. This requires these providers to be aware of users’ IP addresses, since without the IP address they could not send content to the browser.",
          "当社は、正当な利益に基づき、第三者のコンテンツやサービスを当ウェブサイトに統合しています。そのため、提供者はユーザーのブラウザにコンテンツを送信するために IP アドレスを認識する必要があります。",
          "당사는 정당한 이익에 근거하여 제3자 제공업체의 콘텐츠/서비스를 웹사이트에 통합합니다. 이때 제공업체는 브라우저로 콘텐츠를 전송하기 위해 사용자의 IP 주소를 인지해야 합니다."
        ),
        L(
          "Overview of providers: (a) Hosting: HostGator.com (Newfold Digital Inc.); (b) Fonts: Google Fonts; (c) Tag Management: Google Tag Manager.",
          "提供者の概要：（a）ホスティング：HostGator.com（Newfold Digital Inc.）、（b）フォント：Google Fonts、（c）タグ管理：Google Tag Manager。",
          "제공업체 개요: (a) 호스팅: HostGator.com(Newfold Digital Inc.), (b) 폰트: Google Fonts, (c) 태그 관리: Google Tag Manager."
        ),
      ],
    },

    // How we use data
    {
      heading: L("How Will We Use Your Personal Data?", "個人データをどのように利用しますか？", "개인정보는 어떻게 사용되나요?"),
      list: [
        L("Operate, manage, develop, and promote our business and our relationship with you.", "当社事業および皆さまとの関係の運営・管理・発展・促進。", "당사 비즈니스와 귀하와의 관계를 운영·관리·발전·홍보."),
        L("Marketing purposes (with prior opt-in and/or legitimate interests).", "マーケティング目的（事前の同意および/または正当な利益に基づく）。", "마케팅 목적(사전 동의 및/또는 정당한 이익 기반)."),
        L("Accounting and billing/payment purposes.", "会計および請求・支払いのため。", "회계 및 청구/결제 목적."),
        L("Operate, administer, and improve our website and operations.", "当ウェブサイトおよび業務の運用・管理・改善。", "웹사이트 및 운영의 운영·관리·개선."),
        L("Offer and provide our services or information you requested.", "当社サービスの提供およびご要望の情報提供。", "요청한 서비스 또는 정보 제공."),
        L("Keep you informed and updated on relevant topics or services.", "関連トピックやサービスに関する情報提供。", "관련 주제 또는 서비스에 대한 최신 정보 제공."),
        L("Protect our business from fraud, money laundering, breach of confidence, theft of proprietary materials, and other crimes.", "詐欺、マネーロンダリング、守秘義務違反、専有資料の窃盗その他の犯罪からの保護。", "사기, 자금세탁, 비밀침해, 독점 자료 절도 등 범죄로부터 당사 보호."),
        L("Comply with legal and regulatory obligations, bring and defend legal claims, and assert legal rights.", "法令遵守、法的主張の提起・防御、権利行使。", "법규 준수, 법적 청구 제기/방어 및 권리 행사."),
        L("If the purpose is directly connected with a previously notified purpose.", "事前に通知した目的に直接関連する場合。", "사전에 고지한 목적과 직접적으로 연결되는 경우."),
      ],
      paragraphs: [
        L(
          "We will only process Personal Data as necessary for the above purposes and where we have a legal basis. Where our lawful basis is legitimate interests, we will ensure that our processing does not prejudice you or your privacy in a way that overrides our interests. In exceptional circumstances, we may be required by law to disclose Personal Data.",
          "当社は、上記目的の達成に必要であり、かつ法的根拠がある場合に限って個人データを処理します。法的根拠が正当な利益である場合は、皆さまの権利やプライバシーを不当に害さないよう配慮します。特別な事情により、法令に基づき個人データの開示を求められる場合があります。",
          "당사는 상기 목적 달성에 필요한 범위 내에서, 그리고 적법한 근거가 있을 때에만 개인정보를 처리합니다. 법적 근거가 정당한 이익인 경우, 귀하의 권리나 프라이버시를 침해하지 않도록 균형을 보장합니다. 예외적으로 법률상 요구될 경우 개인정보를 공개해야 할 수 있습니다."
        ),
      ],
    },

    // Data sharing
    {
      heading: L("Data Sharing", "データ共有", "데이터 공유"),
      paragraphs: [
        L("a) Internal: We may transfer Personal Data within Acumen Intelligence. Access is granted only to authorised employees who need it for their job.", "a）社内：当社グループ内で個人データを共有する場合があり、業務上必要な権限を付与された従業員のみがアクセスします。", "a) 내부: Acumen Intelligence 내에서 개인정보가 이전될 수 있으며, 업무상 필요 권한이 있는 직원에게만 접근이 허용됩니다."),
        L("b) External bodies: Personal Data is transferred to service providers in the following instances: to fulfil our contract with you, to use marketing services and advertise our services online, to communicate with you, to provide our website, and to state authorities and institutions as far as required or necessary.", "b）外部：以下の場合にサービス提供者へ個人データを提供します：契約履行、マーケティングやオンライン広告、コミュニケーション、ウェブサイト提供、ならびに必要に応じた当局等への提供。", "b) 외부 기관: 다음의 경우 서비스 제공업체 등에 개인정보를 제공합니다: 계약 이행, 마케팅/온라인 광고, 커뮤니케이션, 웹사이트 제공, 필요 범위 내의 정부/기관 제출 등."),
        L("c) International transfers: We may transfer Personal Data to other companies as necessary. We use contractual arrangements including Processing Agreements with Standard Contractual Clauses and Non-Disclosure Agreements. We take reasonable technical and organisational measures to protect the Personal Data we transfer.", "c）国際移転：必要に応じて他国の事業者へ個人データを移転する場合があります。標準契約条項（SCC）を含む処理契約や秘密保持契約（NDA）などの契約上の保護措置を講じ、適切な技術的・組織的対策により移転データを保護します.", "c) 국제 이전: 필요 시 타사로 개인정보를 이전할 수 있습니다. 표준계약조항(SCC)을 포함한 처리계약 및 비밀유지계약(NDA) 등 계약적 장치를 사용하고, 합리적인 기술·조직적 보안조치를 적용합니다.")
      ],
    },

    // Retention
    {
      heading: L("How Long Do We Keep Your Personal Data?", "個人データの保存期間", "개인정보 보관 기간"),
      paragraphs: [
        L(
          "We will delete your Personal Data when we no longer need it, for instance where it is no longer necessary for the purposes for which we collected it, where we believe it is inaccurate, or in certain cases where you withdraw consent. Sometimes, however, legal or regulatory requirements require us to retain your Personal Data for a specified period, and we may need to retain it longer in relation to legal disputes.",
          "収集目的の達成後や不要となった場合、不正確であると判断した場合、または一定の場合に同意が撤回された場合には個人データを削除します。ただし、法令により定められた保存期間がある場合や、法的紛争に関連してより長期の保存が必要となる場合があります。",
          "수집 목적 달성 등 더 이상 필요하지 않거나 부정확하다고 판단되는 경우, 또는 특정 상황에서 동의가 철회된 경우 개인정보를 삭제합니다. 다만 법령상 보관 의무가 있는 경우나 법적 분쟁과 관련하여 더 오래 보관해야 할 수 있습니다."
        ),
      ],
    },

    // Security
    {
      heading: L("Data Security", "データセキュリティ", "데이터 보안"),
      paragraphs: [
        L(
          "Our website uses SSL/TLS encryption to ensure secure transmission of confidential content. We have implemented numerous technical and organisational measures—such as encryption and need-to-know access—to protect Personal Data processed through our website.",
          "当ウェブサイトは、SSL/TLS による暗号化を用いて機密情報の安全な送信を確保しています。さらに、暗号化や知る必要性に基づくアクセス制御など、技術的・組織的対策を実装し、当ウェブサイトで処理される個人データを保護します。",
          "본 웹사이트는 SSL/TLS 암호화를 사용하여 기밀 정보의 안전한 전송을 보장합니다. 또한 암호화, 필요-기반 접근 통제 등 다양한 기술·조직적 조치를 구현하여 처리되는 개인정보를 보호합니다."
        ),
      ],
    },

    // Marketing
    {
      heading: L("Marketing", "マーケティング", "마케팅"),
      paragraphs: [
        L(
          "Where you have given us separate consent to process your data for marketing and advertising, we may contact you via the channels you consented to. Every directly addressed marketing communication will include a means to unsubscribe or opt out.",
          "マーケティングや広告目的でのデータ処理について別途同意をいただいた場合、同意いただいたチャネルでご連絡することがあります。すべてのダイレクトマーケティングには配信停止（オプトアウト）の手段を含みます。",
          "마케팅 및 광고 목적의 처리에 별도로 동의하신 경우, 동의하신 경로로 연락드릴 수 있습니다. 모든 다이렉트 마케팅 메시지에는 수신 거부 수단이 포함됩니다."
        ),
      ],
    },

    // Rights and privileges
    {
      heading: L("Your Rights and Privileges", "お客様の権利", "귀하의 권리"),
      paragraphs: [L("You can exercise the following rights:", "以下の権利を行使できます。", "다음 권리를 행사하실 수 있습니다:")],
    },
    {
      paragraphs: [L("Under the PDPA:", "PDPA に基づく権利：", "PDPA에 따른 권리:")],
      list: [
        L("Right to access", "アクセス権", "열람권"),
        L("Right to correction", "訂正権", "정정권"),
        L("Right to erasure", "削除権", "삭제권"),
        L("Right to opt-out", "オプトアウト権", "처리 거부권"),
        L("Right to data portability", "データポータビリティ権", "데이터 이동권"),
      ],
    },
    {
      paragraphs: [L("Under the GDPR:", "GDPR に基づく権利：", "GDPR에 따른 권리:")],
      list: [
        L("Right to information", "情報提供を受ける権利", "정보 제공을 받을 권리"),
        L("Right to rectification", "訂正を求める権利", "정정을 요구할 권리"),
        L("Right to object to processing", "処理に異議を唱える権利", "처리에 반대할 권리"),
        L("Right to deletion", "削除を求める権利", "삭제를 요구할 권리"),
        L("Right to data portability", "データポータビリティの権利", "데이터 이동권"),
        L("Right to withdraw consent", "同意を撤回する権利", "동의를 철회할 권리"),
        L("Right to complain to a supervisory authority", "監督機関へ苦情を申し立てる権利", "감독 당국에 불만을 제기할 권리"),
        L("Right not to be subject to a decision based solely on automated processing", "完全に自動化された処理のみに基づく決定の対象とならない権利", "전적으로 자동화된 처리에 근거한 결정의 대상이 되지 않을 권리"),
      ],
    },

    // SCA
    {
      heading: L("Singapore Spam Control Act 2007 (SCA)", "シンガポール迷惑メール防止法（SCA）", "싱가포르 스팸 통제법(SCA)"),
      paragraphs: [
        L(
          "If at any time you would like to unsubscribe from receiving future emails, you can email us and we will promptly remove you from all correspondence.",
          "将来のメール配信を停止したい場合は、当社へメールでご連絡ください。速やかにすべての配信から削除します。",
          "향후 이메일 수신을 중단하려면 이메일로 요청해 주십시오. 모든 발송 목록에서 신속히 제외하겠습니다."
        ),
      ],
    },

    // Update/withdraw
    {
      heading: L("Updating Your Information and Withdrawing Your Consent", "情報の更新と同意の撤回", "정보 업데이트 및 동의 철회"),
      paragraphs: [
        L(
          "If you believe that information we hold about you is inaccurate, or you request rectification or deletion, or object to processing based on legitimate interests, please contact us.",
          "当社が保有する情報に不正確があるとお考えの場合、訂正・削除のご要望、正当な利益に基づく処理への異議などがある場合は、当社までご連絡ください。",
          "보유 정보가 부정확하다고 생각되거나 정정/삭제 요청 또는 정당한 이익에 기초한 처리에 대한 이의가 있으시면 연락해 주십시오."
        ),
      ],
    },

    // Access request
    {
      heading: L("Access Request", "開示請求（アクセスリクエスト）", "열람 요청(Access Request)"),
      paragraphs: [
        L(
          "To make a Data Subject Access Request, please contact us. We will respond as soon as reasonably possible. If we cannot respond within thirty (30) days, we will tell you why and when we will respond. If we are unable to provide Personal Data or to make a correction requested by you, we will tell you why.",
          "データ主体からの開示請求は当社までご連絡ください。可能な限り速やかに対応します。30 日以内に回答できない場合は、その理由と見込み時期をお知らせします。提供や訂正に応じられない場合には、その理由をご説明します。",
          "개인정보 열람 요청은 당사로 연락해 주십시오. 가능한 한 신속히 답변드리며, 30일 이내 응답이 어려울 경우 사유와 예정 일정을 안내합니다. 제공 또는 정정이 불가한 경우 그 사유를 설명드립니다."
        ),
      ],
    },

    // Complaint to authority
    {
      heading: L("Complaint to a Supervisory Authority", "監督機関への苦情申立て", "감독 기관에 대한 불만 제기"),
      paragraphs: [
        L(
          "You have the right to complain about our processing of Personal Data to a supervisory authority responsible for data protection. In Singapore, this is the Personal Data Protection Commission (www.pdpc.gov.sg). We would appreciate the opportunity to address your concerns first.",
          "当社の個人データの取扱いについては、データ保護を管轄する監督機関へ苦情を申し立てる権利があります。シンガポールでは Personal Data Protection Commission（www.pdpc.gov.sg）が監督機関です。まずは当社にご相談いただけますと幸いです。",
          "당사의 개인정보 처리에 관해 데이터 보호 감독 기관에 불만을 제기할 권리가 있습니다. 싱가포르에서는 Personal Data Protection Commission(www.pdpc.gov.sg)이 해당 기관입니다. 먼저 당사에 문제 해결의 기회를 주시면 감사하겠습니다."
        ),
      ],
    },

    // What we do not do
    {
      heading: L("What We Do Not Do", "当社が行わないこと", "하지 않는 일"),
      list: [
        L("We do not request Personal Data from minors and children.", "未成年者・児童から個人データを取得しません。", "미성년자 및 아동으로부터 개인정보를 요구하지 않습니다."),
        L("We do not process special category data without prior specific consent.", "特別カテゴリのデータを事前の明示的同意なく処理しません。", "민감정보는 사전 명시적 동의 없이 처리하지 않습니다."),
        L("We do not use automated decision-making, including profiling.", "プロファイリングを含む自動化された意思決定は行いません。", "프로파일링을 포함한 자동화된 의사결정을 사용하지 않습니다."),
        L("We do not sell your Personal Data.", "個人データを販売しません。", "귀하의 개인정보를 판매하지 않습니다."),
      ],
    },

    // USA
    {
      heading: L("USA Specific Provisions", "米国に関する特則", "미국 관련 특則"),
      paragraphs: [
        L(
          "We aim to follow and apply the relevant privacy rules and regulations of your state. Where appropriate, we grant all users in the USA the same rights and privileges as set out above. Where ambiguity occurs, the most stringent provision is chosen.",
          "当社は、各州で適用されるプライバシー関連法令を遵守するよう努めます。原則として本ポリシーに掲げる権利・保護を米国内のすべてのユーザーに等しく提供します。解釈に曖昧さがある場合は、最も厳格な規定を適用します。",
          "당사는 귀하의 주(州)에 적용되는 프라이버시 규정을 준수하기 위해 노력합니다. 원칙적으로 본 방침에 정한 권리와 보호를 미국의 모든 사용자에게 동일하게 제공합니다. 해석상 모호함이 있을 경우 가장 엄격한 규정을 적용합니다."
        ),
        L(
          "“Shine the Light”: We respond to requests about disclosures of Personal Data to third parties for their direct marketing. COPPA: We do not specifically market to children under 13. CAN-SPAM: You may unsubscribe and we will promptly remove you. TCPA: For SMS marketing, reply “STOP” to opt out. Do-Not-Track: No uniform standard is currently finalised; our website does not respond to DNT signals. If a standard is adopted in the future, we will update this policy. Right to complain: users may lodge a complaint with relevant district attorney or attorney general offices; we appreciate the opportunity to address concerns first.",
          "「Shine the Light」：第三者のダイレクトマーケティング目的での個人データ提供に関する照会に対応します。COPPA：13 歳未満を対象としたマーケティングは行いません。CAN-SPAM：配信停止が可能で、速やかに反映します。TCPA：SMS マーケティングの停止は「STOP」と返信してください。Do-Not-Track：統一規格が確立されていないため現在は対応していません。将来標準が採用された場合は本ポリシーを更新します。苦情：該当する州検事局等に申し立て可能ですが、まずは当社にご連絡ください。",
          "“Shine the Light”: 제3자의 다이렉트 마케팅 목적 제공에 관한 요청에 응답합니다. COPPA: 13세 미만을 대상으로 한 마케팅은 하지 않습니다. CAN-SPAM: 수신 거부가 가능하며 신속히 반영합니다. TCPA: SMS 마케팅은 ‘STOP’으로 거부할 수 있습니다. DNT: 통일 표준이 없어 현재는 응답하지 않습니다. 표준이 채택되면 본 방침을 업데이트합니다. 불만 제기: 해당 주 검찰 또는 법무부에 민원을 제기할 수 있으나, 먼저 당사에 알려주시면 감사하겠습니다."
        ),
      ],
    },

    // GCC
    {
      heading: L("GCC Specific Provisions", "GCC に関する特則", "GCC 관련 특칙"),
      paragraphs: [
        L(
          "The GCC has introduced data protection laws similar to the GDPR. In particular, Saudi Arabia’s PDPL, the UAE’s Federal Decree-Law No.45 of 2021, Bahrain’s PDPL, and Oman’s PDPL are relevant. We aim to grant a uniform level of protection; where ambiguity occurs, the most stringent provision is chosen.",
          "GCC 地域では、GDPR に類似したデータ保護法が導入されています。特にサウジアラビアの PDPL、UAE の 2021 年連邦法第 45 号、バーレーンおよびオマーンの PDPL が該当します。当社は均一の保護水準を提供するよう努め、解釈に曖昧さがある場合は最も厳格な規定を適用します。",
          "GCC 지역은 GDPR과 유사한 데이터 보호 법제를 도입했습니다. 특히 사우디아라비아 PDPL, UAE 2021년 연방법 제45호, 바레인·오만의 PDPL이 해당합니다. 당사는 균일한 보호 수준을 제공하고, 모호한 경우 가장 엄격한 규정을 적용합니다."
        ),
      ],
    },

    // Help & complaints
    {
      heading: L("Help and Complaints", "お問い合わせ・苦情", "문의 및 불만"),
      paragraphs: [
        L(
          "If you have any questions about this policy or the information we hold about you, you can reach us using our Contact Form.",
          "本ポリシーや当社が保有するお客様情報に関するご質問は、当社のコンタクトフォームからお問い合わせください。",
          "본 방침 또는 당사가 보유한 귀하의 정보에 관한 문의는 당사 문의 양식을 통해 연락해 주시기 바랍니다."
        ),
      ],
    },

    // Changes
    {
      heading: L("Changes", "変更", "변경 사항"),
      paragraphs: [
        L(
          "The first version of this policy was issued on Wednesday, 10th of October, 2024, and is the current version. Any prior versions are invalid, and if we make changes to this policy, we will revise the effective date.",
          "本ポリシーの初版は 2024 年 10 月 10 日（水）に発行され、現行版です。以前の版は無効となります。変更がある場合は、発効日を更新します。",
          "본 방침의 최초 버전은 2024년 10월 10일(수)에 발행되었으며 현재 유효합니다. 이전 버전은 무효이며, 변경 시 발효일을 갱신합니다."
        ),
      ],
    },
  ],
};
