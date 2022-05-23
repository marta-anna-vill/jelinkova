import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Parallax } from "../components/Paralax";

export const TopImage = (props) => {
    props = props.data
 
    const topImageRef = useRef(null);

    useEffect(() => {
        Parallax(topImageRef.current, "img");
    });

    return (
        <div className="top-image">
            <div className="base-container">
                <div className="top-image-inner">
                    <div className="top-image-content">
                        <div className="top-image-content-inner">
                        <span className="marker">{props.marker}</span>
                        <h1>{props.title}</h1>

                        <div className="perex">
                            {props.perex}
                        </div>

                        {props.ctaUrl && (
                            <div className="top-image-cta">
                                <Link className="btn btn-primary" to={props.ctaUrl} rel="noopener">{props.ctaName}</Link>
                            </div>
                        )}
                        </div>
                    </div>
                    <div className="top-image-photo">
                        <img rel={topImageRef} src={props.image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
};