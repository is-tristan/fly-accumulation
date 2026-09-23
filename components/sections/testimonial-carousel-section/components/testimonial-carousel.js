"use client";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

// Components
import TestimonialItem from "./testimonial-item";

// Styles
import styles from "../styles/testimonials.module.scss";

export default function TestimonialCarousel({ items = [] }) {

    if (!items.length) {
        return null;
    }

    return (

        <Splide
            className={`${styles.testimonialCarousel} hasPagination hasArrows stackedArrows`}
            options={{
                type: "slide",
                perPage: 1,
                perMove: 1,
                gap: "0",
                pagination: true,
                arrows: true,
                rewind: true,
            }}
        >

            {items.map((item) => (

                <SplideSlide key={item._id}>

                    <TestimonialItem
                        title={item.title}
                        position={item.position}
                        companyLogo={item.companyLogo}
                        invertLogo={item.invertLogo}
                        content={item.content}
                    />

                </SplideSlide>

            ))}

        </Splide>

    );

}
