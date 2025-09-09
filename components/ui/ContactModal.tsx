import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import { t } from "@/lib/i18n";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { lang } = useLanguage();
  const modalRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Handle escape key and click outside
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") resetAndClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        resetAndClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Phone number validation function
  const isValidPhoneNumber = (phone: string): boolean => {
    if (!phone.trim()) return true;
    const phoneRegex = /^[+]?[\d\s\-\(\)]{7,20}$/;
    const digitsOnly = phone.replace(/[^\d]/g, "");
    return phoneRegex.test(phone) && digitsOnly.length >= 7 && digitsOnly.length <= 15;
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = t(
        { en: "Full name is required", ja: "フルネームは必須です", ko: "전체 이름이 필요합니다" },
        lang
      );
    }

    if (!formData.email.trim()) {
      newErrors.email = t(
        { en: "Email is required", ja: "メールアドレスは必須です", ko: "이메일이 필요합니다" },
        lang
      );
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t(
        {
          en: "Please enter a valid email",
          ja: "有効なメールアドレスを入力してください",
          ko: "유효한 이메일을 입력해주세요"
        },
        lang
      );
    }

    if (!formData.company.trim()) {
      newErrors.company = t(
        { en: "Company is required", ja: "会社名は必須です", ko: "회사명이 필요합니다" },
        lang
      );
    }

    if (formData.phone.trim() && !isValidPhoneNumber(formData.phone)) {
      newErrors.phone = t(
        {
          en: "Please enter a valid phone number",
          ja: "有効な電話番号を入力してください",
          ko: "유효한 전화번호를 입력해주세요"
        },
        lang
      );
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const sanitizedValue = value.replace(/[^+\d\s\-\(\)]/g, "");
      setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setFormData({ fullName: "", email: "", company: "", phone: "", message: "" });
    setErrors({});
    setSubmitStatus("idle");
    onClose();
  };

  return (
    <>
      <div
        className={[
          "fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        ].join(" ")}
        aria-hidden={!isOpen}
        aria-modal="true"
        role="dialog"
      >
        {/* Backdrop */}
        <div
          className={[
            "absolute inset-0 backdrop-blur-xl transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0"
          ].join(" ")}
        />

        {/* Modal */}
        <div
          ref={modalRef}
          className={[
            "relative w-full max-w-2xl max-h[90vh] overflow-y-auto bg-white/40",
            "backdrop-blur-3xl border rounded-2xl shadow-2xl",
            "transform transition-all duration-300 ease-out",
            isOpen ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-2 opacity-0"
          ].join(" ")}
        >
          {/* Header */}
          <div className="sticky top-0 border-b border-white/20 p-6 pb-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-black">
                  {t({ en: "Contact Us", ja: "お問い合わせ", ko: "문의하기" }, lang)}
                </h2>
                <p className="text-sm text-primary mt-1">
                  {t(
                    {
                      en: "Get in touch and let us know how we can help you",
                      ja: "お気軽にお問い合わせください",
                      ko: "문의사항이 있으시면 언제든지 연락주세요"
                    },
                    lang
                  )}
                </p>
              </div>
              <button
                onClick={resetAndClose}
                className="p-2 rounded-lg transition-colors group"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6 text-gray-900 transition-all group-hover:text-gray-700 transform group-hover:rotate-90 duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-black mb-2">
                  {t({ en: "Full Name", ja: "フルネーム", ko: "전체 이름" }, lang)} *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg backdrop-blur-xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 ${
                    errors.fullName ? "border-red-300 bg-red-50/50" : "border-gray-200 hover:bg-white/70"
                  }`}
                  placeholder={t(
                    { en: "Enter your full name", ja: "フルネームを入力", ko: "전체 이름을 입력하세요" },
                    lang
                  )}
                />
                {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  {t({ en: "Email Address", ja: "メールアドレス", ko: "이메일 주소" }, lang)} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 ${
                    errors.email ? "border-red-300 bg-red-50/50" : "border-gray-200 hover:bg-white/70"
                  }`}
                  placeholder={t(
                    { en: "Enter your email", ja: "メールアドレスを入力", ko: "이메일을 입력하세요" },
                    lang
                  )}
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-black mb-2">
                  {t({ en: "Company", ja: "会社名", ko: "회사명" }, lang)} *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 ${
                    errors.company ? "border-red-300 bg-red-50/50" : "border-gray-200 hover:bg-white/70"
                  }`}
                  placeholder={t(
                    { en: "Enter your company name", ja: "会社名を入力", ko: "회사명을 입력하세요" },
                    lang
                  )}
                />
                {errors.company && <p className="text-red-600 text-sm mt-1">{errors.company}</p>}
              </div>

              {/* Phone (Optional) */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                  {t({ en: "Phone Number", ja: "電話番号", ko: "전화번호" }, lang)}
                  <span className="text-primary ml-1">
                    ({t({ en: "Optional", ja: "任意", ko: "선택사항" }, lang)})
                  </span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 hover:bg-white/70 ${
                    errors.phone ? "border-red-300 bg-red-50/50" : "border-gray-200"
                  }`}
                  placeholder={t(
                    { en: "Enter your phone number", ja: "電話番号を入力", ko: "전화번호를 입력하세요" },
                    lang
                  )}
                />
                {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                {t({ en: "Message", ja: "メッセージ", ko: "메시지" }, lang)}
                <span className="text-primary ml-1">
                  ({t({ en: "Optional", ja: "任意", ko: "선택사항" }, lang)})
                </span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 hover:bg-white/70 resize-none"
                placeholder={t(
                  {
                    en: "Tell us about your project or how we can help you...",
                    ja: "プロジェクトについて、またはどのようにお手伝いできるかお聞かせください...",
                    ko: "프로젝트에 대해 또는 어떻게 도와드릴 수 있는지 알려주세요..."
                  },
                  lang
                )}
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="button"
                onClick={resetAndClose}
                className="px-6 py-3 bg-white/50 text-gray-700 border border-gray-200 rounded-lg hover:bg-white/70 transition-all backdrop-blur-sm font-medium"
              >
                {t({ en: "Cancel", ja: "キャンセル", ko: "취소" }, lang)}
              </button>
              <button
                type="submit"
                disabled={isSubmitting || submitStatus === "success"}
                className={`flex-1 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg font-medium transition-all transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                  isSubmitting ? "animate-pulse" : ""
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    {t({ en: "Sending...", ja: "送信中...", ko: "전송 중..." }, lang)}
                  </div>
                ) : submitStatus === "success" ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t({ en: "Message Sent!", ja: "送信完了！", ko: "메시지 전송 완료!" }, lang)}
                  </div>
                ) : (
                  t({ en: "Send Message", ja: "メッセージを送信", ko: "메ッセージ 보내기" }, lang)
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactModal;
