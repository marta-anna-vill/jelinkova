import { _contentServices, contentHandler } from "./content/ContentHandler";
import { massageContentData } from "./content/MassagesContent";
import PriceTable from "../modules/PriceTable";

const Pricing = () => {
    return (
        <div className="block">
            <div className="base-container">
                <h1 className="text-center mt-0">Ceník</h1>
                {
                    <PriceTable data={_contentServices.getMassagesPrices(massageContentData)} />
                }
            </div>
        </div>
    )
}

export default Pricing;