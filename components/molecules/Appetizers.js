import styles from "../../styles/MenuItems.module.css";
import { groupBy } from "lodash";
import Spicy from '../atoms/Spicy'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import { useState } from 'react';
const Appetizers = (props) => {
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
          <AccordionHeader cssModule={styles} className={styles.accordionHeader} targetId='1'>APPETIZERS</AccordionHeader>
          <AccordionBody cssModule={styles} accordionId='1'>
            <Accordion flush open={nestOpen} toggle={nestToggle} cssModule={styles} className={styles.accordion}>
              <AccordionItem cssModule={styles} className={styles.accordion}>
                <AccordionHeader targetId='1' cssModule={styles} className={styles.accordionHeader}>APPETIZERS</AccordionHeader>
                <AccordionBody accordionId='1' cssModule={styles} className={styles.accordionBody}>
                  {groupBy(props.props["Appetizers"], "subcategory")["Appetizers"].map((menuItem, index) => {
                    if(menuItem.active)return (
                      <div
                        className={styles.accordionItemContainer}
                        key={index}
                      >
                        <p>
                          {menuItem.item.toUpperCase()}{" "}
                          <span className={styles.priceNumber}>
                            {menuItem.price1}
                          </span>
                        </p>
                        {menuItem.description ? (
                          <p className={styles.itemDescription}>{menuItem.description}</p>
                        ) : (
                          <div />
                        )}
                      </div>
                    );
                  })}
                </AccordionBody>
              </AccordionItem>
              <AccordionItem cssModule={styles} className={styles.accordion}>
                <AccordionHeader targetId='2' cssModule={styles} className={styles.accordionHeader}>SUSHI APPETIZERS</AccordionHeader>
                <AccordionBody accordionId='2' cssModule={styles} className={styles.accordionBody}>
                  {groupBy(props.props["Appetizers"], "subcategory")["Sushi Appertizers"].map((menuItem, index) => {
                    if(menuItem.active)return (
                      <div
                        className={styles.accordionItemContainer}
                        key={index}
                      >
                        <p>{menuItem.item.toUpperCase()} {menuItem.modifier ? <Spicy /> : ""}{menuItem.price2 ? "" : <span className={styles.priceNumber}>{menuItem.price1}</span>}</p>
                        {menuItem.price2 ? 
                            <div className={styles.accordionPriceContainer}>
                              <p>VEGATABLE <span className={styles.priceNumber}>{menuItem.price1}</span></p>
                              <p>SHRIMP <span className={styles.priceNumber}>{menuItem.price2}</span></p>
                              <p>TUNA/SALMON <span className={styles.priceNumber}>{menuItem.price3}</span></p>
                            </div>
                        : ""
                        }
                        {menuItem.description ? (
                          <p className={styles.itemDescription}>{menuItem.description}</p>
                        ) : (
                          <div />
                        )}
                      </div>
                    );
                  })}
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Appetizers;
