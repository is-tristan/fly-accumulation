"use client";

// React
import { useRef } from "react";

// Next
import Image from "next/image";

// Motion
import { useInView } from "motion/react";

// Styles
import styles from "./styles/company-carousel.module.scss";

// Data
import { companyLogosData } from "@/data/company-logos-data";

const logoMidpoint = Math.ceil(companyLogosData.length / 2);

const logoRows = [
    {
        direction: "left",
        className: styles.companyCarouselTrackLeft,
        logos: companyLogosData.slice(0, logoMidpoint),
    },
    {
        direction: "right",
        className: styles.companyCarouselTrackRight,
        logos: companyLogosData.slice(logoMidpoint),
    },
];

export default function CompanyCarousel() {

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { amount: 0.2 });

    return (

        <section ref={sectionRef} className={styles.companyCarousel}>

            <h2 className={styles.companyCarouselTitle}>Elevating <span className="colorPrimary">500+ brands</span> around the globe.</h2>

            <div className={styles.companyCarouselContainer}>

                {
                    logoRows.map((row) => (

                        <div
                            key={row.direction}
                            className={`${styles.companyCarouselTrack} ${row.className}`}
                            data-paused={!isInView}
                        >

                            {[...row.logos, ...row.logos, ...row.logos].map((company, index) => (

                                <div
                                    className={styles.companyCarouselItem}
                                    key={`${row.direction}-${company.name}-${index}`}
                                    aria-hidden={index >= row.logos.length ? "true" : undefined}
                                >

                                    <Image
                                        src={company.src}
                                        alt={company.name}
                                        fill
                                        sizes="100%"
                                        loading="lazy"
                                    />

                                </div>

                            ))}

                        </div>

                    ))
                }

            </div>

        </section >

    );

}
