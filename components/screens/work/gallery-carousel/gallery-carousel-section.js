// Components
import GalleryCarousel from "./components/gallery-carousel";

// Styles
import styles from "./styles/gallery-carousel.module.scss";

export default function GalleryCarouselSection({
    video,
    gallery = [],
}) {

    if (!video && !(gallery?.length > 0)) {
        return null;
    }

    return (

        <section id="galleryCarousel" className={`row ${styles.galleryCarouselSection}`}>

            <div className={`container noPaddingTop noPaddingBottom ${styles.galleryCarouselContainer}`}>

                <GalleryCarousel
                    video={video}
                    gallery={gallery}
                />

            </div>

        </section>

    )

}
