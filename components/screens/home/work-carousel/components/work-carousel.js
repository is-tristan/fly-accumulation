"use client";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

// Styles
import styles from "../styles/work-carousel-section.module.scss";

// Components
import WorkCarouselItem from "./work-carousel-item";

export default function WorkCarousel({ works = [] }) {

    if (!works.length) {
        return null;
    }

    return (

        <Splide
            className={`${styles.workCarousel} hasPagination hasArrows`}
            options={{
                type: "slide",
                perPage: 1,
                perMove: 1,
                gap: "0",
                pagination: true,
                arrows: true,
                rewind: true,
                breakpoints: {
                    1023: {
                        arrows: false,
                    }
                }
            }}
        >

            {works.map((work) => (

                <SplideSlide key={work._id}>

                    <WorkCarouselItem
                        title={work.title}
                        description={work.description}
                        categories={work.categories}
                        video={work.video}
                        workHref={work.slug ? `/work/${work.slug}` : "/work"}
                    />

                </SplideSlide>

            ))}

        </Splide>

    )

}
