import PolicyPage from "@/components/policy/policy-template";
import { PRIVACY_POLICY_DOC } from "@/content/policy/privacy-policy";

export const metadata = {
  title: "Privacy Policy | Acumen Intelligence",
};

export default function Page() {
  return <PolicyPage doc={PRIVACY_POLICY_DOC} />;
}
