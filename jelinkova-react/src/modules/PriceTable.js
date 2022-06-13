const PriceTable = (props) => {
    props = props.data;
    console.log(props)
    return (
        <div className="price-table-container">
            {
                props.map(item => {
                    return (
                        <div className="price-table-item" key={item.id}>
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