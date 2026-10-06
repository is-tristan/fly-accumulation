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
            className={`${styles.testimonialCarousel}`}
            options={{
                type: "slide",
                perPage: 1,
                perMove: 1,
                gap: "1.5rem",
                pagination: true,
                arrows: true,
                rewind: true,
                breakpoints: {
                    1023: {
                        arrows: false,
                    },
                },
            }}
            data-splide-arrows="true"
            data-splide-hover-arrows="false"
            data-splide-arrows-theme="light"
            data-splide-pagination="true"
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
