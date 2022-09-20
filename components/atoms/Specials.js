import Spicy from './Spicy';
const Specials = (props) => {
    return (
        <>
                {props.props.map((menuItem, index) => {
                    if(menuItem.active)return<div className={props.className.accordionItemContainer} key={index}>
                        <p>{menuItem.item.toUpperCase()} {menuItem.modifier ? <Spicy /> : ""} <span className={props.className.priceNumber}>{menuItem.price1}</span></p>
                        {menuItem.description ?
                        <p className={props.className.itemDescription}>{menuItem.description} </p>
                        :
                        ""
                        }
                    </div>
                })}
        </>
    )
}
export default Specials;