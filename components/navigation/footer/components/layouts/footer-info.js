// Next
import Link from "next/link";

// Components
import FooterContactItems from "../items/footer-contact-items";

// Styles
import styles from "../../styles/footer.module.scss";

// Icons
import { logo } from "@/utils/icons";

export default function FooterInfo() {

    return (

        <div className={styles.footerInfo}>

            <div className={styles.footerLogoContainer}>

                <Link
                    href="/"
                    aria-label="Fly Accumulation"
                    title="Fly Accumulation"
                    aria-roledescription="Logo"
                    className={styles.footerLogo}
                    dangerouslySetInnerHTML={{ __html: logo }}
                />

                <p className={`${styles.footerInfoText}`}>Ready to find the <span className="colorPrimary">perfect creators</span> for your influencer campaigns <span className="colorPrimary">without hassle?</span></p>

            </div>

            <FooterContactItems />

        </div>

    )

}