// SEO
import { buildPageMetadata } from "@/lib/seo"

// Components
import Banner from "@/components/sections/banner/banner";
import TalentGrid from "@/components/sections/talent-grid/talent-grid"
import CtaSection from "@/components/sections/cta/cta-section";

export const metadata = buildPageMetadata({
    title: "Talent",
    description: "Meet the Fly Accumulation roster and find talent for your next campaign.",
    path: "/talent",
})

export default function TalentPage() {

    return (

        <>

            <Banner
                eyebrow={null}
                title="Talent"
                description={null}
            />

            <TalentGrid />

            <CtaSection />

        </>

    )

}
