import { groupBy } from "lodash"
import Specials from "../atoms/Specials"
import Spicy from '../atoms/Spicy'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
import { useState } from 'react';

const Sushi = (props) => {
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
        <div className={props.className.menuEntry}>
                
                        <Accordion flush open={nestOpen} toggle={nestToggle} cssModule={props.moduleChange} className={props.className.accordion}>
                            <AccordionItem cssModule={props.moduleChange} className={props.className.accordion}>
                                <AccordionHeader targetId='1' cssModule={props.moduleChange} className={props.className.accordionHeader}>SUSHI ENTREES</AccordionHeader>
                                <AccordionBody accordionId='1' cssModule={props.moduleChange} className={props.className.accordionBody}>
                                    {groupBy(props.props["Sushi"], "subcategory")["Sushi Entrees"].map((menuItem, index) => {
                                        if (menuItem.active) return (
                                            <div
                                                className={props.className.accordionItemContainer}
                                                key={index}>
                                                <p>{menuItem.item.toUpperCase()} {menuItem.modifier ? <Spicy /> : ""} <span className={props.className.priceNumber}>{menuItem.price1}</span></p>
                                                <p className={props.className.itemDescription}>{menuItem.description}</p>
                                            </div>
                                        )
                                    })}
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem cssModule={props.moduleChange} className={props.className.accordion}>
                                <AccordionHeader targetId='2' cssModule={props.moduleChange} className={props.className.accordionHeader}>SUSHI BOWLS</AccordionHeader>
                                <AccordionBody accordionId='2' cssModule={props.moduleChange} className={props.className.accordionBody}>
                                    {groupBy(props.props["Sushi"], "subcategory")["Sushi Bowls"].map((menuItem, index) => {
                                        if (menuItem.active) return (
                                            <div
                                                className={props.className.accordionItemContainer}
                                                key={index}
                                            >
                                                <p>{menuItem.item.toUpperCase()} {menuItem.price2 ? "" : <span className={props.className.priceNumber}>{menuItem.price1}</span>}</p>
                                                {menuItem.price2 ?
                                                    <div className={props.className.accordionPriceContainer}>
                                                        <p>TUNA <span className={props.className.priceNumber}>{menuItem.price1}</span></p>
                                                        <p>SALMON <span className={props.className.priceNumber}>{menuItem.price2}</span></p>
                                                        <p>TUNA & SALMON <span className={props.className.priceNumber}>{menuItem.price3}</span></p>
                                                        <p>VEGETABLE <span className={props.className.priceNumber}>{menuItem.price4}</span></p>
                                                    </div>
                                                    :
                                                    ""
                                                }
                                                <p className={props.className.itemDescription}>{menuItem.description}</p>
                                            </div>
                                        )
                                    })}
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem cssModule={props.moduleChange} className={props.className.accordion}>
                                <AccordionHeader targetId='3' cssModule={props.moduleChange} className={props.className.accordionHeader}>SIGNATURE ROLLS</AccordionHeader>
                                <AccordionBody accordionId='3' cssModule={props.moduleChange} className={props.className.accordionBody}>
                                    <Specials props={groupBy(props.props["Sushi"], "subcategory")["Signature Rolls"]} className={props.className} />
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem cssModule={props.moduleChange} className={props.className.accordion}>
                                <AccordionHeader targetId='4' cssModule={props.moduleChange} className={props.className.accordionHeader}>HOUSE ROLLS</AccordionHeader>
                                <AccordionBody accordionId='4' cssModule={props.moduleChange} className={props.className.accordionBody}>
                                    <p>Served with white rice.</p>
                                    <p>*Served without white rice.</p>
                                    <Specials props={groupBy(props.props["Sushi"], "subcategory")["House Rolls"]} className={props.className} />
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem cssModule={props.moduleChange} className={props.className.accordion}>
                                <AccordionHeader targetId='5' cssModule={props.moduleChange} className={props.className.accordionHeader}>NIGIRI & SASHIMI</AccordionHeader>
                                <AccordionBody accordionId='5' cssModule={props.moduleChange} className={props.className.accordionBody}>
                                    <Specials props={groupBy(props.props["Sushi"], "subcategory")["Nigiri & Sashimi"]} className={props.className} />
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem cssModule={props.moduleChange}>
                                <AccordionHeader targetId='6' cssModule={props.moduleChange} className={props.className.accordionHeader} >A-LA CARTE</AccordionHeader>
                                <AccordionBody accordionId='6' cssModule={props.moduleChange} className={props.className.accordionBody}>
                                    {groupBy(props.props["Sushi"], "subcategory")["A-La Carte"].map((menuItem, index) => {
                                        if (menuItem.active) return (
                                            <div
                                                className={props.className.accordionItemContainer}
                                                key={index}
                                            >
                                                <p>{menuItem.item.toUpperCase()} {menuItem.modifier ? <Spicy /> : ""} <span className={props.className.priceNumber}>{menuItem.price1}</span></p>
                                                {menuItem.description ?
                                                    <p className={props.className.itemDescription}>{menuItem.description}</p>
                                                    :
                                                    ""
                                                }
                                            </div>
                                        )
                                    })}
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion>

        </div>
    )
}

export default Sushi