export const ImageContent = (props) => {
    props = props.data
    return (
        <div className="image-content">
            <div className="base-container">
                <div className="image-content-inner">
                    <div className="image-content-photo">
                        <div className="image-shapes-wrapper">
                            <img src={props.image} alt="" />
                        </div>
                    </div>
                    <div className="image-content-text">
                        <div className="image-content-text-title">
                            <h2>{props.title}</h2>
                        </div>
                        <div className="image-content-text-detail">
                            {props.perex}
                        </div>
                        <div className="image-content-link">
                            <a href="https://www.w3schools.com/css/css_margin.asp" rel="noopenner" target="_blank">Learn
                                more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};