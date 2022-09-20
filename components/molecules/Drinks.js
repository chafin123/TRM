import styles from "../../styles/Drinks.module.css";
import { groupBy } from "lodash";
import Wine from "../atoms/Wine.js";
const Drinks = (props = groupBy(props["Drinks"], "subcategory")) => {

 
  return (
    <div className="w-6/12 mx-auto">
        <div 
            className={`${styles.accordion} hs-accordion-group`}>
        <div
            className={`${styles.accordionHeader} text-xl hs-accordion active`}
            id="hs-basic-nested-heading-one"
        >
            <button
            className={` hs-accordion-toggle `}
            aria-controls="hs-basic-nested-collapse-one"
            >
            <h2>DRINKS</h2>
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
                    SAKE
                </button>
                <div
                    id="hs-basic-nested-sub-collapse-one"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-nested-sub-heading-one"
                >
                    <p className="text-white text-base">*Served Cold</p>
                    {groupBy(props.props["Drinks"], "subcategory")["Sake"].map(
                    (menuItem, index) => {
                        return (
                        <div key={index}>
                            {menuItem.item == "Hana Peach" ? (
                            <div className={styles.accordionItemContainer}>
                                <p>*{menuItem.item.toUpperCase()}</p>
                                <div className={styles.accordionPriceContainer}>
                                <p className={styles.accordionItemPrice}>
                                    SMALL{" "}
                                    <span className={styles.priceNumber}>
                                    {menuItem.price1}
                                    </span>
                                </p>
                                <p className={styles.accordionItemPrice}>
                                    LARGE{" "}
                                    <span className={styles.priceNumber}>
                                    {menuItem.price2}
                                    </span>
                                </p>
                                <p className={styles.accordionItemPrice}>
                                    SMALL BOTTLE{" "}
                                    <span className={styles.priceNumber}>
                                    {menuItem.price3}
                                    </span>
                                </p>
                                <p className={styles.accordionItemPrice}>
                                    LARGE BOTTLE{" "}
                                    <span className={styles.priceNumber}>
                                    {menuItem.price4}
                                    </span>
                                </p>
                                </div>
                            </div>
                            ) : (
                            <div className={styles.accordionItemContainer}>
                                {menuItem.modifier ? (
                                <p className={styles.accordionItem}>
                                    *{menuItem.item.toUpperCase()}
                                </p>
                                ) : (
                                <p className={styles.accordionItem}>
                                    {menuItem.item.toUpperCase()}
                                </p>
                                )}
                                <div className={styles.accordionPriceContainer}>
                                <p className={styles.accordionItemPrice}>
                                    SMALL{" "}
                                    <span className={styles.priceNumber}>
                                    {menuItem.price1}
                                    </span>
                                </p>
                                {menuItem.price2 ? (
                                    <p className={styles.accordionItemPrice}>
                                    LARGE{" "}
                                    <span className={styles.priceNumber}>
                                        {menuItem.price2}
                                    </span>
                                    </p>
                                ) : (
                                    <></>
                                )}
                                <p className={styles.accordionItemPrice}>
                                    BOTTLE{" "}
                                    <span className={styles.priceNumber}>
                                    {menuItem.price3}
                                    </span>
                                </p>
                                </div>
                            </div>
                            )}
                        </div>
                        );
                    }
                    )}
                    </div>
                </div>

                <div className={`${styles.accordionHeader} ${styles.subHeader} hs-accordion `} 
                id="hs-basic-nested-sub-heading-two">
                <button
                    className="hs-accordion-toggle"
                    aria-controls="hs-basic-nested-sub-collapse-two"
                >
                    MAGARITA WINE-COCKTAIL
                </button>
                <div
                    id="hs-basic-nested-sub-collapse-two"
                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-nested-sub-heading-two"
                >
                    <Wine
                    props={
                        groupBy(props.props["Drinks"], "subcategory")[
                        "Magarita Wine-Cocktail"
                        ]
                    }
                    className={styles}
                    />
                </div>
                </div>

                <div
                className={`${styles.accordionHeader} ${styles.subHeader} hs-accordion `}
                id="hs-basic-nested-sub-heading-three"
                >
                <button
                    className={`${styles.accordionHeader} hs-accordion-toggle`}
                    aria-controls="hs-basic-nested-sub-collapse-three"
                >
                    WHITE WINE
                </button>
                <div
                    id="hs-basic-nested-sub-collapse-four"
                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-nested-sub-heading-three"
                >
                    <Wine
                    props={
                        groupBy(props.props["Drinks"], "subcategory")["White Wine"]
                    }
                    className={styles}
                    />
                </div>
                </div>
                <div
                className={`${styles.accordionHeader} ${styles.subHeader} hs-accordion `}
                id="hs-basic-nested-sub-heading-four"
                >
                <button
                    className={`${styles.accordionHeader} hs-accordion-toggle`}
                    aria-controls="hs-basic-nested-sub-collapse-three"
                >
                    RED WINE
                </button>
                <div
                    id="hs-basic-nested-sub-collapse-five"
                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-nested-sub-heading-three"
                >
                    <Wine
                    props={
                        groupBy(props.props["Drinks"], "subcategory")["Red Wine"]
                    }
                    className={styles}
                    />
                </div>
                </div>
                <div
                className={`${styles.accordionHeader} ${styles.subHeader} hs-accordion `}
                id="hs-basic-nested-sub-heading-five"
                >
                <button
                    className={`${styles.accordionHeader} hs-accordion-toggle`}
                    aria-controls="hs-basic-nested-sub-collapse-three"
                >
                    HOUSE WINE
                </button>
                <div
                    id="hs-basic-nested-sub-collapse-six"
                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-nested-sub-heading-three"
                >
                    <Wine
                    props={
                        groupBy(props.props["Drinks"], "subcategory")["House Wine"]
                    }
                    className={styles}
                    />
                </div>
                </div>
                <div
                className={`${styles.accordionHeader} ${styles.subHeader} hs-accordion`}
                id="hs-basic-nested-sub-heading-six"
                >
                <button
                    className={`${styles.accordionHeader} hs-accordion-toggle`}
                    aria-controls="hs-basic-nested-sub-collapse-three"
                >
                    BEER
                </button>
                <div
                    id="hs-basic-nested-sub-collapse-seven"
                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-nested-sub-heading-seven"
                >
                    <div className={styles.listContainer}>
                    <div className={styles.header}>
                        <h3 className="pt-6">
                        DRAFT BEER <span className={styles.priceNumber}>7</span>
                        </h3>
                    </div>
                    <ul>
                        {groupBy(
                        groupBy(props.props["Drinks"], "subcategory")["Beer"],
                        "thirdCategory"
                        )["Draft Beer"].map((beer, index) => {
                        return (
                            <li key={index} className={styles.accordionItem}>
                            {beer.item}
                            </li>
                        );
                        })}
                    </ul>
                    </div>
                    <div className={styles.listContainer}>
                    <div className={styles.header}>
                        <h3>
                        BOTTLE BEER <span className={styles.priceNumber}>7</span>
                        </h3>
                    </div>
                    <ul>
                        {groupBy(
                        groupBy(props.props["Drinks"], "subcategory")["Beer"],
                        "thirdCategory"
                        )["Bottle Beer"].map((beer, index) => {
                        return (
                            <li key={index} className={styles.accordionItem}>
                            {beer.item}
                            </li>
                        );
                        })}
                    </ul>
                    </div>{" "}
                </div>
                </div>
                <div
                className={`${styles.accordionHeader} ${styles.subHeader} hs-accordion`}
                id="hs-basic-nested-sub-heading-eight"
                >
                <button
                    className={`${styles.accordionHeader} hs-accordion-toggle`}
                    aria-controls="hs-basic-nested-sub-collapse-three"
                >
                    NON-ALCOHOLIC BEVERAGES
                </button>
                <div
                    id="hs-basic-nested-sub-collapse-eight"
                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-nested-sub-heading-three"
                >
                    <div className={styles.listContainer}>
                    <div className={styles.header}>
                        <h3 className="pt-6">
                        SOFT DRINKS <span className={styles.priceNumber}>3</span>
                        </h3>
                    </div>
                    <ul>
                        {groupBy(
                        groupBy(props.props["Drinks"], "subcategory")[
                            "Non-Alcholic Beverages"
                        ],
                        "thirdCategory"
                        )["Soft Drinks"].map((drink, index) => {
                        return (
                            <li key={index} className={styles.accordionItem}>
                            {drink.item}
                            </li>
                        );
                        })}
                    </ul>
                    </div>
                    <div className={styles.listContainer}>
                    <div className={styles.header}>
                        <h3>
                        HOT TEA <span className={styles.priceNumber}>6</span>
                        </h3>
                    </div>
                    <ul>
                        {groupBy(
                        groupBy(props.props["Drinks"], "subcategory")[
                            "Non-Alcholic Beverages"
                        ],
                        "thirdCategory"
                        )["Hot Tea"].map((tea, index) => {
                        return (
                            <li key={index} className={styles.accordionItem}>
                            {tea.item}
                            </li>
                        );
                        })}
                    </ul>
                    </div>
                    <div className={styles.listContainer}>
                    <div className={styles.header}>
                        <h3>
                        THAI TEA{" "}
                        <span className={styles.priceNumber}>
                            {
                            groupBy(
                                groupBy(props.props["Drinks"], "subcategory")[
                                "Non-Alcholic Beverages"
                                ],
                                "thirdCategory"
                            )["Thai Tea"][0].price1
                            }
                        </span>
                        </h3>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Drinks;
