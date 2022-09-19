import styles from '../../styles/Drinks.module.css'
import { groupBy } from 'lodash'
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';
import { useState } from 'react';
import Wine from '../atoms/Wine.js'
const Drinks = (props = groupBy(props["Drinks"] ,"subcategory")) => {
    const [open, setOpen] = useState(0);
 
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
            // accordion number starts at 6 so they don't interfer with parent accordion
        // should find way to have dynamic based on accordions
    return (    
                <div className={styles.drinkContainer}>
                    <Accordion icon={false} className={styles.accordionGroup} open={open === 6} onClick={() => handleOpen(6)}>
                        <AccordionHeader className={styles.accordionHeader}><h2>SAKE</h2></AccordionHeader>
                            <AccordionBody className={styles.accordionBody}>
                            <p className="text-white text-base">*Served Cold</p>
                                {groupBy(props.props["Drinks"], "subcategory")["Sake"].map((menuItem, index) => {
                                    return (
                                        <div key={index}>
                                            {menuItem.item == "Hana Peach" ? 
                                                    <div className={styles.accordionItemContainer}>
                                                        <p className={styles.accordionItem}>*{menuItem.item}</p>
                                                        <div className={styles.accordionPriceContainer}>
                                                            <p className={styles.accordionItemPrice}>SMALL <span className={styles.priceNumber}>{menuItem.price1}</span></p>
                                                            <p className={styles.accordionItemPrice}>LARGE <span className={styles.priceNumber}>{menuItem.price2}</span></p>
                                                            <p className={styles.accordionItemPrice}>SMALL BOTTLE <span className={styles.priceNumber}>{menuItem.price3}</span></p>
                                                            <p className={styles.accordionItemPrice}>LARGE BOTTLE <span className={styles.priceNumber}>{menuItem.price4}</span></p>
                                                        </div>
                                                    </div>
                                                :
                                                    <div className={styles.accordionItemContainer}>
                                                        {menuItem.modifier ?
                                                        <p className={styles.accordionItem}>*{menuItem.item}</p>
                                                        :
                                                        <p className={styles.accordionItem}>{menuItem.item}</p>
                                                        }
                                                        <div className={styles.accordionPriceContainer}>
                                                            <p className={styles.accordionItemPrice}>SMALL <span className={styles.priceNumber}>{menuItem.price1}</span></p>
                                                            {menuItem.price2 ?
                                                            <p className={styles.accordionItemPrice}>LARGE <span className={styles.priceNumber}>{menuItem.price2}</span></p>
                                                            :
                                                            <></>
                                                            }
                                                            <p className={styles.accordionItemPrice}>BOTTLE <span className={styles.priceNumber}>{menuItem.price3}</span></p>
                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                    )
                                })}
                        </AccordionBody>
                </Accordion>
                <Accordion icon={false} className={styles.accordionGroup} open={open === 7} onClick={() => handleOpen(7)}>
                    <AccordionHeader className={styles.accordionHeader}><h2>MAGARITA WINE-COCKTAIL</h2></AccordionHeader>
                        <AccordionBody className={styles.accordionBody}>    
                            <Wine props={groupBy(props.props["Drinks"], "subcategory")["Magarita Wine-Cocktail"]} className={styles}/>
                        </AccordionBody>
                </Accordion>
                <Accordion icon={false} className={styles.accordionGroup} open={open === 8} onClick={() => handleOpen(8)}>
                    <AccordionHeader className={styles.accordionHeader}><h2>WHITE WINE</h2></AccordionHeader>
                        <AccordionBody className={styles.accordionBody}>    
                            <Wine props={groupBy(props.props["Drinks"], "subcategory")["White Wine"]} className={styles}/>
                        </AccordionBody>
                </Accordion>
                <Accordion icon={false} className={styles.accordionGroup} open={open === 9} onClick={() => handleOpen(9)}>
                    <AccordionHeader className={styles.accordionHeader}><h2>RED WINE</h2></AccordionHeader>
                        <AccordionBody className={styles.accordionBody}>    
                            <Wine props={groupBy(props.props["Drinks"], "subcategory")["Red Wine"]} className={styles}/>
                        </AccordionBody>
                </Accordion>
                <Accordion icon={false} className={styles.accordionGroup} open={open === 10} onClick={() => handleOpen(10)}>
                    <AccordionHeader className={styles.accordionHeader}><h2>HOUSE WINE</h2></AccordionHeader>
                        <AccordionBody className={styles.accordionBody}>    
                        <Wine props={groupBy(props.props["Drinks"], "subcategory")["House Wine"]} className={styles}/>
                        </AccordionBody>
                </Accordion>
                <Accordion icon={false} className={styles.accordionGroup} open={open === 11} onClick={() => handleOpen(11)}>
                <AccordionHeader className={styles.accordionHeader}><h2>BEER</h2></AccordionHeader>
                        <AccordionBody className={styles.accordionBody}>
                                <div className={styles.accordionItemContainer}>    
                                    <div className={styles.listContainer}>
                                        <div className={styles.header}>
                                            <h3>DRAFT BEER <span className={styles.priceNumber}>7</span></h3>
                                        </div>    
                                            <ul>    
                                                {groupBy(groupBy(props.props["Drinks"], "subcategory")["Beer"], "thirdCategory")["Draft Beer"].map((beer, index) => {
                                                    return (
                                                        <li key={index} className={styles.accordionItem}>{beer.item}</li>
                                                    )
                                                })}
                                            </ul>
                                    </div>
                                    <div className={styles.listContainer}>
                                        <div className={styles.header}>
                                            <h3>BOTTLE BEER <span className={styles.priceNumber}>7</span></h3>
                                        </div>    
                                            <ul>
                                                {groupBy(groupBy(props.props["Drinks"], "subcategory")["Beer"], "thirdCategory")["Bottle Beer"].map((beer, index) => {
                                                    return (
                                                        <li key={index} className={styles.accordionItem}>{beer.item}</li>
                                                    )
                                                })}
                                            </ul>
                                    </div>
                                </div>
                        </AccordionBody>
                    </Accordion>
                    <Accordion icon={false} className={styles.accordionGroup} open={open === 12} onClick={() => handleOpen(12)}>
                        <AccordionHeader className={styles.accordionHeader}><h2>NON-ACHOLIC BEVERAGES</h2></AccordionHeader>
                        <AccordionBody className={styles.accordionBody}>    
                            <div className={styles.accordionItemContainer} id={styles.nonAcholicBevarages}>
                                <div className={styles.listContainer}>
                                    <div className={styles.header}>       
                                        <h3>SOFT DRINKS <span className={styles.priceNumber}>3</span></h3>
                                    </div>
                                    <ul>
                                        {groupBy(groupBy(props.props["Drinks"], "subcategory")["Non-Alcholic Beverages"], "thirdCategory")["Soft Drinks"].map((drink, index) => {
                                            return (
                                                <li key={index} className={styles.accordionItem}>{drink.item}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className={styles.listContainer}>
                                    <div className={styles.header}>
                                        <h3>HOT TEA <span className={styles.priceNumber}>6</span></h3>
                                    </div>
                                    <ul>    
                                        {groupBy(groupBy(props.props["Drinks"], "subcategory")["Non-Alcholic Beverages"], "thirdCategory")["Hot Tea"].map((tea, index) => {
                                            return (
                                                <li key={index} className={styles.accordionItem}>{tea.item}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className={styles.listContainer}>
                                    <div className={styles.header}>
                                        <h3>THAI TEA <span className={styles.priceNumber}>{groupBy(groupBy(props.props["Drinks"], "subcategory")["Non-Alcholic Beverages"], "thirdCategory")["Thai Tea"][0].price1}</span></h3>
                                    </div>
                                </div>
                            </div>
                        </AccordionBody>
                    </Accordion>
                </div>
    )
}

export default Drinks