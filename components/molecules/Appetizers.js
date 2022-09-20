import styles from "../../styles/Appetizers.module.css";
import { groupBy } from "lodash";

const Appetizers = (props) => {
  return (
    <div className="w-6/12 mx-auto">
      <div className={`${styles.accordion} hs-accordion-group`}>
        <div
          className={`${styles.accordionHeader} text-xl hs-accordion active`}
          id="hs-basic-nested-heading-one"
        >
          <button
            className={` hs-accordion-toggle `}
            aria-controls="hs-basic-nested-collapse-one"
          >
            <h2>APPETIZERS</h2>
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
                  APPETIZERS
                </button>
                <div
                  id="hs-basic-nested-sub-collapse-one"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-nested-sub-heading-one"
                >
                  {groupBy(props.props["Appetizers"], "subcategory")[
                    "Appetizers"
                  ].map((menuItem, index) => {
                    return (
                      <div
                        className={styles.accordionItemContainer}
                        key={index}
                      >
                        <p className={styles.accordionItem}>
                          {menuItem.item.toUpperCase()}{" "}
                          <span className={styles.priceNumber}>
                            {menuItem.price1}
                          </span>
                        </p>
                        {menuItem.description ? (
                          <p className="text-sm">{menuItem.description}</p>
                        ) : (
                          <div />
                        )}
                      </div>
                    );
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
                  SUSHI APPETIZERS
                </button>
                <div
                  id="hs-basic-nested-sub-collapse-two"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-nested-sub-heading-two"
                >
                  {groupBy(props.props["Appetizers"], "subcategory")[
                    "Sushi Appertizers"
                  ].map((menuItem, index) => {
                    return (
                      <div
                        className={styles.accordionItemContainer}
                        key={index}
                      >
                        {menuItem.price2 ? (
                          <div>
                            <p className={styles.accordionItem}>
                              {menuItem.item.toUpperCase()}
                            </p>
                            <div className={styles.accordionPriceContainer}>
                              <p className={styles.accordionItemPrice}>
                                VEGATABLE{" "}
                                <span className={styles.priceNumber}>
                                  {menuItem.price1}
                                </span>
                              </p>
                              <p className={styles.accordionItemPrice}>
                                SHRIMP{" "}
                                <span className={styles.priceNumber}>
                                  {menuItem.price2}
                                </span>
                              </p>
                              <p className={styles.accordionItemPrice}>
                                TUNA/SALMON{" "}
                                <span className={styles.priceNumber}>
                                  {menuItem.price3}
                                </span>
                              </p>
                            </div>
                          </div>
                        ) : (
                          <p className={styles.accordionItem}>
                            {menuItem.item.toUpperCase()}
                            {menuItem.modifier ? " !" : ""}{" "}
                            <span className={styles.priceNumber}>
                              {menuItem.price1}
                            </span>
                          </p>
                        )}
                        {menuItem.description ? (
                          <p className="text-sm">{menuItem.description}</p>
                        ) : (
                          <div />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appetizers;
