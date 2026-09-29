// SEO
import { buildPageMetadata, siteName } from "@/lib/seo"

// Components
import HomeBanner from "@/components/screens/home/home-banner/home-banner";
import CompanyCarousel from "@/components/sections/company-carousel/company-carousel";
import Content from "@/components/sections/content/content";
import WorkGrid from "@/components/sections/work-grid/work-grid";
import CtaSection from "@/components/sections/cta/cta-section";
import TestimonialsSection from "@/components/sections/testimonials/testimonials";
import TalentGrid from "@/components/sections/talent-grid/talent-grid";

// Styles
import styles from "@/styles/screens/home.module.scss";

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

      <HomeBanner />

      <Content
        sectionClassName={styles.contentSection}
        eyebrowText={null}
        title="Elevating brands"
        titleClass="sectionTitle"
        description="<p>Fly Accumulation Media & PR connects brands with the right talent and manages every stage of the influencer marketing process — from talent sourcing and campaign strategy to creative, negotiation, production and reporting.</p> <p>We combine strong talent relationships with strategic thinking and hands-on campaign management to create influencer partnerships that feel authentic, reach the right audiences and deliver against brand objectives.</p>"
        imagePosition="left"
        image="/images/home/elevating-brands-through-influencer-marketing.avif"
        hasChecklist={true}
        checkListItems={[
          {
            title: "Right talent",
          },
          {
            title: "Clear results",
          },
          {
            title: "Deals handled",
          },
          {
            title: "Native creative",
          },
        ]}

      />

      <WorkGrid
        hasMoreButton={true}
        eyebrowText="Our featured work"
      />

      <TalentGrid hasCarousel />

      <TestimonialsSection />

      <CompanyCarousel />

      <CtaSection />

    </>

  )

}
