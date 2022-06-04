import { _contentServices, contentHandler } from "./content/ContentHandler";
import { massageContentData } from "./content/MassagesContent";
import PriceTable from "../modules/PriceTable";

const Pricing = () => {
    return (
        <div className="block">
            {
                <PriceTable data={_contentServices.getMassagesPrices(massageContentData)} />
            }
        </div>
    )
}

export default Pricing;