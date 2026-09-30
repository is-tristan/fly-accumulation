"use client";

// Imports
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Sanity
import { getSanityImageUrl } from "@/sanity/lib/image";

export default function FeaturedVideoItem({ video }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.15 });
    const posterUrl = getSanityImageUrl(video?.poster, "workGallery");

    if (!video?.url) {
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

            <video
                src={video.url}
                poster={posterUrl || undefined}
                autoPlay
                muted
                loop
                controls
                playsInline
                preload="metadata"
                style={{ width: "100%", height: "100%", border: 0, display: "block", objectFit: "cover" }}
            />

        </motion.div>

    )

}
