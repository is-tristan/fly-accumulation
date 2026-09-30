// Next
import { notFound } from "next/navigation"

// Sanity
import { client } from "@/sanity/lib/client"
import { talentBySlugQuery } from "@/sanity/lib/queries"

// SEO
import { buildPageMetadata } from "@/lib/seo"

// Components
import TalentContent from "@/components/screens/talent/talent-content/talent-content";
import TalentCarousel from "@/components/screens/talent/talent-carousel/talent-carousel";
import TalentBrandDealsGrid from "@/components/screens/talent/talent-brand-deals-grid/talent-brand-deals-grid"
import Cta from "@/components/sections/cta/cta-section";

async function getTalent(slug) {
    return client.fetch(talentBySlugQuery, { slug }, {
        next: { revalidate: 30 },
    })
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const talent = await getTalent(slug)

    if (!talent) {
        return {}
    }

    return buildPageMetadata({
        title: talent.title,
        description: talent.description,
        image: talent.image,
        path: `/talent/${talent.slug}`,
    })
}

export default async function TalentPage({ params }) {

    const { slug } = await params

    const talent = await getTalent(slug)

    if (!talent) {
        notFound()
    }

    const {
        title,
        firstName = `${title.split(" ")[0]}`,
        slug: talentSlug,
        gallery,
        audienceSize,
        location,
        contentFocus,
        brandDeals,
        description,
        tiktokUrl,
        tiktokFollowerCount,
        instagramUrl,
        instagramFollowerCount,
    } = talent

    return (

        <>

            <TalentContent
                title={title}
                gallery={gallery}
                audienceSize={audienceSize}
                location={location}
                contentFocus={contentFocus}
                description={description}
                tiktokUrl={tiktokUrl}
                tiktokFollowerCount={tiktokFollowerCount}
                instagramUrl={instagramUrl}
                instagramFollowerCount={instagramFollowerCount}
            />

            <TalentCarousel
                items={gallery}
                title={title}
            />

            <TalentBrandDealsGrid
                brandDeals={brandDeals}
            />

            <Cta
                hasFullStop={false}
                eyebrowText={null}
                title={`Ready to work with <span class='colorPrimary'>${firstName}</span>?`}
                description="<p>Contact us to learn more about how we can help you find the perfect talent for your brand.</p>"
                btnTextPrimary="Contact us"
                btnLinkPrimary="/contact"
            />


        </>

    )

}
