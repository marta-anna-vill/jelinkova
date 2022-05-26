import { massageContentData } from "../content/MassagesContent";
import MassagesCard from "./MassageCard";


const MassagesIndex = () => {
    return (
        <div className="block">
            <div className="base-container">
                {
                    massageContentData.map(massageItem => {
                        return (
                            <MassagesCard data={massageItem}></MassagesCard>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MassagesIndex;