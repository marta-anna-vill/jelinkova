export const ImageContent = (props) => {
    return (
        <div class="image-content">
            <div class="base-container">
                <div class="image-content-inner">
                    <div class="image-content-photo">
                        <div class="image-shapes-wrapper">
                            <img src={props.image} alt="" />
                        </div>
                    </div>
                    <div class="image-content-text">
                        <div class="image-content-text-title">
                            <h2>{props.title}</h2>
                        </div>
                        <div class="image-content-text-detail">
                            {props.perex}
                        </div>
                        <div class="image-content-link">
                            <a href="https://www.w3schools.com/css/css_margin.asp" rel="noopenner" target="_blank">Learn
                                more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};