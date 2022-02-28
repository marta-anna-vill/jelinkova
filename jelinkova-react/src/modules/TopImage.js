import { Link } from "react-router-dom";

export const TopImage = (props) => {
    return (
        <div class="top-image">
            <div class="base-container">
                <div class="top-image-inner">
                    <div class="top-image-photo">
                        <img src={props.image} alt="" />
                    </div>
                    <div class="top-image-content">
                        <span class="marker">{props.marker}</span>
                        <h1>{props.title}</h1>
                        {props.perex}
                        {props.ctaUrl && (
                            <div class="top-image-cta">
                                <Link className="btn btn-primary" to={props.ctaUrl}>{props.ctaName}</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
};