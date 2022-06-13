import { massageContentData } from "../content/MassagesContent";
import MassagesCard from "./MassageCard";
import { homeContentData } from "../content/HomeContent";
import { contentHandler } from "../content/ContentHandler";
import { TopImage } from "../../modules/TopImage";


const MassagesIndex = () => {
    return (<>
        <TopImage data={contentHandler(homeContentData, "TopImage", 3)} />
        <div className="block">
            <div className="base-container">
                {
                    massageContentData.map(massageItem => {
                        return (
                            <>
                                <MassagesCard data={massageItem}></MassagesCard>
                            </>

                        )
                    })
                }
            </div>
            <div className="cta-massage">
                <div className="base-container">
                    <h3>Kdy se poradit s lékařem?</h3>
                </div>
            </div>
        </div>
    </>
    )
}

export default MassagesIndex;