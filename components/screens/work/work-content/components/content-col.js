"use client";

// React
import { useRef } from "react";

// Motion
import { motion, useInView } from "motion/react";

// Next
import Link from "next/link";

// Components
import Text from "@/components/content/text/text";
import Button from "@/components/handlers/button";
import CategoryTags from "@/components/content/category-tags/category-tags";

// Styles
import styles from "../../styles/work-singular.module.scss";

// Icons
import { announcementIcon, arrowRight } from "@/utils/icons";

export default function ContentCol({
    title,
    categories,
    description,
    talent,
}) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.15 });

    const talentTags = (talent ?? [])
        .filter((item) => item?.title)
        .map((item) => ({
            _id: item._id,
            title: item.title,
            href: item.slug ? `/talent/${item.slug}` : undefined,
        }));

    const talentHref = talentTags.find((item) => item.href)?.href || "/talent";

    return (

        <motion.div
            ref={ref}
            className={`col ${styles.contentCol}`}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0)" } : { opacity: 0, x: 16, filter: "blur(0.25rem)" }}
            initial={{ opacity: 0, x: 16, filter: "blur(0.25rem)" }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        >

            <div className={`content gapSm ${styles.workContent}`}>

                <CategoryTags
                    hasAnimation={false}
                    categories={categories}
                />

                <Text
                    hasAnimation={false}
                    titleTag="h1"
                    title={title}
                    titleClass={`smallTitle`}
                />

                {description && (

                    <Text
                        hasAnimation={false}
                        description={`<p>${description}</p>`}
                    />

                )}

                {talentTags.length > 0 && (

                    <Link href={talentHref} className={styles.workTalent}>

                        <div className={styles.workTalentIcon} dangerouslySetInnerHTML={{ __html: announcementIcon }} />

                        <div className={styles.workTalentContent}>

                            <p className={"colorLight extraLarge"}>Interested in working with <span className="colorPrimary">{talentTags.map((item) => item.title.split(" ")[0]).join(", ")}</span>?</p>

                        </div>

                        <Button
                            hasAnimation={false}
                            href="/contact"
                            text="Get in touch"
                            className={`textLink`}
                            icon={arrowRight}
                        />

                    </Link>

                )}

            </div>

        </motion.div>

    );

}
