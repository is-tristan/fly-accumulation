// Components
import Text from "@/components/content/text/text";
import Button from "@/components/handlers/button";
import ImageCol from "./components/image-col";
import Checklist from "./components/checklist";

// Styles
import styles from "./styles/content.module.scss";

// Icons
import { brandMark } from "@/utils/icons";

export default function ContentSection({
    sectionName = undefined,
    sectionClassName = undefined,
    containerClassName = undefined,
    eyebrowText = "Lorem Ipsum",
    titleTag = "h2",
    titleClass,
    title,
    description,
    image,
    imagePosition = "right",
    btnTextPrimary = "Start a brief",
    btnLinkPrimary = "/contact",
    btnTextSecondary = "View our talent",
    btnLinkSecondary = "/talent",
    btnTargetPrimary,
    btnTargetSecondary,
    hasBrandMark = false,
    hasChecklist = false,
    checkListItems = [],
}) {

    return (

        <section className={`row ${styles.contentSection} ${sectionClassName}`} data-section-name={sectionName}>

            <div className={`container ${image ? "dualCols" : "centered"} ${imagePosition === "right" ? "rowReverse" : "row"} ${containerClassName ? containerClassName : undefined} ${styles.contentContainer}`}>

                {image && (

                    <ImageCol image={image} alt={title} imagePosition={imagePosition} />

                )}

                <div className="contentCol">

                    <div className="content" data-alignment={!image ? "centered" : null}>

                        <Text
                            eyebrow={{ text: eyebrowText ? eyebrowText : null }}
                            title={title}
                            titleTag={titleTag}
                            titleClass={titleClass}
                            description={description}
                            alignment={!image ? "centered" : "default"}
                        />

                        {hasChecklist && (

                            <Checklist checkListItems={checkListItems} />

                        )}

                        <div className="buttons">

                            {btnTextPrimary && (

                                <Button text={btnTextPrimary} href={btnLinkPrimary} target={btnTargetPrimary} className="primary" />

                            )}

                            {btnTextSecondary && (

                                <Button text={btnTextSecondary} href={btnLinkSecondary} target={btnTargetSecondary} className="transparent" />

                            )}

                        </div>

                    </div>

                </div>

                {hasBrandMark && (

                    <div
                        aria-hidden="true"
                        className={styles.brandMark}
                        dangerouslySetInnerHTML={{ __html: brandMark }}
                    />

                )}

            </div>

        </section>

    )

}