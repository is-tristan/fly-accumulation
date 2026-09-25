// Styles
import styles from "../styles/content.module.scss";

// Icons
import { checkMarkFilledIcon } from "@/utils/icons";

export default function Checklist({ checkListItems = [] }) {

    return (

        <>

            {checkListItems.length > 0 && (

                <div className={styles.checklist}>

                    {checkListItems.map((item, index) => (

                        <div key={index} className={styles.checklistItem}>

                            <div className={styles.checklistItemIcon} dangerouslySetInnerHTML={{ __html: checkMarkFilledIcon }} />

                            <span>{item.title}</span>

                        </div>

                    ))}

                </div>

            )}

        </>

    )

}