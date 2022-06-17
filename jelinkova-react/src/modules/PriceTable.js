import { useEffect, useState } from "react";

const PriceTable = (props) => {
    props = props.data;
    const [massagePriceActiveId, getMassagePriceActiveId] = useState(0);

    useEffect(() => {
        getMassagePriceActiveId(localStorage.getItem("massagePriceActiveId"));
        setTimeout(()=> {
            localStorage.removeItem("massagePriceActiveId");
        }, 1000)
    });

    return (
        <div className="price-table-container">
            <div className="price-table-header">
                <div className="price-table-header-name">
                    Název
                </div>
                <div className="price-table-header-duration">
                    Čas
                </div>
                <div className="price-table-header-price">
                    Cena
                </div>
            </div>
            {
                props.map(item => {
                    return (
                        <div className={`price-table-item ${massagePriceActiveId == item.id ? "active" : ""}`} key={item.id}>
                            <div className="price-table-item-inner">
                                <div className="price-table-item-name">{item.title}</div>
                                <div className="price-table-item-duration">{item.duration} min</div>
                                <div className="price-table-item-price">{item.price} Kč</div>
                            </div>
                            {
                                item.types && (
                                    <div className="price-table-type-container">
                                        {
                                            item.types.map(type => {
                                                return (
                                                    <div className="price-table-type">
                                                        <div className="price-table-item-name">{type.title}</div>
                                                        <div className="price-table-item-duration">{type.duration} min</div>
                                                        <div className="price-table-item-price">{type.price} Kč</div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PriceTable;