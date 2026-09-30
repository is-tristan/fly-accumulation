"use client";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

// Components
import TalentGridItem from "./talent-grid-item";

export default function TalentGridCarousel({ items = [] }) {

    if (!items.length) {

        return null;

    }

    return (

        <Splide
            options={{
                type: "loop",
                perPage: 5,
                perMove: 1,
                gap: "2rem",
                pagination: true,
                arrows: false,
                padding: "5dvw",
                breakpoints: {
                    1920: {
                        perPage: 4,
                    },
                    1399: {
                        perPage: 3,
                    },
                    1023: {
                        perPage: 2,
                        gap: "2rem",
                    },
                    767: {
                        perPage: 1,
                        gap: "1.5rem",
                        arrows: false,
                    },
                },
            }}
            data-splide-pagination="true"
            data-splide-pagination-alignment="centered"
        >

            {items.map((item, index) => (

                <SplideSlide key={item._id}>

                    <TalentGridItem
                        item={item}
                        index={index}
                    />

                </SplideSlide>

            ))}

        </Splide>

    );

}
