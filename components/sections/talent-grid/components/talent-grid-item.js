"use client";

// Next
import Link from "next/link";
import { Image } from "next-sanity/image";

// Imports
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

// Components
import CategoryTags from "@/components/content/category-tags/category-tags";

// Sanity
import { getSanityImageUrl } from "@/sanity/lib/image";

// Styles
import styles from "../styles/talent-grid.module.scss";

// Icons
import { arrowUpRight, playIcon, xClose } from "@/utils/icons";

export default function TalentGridItem({
    item,
    index = 0,
}) {

    const ref = useRef(null);
    const videoRef = useRef(null);
    const [videoActive, setVideoActive] = useState(false);
    const isInView = useInView(ref, { once: true, amount: 0.15 });
    const imageUrl = getSanityImageUrl(item.image, "talentGrid");
    const href = item.slug ? `/talent/${item.slug}` : "/talent";
    const contentFocus = (item.contentFocus ?? []).slice(0, 3);

    function supportsHover() {
        return window.matchMedia("(hover: hover)").matches;
    }

    function playVideo(event) {
        event?.preventDefault();
        event?.stopPropagation();

        setVideoActive(true);

        const video = videoRef.current;

        if (!video) {
            return;
        }

        if (supportsHover()) {
            video.muted = true;
            video.loop = true;
        }

        video.play().catch(() => undefined);
    }

    function closeVideo(event) {
        event?.preventDefault();
        event?.stopPropagation();

        setVideoActive(false);

        const video = videoRef.current;

        if (!video) {
            return;
        }

        video.pause();

        if (supportsHover()) {
            video.currentTime = 0;
        }
    }

    function handleMouseEnter() {
        if (!item.video || !supportsHover()) {
            return;
        }

        playVideo();
    }

    function handleMouseLeave() {
        if (!item.video || !supportsHover()) {
            return;
        }

        closeVideo();
    }

    return (

        <motion.article
            ref={ref}
            className={styles.talentGridItemAnimationContainer}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0)" } : { opacity: 0, y: 16, filter: "blur(0.25rem)" }}
            initial={{ opacity: 0, y: 16, filter: "blur(0.25rem)" }}
            transition={{ duration: 0.5, delay: 0.15 + (index * 0.075), ease: "easeOut" }}
            style={{ width: "100%", height: "100%" }}
        >

            <div
                className={styles.talentGridItem}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >

                {imageUrl && (

                    <div className={styles.talentGridItemHeader}>

                        <Image
                            src={imageUrl}
                            alt={item.title}
                            fill
                            sizes="(max-width: 768px) 384px, (max-width: 1200px) 576px, 768px"
                            loading="lazy"
                        />

                        {item.video && (

                            <div className={styles.talentGridItemVideo} data-video-active={videoActive ? "true" : "false"}>

                                <button
                                    type="button"
                                    className={styles.talentGridItemVideoButton}
                                    dangerouslySetInnerHTML={{ __html: playIcon }}
                                    aria-label="Play video"
                                    onClick={playVideo}
                                />

                                <button
                                    type="button"
                                    className={styles.talentGridItemVideoCloseButton}
                                    dangerouslySetInnerHTML={{ __html: xClose }}
                                    aria-label="Close video"
                                    onClick={closeVideo}
                                />

                                <div className={styles.talentGridItemVideoContent}>

                                    <video
                                        ref={videoRef}
                                        src={item.video}
                                        poster={item.videoPoster}
                                        controls
                                        playsInline
                                        preload="none"
                                    />

                                </div>

                            </div>
                        )}

                    </div>

                )}

                <div className={styles.talentGridItemContent}>

                    <CategoryTags
                        hasAnimation={false}
                        categories={contentFocus}
                    />

                    <h3 className={styles.talentGridItemTitle}>{item.title}</h3>

                    {item.location && (

                        <span className={styles.talentGridItemLocation}>{item.location}</span>

                    )}

                    <Link
                        href={href}
                        className={styles.talentGridItemLink}
                        dangerouslySetInnerHTML={{ __html: arrowUpRight }}
                    />

                </div>

                <Link
                    href={href}
                    className={`colLink`}
                />

            </div>

        </motion.article>

    )

}
