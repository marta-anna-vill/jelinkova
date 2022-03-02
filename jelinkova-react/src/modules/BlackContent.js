export const BlackContent = (props) => {
    return (
        <div className="section section-rose-img">
            <div className="black-content">
                <div className="medium-container">
                    <div className="black-content-inner">
                        <div className="black-content-photo">
                            <img src={props.image} alt=""/>
                        </div>
                        <div className="black-content-text">
                            <div className="black-content-text-inner">
                                <div className="black-content-text-title">
                                    <h2>{props.title}</h2>
                                </div>
                                <div className="black-content-text-detail">
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