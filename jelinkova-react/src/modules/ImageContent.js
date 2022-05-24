export const ImageContent = (props) => {
    props = props.data
    
    return (
        <div className="image-content">
            <div className="base-container">
                <div className="image-content-inner">
                    <div className="image-content-photo">
                        <div className="image-shapes-wrapper">
                            <img style={{objectPosition: props.imagePosition ?? 'center'}} src={props.image} alt="" />
                        </div>
                    </div>
                    <div className="image-content-text">
                        <div className="image-content-text-title h2">
                            {props.title}
                        </div>
                        <div className="image-content-text-detail">
                            {props.perex}
                        </div>
                        <div className="image-content-link">
                            <a className="btn btn-primary" href={props.ctaUrl} rel="noreferrer" target="_blank">Learn
                                more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};