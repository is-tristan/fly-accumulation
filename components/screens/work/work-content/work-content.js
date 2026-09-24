// Components
import VideoCol from "./components/video-col";
import ContentCol from "./components/content-col";

// Handlers
import BackButton from "@/components/handlers/back-button";

// Styles
import styles from "../styles/work-singular.module.scss";

export default function WorkContent({
    title,
    video,
    categories,
    description,
    talent,
}) {

    return (

        <section className={`row ${styles.workContentSection} headerOffset1_5x`}>

            <div className={`container noPaddingTop noPaddingBottom`}>

                <BackButton href="/work" text="Back to all work" />

            </div>

            <div className={`container noPaddingTop ${styles.workContentInner}`}>

                <VideoCol video={video} />

                <ContentCol
                    title={title}
                    categories={categories}
                    description={description}
                    talent={talent}
                />

            </div>

        </section>

    );

}
