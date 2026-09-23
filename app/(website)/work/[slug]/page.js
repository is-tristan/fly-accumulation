// Next
import { notFound } from "next/navigation"

// Sanity
import { client } from "@/sanity/lib/client"
import { workBySlugQuery } from "@/sanity/lib/queries"

// SEO
import { buildPageMetadata } from "@/lib/seo"

// Components
import Banner from "@/components/sections/banner/banner"
import GalleryCarouselSection from "@/components/screens/work/gallery-carousel/gallery-carousel-section"
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

  return (

    <>

      <Banner
        sectionClass="headerOffset1_5x"
        containerClass="centered noPaddingBottom noPaddingTop"
        eyebrow={work.categories.map((category) => category.title).join(", ")}
        title={work.title}
        description={work.description ? `<p>${work.description}</p>` : undefined}
      />

      <GalleryCarouselSection
        video={work.video}
        gallery={work.gallery}
      />

      <CtaSection />

    </>

  )

}
