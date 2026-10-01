"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

import Text from "@/components/content/text/text";
import CategoryTags from "@/components/content/category-tags/category-tags";
import Button from "@/components/handlers/button";

import styles from "../../styles/talent-singular.module.scss";

import { audienceSizeIcon, locationGlobeIcon, tikTokIcon, instagramIcon } from "@/utils/icons";

export default function ContentCol({
    title,
    audienceSize,
    location,
    contentFocus,
    description,
    tiktokUrl,
    tiktokFollowerCount,
    instagramUrl,
    instagramFollowerCount,
}) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.15 });

    return (

        <motion.div
            ref={ref}
            className={`col ${styles.contentCol}`}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0)" } : { opacity: 0, x: 16, filter: "blur(0.25rem)" }}
            initial={{ opacity: 0, x: 16, filter: "blur(0.25rem)" }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        >

            <div className={`content gapSm ${styles.talentContent}`}>

                <CategoryTags
                    hasAnimation={false}
                    categories={contentFocus}
                />

                <Text
                    hasAnimation={false}
                    titleTag="h1"
                    title={title}
                    titleClass={`smallTitle`}
                />

                <div className={styles.talentDetailItems}>

                    <div className={styles.talentDetailItem}>

                        <div className={styles.talentDetailsItemIcon} dangerouslySetInnerHTML={{ __html: locationGlobeIcon }} />

                        <div className={styles.talentDetailItemText}>

                            <span className={styles.talentDetailsItemLabel}>Location</span>

                            <span className={styles.talentDetailsItemValue}>{location}</span>

                        </div>

                    </div>

                    <div className={styles.talentDetailItem}>

                        <div className={styles.talentDetailsItemIcon} dangerouslySetInnerHTML={{ __html: audienceSizeIcon }} />

                        <div className={styles.talentDetailItemText}>

                            <span className={styles.talentDetailsItemLabel}>Audience Size</span>

                            <span className={styles.talentDetailsItemValue}>{audienceSize}</span>

                        </div>

                    </div>

                </div>

                <Text
                    hasAnimation={false}
                    description={`<p>${description}</p>`}
                />

                <div className={`buttons ${styles.talentButtons}`}>

                    <Button
                        text={`${tiktokFollowerCount}`}
                        icon={tikTokIcon}
                        href={tiktokUrl}
                        target="_blank"
                        className="primary iconReversed"
                    />

                    <Button
                        text={`${instagramFollowerCount}`}
                        icon={instagramIcon}
                        href={instagramUrl}
                        target="_blank"
                        className="transparent iconReversed"
                    />

                </div>

            </div>

        </motion.div>

    );

}
