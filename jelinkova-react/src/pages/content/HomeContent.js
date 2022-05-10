import topImagePhoto from '../../images/top-image-photo.png';
import BenefitPhoto1 from '../../images/photo-benefit-item01.jpg';
import BenefitPhoto2 from '../../images/photo-benefit-item02.jpg';
import BenefitPhoto3 from '../../images/photo-benefit-item03.jpg';
import BenefitPhoto4 from '../../images/photo-benefit-item04.jpg';
import imageContentPhoto1 from '../../images/image-content-photo.jpg';
import imageContentPhoto2 from '../../images/image-content-photo_02.jpg';
import bannerImage from '../../images/photo-banner03.jpg';
import imageBlackContent from '../../images/wellness-g0778c1dcb_1920.jpg';
import imageCrosslink from '../../images/crosslink.jpg';

export const homeContentData = [
    {
        module: "TopImage",
        id: 1,
        title: "Welcome",
        marker: "Beauty studio",
        perex: "to Slow Beauty Eco Salon, an Organic Beauty Salon in New York",
        ctaName: "Contact us",
        ctaUrl: "/about",
        image: topImagePhoto
    },
    {
        module: "Benefit",
        id: 1,
        items: [
            {
                title: "Touch",
                perex: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer vulputate sem a nibh rutrum consequat. Suspendisse nisl. Maecenas libero.",
                class: "background-black",
                image: BenefitPhoto1
            },
            {
                title: "Heal",
                perex: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer vulputate sem a nibh rutrum consequat. Suspendisse nisl. Maecenas libero.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer vulputate sem a nibh rutrum consequat. Suspendisse nisl. Maecenas libero.",
                image: BenefitPhoto2
            },
            {
                title: "Calm",
                perex: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                reverse: true,
                image: BenefitPhoto3
            },
            {
                title: "Relax",
                perex: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer vulputate sem a nibh rutrum consequat. Suspendisse nisl. Maecenas libero.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer vulputate sem a nibh rutrum consequat.",
                reverse: true,
                image: BenefitPhoto4
            }
        ]
    },
    {
        module: "ImageContent",
        id: 1,
        title: "test image content",
        perex: "test perex for image content",
        ctaName: "Learn more",
        ctaUrl: "#",
        image: imageContentPhoto1
    },
    {
        module: "ImageContent",
        id: 2,
        title: "Massages",
        perex: "This form of therapy involves hands-on techniques to help increase circulation, relieve tension, reduce stress, relieve anxiety and improve sleep. Our highly qualified therapists will discuss your specific concerns",
        ctaName: "Learn more",
        ctaUrl: "#",
        image: imageContentPhoto2
    },
    {
        module: "Banner",
        id: 1,
        title: "What products do you have?",
        perex: "This form of therapy involves hands-on techniques to help increase circulation, relieve tension, reduce stress, relieve anxiety and improve sleep. Our highly qualified therapists will discuss your specific concerns",
        ctaName: "Learn more",
        ctaUrl: "#",
        image: bannerImage
    },
    {
        module: "Reference",
        id: 1,
        title: "Happy clients...",
        items: [
            {
                text: "Being newly pregnant, I was very happy to find Beauty Ecology Organic Salon's safe alternative! I'm so thankful that I no longer leave the salon with an itchy and burning scalp."
            },
            {
                text: "Being newly pregnant, I was very happy to find Beauty Ecology Organic Salon's safe alternative! I'm so thankful that I no longer leave the salon with an itchy and burning scalp."
            },
            {
                text: "Being newly pregnant, I was very happy to find Beauty Ecology Organic Salon's safe alternative! I'm so thankful that I no longer leave the salon with an itchy and burning scalp."
            }
        ]
    },
    {
        module: "BlackContent",
        id: 1,
        title: "Massages",
        perex: "This form of therapy involves hands-on techniques to help increase circulation, relieve tension, reduce stress, relieve anxiety and improve sleep. Our highly qualified therapists will discuss your specific concerns",
        image: imageBlackContent
    },
    {
        module: "Crosslink",
        id: 1,
        items: [
            {
                title: "STYLING",
                perex: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
                image: imageCrosslink
            },
            {
                title: "Haircut",
                perex: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
                image: imageCrosslink
            },
            {
                title: "Color",
                perex: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
                reverse: true,
                image: imageCrosslink
            },
            {
                title: "Specials",
                perex: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
                reverse: true,
                image: imageCrosslink
            }
        ]
    }
];

