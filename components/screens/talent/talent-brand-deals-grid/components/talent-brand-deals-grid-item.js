"use client";

// Next
import { Image } from "next-sanity/image";

// Imports
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Styles
import styles from "../../styles/talent-singular.module.scss";

export default function TalentBrandDealsGridItem({
    title,
    logoUrl,
    invertLogo,
    index = 0,
}) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.15 });

    return (

        <motion.div
            ref={ref}
            className={styles.talentBrandDealsGridAnimContainer}
            data-inverted={invertLogo}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0)" } : { opacity: 0, y: 16, filter: "blur(0.25rem)" }}
            initial={{ opacity: 0, y: 16, filter: "blur(0.25rem)" }}
            transition={{ duration: 0.5, delay: 0.15 + (index * 0.075), ease: "easeOut" }}
        >

            <div className={styles.talentBrandDealsGridItem}>

                <Image
                    src={logoUrl}
                    alt={title}
                    width={188}
                    height={96}
                    sizes="256px"
                    loading="lazy"
                    style={{ objectFit: "contain" }}
                />

            </div>

        </motion.div>

    );

}
