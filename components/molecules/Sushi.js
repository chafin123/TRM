import { groupBy } from "lodash"
import styles from '../../styles/MenuItems.module.css'
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
        <div className={props.className}>
            <Accordion open={open} toggle={toggle} cssModule={styles} className={styles.accordion}>
                <AccordionItem cssModule={styles}>
                    <AccordionHeader cssModule={styles} className={styles.accordionHeader} targetId='1'>SUSHI</AccordionHeader>
                    <AccordionBody cssModule={styles} accordionId='1'>
                        <Accordion flush open={nestOpen} toggle={nestToggle} cssModule={styles} className={styles.accordion}>
                            <AccordionItem cssModule={styles} className={styles.accordion}>
                                <AccordionHeader targetId='1' cssModule={styles} className={styles.accordionHeader}>SUSHI ENTREES</AccordionHeader>
                                <AccordionBody accordionId='1' cssModule={styles} className={styles.accordionBody}>
                                    {groupBy(props.props["Sushi"], "subcategory")["Sushi Entrees"].map((menuItem, index) => {
                                        if (menuItem.active) return (
                                            <div
                                                className={styles.accordionItemContainer}
                                                key={index}>
                                                <p>{menuItem.item.toUpperCase()} {menuItem.modifier ? <Spicy /> : ""} <span className={styles.priceNumber}>{menuItem.price1}</span></p>
                                                <p className={styles.itemDescription}>{menuItem.description}</p>
                                            </div>
                                        )
                                    })}
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem cssModule={styles} className={styles.accordion}>
                                <AccordionHeader targetId='2' cssModule={styles} className={styles.accordionHeader}>SUSHI BOWLS</AccordionHeader>
                                <AccordionBody accordionId='2' cssModule={styles} className={styles.accordionBody}>
                                    {groupBy(props.props["Sushi"], "subcategory")["Sushi Bowls"].map((menuItem, index) => {
                                        if (menuItem.active) return (
                                            <div
                                                className={styles.accordionItemContainer}
                                                key={index}
                                            >
                                                <p>{menuItem.item.toUpperCase()} {menuItem.price2 ? "" : <span className={styles.priceNumber}>{menuItem.price1}</span>}</p>
                                                {menuItem.price2 ?
                                                    <div className={styles.accordionPriceContainer}>
                                                        <p>TUNA <span className={styles.priceNumber}>{menuItem.price1}</span></p>
                                                        <p>SALMON <span className={styles.priceNumber}>{menuItem.price2}</span></p>
                                                        <p>TUNA & SALMON <span className={styles.priceNumber}>{menuItem.price3}</span></p>
                                                        <p>VEGETABLE <span className={styles.priceNumber}>{menuItem.price4}</span></p>
                                                    </div>
                                                    :
                                                    ""
                                                }
                                                <p className={styles.itemDescription}>{menuItem.description}</p>
                                            </div>
                                        )
                                    })}
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem cssModule={styles} className={styles.accordion}>
                                <AccordionHeader targetId='3' cssModule={styles} className={styles.accordionHeader}>SIGNATURE ROLLS</AccordionHeader>
                                <AccordionBody accordionId='3' cssModule={styles} className={styles.accordionBody}>
                                    <Specials props={groupBy(props.props["Sushi"], "subcategory")["Signature Rolls"]} className={styles} />
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem cssModule={styles} className={styles.accordion}>
                                <AccordionHeader targetId='4' cssModule={styles} className={styles.accordionHeader}>HOUSE ROLLS</AccordionHeader>
                                <AccordionBody accordionId='4' cssModule={styles} className={styles.accordionBody}>
                                    <p>Served with white rice.</p>
                                    <p>*Served without white rice.</p>
                                    <Specials props={groupBy(props.props["Sushi"], "subcategory")["House Rolls"]} className={styles} />
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem cssModule={styles} className={styles.accordion}>
                                <AccordionHeader targetId='5' cssModule={styles} className={styles.accordionHeader}>NIGIRI & SASHIMI</AccordionHeader>
                                <AccordionBody accordionId='5' cssModule={styles} className={styles.accordionBody}>
                                    <Specials props={groupBy(props.props["Sushi"], "subcategory")["Nigiri & Sashimi"]} className={styles} />
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem cssModule={styles}>
                                <AccordionHeader targetId='6' cssModule={styles} className={styles.accordionHeader} >A-LA CARTE</AccordionHeader>
                                <AccordionBody accordionId='6' cssModule={styles} className={styles.accordionBody}>
                                    {groupBy(props.props["Sushi"], "subcategory")["A-La Carte"].map((menuItem, index) => {
                                        if (menuItem.active) return (
                                            <div
                                                className={styles.accordionItemContainer}
                                                key={index}
                                            >
                                                <p>{menuItem.item.toUpperCase()} {menuItem.modifier ? <Spicy /> : ""} <span className={styles.priceNumber}>{menuItem.price1}</span></p>
                                                {menuItem.description ?
                                                    <p className={styles.itemDescription}>{menuItem.description}</p>
                                                    :
                                                    ""
                                                }
                                            </div>
                                        )
                                    })}
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Sushi