const PriceTable = (props) => {
    props = props.data;
    console.log(props)
    return (
        <div className="price-table-container">
            {
                props.map(item => {
                    return (
                        <div className="price-table-item" key={item.id}>
                            <div className="price-table-item-name">{item.title}</div>
                            <div className="price-table-item-price">{item.price}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PriceTable;