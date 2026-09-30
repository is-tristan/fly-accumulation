// Sanity
import { client } from "@/sanity/lib/client"
import { testimonialCarouselQuery } from "@/sanity/lib/queries"

// Components
import Text from "@/components/content/text/text"
import TestimonialCarousel from "./components/testimonial-carousel"

// Styles
import styles from "./styles/testimonials.module.scss"

export default async function TestimonialsSection() {

    const items = await client.fetch(testimonialCarouselQuery, {}, {
        next: { revalidate: 30 },
    })

    if (!items?.length) {
        return null
    }

    return (

        <section className={`row sectionPadding ${styles.testimonialCarouselSection}`}>

            <div className={`container noPaddingBottom`}>

                <Text
                    className={styles.testimonialCarouselTitle}
                    eyebrow={{ text: "Kind words from our clients" }}
                    title="The right talent at your fingertips"
                />

            </div>

            <div className={`container noPaddingTop`}>

                <TestimonialCarousel items={items} />

            </div>

        </section>

    )

}
