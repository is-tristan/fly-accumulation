"use client";

// Imports
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Next
import Image from "next/image";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

// Sanity
import { getSanityImageUrl } from "@/sanity/lib/image";

// Styles
import styles from "../styles/gallery-carousel.module.scss";

export default function GalleryCarousel({
    video,
    featuredImage,
}) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.15 });
    const posterUrl = getSanityImageUrl(video?.poster, "workGallery");
    const featuredImageUrl = getSanityImageUrl(featuredImage, "workGallery");

    const slides = [
        ...(video?.url
            ? [{
                key: "video",
                type: "video",
                videoUrl: video.url,
                posterUrl,
            }]
            : []),
        ...(featuredImageUrl
            ? [{
                key: "featured-image",
                type: "image",
                imageUrl: featuredImageUrl,
            }]
            : []),
    ];

    if (!slides.length) {
        return null;
    }

    return (

        <motion.div
            ref={ref}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0)" } : { opacity: 0, y: 16, filter: "blur(0.25rem)" }}
            initial={{ opacity: 0, y: 16, filter: "blur(0.25rem)" }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            style={{ width: "100%", height: "100%" }}
        >

            <Splide
                className={`${styles.galleryCarousel} hasArrows`}
                options={{
                    type: "slide",
                    perPage: 1,
                    perMove: 1,
                    gap: "0",
                    pagination: true,
                    arrows: true,
                    rewind: true,
                    classes: {
                        pagination: `splide__pagination ${styles.galleryPagination}`,
                    },
                    breakpoints: {
                        1023: {
                            arrows: false,
                        }
                    }
                }}
            >

                {slides.map((slide) => (

                    <SplideSlide key={slide.key} className={styles.galleryCarouselSlide}>

                        {slide.type === "video" ? (

                            <video
                                src={slide.videoUrl}
                                poster={slide.posterUrl || undefined}
                                controls
                                playsInline
                                preload="metadata"
                                className={styles.galleryCarouselEmbed}
                            />

                        ) : (

                            <Image
                                src={slide.imageUrl}
                                alt="Featured image"
                                fill
                                sizes="100%"
                                loading="lazy"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                }}
                            />

                        )}

                    </SplideSlide>

                ))}

            </Splide>

        </motion.div>

    )

}
