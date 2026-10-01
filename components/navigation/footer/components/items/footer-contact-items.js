// Next
import Link from "next/link";

// Styles
import styles from "../../styles/footer.module.scss";

// Data
import { officeLocationsData as data } from "@/data/contact-info-data";

export default function FooterContactItems({ className = undefined }) {

    return (

        <div className={`${styles.contactItems} ${className}`}>

            {data.map((item) => {

                const content = (

                    <>

                        <div className={styles.contactItemIcon} dangerouslySetInnerHTML={{ __html: item.icon }} />

                        <div className={styles.contactItemContent}>

                            <span className={styles.contactItemTitle}>{item.title}</span>

                            <span className={styles.contactItemLabel}>{item.label}</span>

                        </div>

                    </>

                );

                if (item.href) {

                    return (

                        <Link
                            key={item.title}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.contactItem} ${styles.contactItemLink}`}
                            title={item.title}
                        >

                            {content}

                        </Link>

                    );

                }

                return (

                    <div
                        key={item.title}
                        className={styles.contactItem}
                    >

                        {content}

                    </div>

                );

            })}

        </div>

    );

}
