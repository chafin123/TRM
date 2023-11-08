

const Wine = (props) => {
    return (
        <>
                {props.props.map((menuItem, index) => {
                    if(menuItem.active)return<div className={props.className.accordionItemContainer} key={index}>
                        <p className={props.className.accordionItem}>{menuItem.item.toUpperCase()}</p>
                        <div className={props.className.accordionPriceContainer}>
                            <p className={props.className.accordionItemPrice}>GLASS <span className={props.className.priceNumber}>{menuItem.price1}</span></p>
                            <p className={props.className.accordionItemPrice}>BOTTLE <span className={props.className.priceNumber}>{menuItem.price2}</span></p>
                        </div>
                            {menuItem.description && <p className={props.className.itemDescription}>{menuItem.description}</p>}
                    </div>
                })}
        </>
    )
}
export default Wine;