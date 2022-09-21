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
    const [nestOpen, setNestOpen] = useState('');
    const nestToggle = (id) => {
        if (nestOpen === id) {
            setNestOpen();
        } else {
            setNestOpen(id);
        }
    };

    return (
        <div className={props.className.menuEntry}>
                        <Accordion flush open={nestOpen} toggle={nestToggle} cssModule={props.moduleChange} className={props.className.accordion} >
                            <AccordionItem cssModule={props.className} className={props.className.accordion}>
                                <AccordionHeader targetId='1' cssModule={props.className} className={props.className.accordion}>SAKE</AccordionHeader>
                                <AccordionBody accordionId='1' cssModule={props.className} className={props.className.accordionBody}>
                                    <p className="text-white text-base">*Served Cold</p>
                                    {groupBy(props.props["Drinks"], "subcategory")["Sake"].map(
                                        (menuItem, index) => {
                                            if(menuItem.active)return (
                                                <div key={index}>
                                                    {menuItem.item == "Hana Peach" ? (
                                                        <div className={props.className.accordionItemContainer}>
                                                            <p>{menuItem.item.toUpperCase()}</p>
                                                            <div className={props.className.accordionPriceContainer}>
                                                                <p className={props.className.accordionItemPrice}>
                                                                    SMALL{" "}
                                                                    <span className={props.className.priceNumber}>
                                                                        {menuItem.price1}
                                                                    </span>
                                                                </p>
                                                                <p className={props.className.accordionItemPrice}>
                                                                    LARGE{" "}
                                                                    <span className={props.className.priceNumber}>
                                                                        {menuItem.price2}
                                                                    </span>
                                                                </p>
                                                                <p className={props.className.accordionItemPrice}>
                                                                    SMALL BOTTLE{" "}
                                                                    <span className={props.className.priceNumber}>
                                                                        {menuItem.price3}
                                                                    </span>
                                                                </p>
                                                                <p className={props.className.accordionItemPrice}>
                                                                    LARGE BOTTLE{" "}
                                                                    <span className={props.className.priceNumber}>
                                                                        {menuItem.price4}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className={props.className.accordionItemContainer}>
                                                            {menuItem.modifier ? (
                                                                <p className={props.className.accordionItem}>
                                                                    {menuItem.item.toUpperCase()}
                                                                </p>
                                                            ) : (
                                                                <p className={props.className.accordionItem}>
                                                                    {menuItem.item.toUpperCase()}
                                                                </p>
                                                            )}
                                                            <div className={props.className.accordionPriceContainer}>
                                                                <p className={props.className.accordionItemPrice}>
                                                                    SMALL{" "}
                                                                    <span className={props.className.priceNumber}>
                                                                        {menuItem.price1}
                                                                    </span>
                                                                </p>
                                                                {menuItem.price2 ? (
                                                                    <p className={props.className.accordionItemPrice}>
                                                                        LARGE{" "}
                                                                        <span className={props.className.priceNumber}>
                                                                            {menuItem.price2}
                                                                        </span>
                                                                    </p>
                                                                ) : (
                                                                    <></>
                                                                )}
                                                                <p className={props.className.accordionItemPrice}>
                                                                    BOTTLE{" "}
                                                                    <span className={props.className.priceNumber}>
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
                            <AccordionItem cssModule={props.className} className={props.className.accordion}>
                                <AccordionHeader targetId='2' cssModule={props.className} className={props.className.accordionHeader}>MAGARITA WINE-COCKTAIL</AccordionHeader>
                                <AccordionBody accordionId='2' cssModule={props.className} className={props.className.accordionBody}>
                                    <Wine props={groupBy(props.props["Drinks"], "subcategory")["Magarita Wine-Cocktail"]} className={props.className} />
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem cssModule={props.className} className={props.className.accordion}>
                                <AccordionHeader targetId='3' cssModule={props.className} className={props.className.accordionHeader}>WHITE WINE</AccordionHeader>
                                <AccordionBody accordionId='3' cssModule={props.className} className={props.className.accordionBody}>
                                    <Wine props={groupBy(props.props["Drinks"], "subcategory")["White Wine"]} className={props.className} />
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem cssModule={props.className} className={props.className.accordion}>
                                <AccordionHeader targetId='4' cssModule={props.className} className={props.className.accordionHeader}>RED WINE</AccordionHeader>
                                <AccordionBody accordionId='4' cssModule={props.className} className={props.className.accordionBody}>
                                    <Wine props={groupBy(props.props["Drinks"], "subcategory")["Red Wine"]} className={props.className} />
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem cssModule={props.className} className={props.className.accordion}>
                                <AccordionHeader targetId='5' cssModule={props.className} className={props.className.accordionHeader}>HOUSE WINE</AccordionHeader>
                                <AccordionBody accordionId='5' cssModule={props.className} className={props.className.accordionBody}>
                                    <Wine props={groupBy(props.props["Drinks"], "subcategory")["House Wine"]} className={props.className} />
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem cssModule={props.className} className={props.className.accordion}>
                                <AccordionHeader targetId='6' cssModule={props.className} className={props.className.accordionHeader}>BEER</AccordionHeader>
                                <AccordionBody accordionId='6' cssModule={props.className} className={props.className.accordionBody}>
                                    <div className={props.className.listContainer}>
                                        <div className={props.className.header}>
                                            <p className="pt-6">
                                                DRAFT BEER <span className={props.className.priceNumber}>{groupBy(groupBy(props.props["Drinks"], "subcategory")["Beer"],
                                            "thirdCategory")["Draft Beer"][0].price1}</span>
                                            </p>
                                        </div>
                                        <ul>
                                            {groupBy(groupBy(props.props["Drinks"], "subcategory")["Beer"],
                                            "thirdCategory")["Draft Beer"].map((menuItem, index) => {
                                                if(menuItem.active)return (
                                                    <li key={index} className={props.className.accordionItem}>
                                                        {menuItem.item}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                    <div className={props.className.listContainer}>
                                        <div className={props.className.header}>
                                            <p>
                                                BOTTLE BEER <span className={props.className.priceNumber}>{groupBy(groupBy(props.props["Drinks"], "subcategory")["Beer"],
                                            "thirdCategory")["Bottle Beer"][0].price1}</span>
                                            </p>
                                        </div>
                                        <ul>
                                            {groupBy(groupBy(props.props["Drinks"], "subcategory")["Beer"],
                                            "thirdCategory")["Bottle Beer"].map((menuItem, index) => {
                                                if(menuItem.active)return (
                                                    <li key={index}>
                                                        {menuItem.item}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem cssModule={props.className} className={props.className.accordion}>
                                <AccordionHeader targetId='7' cssModule={props.className} className={props.className.accordionHeader}>NON-ALCOHOLIC BEVERAGES</AccordionHeader>
                                <AccordionBody accordionId='7' cssModule={props.className} className={props.className.accordionBody}>
                                    <div className={props.className.listContainer}>
                                        <div className={props.className.header}>
                                            <p className="pt-6">
                                                SOFT DRINKS <span className={props.className.priceNumber}>3</span>
                                            </p>
                                        </div>
                                        <ul>
                                            {groupBy(groupBy(props.props["Drinks"], "subcategory")["Non-Alcholic Beverages"],
                                            "thirdCategory")["Soft Drinks"].map((menuItem, index) => {
                                                if(menuItem.active)return (
                                                    <li key={index}>
                                                        {menuItem.item}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                    <div className={props.className.listContainer}>
                                        <div className={props.className.header}>
                                            <p>
                                                HOT TEA <span className={props.className.priceNumber}>6</span>
                                            </p>
                                        </div>
                                        <ul>
                                            {groupBy(groupBy(props.props["Drinks"], "subcategory")["Non-Alcholic Beverages"],
                                            "thirdCategory")["Hot Tea"].map((menuItem, index) => {
                                                if(menuItem.active)return (
                                                    <li key={index} className={props.className.accordionItem}>
                                                        {menuItem.item}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                    <div className={props.className.listContainer}>
                                        <div className={props.className.header}>
                                            <p>
                                                THAI TEA{" "}
                                                <span className={props.className.priceNumber}>
                                                    {
                                                        groupBy(groupBy(props.props["Drinks"], "subcategory")["Non-Alcholic Beverages"],
                                                        "thirdCategory")["Thai Tea"][0].price1
                                                    }
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion>

        </div>
    )
}

export default Drinks;
