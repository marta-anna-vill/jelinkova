import topImagePhoto from '../../images/top-image-photo.png';
import BenefitPhoto1 from '../../images/photo-benefit-item01.jpg';
import BenefitPhoto2 from '../../images/photo-benefit-item02.jpg';
import BenefitPhoto3 from '../../images/photo-benefit-item03.jpg';
import BenefitPhoto4 from '../../images/photo-benefit-item04.jpg';

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
            title: "title 1",
            perex: "perex ",
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
    }
];

