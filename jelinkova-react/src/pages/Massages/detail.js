import { massageContentData } from "../content/MassagesContent";
import { contentHandler } from "../content/ContentHandler";

const MassagesDetail = (props) => {
    const data = contentHandler(massageContentData, "MassageContent", props.id);
    console.log(data, massageContentData, props)
    return (
        <>
        <h1></h1>
            <h1>{data.title}</h1>
        </>
    )
}

export default MassagesDetail;