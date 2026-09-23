// Next
import Link from "next/link"

// Styles
import styles from "../../styles/footer.module.scss";


// Icons
import { instagramIcon, linkedInIcon } from "@/utils/icons";

export default function FooterSocialItems() {

    return (

        <div className={styles.socialItems}>

            <Link href={`https://www.instagram.com/flyaccumulation`} target="_blank" className={styles.socialItem} dangerouslySetInnerHTML={{ __html: instagramIcon }} />

            <Link href={`https://www.linkedin.com/company/fly-accumulation-media-pr`} target="_blank" className={styles.socialItem} dangerouslySetInnerHTML={{ __html: linkedInIcon }} />

        </div>

    )

}
