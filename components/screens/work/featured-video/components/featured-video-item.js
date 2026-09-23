"use client";

// Imports
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// YouTube
import { getYoutubeEmbedUrl } from "@/lib/youtube";

export default function FeaturedVideoItem({ video }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.15 });
    const youtubeEmbedUrl = getYoutubeEmbedUrl(video, {
        autoplay: true,
        mute: true,
        loop: true,
        controls: true,
    });

    if (!youtubeEmbedUrl) {
        return null;
    }

    return (

        <motion.div
            ref={ref}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0)" } : { opacity: 0, y: 16, filter: "blur(0.25rem)" }}
            initial={{ opacity: 0, y: 16, filter: "blur(0.25rem)" }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            style={{ width: "100%", aspectRatio: "16 / 9", borderRadius: "1rem", overflow: "hidden" }}
        >

            <iframe
                src={youtubeEmbedUrl}
                title="Featured work video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ width: "100%", height: "100%", border: 0, display: "block" }}
            />

        </motion.div>

    )

}
