import { useRef } from "react";

const MassagesCard = (props) => {
    props = props.data;
    const pricingBtnRef = useRef(null);

    const handlePricingRedirect = () => {
        localStorage.setItem("massagePriceActiveId", props.id);
        window.location.href = "/cenik";
    };

    return (
        <div className="massage-card-item">
            <div className="massage-card-item-inner">
                <div className="massage-card-item-content">
                    <div className="massage-card-item-title h2">
                        {props.title}
                    </div>
                    <div className="massage-card-item-perex">
                        {props.perex}
                    </div>
                    <div className="massage-card-item-link">
                        <a ref={pricingBtnRef} onClick={handlePricingRedirect} className="btn btn-default massage-card-item-gallery-openner">Do ceníku</a>
                    </div>
                </div>
                {
                    props.gallery && (
                        <div className="massage-card-item-gallery">
                            {
                                props.gallery && props.gallery.map(image => {
                                    return (
                                        <div className="massage-card-item-gallery-item">
                                            <img src={image} />
                                        </div>
                                    )
                                })
                            }
                            <a href="" className="btn btn-primary massage-card-item-gallery-openner">Více fotek</a>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default MassagesCard;