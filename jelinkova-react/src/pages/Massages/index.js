import { ImageContent } from "../../modules/ImageContent";
import { massageContentData } from "../content/MassagesContent";


const MassagesIndex = () => {
    return (
        massageContentData.map(massageItem => {
            return (
                <ImageContent data={massageItem}></ImageContent>
            )
        })
    )
}

export default MassagesIndex;