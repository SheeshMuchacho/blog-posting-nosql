import type { PolicyDoc } from "@/components/policy/policy-template";
import type { LStr } from "@/lib/i18n";

const L = (en: string, ja: string, ko: string): LStr => ({ en, ja, ko });

export const COOKIE_POLICY_DOC: PolicyDoc = {
  title: L("Cookie Policy", "クッキーポリシー", "쿠키 정책"),
  sections: [
    // Intro
    {
      paragraphs: [
        L(
          "Welcome to Acumen Intelligence and our website at www.acumenintelligence.com (our “website”). This policy is intended to inform the users of our website about our use of cookies.",
          "Acumen Intelligence および当社ウェブサイト www.acumenintelligence.com（以下「当ウェブサイト」）へようこそ。本ポリシーは、当ウェブサイトにおけるクッキーの使用について利用者に周知することを目的としています。",
          "Acumen Intelligence 및 당사 웹사이트 www.acumenintelligence.com(이하 “본 웹사이트”)에 오신 것을 환영합니다. 본 정책은 웹사이트에서의 쿠키 사용에 대해 이용자에게 알리기 위한 것입니다."
        ),
      ],
    },

    // Why do we have a cookie policy?
    {
      heading: L("Why Do We Have a Cookie Policy?", "なぜクッキーポリシーがあるのですか？", "왜 쿠키 정책이 있나요?"),
      paragraphs: [
        L(
          "This Cookie Policy sits in line with our obligations set out in Singapore’s Personal Data Protection Act 2012 (PDPA) and the EU's Privacy and Electronic Communications Directive (PECD). In accordance with them, we need to inform you about the cookies we use and obtain your consent when using certain types of cookies, namely functional, performance, analytical, and advertising cookies.",
          "本クッキーポリシーは、シンガポールの個人情報保護法（PDPA）および EU のプライバシー・電子通信指令（PECD）に基づく義務に沿うものです。これらに従い、当社が使用するクッキーについてお知らせし、機能・パフォーマンス・分析・広告など特定の種類のクッキーを使用する際には同意を取得する必要があります。",
          "본 쿠키 정책은 싱가포르 개인정보보호법(PDPA) 및 EU 전자프라이버시지침(PECD)에 따른 의무를 반영합니다. 이에 따라 당사가 사용하는 쿠키에 대해 알리고, 기능·성능·분석·광고 쿠키 등 특정 유형의 쿠키 사용 시 동의를 받아야 합니다."
        ),
      ],
    },

    // Controller
    {
      heading: L("Who Is the Data Controller?", "データ管理者（コントローラ）は誰ですか？", "개인정보 처리자는 누구인가요?"),
      paragraphs: [
        L(
          "A “data controller” determines the purposes and means of processing personal data. In this sense, Acumen Intelligence Solutions Pte. Ltd of Midview City, 22 Sin Ming Lane, #06-79, 573969, Singapore (“Acumen Intelligence”, “we”, “us”, “our”) is the data controller. If you have any questions about cookies on our website, you can reach us using our Contact Form.",
          "「データ管理者（コントローラ）」とは、個人データの処理目的および手段を決定する者をいいます。Acumen Intelligence Solutions Pte. Ltd（所在地：Midview City, 22 Sin Ming Lane, #06-79, 573969, Singapore）はデータ管理者です。クッキーに関するご質問は、当社のコンタクトフォームよりお問い合わせください。",
          "‘개인정보 처리자(컨트롤러)’란 개인정보 처리의 목적과 수단을 결정하는 자를 말합니다. Acumen Intelligence Solutions Pte. Ltd(주소: Midview City, 22 Sin Ming Lane, #06-79, 573969, Singapore)가 처리자입니다. 쿠키 관련 문의는 문의 양식을 통해 연락해 주세요."
        ),
      ],
    },

    // What are cookies?
    {
      heading: L("What Are Cookies?", "クッキーとは何ですか？", "쿠키란 무엇인가요?"),
      paragraphs: [
        L(
          "A cookie is a small file sent with pages of a website and stored by the browser on a device. The information stored may be sent to our or relevant third-party servers during subsequent visits.",
          "クッキーは、ウェブサイトのページとともに送信され、ブラウザによってデバイスに保存される小さなファイルです。保存された情報は、再訪問時に当社または第三者のサーバーに送信されることがあります。",
          "쿠키는 웹사이트의 페이지와 함께 전송되어 브라우저에 의해 기기에 저장되는 작은 파일입니다. 저장된 정보는 재방문 시 당사 또는 관련 제3자 서버로 전송될 수 있습니다."
        ),
      ],
    },

    // How are cookies used?
    {
      heading: L("How Are Cookies Used?", "クッキーの使用方法", "쿠키는 어떻게 사용되나요?"),
      paragraphs: [
        L(
          "Two types of cookies may be used: “essential or necessary cookies” and “optional cookies.” Essential cookies are required for the proper and secure operation of a website. Optional cookies are not essential and require your consent.",
          "使用されるクッキーには「必須クッキー」と「任意クッキー」の 2 種類があります。必須クッキーはウェブサイトの適切かつ安全な動作に不可欠です。任意クッキーは必須ではなく、使用には同意が必要です。",
          "쿠키는 ‘필수 쿠키’와 ‘선택 쿠키’의 두 종류가 사용될 수 있습니다. 필수 쿠키는 웹사이트의 올바르고 안전한 작동에 필요하며, 선택 쿠키는 필수가 아니며 사용 시 동의가 필요합니다."
        ),
      ],
      list: [
        L(
          "Functional cookies: remember options you’ve made and personalization settings.",
          "機能クッキー：選択内容やパーソナライズ設定を記憶します。",
          "기능 쿠키: 사용자가 선택한 옵션과 개인화 설정을 기억합니다."
        ),
        L(
          "Analysis and performance cookies: monitor and improve website function and service, troubleshoot, conduct surveys, count visitors, and provide analytics metrics.",
          "分析・パフォーマンスクッキー：ウェブサイトの機能・サービスの監視・改善、トラブルシューティング、調査、訪問者数の計測、各種分析指標の提供に用いられます。",
          "분석·성능 쿠키: 사이트 기능과 서비스를 모니터링·개선하고, 문제 해결, 설문, 방문자 수 측정, 분석 지표 제공에 사용됩니다."
        ),
        L(
          "Advertising or targeting cookies: deliver customized advertising.",
          "広告・ターゲティングクッキー：カスタマイズされた広告を配信します。",
          "광고/타게팅 쿠키: 맞춤형 광고를 제공합니다."
        ),
      ],
    },

    // Consent status
    {
      paragraphs: [
        L(
          "As explained above, the PDPA and PECD require us to ask for your consent when using optional cookies. However, as we think it is important that you should have full control over your privacy online, we have refrained from placing optional cookies, and as such, we are not required to obtain any consents. Nonetheless, this may change, and we ask you to regularly check this policy for any updates.",
          "上記のとおり、PDPA および PECD により任意クッキーの使用には同意が必要です。ただし当社は、皆さまがオンラインのプライバシーを十分に管理できることを重視し、現時点では任意クッキーを設置していません。そのため同意取得は不要です。もっとも、将来的に変更される可能性があるため、本ポリシーの最新情報をご確認ください。",
          "앞서 설명했듯이 PDPA 및 PECD에 따라 선택 쿠키 사용 시에는 동의가 필요합니다. 다만, 이용자의 온라인 프라이버시 통제를 중시하여 현재는 선택 쿠키를 사용하지 않으며, 따라서 동의가 필요하지 않습니다. 향후 변경될 수 있으므로 본 정책을 수시로 확인해 주시기 바랍니다."
        ),
      ],
    },

    // Help & complaints
    {
      heading: L("Help and Complaints", "お問い合わせ・苦情", "문의 및 불만"),
      paragraphs: [
        L(
          "If you have any questions about this policy or the information we hold about you, please contact us by email using our Contact Form.",
          "本ポリシーや当社が保有するお客様情報に関するご質問は、当社のコンタクトフォームから電子メールでお問い合わせください。",
          "본 정책 또는 당사가 보유한 귀하의 정보에 관해 궁금한 점이 있으면 문의 양식을 통해 이메일로 연락해 주십시오."
        ),
      ],
    },

    // Changes
    {
      heading: L("Changes", "変更", "변경"),
      paragraphs: [
        L(
          "The first version of this policy was issued on Wednesday, 10th of October, 2024, and is the current version. Any prior versions are invalid, and if we make changes to this policy, we will revise the effective date.",
          "本ポリシーの初版は 2024 年 10 月 10 日（水）に発行され、これが現行版です。以前の版は無効です。変更が生じた場合は、発効日を更新します。",
          "본 정책의 최초 버전은 2024년 10월 10일(수)에 발행되었으며 현재 유효한 버전입니다. 이전 버전은 무효이며, 정책이 변경되면 발효일을 수정합니다."
        ),
      ],
    },
  ],
};
