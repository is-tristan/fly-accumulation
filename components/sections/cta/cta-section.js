// Components
import Text from "@/components/content/text/text";
import Button from "@/components/handlers/button";

// Styles
import styles from "./styles/cta-section.module.scss";

// Icons
import { brandMark } from "@/utils/icons";

export default function CtaSection({
    eyebrowText = "Take Action Now",
    title = "Reach is common, influence is earned",
    hasFullStop,
    description = "<p>Fly Accumulation exists to make finding aligned creators easy and quick - by bringing creator strategy, audience insight, and campaign governance into one system.</p>",
    btnTextPrimary = "Start a brief",
    btnLinkPrimary = "/contact",
    btnTextSecondary = "Meet our talent",
    btnLinkSecondary = "/talent",
    hasWaterMark = false,
}) {

    return (

        <section className={`row sectionPadding ${styles.ctaSection}`}>

            <div className="container">

                <div className={`content ${styles.ctaSectionContent}`} data-alignment="centered">

                    <Text
                        hasFullStop={hasFullStop}
                        eyebrow={{ text: eyebrowText, eyebrowTheme: "dark" }}
                        title={title}
                        titleClass={`sectionTitle`}
                        description={description}
                    />

                    <div className="buttons">

                        <Button
                            text={btnTextPrimary}
                            href={btnLinkPrimary}
                            className="primary"
                        />


                        <Button
                            text={btnTextSecondary}
                            href={btnLinkSecondary}
                            className="light"
                        />

                    </div>

                    {hasWaterMark && (

                        <div className={styles.ctaSectionBackground} aria-hidden="true" dangerouslySetInnerHTML={{ __html: brandMark }} />

                    )}

                </div>

            </div>

        </section>

    )

}
