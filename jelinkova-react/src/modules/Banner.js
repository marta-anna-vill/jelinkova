import { useRef, useEffect, useState } from "react";
import { Parallax } from "../components/Paralax";

export const Banner = (props) => {
    props = props.data;

    const bannerRef = useRef(null);

    useEffect(() => {
        Parallax(bannerRef.current, "img");
    });

    return (
        <div className="banner background-soft-gradient">
            <img ref={bannerRef} className="banner-background-image parallax-image" src={props.image} alt="" />
            <div className="base-container">
                <div className="banner-inner">
                    <div className="banner-content">
                        <h2>{props.title}</h2>
                        {props.perex}
                        <div className="banner-cta">
                            <a className="btn btn-default"
                                href={props.ctaUrl}
                                rel="noreferrer" target="_blank">{props.ctaName}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}