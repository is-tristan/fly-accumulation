"use client";

// React
import { useEffect, useRef, useState } from "react";

// Lenis
import { useLenis } from "lenis/react";

// Next
import Image from "next/image";

// Components
import Button from "@/components/handlers/button";

// Styles
import styles from "./styles/home-banner.module.scss";

const bannerImages = [
    { src: "/screens/home/banner/images/banner-image-1.avif", alt: "Banner image 1" },
    { src: "/screens/home/banner/images/banner-image-2.avif", alt: "Banner image 2" },
    { src: "/screens/home/banner/images/banner-image-3.avif", alt: "Banner image 3" },
    { src: "/screens/home/banner/images/banner-image-4.avif", alt: "Banner image 4" },
    { src: "/screens/home/banner/images/banner-image-5.avif", alt: "Banner image 5" },
    { src: "/screens/home/banner/images/banner-image-6.avif", alt: "Banner image 6" },
    { src: "/screens/home/banner/images/banner-image-7.avif", alt: "Banner image 7" },
    { src: "/screens/home/banner/images/banner-image-8.avif", alt: "Banner image 8" },
    { src: "/screens/home/banner/images/banner-image-9.avif", alt: "Banner image 9" },
];

const bannerVideos = [
    {
        src: "/screens/home/banner/videos/joseph-x-coca-cola.webm",
        poster: "/screens/home/banner/videos/posters/joseph-x-coca-cola-poster.avif",
        alt: "Joseph x Coca-Cola",
    },
    // {
    //     src: "/screens/home/banner/videos/kayode-x-jd-sports.webm",
    //     poster: "/screens/home/banner/videos/posters/kayode-x-jd-sports-poster.avif",
    //     alt: "Kayode x JD Sports",
    // },
    {
        src: "/screens/home/banner/videos/audible-2.webm",
        poster: "/screens/home/banner/videos/posters/audible-poster-2.avif",
        alt: "Malak x Oakley Meta",
    },
    {
        src: "/screens/home/banner/videos/malak-x-oakley-meta.webm",
        poster: "/screens/home/banner/videos/posters/malak-x-oakley-meta-poster.avif",
        alt: "Malak x Oakley Meta",
    },
];

function shuffleItems(items) {

    const nextItems = [...items];

    for (let index = nextItems.length - 1; index > 0; index -= 1) {

        const swapIndex = Math.floor(Math.random() * (index + 1));
        const currentItem = nextItems[index];

        nextItems[index] = nextItems[swapIndex];
        nextItems[swapIndex] = currentItem;

    }

    return nextItems;

}

function shiftItems(items) {

    const offset = Math.random() < 0.5 ? 1 : items.length - 1;

    return items.map((_, index) => items[(index + offset) % items.length]);

}

function clearPlaybackTimers(playback) {

    playback.timers.forEach((timer) => {

        window.clearTimeout(timer);

    });

    playback.timers = [];

}

function syncBannerPlayback(banner, playback) {

    if (playback.isScrolling) {

        clearPlaybackTimers(playback);

        return;

    }

    const videos = [...banner.querySelectorAll("video")];

    if (!playback.bannerIsNear) {

        clearPlaybackTimers(playback);

        videos.forEach((video) => {

            if (!video.paused) {

                video.pause();

            }

        });

        return;

    }

    if (playback.timers.length > 0) {

        return;

    }

    videos.forEach((video, index) => {

        video.preload = "auto";

        if (!video.paused) {

            return;

        }

        const timer = window.setTimeout(() => {

            playback.timers = playback.timers.filter((item) => item !== timer);

            if (!playback.bannerIsNear || playback.isScrolling) {

                return;

            }

            video.play().catch(() => undefined);

        }, index * 40);

        playback.timers.push(timer);

    });

}

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
                    poster={item.poster}
                    aria-label={item.alt}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />

            )}

        </div>

    );

}

export default function HomeBanner() {

    "use no memo";

    const bannerRef = useRef(null);
    const playbackRef = useRef({
        bannerIsNear: true,
        isScrolling: false,
        timers: [],
    });
    const [firstColumnVideos, setFirstColumnVideos] = useState(bannerVideos);
    const [secondColumnVideos, setSecondColumnVideos] = useState(
        bannerVideos.map((_, index) => bannerVideos[(index + 1) % bannerVideos.length]),
    );

    const slides = [
        {
            id: 1,
            type: "stills",
            items: bannerImages.slice(0, 3),
        },
        {
            id: 2,
            type: "videos",
            items: firstColumnVideos,
        },
        {
            id: 3,
            type: "stills",
            items: bannerImages.slice(3, 6),
        },
        {
            id: 4,
            type: "videos",
            items: secondColumnVideos,
        },
        {
            id: 5,
            type: "stills",
            items: bannerImages.slice(6, 9),
        },
    ];

    useEffect(() => {

        const firstColumn = shuffleItems(bannerVideos);

        setFirstColumnVideos(firstColumn);
        setSecondColumnVideos(shiftItems(firstColumn));

    }, []);

    useLenis((lenis) => {

        const playback = playbackRef.current;

        playback.isScrolling = Boolean(lenis.isScrolling);

        const banner = bannerRef.current;

        if (!banner) {

            return;

        }

        syncBannerPlayback(banner, playback);

    }, []);

    useEffect(() => {

        const banner = bannerRef.current;

        if (!banner) {

            return undefined;

        }

        const playback = playbackRef.current;

        const observer = new IntersectionObserver(([entry]) => {

            playback.bannerIsNear = entry.isIntersecting;

            syncBannerPlayback(banner, playback);

        }, {
            rootMargin: "100% 0px 100% 0px",
        });

        observer.observe(banner);

        return () => {

            clearPlaybackTimers(playback);
            observer.disconnect();

        };

    }, [firstColumnVideos, secondColumnVideos]);

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
                                    key={`${slide.id}-${item.src}-${index}`}
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

                    <h1 className={styles.title}> Representing Talent<span className="colorPrimary">.</span> <br /> Creating Influence<span className="colorPrimary">.</span> <br /> Driving Growth<span className="colorPrimary">.</span> </h1>

                    <div className="buttons">

                        <Button
                            text="View talent"
                            href="/talent"
                            className="primary"
                            hasAnimation={false}
                        />

                        <Button
                            text="Start a brief"
                            href="/contact"
                            className="transparent"
                            hasAnimation={false}
                        />

                    </div>

                </div>

            </div>

        </section >

    );
}