// Components
import Text from "@/components/content/text/text";
import Button from "@/components/handlers/button";

// Styles
import styles from "./styles/cta-section.module.scss";

// Icons
import { logo } from "@/utils/icons";

export default function CtaSection({
    eyebrowText = "Take Action Now",
    title = "Reach is common, influence is earned",
    hasFullStop,
    description = "<p class='extraLarge'>Fly Accumulation exists to make finding aligned creators easy and quick - by bringing creator strategy, audience insight, and campaign governance into one system.</p>",
    btnTextPrimary = "Get started",
    btnLinkPrimary = "/contact",
}) {

    return (

        <section className={`row ${styles.ctaSection}`}>

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

                    </div>

                </div>

                <div className={styles.ctaSectionBackground} aria-hidden="true" dangerouslySetInnerHTML={{ __html: logo }} />

            </div>

        </section>

    )

}
