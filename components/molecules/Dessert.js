import styles from '../../styles/MenuItems.module.css'
import Spicy from '../atoms/Spicy'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
import { useState } from 'react';

const Dessert = (props) => {
    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };
    return (

        <div className={props.className}>
            <Accordion open={open} toggle={toggle} cssModule={styles} className={styles.accordion}>
                <AccordionItem cssModule={styles}>
                    <AccordionHeader cssModule={styles} className={styles.accordionHeader} targetId='1'>DESSERT</AccordionHeader>
                    <AccordionBody cssModule={styles} className={styles.accordionBody} accordionId='1'>
                        {props.props["Dessert"].map((menuItem, index) => {
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
        </div>
    )
}

export default Dessert
