import { massageContentData } from "../content/MassagesContent";
import MassagesCard from "./MassageCard";
import { homeContentData } from "../content/HomeContent";
import { contentHandler } from "../content/ContentHandler";
import { TopImage } from "../../modules/TopImage";


const MassagesIndex = () => {
    return (<>
        <TopImage data={contentHandler(homeContentData, "TopImage", 3)} />
        <div className="massage-section">
            <div className="base-container">
                <div className="massages-container">
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
            </div>
            {/* <div className="cta-massage">
                <div className="base-container">
                    <div className="cta-massage-inner">
                        <h3>Kdy se poradit s lékařem?</h3>
                        <div className="btn btn-default">Více</div>
                    </div>
                </div>
            </div> */}
        </div>
    </>
    )
}

export default MassagesIndex;