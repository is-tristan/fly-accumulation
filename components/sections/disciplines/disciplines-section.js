// Next
import Image from "next/image";

// Styles
import styles from "./styles/disciplines.module.scss";

// Components
import DisciplineSectionHeading from "./components/discipline-section-heading";
import DisciplineSectionContentItem from "./components/discipline-section-content-item";

export default function Disciplines({
    eyebrowText = "What We Do",
    image = null,
    headingType = "default",
    data = [
        {
            number: "01",
            title: "Growth",
            description: "To begin, our agency brings a wealth of expertise to the table when it comes to pinpointing the ideal collaborations and partnerships. This ensures that the influencer's content seamlessly resonates with their target audience. ",
            href: "/contact"
        },
        {
            number: "02",
            title: "Connection",
            description: "We specialise in creating strong, long-lasting digital connections. Our expertise lies in understanding the influencer landscape and matching the right individuals and brands for mutually beneficial partnerships.",
            href: "/contact"
        },
        {
            number: "03",
            title: "Potential",
            description: "We pride ourselves on our commitment to maximising the career potential of the creators we work with. Our dedicated team understands that every influencer is unique, and we tailor our strategies to suit their specific needs and goals. ",
            href: "/contact"
        },
        {
            number: "04",
            title: "Connection",
            description: "Our success is measured by the growth and success of the creators we work with. We are committed to helping them achieve their full potential and to see them succeed in their careers. ",
            href: "/contact"
        }
    ]
}) {

    return (

        <section className={`row ${styles.disciplinesSection}`}>

            <div className={`container ${styles.disciplinesSectionContainer}`}>

                <DisciplineSectionHeading
                    eyebrowText={eyebrowText}
                />

                <div className={styles.disciplinesSectionContent}>

                    {data.map((item, index) => (

                        <DisciplineSectionContentItem
                            key={item.number}
                            item={item}
                            index={index}
                            headingType={headingType}
                        />

                    ))}

                </div>

            </div>

            {image && (

                <div className={styles.disciplinesSectionImage}>

                    <Image
                        src={image}
                        alt={eyebrowText}
                        fill
                        sizes="512px"
                        loading="lazy"
                        style={{ objectFit: "cover" }}
                    />

                </div>

            )}

        </section >

    )

}
