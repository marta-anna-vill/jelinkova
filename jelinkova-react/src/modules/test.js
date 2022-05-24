export const ContentImage = (props) => {
    //props = props.data
    return (
        <div className="content-image">
            {props.data.items.map((item, index) => {
                <div className={'content-image-item' + (item.reverse ? 'reverse-item' : '')}>
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
            })}
        </div>
    )
}



export const Benefit = (props) => {
    return (
        <div className="medium-container">
            <div className="benefit-container">

                {props.data.items.map((item, index) => {
                    return (
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
                                <img src={item.image} alt="" />
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}