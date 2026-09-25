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
    talentGridContainerClass = undefined,
    hasButton = false,
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
            style={{ gap: "0" }}
        >

            <div className={`container ${!hasCarousel ? "noPaddingTop" : undefined} ${hasButton ? "noPaddingBottom" : undefined} gapMd ${styles.talentGridContainer} ${talentGridContainerClass}`}>

                {hasCarousel && (

                    <>

                        <Text
                            eyebrow={{
                                text: "The Fly Roster",
                            }}
                            title="Our talent"
                            titleClass="sectionTitle"
              
                        />

                        <TalentGridCarousel items={items} />

                    </>

                )}

                {!hasCarousel && (

                    <div className={styles.talentGridItems}>

                        {items.map((item, index) => (

                            <TalentGridItem
                                key={item._id}
                                item={item}
                                index={index}
                            />

                        ))}

                    </div>

                )}

            </div>

        </section>

    )

}
