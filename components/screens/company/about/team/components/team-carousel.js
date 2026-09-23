"use client";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

// Components
import TeamItem from "./team-item";

// Styles
import styles from "../styles/team-carousel.module.scss";

export default function TeamCarousel({ items = [] }) {

    if (!items.length) {
        return null;
    }

    return (

        <Splide
            className={`${styles.teamCarousel} hasArrows hasPagination`}
            options={{
                type: "slide",
                perPage: 3,
                perMove: 1,
                gap: "2rem",
                pagination: true,
                arrows: true,
                rewind: true,
                breakpoints: {
                    1023: {
                        perPage: 2,
                        gap: "1.5rem",
                        arrows: false,
                    },
                    767: {
                        perPage: 1,
                        gap: "1rem",
                        arrows: false,
                    },
                },
            }}
        >

            {items.map((item) => (

                <SplideSlide key={item._id}>

                    <TeamItem
                        name={item.name}
                        position={item.position}
                        image={item.image}
                        email={item.email}
                        linkedIn={item.linkedIn}
                    />

                </SplideSlide>

            ))}

        </Splide>

    );

}
