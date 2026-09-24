// SEO
import { buildPageMetadata } from "@/lib/seo"

// Components
import Banner from "@/components/sections/banner/banner";
import TalentGrid from "@/components/sections/talent-grid/talent-grid"
import CtaSection from "@/components/sections/cta/cta-section";

export const metadata = buildPageMetadata({
    title: "Talent",
    description: "Fly Accumulation is a media trading, planning and activation agency built around how media actually works in the real world.",
    path: "/talent",
})

export default function TalentPage() {

    return (

        <>

            <Banner
                eyebrowText={null}
                title="Talent"
                description={null}
                btnTextPrimary="Who we are"
                btnLinkPrimary="/about"
            />

            <TalentGrid />

            <CtaSection />

        </>

    )

}
