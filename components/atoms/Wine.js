

const Wine = (props) => {
    return (
        <>
                {props.props.map((menuItem, index) => {
                    return<div className={props.className.accordionItemContainer} key={index}>
                        <p className={props.className.accordionItem}>{menuItem.item}</p>
                        <div className={props.className.accordionPriceContainer}>
                            <p className={props.className.accordionItemPrice}>GLASS <span className={props.className.priceNumber}>{menuItem.price1}</span></p>
                            <p className={props.className.accordionItemPrice}>BOTTLE <span className={props.className.priceNumber}>{menuItem.price2}</span></p>
                        </div>
                    </div>
                })}
        </>
    )
}
export default Wine;