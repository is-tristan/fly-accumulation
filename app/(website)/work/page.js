// SEO
import { buildPageMetadata } from "@/lib/seo"

// Components
import Banner from "@/components/sections/banner/banner";
import WorkGrid from "@/components/sections/work-grid/work-grid";
import CtaSection from "@/components/sections/cta/cta-section";

export const metadata = buildPageMetadata({
    title: "Work",
    description: "Case studies from campaigns that moved the needle — a selection of work across sectors, each with its own brief, challenge, and outcome.",
    path: "/work",
})

export default function WorkPage() {
    return (

        <>

            <Banner
                eyebrow={null}
                title="Work"
                description={null}
            />

            <WorkGrid
                hasNav={true}
                hasPagination={true}
            />

            <CtaSection />

        </>

    )
}