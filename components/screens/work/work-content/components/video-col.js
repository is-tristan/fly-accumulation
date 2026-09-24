"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

import { getYoutubeEmbedUrl } from "@/lib/youtube";

import styles from "../../styles/work-singular.module.scss";

export default function VideoCol({
    video,
}) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.15 });
    const youtubeEmbedUrl = getYoutubeEmbedUrl(video, {
        autoplay: false,
        mute: false,
        controls: true,
    });

    if (!youtubeEmbedUrl) {
        return null;
    }

    return (

        <motion.div
            ref={ref}
            className={`col ${styles.videoCol}`}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0)" } : { opacity: 0, x: -16, filter: "blur(0.25rem)" }}
            initial={{ opacity: 0, x: -16, filter: "blur(0.25rem)" }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        >

            <div className={styles.workVideo}>

                <iframe
                    src={youtubeEmbedUrl}
                    title="Work video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />

            </div>

        </motion.div>

    );

}
