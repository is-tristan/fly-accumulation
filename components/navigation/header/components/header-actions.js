"use client"

// React
import { useState } from "react"

// Components
import Button from "@/components/handlers/button"
import HeaderMobileMenu from "./header-mobile-menu"

// Styles
import styles from "../styles/header.module.scss"
import stylesMobileMenu from "../styles/header-mobile-menu.module.scss"

export default function HeaderActions() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (

        <>

            <div className={`${styles.headerActions}`}>

                <div className={`${styles.headerButtons}`}>

                    <Button text="For Brands" href="#" className={`primary small`} hasAnimation={false} />

                    <Button text="For Talents" href="#" className={`transparent small`} hasAnimation={false} />

                </div>

                <button
                    type="button"
                    className={`hidden-xxl ${stylesMobileMenu.mobileMenuToggle}`}
                    onClick={toggleMobileMenu}
                    data-name="mobileMenuToggle"
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobileMenu"
                >

                    <span className={stylesMobileMenu.mobileMenuToggleItem} />

                    <span className={stylesMobileMenu.mobileMenuToggleItem} />

                    <span className={stylesMobileMenu.mobileMenuToggleItem} />

                </button>

            </div>

            <HeaderMobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

        </>

    )

}
