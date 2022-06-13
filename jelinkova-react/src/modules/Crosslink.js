export const Crosslink = (props) => {
    return (
        <div className="crosslink-coffee-wrapper ">
            <div className="base-container">
                <div className="crosslink-container">

                    {props.data.items.map((item, index) => {
                        return (
                            <div key={index} className={'crosslink-item ' + (item.reverse ? 'reverse-item' : '')}>
                                <div className={'crosslink-item-content ' + item.class}>
                                    <div className="crosslink-item-content-title h3">
                                        {item.title}
                                    </div>
                                    <div className="crosslink-item-content-text">
                                        {item.perex}
                                    </div>
                                    <div className="crosslink-item-content-cta">
                                    <a className="btn btn-primary" href={item.ctaUrl}>Více</a>
                                    </div>
                                </div>
                                <div className="crosslink-item-photo">
                                    <img src={item.image} alt="" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}