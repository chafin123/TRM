import { groupBy } from "lodash"
import styles from '../../styles/AlaCarte.module.css'


const AlaCarte = (props) => {
    return (

    <div className={props.className}>
        <div className={`${styles.accordion} hs-accordion-group`}>
            <div
            className={`${styles.accordionHeader} text-xl hs-accordion active`}
            id="hs-basic-nested-heading-one"
            >
            <button
                className={` hs-accordion-toggle `}
                aria-controls="hs-basic-nested-collapse-one"
            >
                <h2>A-LA CARTE</h2>
            </button>
            <div
                id="hs-basic-nested-collapse-one"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-nested-heading-one"
            >
                {groupBy(props.props["Sushi"], "subcategory")["A-La Carte"].map((menuItem, index) => {
                    if(menuItem.active)return (
                        <div
                            className={styles.accordionItemContainer}
                            key={index}
                        >
                            <p>{menuItem.item.toUpperCase()} {menuItem.modifier ? " !" : ""} <span  className={styles.priceNumber}>{menuItem.price1}</span></p>
                            {menuItem.description ? 
                            <p>{menuItem.description}</p>
                            :
                            ""
                            }
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    </div>
    )
}

export default AlaCarte