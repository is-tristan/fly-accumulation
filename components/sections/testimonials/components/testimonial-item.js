// Next
import { Image } from "next-sanity/image";

// Sanity
import { getSanityImageUrl } from "@/sanity/lib/image";

// Styles
import styles from "../styles/testimonials.module.scss";

export default function TestimonialItem({
    title,
    position,
    companyLogo,
    invertLogo = true,
    content,
}) {

    const logoUrl = getSanityImageUrl(companyLogo, "companyLogo");
    const testimonialContent = content?.replace(/^[\s"'“”‘’]+|[\s"'“”‘’]+$/g, "") ?? "";

    return (

        <div className={styles.testimonialItem}>

            <p className={styles.testimonialItemContent}><span className="colorPrimary">"</span>{testimonialContent}<span className="colorPrimary">"</span></p>

            <div className={styles.testimonialItemFooter}>

                <div className={styles.testimonialItemText}>

                    <span className={styles.testimonialItemTitle}>{title}</span>

                    <span className={styles.testimonialItemPosition}>{position}</span>

                </div>

                {logoUrl && (

                    <div className={styles.testimonialItemLogo} data-inverted={invertLogo}>

                        <Image
                            src={logoUrl}
                            alt={title}
                            width={512}
                            height={256}
                            loading="lazy"
                        />

                    </div>

                )}

            </div>

        </div>

    )

}
