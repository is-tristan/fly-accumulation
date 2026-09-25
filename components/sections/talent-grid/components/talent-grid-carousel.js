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
            className="overflows"
            options={{
                type: "slide",
                perPage: 3,
                perMove: 1,
                gap: "2rem",
                pagination: true,
                arrows: false,
                rewind: true,
                breakpoints: {
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
