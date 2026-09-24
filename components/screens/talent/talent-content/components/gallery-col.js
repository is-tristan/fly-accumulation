"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

import TalentGalleryCarousel from "@/components/screens/talent/talent-gallery-carousel/talent-gallery-carousel";

import styles from "../../styles/talent-singular.module.scss";

export default function GalleryCol({
    gallery,
}) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.15 });

    return (

        <motion.div
            ref={ref}
            className={`col ${styles.galleryCol}`}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0)" } : { opacity: 0, x: -16, filter: "blur(0.25rem)" }}
            initial={{ opacity: 0, x: -16, filter: "blur(0.25rem)" }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        >

            <TalentGalleryCarousel gallery={gallery} />

        </motion.div>

    );

}
