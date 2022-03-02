import { Link } from "react-router-dom";

export const TopImage = (props) => {
    props = props.data
 
    return (
        <div className="top-image">
            <div className="base-container">
                <div className="top-image-inner">
                    <div className="top-image-photo">
                        <img src={props.image} alt="" />
                    </div>
                    <div className="top-image-content">
                        <span className="marker">{props.marker}</span>
                        
                        <h1>{props.title}</h1>

                        {props.perex}

                        {props.ctaUrl && (
                            <div className="top-image-cta">
                                <Link className="btn btn-primary" to={props.ctaUrl}>{props.ctaName}</Link>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
};