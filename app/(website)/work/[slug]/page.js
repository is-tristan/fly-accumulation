// Next
import { notFound } from "next/navigation"

// Sanity
import { client } from "@/sanity/lib/client"
import { workBySlugQuery } from "@/sanity/lib/queries"

// SEO
import { buildPageMetadata } from "@/lib/seo"

// Components
import WorkContent from "@/components/screens/work/work-content/work-content"
import CtaSection from "@/components/sections/cta/cta-section"

async function getWork(slug) {
    return client.fetch(workBySlugQuery, { slug }, {
        next: { revalidate: 30 },
    })
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const work = await getWork(slug)

    if (!work) {
        return {}
    }

    return buildPageMetadata({
        title: work.title,
        description: work.description,
        image: work.image,
        path: `/work/${work.slug}`,
    })
}

export default async function WorkDetailsPage({ params }) {

    const { slug } = await params

    const work = await getWork(slug)

    if (!work) {
        notFound()
    }

    const {
        title,
        video,
        categories,
        description,
        talent,
    } = work

    return (

        <>

            <WorkContent
                title={title}
                video={video}
                categories={categories}
                description={description}
                talent={talent}
            />

            <CtaSection />

        </>

    )

}
