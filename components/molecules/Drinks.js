import styles from '../../styles/Drinks.module.css'
import { groupBy } from 'lodash'
import Wine from '../atoms/Wine.js'
const Drinks = (props) => {
    const beerGroup = groupBy(props.props["Beer"], "thirdCategory");
    const nonAlcholicGroup = groupBy(props.props["Non-Alcholic Beverages"], "thirdCategory");
    const wineCocktailsGroup = props.props["Magarita Wine-Cocktail"];
    const whiteWineGroup = props.props["White Wine"];
    const redWineGroup = props.props["Red Wine"];
    const houseWineGroup = props.props["House Wine"];
    const sakeGroup = props.props["Sake"]
    return (
                <div className={styles.drinkContainer}>
                    <div className={styles.accordionGroup}>
                        <h2 className={styles.accordionHeader}>Sake</h2>
                        <div className={styles.accordionBody}>
                            {sakeGroup.map((menuItem, index) => {
                                return (
                                    <div key={index}>
                                        {menuItem.item == "Gekkeikan Plum Wine" ? 
                                            <div className={styles.accordionItemContainer}>
                                                <p className={styles.accordionItem}>*{menuItem.item}</p>
                                                <div className={styles.accordionPriceContainer}>
                                                    <p className={styles.accordionItemPrice}>Small <span className={styles.priceNumber}>{menuItem.price1}</span></p>
                                                    <p className={styles.accordionItemPrice}>Bottle <span className={styles.priceNumber}>{menuItem.price3}</span></p>
                                                </div>
                                            </div>
                                            :
                                            menuItem.item == "Hana Peach" ? 
                                                <div className={styles.accordionItemContainer}>
                                                    <p>*{menuItem.item}</p>
                                                    <div className={styles.accordionPriceContainer}>
                                                        <p className={styles.accordionItemPrice}>Small <span className={styles.priceNumber}>{menuItem.price1}</span></p>
                                                        <p className={styles.accordionItemPrice}>Large <span className={styles.priceNumber}>{menuItem.price2}</span></p>
                                                        <p className={styles.accordionItemPrice}>Small Bottle <span className={styles.priceNumber}>{menuItem.price3}</span></p>
                                                        <p className={styles.accordionItemPrice}>Large Bottle <span className={styles.priceNumber}>{menuItem.price4}</span></p>
                                                    </div>
                                                </div>
                                            :
                                                <div className={styles.accordionItemContainer}>
                                                    <p>{menuItem.item}</p>
                                                    <div className={styles.accordionPriceContainer}>
                                                        <p className={styles.accordionItemPrice}>Small <span className={styles.priceNumber}>{menuItem.price1}</span></p>
                                                        {menuItem.price2 ?
                                                        <p className={styles.accordionItemPrice}>Large <span className={styles.priceNumber}>{menuItem.price2}</span></p>
                                                        :
                                                        <></>
                                                        }
                                                        <p className={styles.accordionItemPrice}>Bottle <span className={styles.priceNumber}>{menuItem.price3}</span></p>
                                                    </div>
                                                </div>
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <Wine props={wineCocktailsGroup} className={styles}/>
                    <Wine props={whiteWineGroup} className={styles}/>
                    <Wine props={redWineGroup} className={styles}/>
                    <Wine props={houseWineGroup} className={styles}/>
                    <div className={styles.accordionGroup}>
                        <h2>Beer</h2>
                        <div className={styles.accordionBody}>
                            <h3>Draft Beer <span className={styles.priceNumber}>7</span></h3>
                                <div>    
                                    {beerGroup["Draft Beer"].map((beer, index) => {
                                        return (
                                            <p key={index} className={styles.accordionItem}>{beer.item}</p>
                                        )
                                    })}
                                </div>
                            <h3>Bottle Beer <span className={styles.priceNumber}>7</span></h3>
                                <div>
                                    {beerGroup["Bottle Beer"].map((beer, index) => {
                                        return (
                                            <p key={index} className={styles.accordionItem}>{beer.item}</p>
                                        )
                                    })}
                                </div>
                        </div>
                    </div>
                    <div className={styles.accordionGroup}>
                        <h2>Soft Drinks <span className={styles.priceNumber}>3</span></h2>
                        <div className={styles.accordionBody}>    
                            <div>
                                {nonAlcholicGroup["Soft Drinks"].map((drink, index) => {
                                    return (
                                        <p key={index} className={styles.accordionItem}>{drink.item}</p>
                                    )
                                })}
                            </div>
                            <h2>Hot Tea <span className={styles.priceNumber}>6</span></h2>
                            <div>
                                {nonAlcholicGroup["Hot Tea"].map((tea, index) => {
                                    return (
                                        <p key={index} className={styles.accordionItem}>{tea.item}</p>
                                    )
                                })}
                            </div>
                            <h2>Thai Tea <span className={styles.priceNumber}>{nonAlcholicGroup["Thai Tea"][0].price1}</span></h2>
                            </div>
                        </div>
                </div>
    )
}

export default Drinks