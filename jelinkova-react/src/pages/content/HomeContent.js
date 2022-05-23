import topImagePhoto from '../../images/top-image01.jpg';
import topImagePhoto2 from '../../images/top-image02.jpg';
import BenefitPhoto1 from '../../images/photo-benefit-item01.jpg';
import BenefitPhoto2 from '../../images/photo-benefit-item02.jpg';
import BenefitPhoto3 from '../../images/photo-benefit-item03.jpg';
import BenefitPhoto4 from '../../images/photo-benefit-item04.jpg';
import imageContentPhoto1 from '../../images/image-content-photo.jpg';
import imageContentPhoto2 from '../../images/woman5.jpg';
import bannerImage from '../../images/photo-banner03.jpg';
import imageBlackContent from '../../images/wellness-g0778c1dcb_1920.jpg';
import imageCrosslink from '../../images/stone-green.jpg';
import imageCrosslink1 from '../../images/feet.jpg'
import imageCrosslink2 from '../../images/tehotenska-masaz2.jpg'
import imageCrosslink3 from '../../images/stones-flowers.jpg'

export const homeContentData = [
    {
        module: "TopImage",
        id: 1,
        title: "Masérka Renata Jelínková",
        marker: "Masáže | konzultace | odpočinek",
        perex: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        ctaName: "Chci masáž",
        ctaUrl: "/about",
        image: topImagePhoto
    },
    {
        module: "TopImage",
        id: 2,
        title: "Masáže",
        marker: "Massage studio",
        perex: "vyberte si z nabídky masáží",
        ctaName: "Kontakt",
        ctaUrl: "/about", //(x)
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
        title: "Těhotenská masáž",
        perex: "Přestože je těhotenství nejkrásnějším obdobím ženy, mohou v tuto dobu nastat i různé nečekané nepříjemnosti. Nejčastěji nastávající maminky trápí bolesti zad a to převážně v oblasti bederní a krční páteře. Bolest způsobuje především váha rostoucího miminka. Vyskytnout se mohou, ale i otoky horních a dolních končetin, které jsou velmi obtěžující. Nebo na vás dolehne každodenní stres a únava. Těhotenská masáž působí blahodárně na psychické a fyzické uvolnění nastávající maminky. Kladný vliv má také na miminko, protože dochází k uvolnění svalů, díky kterému má dítě více prostoru.",
        ctaName: "Čtěte více",
        ctaUrl: "https://martinatrnkova.cz/2021/01/13/tehotenska-masaz-bez-obav/",
        image: imageContentPhoto1
    },
    {
        module: "ImageContent",
        id: 2,
        title: "Massages",
        perex: "This form of therapy involves hands-on techniques to help increase circulation, relieve tension, reduce stress, relieve anxiety and improve sleep. Our highly qualified therapists will discuss your specific concerns",
        ctaName: "Learn more",
        ctaUrl: "#",
        image: imageContentPhoto2,
        imagePosition: 'center right'
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
        title: "Masáže",
        perex: "Tato forma terapie zahrnuje praktické techniky, které pomáhají zvýšit krevní oběh, zmírnit napětí, snížit stres, zmírnit úzkost a zlepšit spánek. Naši vysoce kvalifikovaní terapeuti prodiskutují vaše konkrétní problémy",
        image: imageBlackContent
    },
    {
        module: "Crosslink",
        id: 1,
        items: [
            {
                title: "Anticelulitidní masáž",
                perex: "Anticelulitidní masáž patří mezi velmi účinné techniky v boji proti celulitidě.",
                image: imageCrosslink
            },
            {
                title: "Těhotenská masáž",
                perex: "Je jemná individuálně zaměřená relaxační masáž pro nastávající maminky, vhodná od začátku 4. měsíce do konce 7. měsíce těhotenství.",
                image: imageCrosslink2
            },
            {
                title: "Manuální lymfodrenáž",
                perex: "Manuální lymfodrenáž patří v posledních letech mezi nejvyhledávanější techniky a to nejen kvůli detoxikaci organismu, ale také pro své relaxační účinky.",
                reverse: true,
                image: imageCrosslink1
            },
            {
                title: "Klasická masáž",
                perex: "Klasická masáž je soubor hmatů, kdy se při samotné masáži používá převážně tlak na určité svalové partie v těle, technika masáže spočívá převážně v tlaku, tření, hnětení a vychvění příslušných partií.",
                reverse: true,
                image: imageCrosslink3
            }
        ]
    }
];

