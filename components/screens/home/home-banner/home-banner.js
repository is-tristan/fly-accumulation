"use client";

// React
import { useEffect, useRef } from "react";

// Next
import Image from "next/image";

// Components
import Button from "@/components/handlers/button";

// Styles
import styles from "./styles/home-banner.module.scss";

const slides = [
    {
        id: 1,
        type: "stills",
        items: [
            { src: "https://picsum.photos/seed/fly-still-1/640/960", alt: "Placeholder still 1" },
            { src: "https://picsum.photos/seed/fly-still-2/640/960", alt: "Placeholder still 2" },
            { src: "https://picsum.photos/seed/fly-still-3/640/960", alt: "Placeholder still 3" },
        ]
    },
    {
        id: 2,
        type: "videos",
        items: [
            { src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4", alt: "Placeholder video 1" },
            { src: "https://media.w3.org/2010/05/bunny/trailer.mp4", alt: "Placeholder video 2" },
            { src: "https://media.w3.org/2010/05/sintel/trailer.mp4", alt: "Placeholder video 3" },
        ]
    },
    {
        id: 3,
        type: "stills",
        items: [
            { src: "https://picsum.photos/seed/fly-still-4/640/960", alt: "Placeholder still 4" },
            { src: "https://picsum.photos/seed/fly-still-5/640/960", alt: "Placeholder still 5" },
            { src: "https://picsum.photos/seed/fly-still-6/640/960", alt: "Placeholder still 6" },
        ]
    },
    {
        id: 4,
        type: "videos",
        items: [
            { src: "https://media.w3.org/2010/05/video/movie_300.mp4", alt: "Placeholder video 4" },
            { src: "https://filesamples.com/samples/video/mp4/sample_960x400_ocean_with_audio.mp4", alt: "Placeholder video 5" },
            { src: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4", alt: "Placeholder video 6" },
        ]
    },
    {
        id: 5,
        type: "stills",
        items: [
            { src: "https://picsum.photos/seed/fly-still-7/640/960", alt: "Placeholder still 7" },
            { src: "https://picsum.photos/seed/fly-still-8/640/960", alt: "Placeholder still 8" },
            { src: "https://picsum.photos/seed/fly-still-9/640/960", alt: "Placeholder still 9" },
        ]
    },
]

function BannerTrackItem({ type, item, priority }) {

    const mediaClassName = type === "stills"
        ? `${styles.bannerCarouselSlide} ${styles.carouselStill}`
        : `${styles.bannerCarouselSlide} ${styles.carouselVideo}`;

    return (

        <div className={mediaClassName}>

            {type === "stills" ? (

                <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, 40vw"
                    loading={priority ? "eager" : "lazy"}
                    style={{ objectFit: "cover" }}
                />

            ) : (

                <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />

            )}

        </div>

    );

}

export default function HomeBanner() {

    "use no memo";

    const bannerRef = useRef(null);

    useEffect(() => {

        const banner = bannerRef.current;

        if (!banner) {

            return undefined;

        }

        const setVideoPlayback = (isInView) => {

            banner.querySelectorAll("video").forEach((video) => {

                if (isInView) {

                    video.play().catch(() => undefined);

                } else {

                    video.pause();

                }

            });

        };

        const observer = new IntersectionObserver(([entry]) => {

            setVideoPlayback(entry.isIntersecting);

        });

        observer.observe(banner);

        return () => {

            observer.disconnect();

        };

    }, []);

    return (

        <section
            ref={bannerRef}
            className={`row ${styles.homeBanner}`}
        >

            <div className={styles.bannerCarousel}>

                {slides.map((slide) => (

                    <div
                        key={slide.id}
                        className={styles.bannerCarouselItem}
                        data-id={slide.id}
                        data-type={slide.type}
                    >

                        <div className={styles.bannerCarouselTrack}>

                            {[...slide.items, ...slide.items].map((item, index) => (

                                <BannerTrackItem
                                    key={`${slide.id}-${index}`}
                                    type={slide.type}
                                    item={item}
                                    priority={index === 0}
                                />

                            ))}

                        </div>

                    </div>

                ))}

            </div>

            <div className={`container ${styles.bannerTitleContainer}`}>

                <div className={`content`}>

                    <h1 className={styles.title}> Backing Talent<span className="colorPrimary">.</span> <br /> Building Reach<span className="colorPrimary">.</span> <br /> More Growth<span className="colorPrimary">.</span> </h1>

                    <div className="buttons">

                        <Button
                            text="View all work"
                            href="/work"
                            className="primary"
                            hasAnimation={false}
                        />

                        <Button
                            text="View all talent"
                            href="/talent"
                            className="transparent"
                            hasAnimation={false}
                        />

                    </div>

                </div>

            </div>

        </section >

    );
}