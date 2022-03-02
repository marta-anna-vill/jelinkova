export const BlackContent = (props) => {
    return (
        <div class="section section-rose-img">
            <div class="black-content">
                <div class="medium-container">
                    <div class="black-content-inner">
                        <div class="black-content-photo">
                            <img src={props.image} alt=""/>
                        </div>
                        <div class="black-content-text">
                            <div class="black-content-text-inner">
                                <div class="black-content-text-title">
                                    <h2>{props.title}</h2>
                                </div>
                                <div class="black-content-text-detail">
                                    Our highly qualified therapists will discuss your specific concerns and
                                    individualise
                                    your
                                    massage to meet your requirements, be it back, neck and shoulder, full body
                                    Swedish
                                    massage
                                    or head and neck.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}