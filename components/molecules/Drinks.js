import styles from "../../styles/MenuItems.module.css";
import { groupBy } from "lodash";
import Wine from "../atoms/Wine.js";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
import { useState } from 'react'
const Drinks = (props = groupBy(props["Drinks"], "subcategory")) => {
    const [open, setOpen] = useState('');
    const [nestOpen, setNestOpen] = useState('');

    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };
    const nestToggle = (id) => {
        if (nestOpen === id) {
            setNestOpen();
        } else {
            setNestOpen(id);
        }
    };

    return (
        <div className={props.className}>
            <Accordion open={open} toggle={toggle} cssModule={styles} className={styles.accordion}>
                <AccordionItem cssModule={styles}>
                    <AccordionHeader cssModule={styles} className={styles.accordionHeader} targetId='1'>DRINKS</AccordionHeader>
                    <AccordionBody cssModule={styles} accordionId='1'>
                        <Accordion flush open={nestOpen} toggle={nestToggle} cssModule={styles} className={styles.accordion}>
                            <AccordionItem cssModule={styles} className={styles.accordion}>
                                <AccordionHeader targetId='1' cssModule={styles} className={styles.accordion}>SAKE</AccordionHeader>
                                <AccordionBody accordionId='1' cssModule={styles} className={styles.accordionBody}>
                                    <p className="text-white text-base">*Served Cold</p>
                                    {groupBy(props.props["Drinks"], "subcategory")["Sake"].map(
                                        (menuItem, index) => {
                                            if(menuItem.active)return (
                                                <div key={index}>
                                                    {menuItem.item == "Hana Peach" ? (
                                                        <div className={styles.accordionItemContainer}>
                                                            <p>{menuItem.item.toUpperCase()}</p>
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
                                                                    {menuItem.item.toUpperCase()}
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
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem cssModule={styles} className={styles.accordion}>
                                <AccordionHeader targetId='2' cssModule={styles} className={styles.accordionHeader}>MAGARITA WINE-COCKTAIL</AccordionHeader>
                                <AccordionBody accordionId='2' cssModule={styles} className={styles.accordionBody}>
                                    <Wine props={groupBy(props.props["Drinks"], "subcategory")["Magarita Wine-Cocktail"]} className={styles} />
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem cssModule={styles} className={styles.accordion}>
                                <AccordionHeader targetId='3' cssModule={styles} className={styles.accordionHeader}>WHITE WINE</AccordionHeader>
                                <AccordionBody accordionId='3' cssModule={styles} className={styles.accordionBody}>
                                    <Wine props={groupBy(props.props["Drinks"], "subcategory")["White Wine"]} className={styles} />
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem cssModule={styles} className={styles.accordion}>
                                <AccordionHeader targetId='4' cssModule={styles} className={styles.accordionHeader}>RED WINE</AccordionHeader>
                                <AccordionBody accordionId='4' cssModule={styles} className={styles.accordionBody}>
                                    <Wine props={groupBy(props.props["Drinks"], "subcategory")["Red Wine"]} className={styles} />
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem cssModule={styles} className={styles.accordion}>
                                <AccordionHeader targetId='5' cssModule={styles} className={styles.accordionHeader}>HOUSE WINE</AccordionHeader>
                                <AccordionBody accordionId='5' cssModule={styles} className={styles.accordionBody}>
                                    <Wine props={groupBy(props.props["Drinks"], "subcategory")["House Wine"]} className={styles} />
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem cssModule={styles} className={styles.accordion}>
                                <AccordionHeader targetId='6' cssModule={styles} className={styles.accordionHeader}>BEER</AccordionHeader>
                                <AccordionBody accordionId='6' cssModule={styles} className={styles.accordionBody}>
                                    <div className={styles.listContainer}>
                                        <div className={styles.header}>
                                            <h3 className="pt-6">
                                                DRAFT BEER <span className={styles.priceNumber}>7</span>
                                            </h3>
                                        </div>
                                        <ul>
                                            {groupBy(groupBy(props.props["Drinks"], "subcategory")["Beer"],
                                            "thirdCategory")["Draft Beer"].map((menuItem, index) => {
                                                if(menuItem.active)return (
                                                    <li key={index} className={styles.accordionItem}>
                                                        {menuItem.item}
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
                                            {groupBy(groupBy(props.props["Drinks"], "subcategory")["Beer"],
                                            "thirdCategory")["Bottle Beer"].map((menuItem, index) => {
                                                if(menuItem.active)return (
                                                    <li key={index} className={styles.accordionItem}>
                                                        {menuItem.item}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem cssModule={styles} className={styles.accordion}>
                                <AccordionHeader targetId='7' cssModule={styles} className={styles.accordionHeader}>NON-ALCOHOLIC BEVERAGES</AccordionHeader>
                                <AccordionBody accordionId='7' cssModule={styles} className={styles.accordionBody}>
                                    <div className={styles.listContainer}>
                                        <div className={styles.header}>
                                            <h3 className="pt-6">
                                                SOFT DRINKS <span className={styles.priceNumber}>3</span>
                                            </h3>
                                        </div>
                                        <ul>
                                            {groupBy(groupBy(props.props["Drinks"], "subcategory")["Non-Alcholic Beverages"],
                                            "thirdCategory")["Soft Drinks"].map((menuItem, index) => {
                                                if(menuItem.active)return (
                                                    <li key={index} className={styles.accordionItem}>
                                                        {menuItem.item}
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
                                            {groupBy(groupBy(props.props["Drinks"], "subcategory")["Non-Alcholic Beverages"],
                                            "thirdCategory")["Hot Tea"].map((menuItem, index) => {
                                                if(menuItem.active)return (
                                                    <li key={index} className={styles.accordionItem}>
                                                        {menuItem.item}
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
                                                        groupBy(groupBy(props.props["Drinks"], "subcategory")["Non-Alcholic Beverages"],
                                                        "thirdCategory")["Thai Tea"][0].price1
                                                    }
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Drinks;
