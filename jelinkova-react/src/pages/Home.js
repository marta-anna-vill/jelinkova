import { TopImage } from "../modules/TopImage";
import { ImageContent } from "../modules/ImageContent";
import { Benefit } from "../modules/Benefit";
import { Banner } from "../modules/Banner";
import { Reference } from "../modules/Reference";
import { BlackContent } from "../modules/BlackContent";
import { Crosslink } from "../modules/Crosslink";
import { contentHandler } from "./content/ContentHandler";
import { homeContentData } from "./content/HomeContent";

const Home = () => {

    return (
        <>
            <TopImage data={contentHandler(homeContentData, "TopImage", 1)} />

            <Benefit data={contentHandler(homeContentData, "Benefit", 1)} />

            <ImageContent data={contentHandler(homeContentData, "ImageContent", 1)} />

            <Banner data={contentHandler(homeContentData, "Banner", 1)} />

            <Reference data={contentHandler(homeContentData, "Reference", 1)} />

            <BlackContent data={contentHandler(homeContentData, "BlackContent", 1)} />

            <ImageContent data={contentHandler(homeContentData, "ImageContent", 2)} />

            <Crosslink data={contentHandler(homeContentData, "Crosslink", 1)} />
            
        </>

        // dalši komponenty ...
    );
};

export default Home;