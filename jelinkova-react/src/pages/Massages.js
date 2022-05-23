import { contentHandler } from "./content/ContentHandler";
import { homeContentData } from "./content/HomeContent";
import { ContentImage } from "../modules/ContentImage";
import { TopImage } from "../modules/TopImage";
import { massageContentData } from "./content/MassagesContent";

const Massages = () => {
    return (
        <>

            {/* <div className="base-container">
                <h1>Massages</h1>
            </div> */}

            <TopImage data={contentHandler(homeContentData, "TopImage", 2)} />

            <ContentImage data={contentHandler(massageContentData, "ContentImage", 1)} />

            <ContentImage data={contentHandler(massageContentData, "ContentImage", 2)} />

        </>
    )
}

export default Massages;