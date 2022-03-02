export const Banner = (props) => {
    return (
        <div className="banner background-soft-gradient">
            <img className="banner-background-image" src={props.image} alt="" />
            <div className="base-container">
                <div className="banner-inner">
                    <div className="banner-content">
                        <h2>{props.title}</h2>
                        {props.perex}
                        <div className="banner-cta">
                            <a className="btn btn-default"
                                href={props.ctaUrl}
                                rel="noopenner" target="_blank">{props.ctaName}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}