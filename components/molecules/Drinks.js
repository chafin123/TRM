import styles from '../../styles/Drinks.module.css'
import { groupBy } from 'lodash'
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';
import { useState } from 'react';
import Wine from '../atoms/Wine.js'
const Drinks = (props) => {
    const beerGroup = groupBy(props.props["Beer"], "thirdCategory");
    const nonAlcholicGroup = groupBy(props.props["Non-Alcholic Beverages"], "thirdCategory");
    const wineCocktailsGroup = props.props["Magarita Wine-Cocktail"];
    const whiteWineGroup = props.props["White Wine"];
    const redWineGroup = props.props["Red Wine"];
    const houseWineGroup = props.props["House Wine"];
    const sakeGroup = props.props["Sake"]

    const [open, setOpen] = useState(0);
 
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    return (
                <div className={styles.drinkContainer}>
                <Accordion icon={false} className={styles.accordionGroup} open={open === 1} onClick={() => handleOpen(1)}>
                        <AccordionHeader className={styles.accordionHeader}><p>Sake</p></AccordionHeader>
                       <AccordionBody class={styles.accordionBody}>
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
                        </AccordionBody>
                </Accordion>
                <Accordion icon={false} className={styles.accordionGroup} open={open === 2} onClick={() => handleOpen(2)}>
                    <AccordionHeader className={styles.accordionHeader}><p>Magarita Wine-Cocktail</p></AccordionHeader>
                        <AccordionBody>    
                            <Wine props={wineCocktailsGroup} className={styles}/>
                        </AccordionBody>
                </Accordion>
                <Accordion icon={false} className={styles.accordionGroup} open={open === 3} onClick={() => handleOpen(3)}>
                    <AccordionHeader className={styles.accordionHeader}><p>White Wine</p></AccordionHeader>
                        <AccordionBody>    
                            <Wine props={whiteWineGroup} className={styles}/>
                        </AccordionBody>
                </Accordion>
                <Accordion icon={false} className={styles.accordionGroup} open={open === 4} onClick={() => handleOpen(4)}>
                    <AccordionHeader className={styles.accordionHeader}><p>Red Wine</p></AccordionHeader>
                        <AccordionBody>    
                            <Wine props={redWineGroup} className={styles}/>
                        </AccordionBody>
                </Accordion>
                <Accordion icon={false} className={styles.accordionGroup} open={open === 5} onClick={() => handleOpen(5)}>
                    <AccordionHeader className={styles.accordionHeader}><p>House Wine</p></AccordionHeader>
                        <AccordionBody>    
                        <Wine props={houseWineGroup} className={styles}/>
                        </AccordionBody>
                </Accordion>
                <Accordion icon={false} className={styles.accordionGroup} open={open === 6} onClick={() => handleOpen(6)}>
                <AccordionHeader className={styles.accordionHeader}><p>Beer</p></AccordionHeader>
                        <AccordionBody className={styles.accordionBody}>
                                <div className={styles.accordionItemContainer} id={styles.beer}>    
                                    <div className={styles.draftBeerContainer}>    
                                        <h3>Draft Beer <span className={styles.priceNumber}>7</span></h3>
                                            <div className={styles.draftBeerItemContainer}>    
                                                {beerGroup["Draft Beer"].map((beer, index) => {
                                                    return (
                                                        <p key={index} className={styles.accordionItem}>{beer.item}</p>
                                                    )
                                                })}
                                            </div>
                                    </div>
                                    <div className={styles.bottleBeerContainer}>
                                        <h3>Bottle Beer <span className={styles.priceNumber}>7</span></h3>
                                            <div className={styles.bottleBeerItemContainer}>
                                                {beerGroup["Bottle Beer"].map((beer, index) => {
                                                    return (
                                                        <p key={index} className={styles.accordionItem}>{beer.item}</p>
                                                    )
                                                })}
                                            </div>
                                    </div>
                                </div>
                        </AccordionBody>
                    </Accordion>
                    <Accordion icon={false} className={styles.accordionGroup} open={open === 7} onClick={() => handleOpen(7)}>
                        <AccordionHeader className={styles.accordionHeader}><p>Non-Acholic Beverages</p></AccordionHeader>
                        <AccordionBody className={styles.accordionBody}>    
                            <div className={styles.accordionItemContainer} id={styles.nonAcholicBevarages}>
                                <div className={styles.softDrinksContainer}>
                                    <h2>Soft Drinks <span className={styles.priceNumber}>3</span></h2>
                                        {nonAlcholicGroup["Soft Drinks"].map((drink, index) => {
                                            return (
                                                <p key={index} className={styles.accordionItem}>{drink.item}</p>
                                            )
                                        })}
                                </div>
                                <div className={styles.hotTeaContainer}>
                                    <h2>Hot Tea <span className={styles.priceNumber}>6</span></h2>
                                        {nonAlcholicGroup["Hot Tea"].map((tea, index) => {
                                            return (
                                                <p key={index} className={styles.accordionItem}>{tea.item}</p>
                                            )
                                        })}
                                </div>
                                <div className={styles.thaiTeaContainer}>
                                    <h2>Thai Tea <span className={styles.priceNumber}>{nonAlcholicGroup["Thai Tea"][0].price1}</span></h2>
                                </div>
                            </div>
                        </AccordionBody>
                    </Accordion>
                </div>
    )
}

export default Drinks