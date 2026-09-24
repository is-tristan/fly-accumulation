// Components
import Eyebrow from "@/components/content/eyebrow/eyebrow";
import TalentBrandDealsGridItem from "./components/talent-brand-deals-grid-item";

// Sanity
import { getSanityImageUrl } from "@/sanity/lib/image";

// Styles
import styles from "../styles/talent-singular.module.scss";

export default function TalentBrandDealsGrid({
    firstName,
    brandDeals = [],
}) {

    const items = (brandDeals ?? [])
        .map((item) => {
            const logoUrl = getSanityImageUrl(item?.image, "companyLogo");

            if (!logoUrl) {
                return null;
            }

            return {
                key: item._id,
                title: item.title,
                logoUrl,
                invertLogo: item.invertLogo,
            };
        })
        .filter(Boolean);

    if (!items.length) {
        return null;
    }

    return (

        <section className={`row ${styles.talentBrandDealsGrid}`}>

            <div className={`container ${styles.talentBrandDealsGridContainer}`}>

                <Eyebrow
                    text={`Who ${firstName} has worked with`}
                    type="heading"
                />

                <div className={styles.talentBrandDealsGridItems}>

                    {items.map((item, index) => (

                        <TalentBrandDealsGridItem
                            key={item.key}
                            title={item.title}
                            logoUrl={item.logoUrl}
                            invertLogo={item.invertLogo}
                            index={index}
                        />

                    ))}

                </div>

            </div>

        </section>

    );

}
