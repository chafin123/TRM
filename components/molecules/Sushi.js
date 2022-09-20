import { groupBy } from "lodash"
import styles from '../../styles/Sushi.module.css'
import Specials from "../atoms/Specials"


const Sushi = (props) => {
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
                <h2>SUSHI</h2>
            </button>
            <div
                id="hs-basic-nested-collapse-one"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-nested-heading-one"
            >
                <div className={`${styles.accordion} hs-accordion-group`}>
                <div
                    className={`${styles.accordionHeader} ${styles.subHeader} hs-accordion active`}
                    id="hs-basic-nested-sub-heading-one"
                >
                    <button
                    className="hs-accordion-toggle"
                    aria-controls="hs-basic-nested-sub-collapse-one"
                    >
                    SUSHI ENTREES
                    </button>
                    <div
                    id="hs-basic-nested-sub-collapse-one"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-nested-sub-heading-one"
                    >
                    {groupBy(props.props["Sushi"] ,"subcategory")["Sushi Entrees"].map((menuItem, index) => {
                        if(menuItem.active)return (
                            <div 
                                className={styles.accordionItemContainer}
                                key={index}>
                                <p>{menuItem.item.toUpperCase()} {menuItem.modifier ? " !" : ""} <span className={styles.priceNumber}>{menuItem.price1}</span></p>
                                <p className="text-xs">{menuItem.description}</p>
                            </div>
                        )
                    })}
                    </div>
                </div>

                <div
                    className={`${styles.accordionHeader} ${styles.subHeader} hs-accordion `}
                    id="hs-basic-nested-sub-heading-two"
                >
                    <button
                    className="hs-accordion-toggle"
                    aria-controls="hs-basic-nested-sub-collapse-two"
                    >
                    SUSHI BOWLS
                    </button>
                    <div
                    id="hs-basic-nested-sub-collapse-two"
                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-nested-sub-heading-two"
                    >
                    {groupBy(props.props["Sushi"],"subcategory")["Sushi Bowls"].map((menuItem, index) => {
                        if(menuItem.active)return (
                            <div 
                                className={styles.accordionItemContainer}
                                key={index}
                                >
                                <p>{menuItem.item.toUpperCase()} {menuItem.price2 ? "" : <span className={styles.priceNumber}>{menuItem.price1}</span>}</p>
                                {menuItem.Price2 ?
                                <div>
                                    <p>TUNA <span className={styles.priceNumber}>{menuItem.Price1}</span></p>
                                    <p>SALMON <span className={styles.priceNumber}>{menuItem.Price2}</span></p>
                                    <p>TUNA & SALMON <span className={styles.priceNumber}>{menuItem.Price3}</span></p>
                                    <p>VEGETABLE <span className={styles.priceNumber}>{menuItem.Price4}</span></p>
                                </div>    
                                :
                                ""
                                }
                                <p className="text-xs">{menuItem.description}</p>
                            </div>
                        )
                    })}
                    </div>
                </div>
                <div
                    className={`${styles.accordionHeader} ${styles.subHeader} hs-accordion `}
                    id="hs-basic-nested-sub-heading-three"
                >
                    <button
                    className="hs-accordion-toggle"
                    aria-controls="hs-basic-nested-sub-collapse-three"
                    >
                    SIGNATURE ROLLS
                    </button>
                    <div
                    id="hs-basic-nested-sub-collapse-three"
                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-nested-sub-heading-three"
                    >
                    <Specials props={groupBy(props.props["Sushi"],"subcategory")["Signature Rolls"]} className={styles}/>
                    </div>
                </div>
                <div
                    className={`${styles.accordionHeader} ${styles.subHeader} hs-accordion `}
                    id="hs-basic-nested-sub-heading-four"
                >
                    <button
                    className="hs-accordion-toggle"
                    aria-controls="hs-basic-nested-sub-collapse-four"
                    >
                    HOUSE ROLLS
                    </button>
                    <div
                    id="hs-basic-nested-sub-collapse-four"
                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-nested-sub-heading-four"
                    >
                    <p>Served with white rice.</p>
                    <p>*Served without white rice.</p>
                    <Specials props={groupBy(props.props["Sushi"],"subcategory")["House Rolls"]} className={styles}/>

                    </div>
                </div>
                <div
                    className={`${styles.accordionHeader} ${styles.subHeader} hs-accordion `}
                    id="hs-basic-nested-sub-heading-five"
                >
                    <button
                    className="hs-accordion-toggle"
                    aria-controls="hs-basic-nested-sub-collapse-five"
                    >
                    NIGIRI & SASHIMI
                    </button>
                    <div
                    id="hs-basic-nested-sub-collapse-five"
                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-nested-sub-heading-five"
                    >
                    <Specials props={groupBy(props.props["Sushi"],"subcategory")["Nigiri & Sashimi"]} className={styles}/>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Sushi