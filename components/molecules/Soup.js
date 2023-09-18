import { groupBy } from "lodash";

const Soup = (props) => {
    return (
        <div className={props.className.menuEntry}>
            <div className={props.className.menuSectionTitle}>
                <h3>Soup</h3>
            </div>
            <div className={props.className.menuCatergoryContainer}>
        {groupBy(props.props,"category")["Soup"].map(
            (menuItem, index) => {
                if(menuItem.active)return (
                        <div key={index} className={props.className.menuItemContainer}>
                            <p className={props.className.itemText}>{menuItem.item}<span className={props.className.priceNumber}> {menuItem.price1}</span><span className={props.className.priceNumber}> | {menuItem.price2}</span></p>
                            {menuItem.description && <p className={props.className.itemDescription}>{menuItem.description}</p> }
                        </div>
                );
            }
        )}
            </div>
        </div>
    )
}

export default Soup;
