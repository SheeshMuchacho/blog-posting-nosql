import PolicyPage from "@/components/policy/policy-template";
import { TERMS_OF_SERVICE_DOC } from "@/content/policy/terms-of-service";
import { COOKIE_POLICY_DOC } from "@/content/policy/cookie-policy";


export const metadata = {
  title: "Terms of Service | Acumen Intelligence",
};

export default function Page() {
  return (
    <>
      <PolicyPage doc={TERMS_OF_SERVICE_DOC} />

      <div className="-mt-28">
        <PolicyPage doc={COOKIE_POLICY_DOC} />
      </div>
    </>
  );
}
