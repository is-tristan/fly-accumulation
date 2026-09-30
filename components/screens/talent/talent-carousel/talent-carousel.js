"use client";

// Imports
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

// Next
import Image from "next/image";

// Sanity
import { getSanityImageUrl } from "@/sanity/lib/image";

// Styles
import styles from "../styles/talent-singular.module.scss";

export default function TalentCarousel({ items = [], title = "" }) {

    const slides = (items ?? [])
        .map((item, index) => {

            const imageUrl = getSanityImageUrl(item, "talentGallery");

            if (!imageUrl) {
                return null;
            }

            return {
                key: item?._key || `talent-${index}`,
                imageUrl,
                alt: title || "",
            };

        })
        .filter(Boolean);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.15 });

    if (!slides.length) {
        return null;
    }

    return (

        <section className={`row ${styles.talentCarouselSection}`}>

            <div className={`container overflowContainer noPaddingTop`}>

                <motion.div
                    ref={ref}
                    animate={isInView ? { opacity: 1, y: 0, filter: "blur(0)" } : { opacity: 0, y: 16, filter: "blur(0.25rem)" }}
                    initial={{ opacity: 0, y: 16, filter: "blur(0.25rem)" }}
                    transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                    style={{ width: "100%" }}
                >

                    <Splide
                        className={`${styles.talentCarousel} overflows`}
                        options={{
                            type: "loop",
                            perPage: 5,
                            perMove: 1,
                            gap: "3rem",
                            pagination: false,
                            arrows: false,
                            breakpoints: {
                                1399: {
                                    perPage: 4,
                                },
                                1279: {
                                    gap: "2rem",
                                },
                                1023: {
                                    perPage: 3,
                                    arrows: false,
                                },
                                767: {
                                    perPage: 2,
                                    gap: "1rem",
                                },
                                565: {
                                    perPage: 1,
                                },
                            },
                            autoScroll: {
                                speed: 0.75,
                                pauseOnHover: false,
                            },
                        }}
                        extensions={{ AutoScroll }}
                    >

                        {slides.map((slide) => (

                            <SplideSlide
                                key={slide.key}
                                className={styles.talentCarouselSlide}>

                                <Image
                                    src={slide.imageUrl}
                                    alt={slide.alt}
                                    fill
                                    sizes="(max-width: 576px) 350px, 512px"
                                    className={styles.talentCarouselImage}
                                    loading="lazy"
                                />

                            </SplideSlide>

                        ))}

                    </Splide>

                </motion.div>

            </div>

        </section>

    );

}
