// SEO
import { buildPageMetadata } from "@/lib/seo"

// Components
import Banner from "@/components/sections/banner/banner";
import Content from "@/components/sections/content/content";
import DisciplinesSection from "@/components/sections/disciplines/disciplines-section";
import TeamCarouselSection from "@/components/screens/company/about/team/team-carousel-section";
import TestimonialCarouselSection from "@/components/sections/testimonial-carousel-section/testimonials";
import CtaSection from "@/components/sections/cta/cta-section";

export const metadata = buildPageMetadata({
    title: "About",
    description: "Fly Accumulation is a media trading, planning and activation agency built around how media actually works in the real world.",
    path: "/company/about",
})

export default function AboutPage() {

    return (

        <>

            <Banner
                eyebrow={null}
                title="About"
                description={null}
            />

            <Content
                eyebrowText="What We Do"
                title="Setting Ourselves Apart from Other Agencies"
                description="<p>Fly Accumulation Media & PR stands as a leading talent management agency dedicated to cultivating and directing careers within the digital marketing and communications industry.</p> <p>Operating seamlessly across social media, press, production, and commercial brand landscapes. Fly Accumulation is an agency without limitations, harnessing boundless opportunities for its talents and clients.</p> <p>While recognizing the significance of profitability, our foremost pride lies in delivering exceptional outcomes for a diverse clientele, spanning from everyday brands to the pinnacle of luxury.</p> <p>Fly represents the acronym ‘First Love Yourself’, encapsulating our unwavering commitment to infuse this self-affirming ethos  into mevery intricate facet of our operations.</p>"
                imagePosition="left"
                image="/images/company/about/setting-ourselves-apart-from-other-agencies.avif"
            />

            <TeamCarouselSection />

            <DisciplinesSection />

            <Content
                eyebrowText="Reaching new goals"
                title="Elevating your reach and impact to new heights"
                description="<p>At Fly Accumulation At Fly Accumulation Media & PR, we are dedicated to elevating our clients' reach to new heights and making a lasting impact. We understand the power of influencer partnerships in the digital age. We meticulously analyse each client’s target audience, goals, and brand identity to identify the perfect influencers who can authentically connect with their customer base.</p><p>Through strategic collaborations and engaging content creation, we amplify our clients’ messages, significantly expanding their reach and influence. We continually adapt to the evolving landscape of social media and digital marketing, staying ahead of trends to maximise our clients’ exposure. By harnessing our expertise and network of influencers, we work tirelessly to deliver results that not only meet but exceed our clients' expectations, ensuring their brand leaves a lasting impression in the minds of their audience.</p>"
                btnTextPrimary={null}
                hasBrandMark={true}
            />

            <TestimonialCarouselSection />

            <CtaSection />

        </>

    )

}
