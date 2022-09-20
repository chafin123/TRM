import styles from '../../styles/Entrees.module.css'
import { groupBy } from 'lodash'
import Specials from './../atoms/Specials';

const Entrees = (props) => {
    return (
<div className={props.className}>
      <div className={`${styles.accordion} hs-accordion-group hs-collapse-close`}>
        <div
          className={`${styles.accordionHeader} text-xl hs-accordion active`}
          id="hs-basic-nested-heading-one"
        >
          <button
            className={` hs-accordion-toggle `}
            aria-controls="hs-basic-nested-collapse-one"
          >
            <h2>ENTREES</h2>
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
                  SOUPS
                </button>
                <div
                  id="hs-basic-nested-sub-collapse-one"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-nested-sub-heading-one"
                >
                  {groupBy(props.props["Entrees"] ,"subcategory")["Soups"].map((menuItem, index) => {
                    if(menuItem.active)return (
                        <div 
                            className={styles.accordionItemContainer}
                            key={index}>
                            <p>{menuItem.item.toUpperCase()}</p>
                            <div className={styles.accordionPriceContainer}>
                                <p>SMALL <span className={styles.priceNumber}>{menuItem.price1}</span></p>
                                <p>LARGE <span className={styles.priceNumber}>{menuItem.price2}</span></p>
                            </div>
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
                  SALADS
                </button>
                <div
                  id="hs-basic-nested-sub-collapse-two"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-nested-sub-heading-two"
                >
                  {groupBy(props.props["Entrees"],"subcategory")["Salads"].map((menuItem, index) => {
                    if(menuItem.active)return (
                        <div 
                            className={styles.accordionItemContainer}
                            key={index}
                            >
                            <p>{menuItem.item.toUpperCase()} <span className={styles.priceNumber}>{menuItem.price1}</span></p>
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
                  VEGETARIAN
                </button>
                <div
                  id="hs-basic-nested-sub-collapse-three"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-nested-sub-heading-three"
                >
                  {groupBy(props.props["Entrees"],"subcategory")["Vegetarian"].map((menuItem, index) => {
                    if(menuItem.active)return (
                        <div
                            className={styles.accordionItemContainer}
                            key={index}
                        >
                        <p>{menuItem.item} {menuItem.modifier ? "!" : ""} <span className={styles.priceNumber}>{menuItem.price1}</span></p>
                        <p>{menuItem.description}</p>
                        </div>
                    )
                  })}
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
                  CLASSICS
                </button>
                <div
                  id="hs-basic-nested-sub-collapse-four"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-nested-sub-heading-four"
                >
                <p>Served with white rice.</p>
                <p>*Served without white rice.</p>
                {groupBy(props.props["Entrees"], "subcategory")["Classics"].map((menuItem, index) => {
                    if(menuItem.active) return (
                        <div
                            className={styles.accordionItemContainer}
                            key={index}
                            >
                            <p>{menuItem.item.toUpperCase()}{menuItem.modifier ? " !" : ""} {menuItem.price2 ? "" : <span className={styles.priceNumber}>{menuItem.price1}</span>}</p>
                            {menuItem.price2 ? 
                                menuItem.price3 ?
                            <div className={styles.accordionPriceContaainer}>
                                <p>VEGETABLE <span className={styles.priceNumber}>{menuItem.price1}</span></p>
                                <p>CHICKEN <span className={styles.priceNumber}>{menuItem.price2}</span></p>
                                <p>BEEF <span className={styles.priceNumber}>{menuItem.price3}</span></p>
                                <p>SHRIMP <span className={styles.priceNumber}>{menuItem.price4}</span></p>
                                <p>TOFU <span className={styles.priceNumber}>{menuItem.price5}</span></p>
                                <p>HOUSE <span className={styles.priceNumber}>{menuItem.price6}</span></p>
                            </div>
                                :
                            <div className={styles.accordionPriceContaainer}>
                                <p>CHICKEN <span className={styles.priceNumber}>{menuItem.price1}</span></p>
                                <p>SHRIMP <span className={styles.priceNumber}>{menuItem.price2}</span></p>
                            </div>
                            : ""}
                        </div>
                    )
                  })}
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
                  SIAM
                </button>
                <div
                  id="hs-basic-nested-sub-collapse-five"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-nested-sub-heading-five"
                >
                <p>Served with rice.</p>
                <p>*Served without rice.</p>
                {groupBy(props.props['Entrees'], "subcategory")["Siam"].map((menuItem, index) => {
                    if(menuItem.active) return(
                        <div
                            className={styles.accordionItemContainer}
                            key={index}
                        >
                            <p>{menuItem.item.toUpperCase()}{menuItem.modifier ? " !" : ""}{menuItem.price2 ? "" : <span className={styles.priceNumber}>{menuItem.price1}</span>}</p>
                            {menuItem.price2 ? 
                                <div className={styles.accordionPriceContaainer}>
                                    <p>CHICKEN <span className={styles.priceNumber}>{menuItem.price1}</span></p>
                                    <p>BEEF <span className={styles.priceNumber}>{menuItem.price2}</span></p>
                                    <p>PRAWNS <span className={styles.priceNumber}>{menuItem.price3}</span></p>
                                </div>
                                : ""
                            }
                            <p className='text-xs'>{menuItem.description}</p>
                        </div>
                    )
                })}
                </div>
              </div>
              <div
                className={`${styles.accordionHeader} ${styles.subHeader} hs-accordion `}
                id="hs-basic-nested-sub-heading-six"
              >
                <button
                  className="hs-accordion-toggle"
                  aria-controls="hs-basic-nested-sub-collapse-six"
                >
                  HOUSE SPECIALS
                </button>
                <div
                  id="hs-basic-nested-sub-collapse-six"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-nested-sub-heading-six"
                >
                  <Specials props={groupBy(props.props["Entrees"], "subcategory")["House Specials"]} className={styles}/>
                </div>
              </div>
              <div
                className={`${styles.accordionHeader} ${styles.subHeader} hs-accordion `}
                id="hs-basic-nested-sub-heading-seven"
              >
                <button
                  className="hs-accordion-toggle"
                  aria-controls="hs-basic-nested-sub-collapse-seven"
                >
                  LUNCH SPECIALS
                </button>
                <div
                  id="hs-basic-nested-sub-collapse-seven"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-nested-sub-heading-seven"
                >
                    <Specials props={groupBy(props.props["Entrees"], "subcategory")["Lunch Specials"]} className={styles}/>

                </div>
              </div>
              <div
                className={`${styles.accordionHeader} ${styles.subHeader} hs-accordion `}
                id="hs-basic-nested-sub-heading-eight"
              >
                <button
                  className="hs-accordion-toggle"
                  aria-controls="hs-basic-nested-sub-collapse-eight"
                >
                  DINNER SPECIALS
                </button>
                <div
                  id="hs-basic-nested-sub-collapse-eight"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-nested-sub-heading-eight"
                >
                    <Specials props={groupBy(props.props["Entrees"], "subcategory")["Dinner Specials"]} className={styles}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Entrees