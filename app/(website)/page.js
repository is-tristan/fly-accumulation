// SEO
import { buildPageMetadata, siteName } from "@/lib/seo"

// Components
import CtaSection from "@/components/sections/cta/cta-section";

export const metadata = buildPageMetadata({
  title: {
    absolute: siteName,
  },
  description: "Fly Accumulation exists to close the gap between ambition and outcome — by bringing trading discipline, audience understanding, and delivery governance into one system.",
  path: "/",
})

export default function Home() {

  return (

    <>

      <CtaSection
        title="Rewarded for your loyalty"
        description="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
        btnTextPrimary="Calculate your Discount"
        btnLinkPrimary="#"
        hasSpinner={true}
      />

    </>

  )

}
