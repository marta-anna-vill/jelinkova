export const ContentImage = (props) => {
    //props = props.data    
    return (
        <div className="content-image">
            {props.data.items.map((item, index) => {
                return (
                    <div key={index} className={'content-image-item' + (item.reverse ? 'reverse-item' : '')}>
                        <div className="base-container">
                            <div className="content-image-item-inner">
                                <div className="content-image-item-photo">
                                    <img src={props.image} />
                                </div>
                                <div className="content-image-item-text">
                                    <h3>{props.title}</h3>
                                    {props.perex}
                                    <div className="content-image-item-cta">
                                        <a className="btn btn-default" href={props.ctaUrl}>{props.ctaName}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

