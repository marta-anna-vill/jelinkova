
const MassagesCard = (props) => {
    props = props.data
    return (
        <div className="massage-card-item">
            <div className="massage-card-item-content">
                <div className="massage-card-item-title h2">
                    {props.title}
                </div>
                <div className="massage-card-item-perex">
                    {props.perex}
                </div>
            </div>
            {
                props.gallery && (
                    <div className="massage-card-item-gallery">
                        {
                            props.gallery && props.gallery.map(image => {
                                return (
                                    <div className="massage-card-item-gallery-item">
                                        <img src={image} />
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}

export default MassagesCard;