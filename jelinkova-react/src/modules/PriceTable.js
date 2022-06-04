const PriceTable = (props) => {
    props = props.data;
    console.log(props)
    return (
        props.map(item => {
            return (
                <div key={item.id}>
                    {item.title + " " + item.price}
                </div>
            )
        })
    )
}

export default PriceTable;