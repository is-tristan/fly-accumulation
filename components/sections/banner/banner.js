// Components
import Text from "@/components/content/text/text";
import Button from "@/components/handlers/button";

// Styles
import styles from "./styles/banner.module.scss";

export default function Banner({
    sectionClass,
    containerClass,
    eyebrow = "Lorem Ipsum",
    title = "Lorem Ipsum dolor sit amet",
    description = "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    btnTextPrimary = "View Talent",
    btnLinkPrimary = "/talent",
    btnTextSecondary = "Start a brief",
    btnLinkSecondary = "/contact",
}) {

    return (

        <section id="banner" className={`row ${styles.banner} ${sectionClass}`} >

            <div className={`container ${styles.bannerContainer} ${containerClass}`}>

                <div className={`content ${styles.bannerContent}`}>

                    <Text
                        eyebrow={{ text: eyebrow }}
                        titleTag="h1"
                        title={title}
                        description={description}
                    />

                    <div className={`buttons`}>

                        <Button
                            href={btnLinkPrimary}
                            text={btnTextPrimary}
                            className="primary"
                        />

                        <Button
                            href={btnLinkSecondary}
                            text={btnTextSecondary}
                            className="transparent"
                        />


                    </div>

                </div>

            </div>

        </section>

    );

}
