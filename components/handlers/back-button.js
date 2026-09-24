"use client";

// Imports
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Next
import Link from "next/link";

// Icon
import { arrowLeft } from "@/utils/icons";

export default function BackButton({ href = "/", text = "Go back", className, hasAnimation = true }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.25 });

    return (

        <motion.div
            ref={ref}
            animate={hasAnimation ? (isInView ? { opacity: 1, y: 0, filter: "blur(0)" } : { opacity: 0, y: 16, filter: "blur(0.25rem)" }) : { opacity: 1, y: 0, filter: "blur(0)" }}
            initial={hasAnimation ? { opacity: 0, y: 16, filter: "blur(0.25rem)" } : { opacity: 1, y: 0, filter: "blur(0)" }}
            transition={hasAnimation ? { duration: 0.5, delay: 0.15, ease: "easeOut" } : { duration: 0, delay: 0 }}
        >

            <Link href={href} className={`backButton ${className ? className : undefined}`}>

                <div className="icon" dangerouslySetInnerHTML={{ __html: arrowLeft }} />

                <span>{text}</span>

            </Link>

        </motion.div>

    );

}