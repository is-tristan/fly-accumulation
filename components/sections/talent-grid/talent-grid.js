// Sanity
import { client } from "@/sanity/lib/client";
import { talentGridQuery } from "@/sanity/lib/queries";

// Components
import Text from "@/components/content/text/text";
import TalentGridItem from "./components/talent-grid-item";
import TalentGridCarousel from "./components/talent-grid-carousel";

// Styles
import styles from "./styles/talent-grid.module.scss";

export default async function TalentGrid({
    hasCarousel = false,
}) {

    const items = await client.fetch(talentGridQuery, {}, {
        next: { revalidate: 30 },
    });

    if (!items?.length) {
        return null;
    }

    return (

        <section
            id="talentGrid"
            className={`row ${styles.talentGridSection}`}
        >

            {hasCarousel && (

                <>

                    <div className={`container noPaddingBottom`}>

                        <Text
                            eyebrow={{
                                text: "The Fly Roster",
                            }}
                            title="Our talent"
                            titleClass="sectionTitle"
                            alignment="centered"
                        />

                    </div>

                    <div className={`container overflowContainer noPaddingTop`}>

                        <TalentGridCarousel items={items} />

                    </div>

                </>

            )}

            {!hasCarousel && (

                <div className={`container gapMd ${styles.talentGridContainer}`}>

                    <div className={styles.talentGridItems}>

                        {items.map((item, index) => (

                            <TalentGridItem
                                key={item._id}
                                item={item}
                                index={index}
                            />

                        ))}

                    </div>

                </div>

            )}

        </section >

    )

}
