const Specials = (props) => {
    return (
        <>
                {props.props.map((menuItem, index) => {
                    if(menuItem.active)return<div className={props.className.accordionItemContainer} key={index}>
                        <p className={props.className.accordionItem}>{menuItem.item.toUpperCase()}{menuItem.modifier ? " !" : ""} <span className={props.className.priceNumber}>{menuItem.price1}</span></p>
                        {menuItem.description ?
                        <p className="text-xs">{menuItem.description} </p>
                        :
                        ""
                        }
                    </div>
                })}
        </>
    )
}
export default Specials;