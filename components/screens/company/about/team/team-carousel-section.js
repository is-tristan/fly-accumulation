// Sanity
import { client } from "@/sanity/lib/client"
import { teamCarouselQuery } from "@/sanity/lib/queries"

// Components
import Text from "@/components/content/text/text"
import TeamCarousel from "./components/team-carousel"

// Styles
import styles from "./styles/team-carousel.module.scss"

export default async function TeamCarouselSection() {

    const items = await client.fetch(teamCarouselQuery, {}, {
        next: { revalidate: 30 },
    })

    if (!items?.length) {
        return null
    }

    return (

        <section className={`row ${styles.teamCarouselSection}`}>

            <div className={`container noPaddingBottom`}>

                <Text
                    eyebrow={{ text: "Who we are" }}
                    title="The fly team"
                />

            </div>

            <div className={`container noPaddingTop ${styles.teamCarouselContainer}`}>

                <TeamCarousel items={items} />

            </div>

        </section>

    )

}
