// Sanity
import { client } from "@/sanity/lib/client";
import { instagramCarouselQuery } from "@/sanity/lib/queries";

// Components
import Text from "@/components/content/text/text";
import IGCarousel from "./components/ig-carousel";

// Styles
import styles from "./styles/ig-carousel.module.scss";

export default async function IGCarouselSection() {

    const instagramCarousel = await client.fetch(instagramCarouselQuery, {}, {
        next: { revalidate: 30 },
    });

    const items = instagramCarousel?.images ?? [];

    if (!items.length) {
        return null;
    }

    return (

        <section className={`row paddingOffset sectionPaddingBottom ${styles.igCarouselSection}`}>

            <div className={`container`}>

                <Text
                    eyebrow={{
                        text: "Keep updated with us",
                    }}
                    title="Follow us on Instagram <br> <span class='colorPrimary'>@flyaccumulation</span>"
                    alignment="centered"
                    hasFullStop={false}
                />

            </div>

            <div className={`container overflowContainer noPaddingTop`}>

                <IGCarousel items={items} />

            </div>

        </section>

    )
}