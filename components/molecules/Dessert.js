import Spicy from '../atoms/Spicy'
import { groupBy } from 'lodash'
const Dessert = (props) => {
    return (
        <div className={props.className.menuEntry}>
                        {groupBy(props.props, "category")["Dessert"].map((menuItem, index) => {
                            if (menuItem.active) return (
                                <div
                                    className={props.className.accordionItemContainer}
                                    key={index}
                                >
                                    <p>{menuItem.item.toUpperCase()} {menuItem.modifier && <Spicy />} <span className={props.className.priceNumber}>{menuItem.price1}</span></p>
                                    {menuItem.description &&
                                        <p className={props.className.itemDescription}>{menuItem.description}</p>
                                    }
                                </div>
                            )
                        })}
        </div>
    )
}

export default Dessert
