

const Wine = (props) => {
    return (
        <div className={props.className.accordionGroup}>
            <h2 className={props.className.accordionGroup}>{props.props[0].subcategory}</h2>
            <div className={props.className.accordionBody}>    
                {props.props.map((menuItem, index) => {
                    return<div key={index}>
                        <p className={props.className.accordionItem}>{menuItem.item}</p>
                        <div>
                            <p className={props.className.accordionItemPrice}>Glass <span className={props.className.priceNumber}>{menuItem.price1}</span></p>
                            <p className={props.className.accordionItemPrice}>Bottle <span className={props.className.priceNumber}>{menuItem.price2}</span></p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
export default Wine;