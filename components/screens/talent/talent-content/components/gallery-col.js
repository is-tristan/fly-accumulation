"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

import Image from "next/image";

import { getSanityImageUrl } from "@/sanity/lib/image";

import styles from "../../styles/talent-singular.module.scss";

export default function GalleryCol({
    gallery,
    title,
}) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.15 });
    const imageUrl = getSanityImageUrl(gallery?.[0], "talentGallery");

    if (!imageUrl) {
        return null;
    }

    return (

        <motion.div
            ref={ref}
            className={`col ${styles.galleryCol}`}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0)" } : { opacity: 0, x: -16, filter: "blur(0.25rem)" }}
            initial={{ opacity: 0, x: -16, filter: "blur(0.25rem)" }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        >

            <div className={styles.galleryImage}>

                <Image
                    src={imageUrl}
                    alt={title || ""}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                />

            </div>

        </motion.div>

    );

}
