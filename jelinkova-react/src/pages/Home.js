import { TopImage } from "../modules/TopImage";
import topImagePhoto from '../images/top-image-photo.png';
import bannerImage from '../images/photo-banner03.jpg';
import imageContentPhoto1 from '../images/image-content-photo.jpg';
import imageContentPhoto2 from '../images/image-content-photo_02.jpg';
import BenefitPhoto1 from '../images/photo-benefit-item01.jpg';
import BenefitPhoto2 from '../images/photo-benefit-item02.jpg';
import BenefitPhoto3 from '../images/photo-benefit-item03.jpg';
import BenefitPhoto4 from '../images/photo-benefit-item04.jpg';
import imageBlackContent from '../images/wellness-g0778c1dcb_1920.jpg';
import { ImageContent } from "../modules/ImageContent";
import { Benefit } from "../modules/Benefit";
import { Banner } from "../modules/Banner";
import { Reference } from "../modules/Reference";
import { BlackContent } from "../modules/BlackContent";

const Home = () => {

    const benefitData = [
        {
            title: "title 1",
            perex: "perex",
            class: "background-black",
            image: BenefitPhoto1
        },
        {
            title: "title 2",
            image: BenefitPhoto2
        },
        {
            title: "title 3",
            reverse: true,
            image: BenefitPhoto3
        },
        {
            title: "title 4",
            reverse: true,
            image: BenefitPhoto4
        }
    ]

    return (
        <>
            <TopImage
                title="Welcome"
                marker="Beauty studio"
                perex="to Slow Beauty Eco Salon, an Organic Beauty Salon in New York"
                ctaName="Contact us"
                ctaUrl="/about"
                image={topImagePhoto}
            />

            <Benefit data={benefitData} />

            <ImageContent
                image={imageContentPhoto1}
                title="Advanced Skincare"
                perex="Our highly qualified therapists will carry out an in depth analysis of your skins needs and create
                    the best programme of treatment for you."
            ></ImageContent>
            <Banner
                title="What products do you have?"
                perex="Every single ingredient you put on your skin is information, every ingredient contains
                messages
                that communicate to every single cell in your skin."
                ctaName="Learn more"
                ctaUrl="https://nicepage.com/templates/preview/hair-nail-and-beauty-salon-21712?device=desktop"
                image={bannerImage}
            />
            <Reference
                title="Happy clients. That's what she said..."
                ref1="Being newly pregnant, I was very
                    happy to find Beauty Ecology Organic Salon's safe alternative! I'm so thankful that I no
                    longer leave the salon with an itchy and burning scalp."
                ref2="After finding I was allergic to my previous hair color, and being newly pregnant, I was very
                    happy to find Beauty Ecology Organic Salon's safe alternative! I'm so thankful that I no
                    longer leave the salon with an itchy and burning scalp."
                ref3="After finding I was allergic to my previous hair color, and being newly pregnant, I was very
                    happy to find Beauty Ecology Organic Salon's safe alternative! "
            />
            <BlackContent
                title="Beauty Treatments"
                image={imageBlackContent}
            />
            <ImageContent
                image={imageContentPhoto2}
                title="Massages"
                perex="This form of therapy involves hands-on techniques to help increase circulation, relieve
                    tension, reduce stress, relieve anxiety and improve sleep. Our highly qualified
                    therapists will discuss your specific concerns"
            />
        </>

        // dalši komponenty ...
    );
};

export default Home;