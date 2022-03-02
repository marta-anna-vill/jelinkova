export const Benefit = (props) => {
    return (
        <div class="medium-container">
            <div class="benefit-container">
                
                {props.data.map((item, index) => {
                    return(
                        <div class={'benefit-item ' + (item.reverse ? 'reverse-item' : '')}>
                            <div class={'benefit-item-content ' + item.class}>
                                <div class="benefit-item-content-title">
                                    {item.title}
                                </div>
                                <div class="benefit-item-content-text">
                                    {item.perex}
                                </div>
                            </div>
                            <div class="benefit-item-photo">
                                <img src={item.image} alt=""/>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}