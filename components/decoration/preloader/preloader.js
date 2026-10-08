"use client";

// React
import { useEffect, useRef } from "react";

// Next
import { usePathname } from "next/navigation";

// Lenis
import { useLenis } from "lenis/react";

// Motion
import { motion } from "motion/react";

// Styles
import styles from "./styles/preloader.module.scss";

// Logo
import { logo } from "@/utils/icons";

export default function Preloader() {

    const pathname = usePathname();
    const showOnHome = useRef(pathname === "/");
    const preloaderRef = useRef(null);
    const lenis = useLenis();

    if (pathname !== "/") {

        showOnHome.current = false;

    }

    useEffect(() => {

        if (pathname !== "/" || !showOnHome.current || !lenis) {

            return;

        }

        const preloader = preloaderRef.current;

        if (!preloader) {

            return;

        }

        const pendingAnimations = preloader.getAnimations().filter((animation) => {

            return animation.animationName?.includes("preloaderOut") && animation.playState !== "finished";

        });

        if (pendingAnimations.length === 0) {

            return;

        }

        let released = false;

        const releaseScroll = () => {

            if (released) {

                return;

            }

            released = true;

            lenis.start();

        };

        lenis.stop();

        pendingAnimations.forEach((animation) => {

            animation.addEventListener("finish", releaseScroll);

        });

        return () => {

            pendingAnimations.forEach((animation) => {

                animation.removeEventListener("finish", releaseScroll);

            });

            releaseScroll();

        };

    }, [lenis, pathname]);

    if (!showOnHome.current) {

        return null;

    }

    return (

        <div id="preloader" ref={preloaderRef} className={styles.preloader} aria-hidden="true">

            <div className={styles.preloaderContainer}>

                <motion.div
                    className={styles.preloaderLogoAnimContainer}
                    initial={{ opacity: 0, y: 16, filter: "blur(0.25rem)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
                    transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                >

                <span dangerouslySetInnerHTML={{ __html: logo }} />

                </motion.div>

            </div>

            <div className={styles.preloaderBackground}>

                <span></span>

                <span></span>

                <span></span>

                <span></span>

                <span></span>

            </div>

        </div>

    )

}
