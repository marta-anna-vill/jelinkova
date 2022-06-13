import imageTest from '../../images/image-content-photo_02.jpg';
import pregnancy from '../../images/pregnancy.jpg';
import pregnancy2 from '../../images/flower.jpg';
import pregnancy3 from '../../images/pregnancy3.jpg';


export const massageContentData = [
    {
        module: "MassageContent",
        id: 1,
        title: "Těhotenská masáž",
        perex: "Je jemná individuálně zaměřená relaxační masáž pro nastávající maminky, vhodná od začátku 4. měsíce do konce 7. měsíce těhotenství. Pravidelná masáž v těhotenství harmonizuje organismus ženy, zlepšuje její imunitu a napomáhá jí na cestě k porodu zlepšováním jak fyzického stavu, tak psychické pohody. Uvolňuje stres a napětí, odstraňuje bolesti zad a šíje, uleví pocitu těžkých nohou, zmírní otoky nohou.",
        ctaName: "Learn more",
        ctaUrl: "#",
        image: imageTest,
        duration: 70,
        price: 900,
        gallery: [
            pregnancy,
            imageTest,
            pregnancy3
        ]
    },
    {
        module: "MassageContent",
        id: 2,
        reverse: true,
        title: "Velvet touch massage",
        perex: "Jedná se o relaxační techniku, kterou tvoří ucelený soubor hmatů celého těla. Technika se provádí v plynulém tempu, pracuje se s dynamikou masáže a je při ní důležitý klid a harmonie v pohybu. Začíná se masáží hlavy, pozvolna se přechází na partie zad a šíje. Potom pokračujeme masáží nohou, zezadu, zepředu, následně přecházíme na masáž rukou a vše je zakončeno uvolňující masáží dekoltu a obličeje.",
        ctaName: "Learn more",
        ctaUrl: "#",
        image: imageTest,
        duration: 120,
        price: 1300,
        gallery: [
            imageTest,
            imageTest,
            imageTest
        ]
    },
    {
        module: "MassageContent",
        id: 3,
        title: "Breussova masáž a Balneo",
        perex: "Příjemná a efektivní masáž a zajímavé zábalové techniky. Breussova masáž je jednoduchou, ale velmi účinnou technikou k uvolnění bolestivých stavů, Lze ji provádět na rozdíl od ostatních masáží i při akutních stavech. Při masáži se používá třezalkový olej, který je silně prokrvující a pomáhá také při bolestech svalů. Masáž je velmi relaxační a masírovaný se při ní často dostává do tzv. stavů alfa.",
        ctaUrl: "#",
        image: imageTest,
        duration: 60,
        price: 800,
        gallery: [
            imageTest
        ]
    },
    {
        module: "MassageContent",
        id: 4,
        title: "Manuální lymfodrenáž",
        perex: "Manuální lymfodrenáž patří v posledních letech mezi nejvyhledávanější techniky, a to nejen kvůli detoxikaci organismu, ale také pro své relaxační účinky a v neposlední řadě také pro svůj mimořádný vliv v boji proti celulitidě. Lymfodrenáž patří proto pro svou efektivnost k nejvyhledávanějším. Manuální lymfodrenáž je jemná hmatová technika ovlivňující lymfatický systém. Má velmi sedativní a spasmolytický efekt na lymfatický systém.",
        ctaName: "Více o masáži",
        ctaUrl: "#",
        image: imageTest,
        duration: 120,
        price: 1300,
        gallery: [
            imageTest,
            imageTest,
            imageTest
        ]
    },
    {
        module: "MassageContent",
        id: 5,
        title: "Anticelulitidní masáž",
        perex: "Anticelulitidní masáž patří mezi velmi účinné techniky v boji proti celulitidě. Pokud se provádí pravidelně, výsledky jsou velmi brzy patrné. Protože se masáže provádí převážně v rychlém tempu, dochází tak ke spalování a výsledky se projeví hlavně na objemu stehna a také velmi dobře zmírňují následky celulitidy. Masáž je zaměřena na dolní končetiny a hýždě, které jsou nejproblematičtějšími partiemi, které nás trápí.",
        ctaName: "Learn more",
        ctaUrl: "#",
        image: imageTest,
        duration: 90,
        price: 900,
        gallery: [
            imageTest,
            imageTest,
            imageTest
        ]
    },
    {
        module: "MassageContent",
        id: 6,
        title: "Klasická masáž",
        perex: "Klasická masáž je soubor hmatů, kdy se při samotné masáži používá převážně tlak na určité svalové partie v těle, technika masáže spočívá převážně v tlaku, tření, hnětení a vychvění příslušných partií. Samotná masáž je pak individuálně přizpůsobena potřebám klienta. Působí na celkové zlepšení mízního a krevního oběhu, uvolňuje svaly a snižuje hladinu stresu v těle. Příznivý vliv má na celkový stav pokožky a to převážně při pravidelných návštěvách.",
        ctaName: "Learn more",
        ctaUrl: "#",
        image: imageTest,
        duration: 90,
        price: 1100,
        types: [
            {
                module: "MassageContent",
                id: 6.1,
                title: "Ruční masáž zad a šíje",
                image: imageTest,
                duration: 40,
                price: 600,
            },
            {
                module: "MassageContent",
                id: 6.2,
                title: "Ruční masáž zad, šíje, nohou",
                image: imageTest,
                duration: 70,
                price: 800,
                
            },
            {
                module: "MassageContent",
                id: 6.3,
                title: "Ruční masáž šíje",
                image: imageTest,
                duration: 30,
                price: 500,
        
            },
            {
                module: "MassageContent",
                id: 6.4,
                title: "Ruční masáž nohou a hýždí",
                image: imageTest,
                duration: 30,
                price: 500,
            
            }
        ],
        gallery: [
            imageTest,
            imageTest,
            imageTest
        ]
    },
    
];