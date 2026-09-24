"use client";

// React
import { useEffect, useRef } from "react";

// Next
import Image from "next/image";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

// Sanity
import { getSanityImageUrl } from "@/sanity/lib/image";

// Styles
import styles from "../styles/talent-singular.module.scss";

export default function TalentGalleryCarousel({ gallery = [] }) {

    // Refs
    const mainRef = useRef(null);
    const thumbsRef = useRef(null);

    // Slides
    const slides = (gallery ?? [])
        .map((image, index) => {
            const imageUrl = getSanityImageUrl(image, "talentGallery");
            const thumbUrl = getSanityImageUrl(image, "talentGalleryThumb");

            if (!imageUrl || !thumbUrl) {
                return null;
            }

            return {
                key: image?._key || `gallery-${index}`,
                imageUrl,
                thumbUrl,
            };
        })
        .filter(Boolean);

    // Sync main and thumbs
    useEffect(() => {
        if (mainRef.current && thumbsRef.current?.splide) {
            mainRef.current.sync(thumbsRef.current.splide);
        }
    }, [slides.length]);

    if (!slides.length) {
        return null;
    }

    return (

        <div className={styles.talentGalleryCarousel}>

            <Splide
                ref={mainRef}
                className={`${styles.talentGalleryCarouselMain}`}
                options={{
                    type: "slide",
                    perPage: 1,
                    perMove: 1,
                    gap: "0",
                    pagination: true,
                    arrows: false,
                    classes: {
                        pagination: `splide__pagination ${styles.talentGalleryPagination}`,
                    },
                    breakpoints: {
                        1023: {
                            arrows: false,
                        },
                    },
                }}
            >

                {slides.map((slide, index) => (

                    <SplideSlide key={slide.key} className={styles.talentGalleryCarouselSlide}>

                        <Image
                            src={slide.imageUrl}
                            alt={`Gallery image ${index + 1}`}
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

                    </SplideSlide>

                ))}

            </Splide>

            <Splide
                ref={thumbsRef}
                className={styles.talentGalleryCarouselThumbs}
                options={{
                    type: "slide",
                    rewind: true,
                    gap: "0.75rem",
                    pagination: false,
                    arrows: false,
                    fixedWidth: "5rem",
                    fixedHeight: "5rem",
                    cover: true,
                    isNavigation: true,
                }}
            >

                {slides.map((slide, index) => (

                    <SplideSlide key={`thumb-${slide.key}`} className={styles.talentGalleryCarouselThumbSlide}>

                        <Image
                            src={slide.thumbUrl}
                            alt={`Gallery thumbnail ${index + 1}`}
                            fill
                            sizes="80px"
                            loading="lazy"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center",
                            }}
                        />

                    </SplideSlide>

                ))}

            </Splide>

        </div>

    );

}
