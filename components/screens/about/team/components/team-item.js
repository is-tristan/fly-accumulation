// Next
import { Image } from "next-sanity/image";

// Sanity
import { getSanityImageUrl } from "@/sanity/lib/image";

// Styles
import styles from "../styles/team-carousel.module.scss";

// Icons
import { emailIcon, linkedInIcon } from "@/utils/icons";

export default function TeamItem({
    name,
    position,
    image,
    email,
    linkedIn,
    description
}) {

    const imageUrl = getSanityImageUrl(image, "teamCard");

    return (

        <article className={styles.teamItem}>

            {imageUrl && (

                <>

                    <div className={styles.teamItemImage}>

                        <Image
                            src={imageUrl}
                            alt={name}
                            width={576}
                            height={768}
                            loading="lazy"
                            sizes="(max-width: 768px) 384px, 576px"
                        />

                        {description && (

                            <div className={styles.teamItemDescription} dangerouslySetInnerHTML={{ __html: description }} />
                        )}


                    </div>

                </>

            )}

            <div className={styles.teamItemContent}>

                <div className={styles.teamItemLeft}>

                    <span className={styles.teamItemPosition}>{position}</span>

                    <h3 className={styles.teamItemName}>{name}</h3>

                </div>

                <div className={styles.teamItemRight}>

                    {email && (

                        <a
                            href={`mailto:${email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.teamItemSocial}
                            dangerouslySetInnerHTML={{ __html: emailIcon }}
                            aria-label={`Email ${name}`}
                        />

                    )}

                    {linkedIn && (

                        <a
                            href={linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.teamItemSocial}
                            dangerouslySetInnerHTML={{ __html: linkedInIcon }}
                            aria-label={`LinkedIn ${name}`}
                        />

                    )}

                </div>

            </div>

        </article>

    );

}
