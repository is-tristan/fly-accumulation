// Components
import Eyebrow from "@/components/content/eyebrow/eyebrow";
import Text from "@/components/content/text/text";
import CategoryTags from "@/components/content/category-tags/category-tags";
import Button from "@/components/handlers/button";

// YouTube
import { getYoutubeEmbedUrl } from "@/lib/youtube";

// Styles
import styles from "../styles/work-carousel-section.module.scss";

export default function WorkCarouselItem({
    title,
    description,
    categories = [],
    video,
    workHref = "/work",
}) {

    const youtubeEmbedUrl = getYoutubeEmbedUrl(video, {
        autoplay: true,
        mute: true,
        loop: true,
        controls: false,
    });

    return (

        <div className={styles.workCarouselItem}>

            <div className={`container`}>

                <div className={`content ${styles.workCarouselItemContent}`}>

                    <div className={`titleContainer ${styles.workCarouselItemHeader}`}>

                        <Eyebrow text="Featured Showreel" className={styles.workCarouselItemEyebrow} />

                        {categories.length > 0 && (
                            <CategoryTags categories={categories} />
                        )}

                        <Text
                            title={title}
                            titleClass="sectionTitle"
                        />

                    </div>

                    <div className={`description ${styles.workCarouselItemDescription}`}>

                        <Text description={`<p>${description}</p>`} />

                    </div>

                    <div className={`buttons ${styles.workCarouselItemFooter}`}>

                        <Button href={workHref} text="View Case Study" />

                        <Button href={`/work`} text="View All Work" className={`transparent`} />

                    </div>

                </div>

            </div>

            {youtubeEmbedUrl && (

                <div className={styles.workCarouselItemVideo}>

                    <iframe
                        src={youtubeEmbedUrl}
                        title={title || "Featured work video"}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />

                </div>

            )}

        </div>

    )

}
