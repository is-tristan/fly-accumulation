// Components
import GalleryCol from "./components/gallery-col";
import ContentCol from "./components/content-col";

// Handlers
import BackButton from "@/components/handlers/back-button";

// Styles
import styles from "../styles/talent-singular.module.scss";

export default function TalentContent({
    title,
    gallery,
    audienceSize,
    location,
    contentFocus,
    description,
    tiktokUrl,
    tiktokFollowerCount,
    instagramUrl,
    instagramFollowerCount,
}) {

    return (

        <section className={`row ${styles.talentContentSection} headerOffset1_5x`}>

            <div className={`container noPaddingTop noPaddingBottom`}>

                <BackButton href="/talent" text="Back to all talent" />

            </div>

            <div className={`container noPaddingTop ${styles.talentContentInner}`}>

                <GalleryCol
                    gallery={gallery}
                    title={title}
                />

                <ContentCol
                    title={title}
                    audienceSize={audienceSize}
                    location={location}
                    contentFocus={contentFocus}
                    description={description}
                    tiktokUrl={tiktokUrl}
                    tiktokFollowerCount={tiktokFollowerCount}
                    instagramUrl={instagramUrl}
                    instagramFollowerCount={instagramFollowerCount}
                />

            </div>

        </section>

    )

}
