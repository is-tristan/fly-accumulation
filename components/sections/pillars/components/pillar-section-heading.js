"use client";

// Imports
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Components
import Eyebrow from "@/components/content/eyebrow/eyebrow";

// Styles
import styles from "../styles/pillars.module.scss";

export default function PillarSectionHeading({
    eyebrowText = "Our Pillars",
}) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.33 });

    return (

        <motion.div
            ref={ref}
            className={styles.pillarsSectionHeading}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0)" } : { opacity: 0, y: 16, filter: "blur(0.25rem)" }}
            initial={{ opacity: 0, y: 16, filter: "blur(0.25rem)" }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        >

            <div className={styles.pillarsSectionLeft}>

                <Eyebrow
                    text={eyebrowText}
                    type="heading"
                    hasAnimation={false}
                />

            </div>

        </motion.div>

    )

}
