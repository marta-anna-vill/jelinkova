export const Banner = (props) => {
    return (
        <div class="banner background-soft-gradient">
            <img class="banner-background-image" src={props.image} alt="" />
            <div class="base-container">
                <div class="banner-inner">
                    <div class="banner-content">
                        <h2>{props.title}</h2>
                        {props.perex}
                        <div class="banner-cta">
                            <a class="btn btn-default"
                                href={props.ctaUrl}
                                rel="noopenner" target="_blank">{props.ctaName}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}