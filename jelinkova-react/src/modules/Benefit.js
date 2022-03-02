export const Benefit = (props) => {
    console.log(props)
    return (
        <div className="medium-container">
            <div className="benefit-container">
                
                {props.data.items.map((item, index) => {
                    return(
                        <div key={index} className={'benefit-item ' + (item.reverse ? 'reverse-item' : '')}>
                            <div className={'benefit-item-content ' + item.class}>
                                <div className="benefit-item-content-title">
                                    {item.title}
                                </div>
                                <div className="benefit-item-content-text">
                                    {item.perex}
                                </div>
                            </div>
                            <div className="benefit-item-photo">
                                <img src={item.image} alt=""/>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}