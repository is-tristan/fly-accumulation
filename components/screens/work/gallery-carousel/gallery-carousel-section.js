// Components
import GalleryCarousel from "./components/gallery-carousel";

// Styles
import styles from "./styles/gallery-carousel.module.scss";

export default function GalleryCarouselSection({
    video,
    featuredImage,
}) {

    if (!video && !featuredImage) {
        return null;
    }

    return (

        <section id="galleryCarousel" className={`row ${styles.galleryCarouselSection}`}>

            <div className={`container noPaddingTop noPaddingBottom ${styles.galleryCarouselContainer}`}>

                <GalleryCarousel
                    video={video}
                    featuredImage={featuredImage}
                />

            </div>

        </section>

    )

}
