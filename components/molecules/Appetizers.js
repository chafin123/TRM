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
            <Accordion flush open={nestOpen} toggle={nestToggle} cssModule={props.moduleChange} className={props.className.accordion}>
              <AccordionItem cssModule={props.moduleChange} className={props.className.accordion}>
                <AccordionHeader targetId='1' cssModule={props.moduleChange} className={props.className.accordionHeader}>APPETIZERS</AccordionHeader>
                <AccordionBody accordionId='1' cssModule={props.moduleChange} className={props.className.accordionBody}>
                  {groupBy(props.props["Appetizers"], "subcategory")["Appetizers"].map((menuItem, index) => {
                    if(menuItem.active)return (
                      <div
                        className={props.className.accordionItemContainer}
                        key={index}
                      >
                        <p>
                          {menuItem.item.toUpperCase()}{" "}
                          <span className={props.className.priceNumber}>
                            {menuItem.price1}
                          </span>
                        </p>
                        {menuItem.description ? (
                          <p className={props.className.itemDescription}>{menuItem.description}</p>
                        ) : (
                          <div />
                        )}
                      </div>
                    );
                  })}
                </AccordionBody>
              </AccordionItem>
              <AccordionItem cssModule={props.moduleChange} className={props.className.accordion}>
                <AccordionHeader targetId='2' cssModule={props.moduleChange} className={props.className.accordionHeader}>SUSHI APPETIZERS</AccordionHeader>
                <AccordionBody accordionId='2' cssModule={props.moduleChange} className={props.className.accordionBody}>
                  {groupBy(props.props["Appetizers"], "subcategory")["Sushi Appertizers"].map((menuItem, index) => {
                    if(menuItem.active)return (
                      <div
                        className={props.className.accordionItemContainer}
                        key={index}
                      >
                        <p>{menuItem.item.toUpperCase()} {menuItem.modifier ? <Spicy /> : ""}{menuItem.price2 ? "" : <span className={props.className.priceNumber}>{menuItem.price1}</span>}</p>
                        {menuItem.price2 ? 
                            <div className={props.className.accordionPriceContainer}>
                              <p>VEGATABLE <span className={props.className.priceNumber}>{menuItem.price1}</span></p>
                              <p>SHRIMP <span className={props.className.priceNumber}>{menuItem.price2}</span></p>
                              <p>TUNA/SALMON <span className={props.className.priceNumber}>{menuItem.price3}</span></p>
                            </div>
                        : ""
                        }
                        {menuItem.description ? (
                          <p className={props.className.itemDescription}>{menuItem.description}</p>
                        ) : (
                          <div />
                        )}
                      </div>
                    );
                  })}
                </AccordionBody>
              </AccordionItem>
            </Accordion>

    </div>
  );
};

export default Appetizers;
