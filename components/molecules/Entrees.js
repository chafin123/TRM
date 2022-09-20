import styles from '../../styles/MenuItems.module.css'
import { groupBy } from 'lodash'
import Specials from './../atoms/Specials';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import { useState } from 'react';
import Spicy from '../atoms/Spicy';

const Entrees = (props) => {
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
          <AccordionHeader cssModule={styles} className={styles.accordionHeader} targetId='1'>ENTREES</AccordionHeader>
            <AccordionBody cssModule={styles} accordionId='1'>
              <Accordion flush open={nestOpen} toggle={nestToggle} cssModule={styles} className={styles.accordion}>
                <AccordionItem cssModule={styles} className={styles.accordion}>
                  <AccordionHeader targetId='1' cssModule={styles} className={styles.accordion}>SOUPS</AccordionHeader>
                    <AccordionBody accordionId='1' cssModule={styles} className={styles.accordionBody}>
                        {groupBy(props.props["Entrees"] ,"subcategory")["Soups"].map((menuItem, index) => {
                          if(menuItem.active)return (
                              <div 
                                  className={styles.accordionItemContainer}
                                  key={index}>
                                  <p>{menuItem.item.toUpperCase()}</p>
                                  <div className={styles.accordionPriceContainer}>
                                      <p>SMALL <span className={styles.priceNumber}>{menuItem.price1}</span></p>
                                      <p>LARGE <span className={styles.priceNumber}>{menuItem.price2}</span></p>
                                  </div>
                              </div>
                          )
                        })}
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem cssModule={styles} className={styles.accordion}>
                  <AccordionHeader targetId='2' cssModule={styles} className={styles.accordion}>SALADS</AccordionHeader>
                      <AccordionBody accordionId="2" cssModule={styles} className={styles.accordionBody}>
                        {groupBy(props.props["Entrees"],"subcategory")["Salads"].map((menuItem, index) => {
                          if(menuItem.active)return (
                              <div 
                                  className={styles.accordionItemContainer}
                                  key={index}
                                  >
                                  <p>{menuItem.item.toUpperCase()} <span className={styles.priceNumber}>{menuItem.price1}</span></p>
                                  <p className={styles.itemDescription}>{menuItem.description}</p>
                              </div>
                          )
                        })}
                      </AccordionBody>
                </AccordionItem>
              <AccordionItem cssModule={styles} className={styles.accordion}>
                <AccordionHeader targetId="3" cssModule={styles} className={styles.accordion}>VEGETARIAN</AccordionHeader>
                  <AccordionBody accordionId="3" cssModule={styles} className={styles.accordionBody}>
                  <p>Served with white rice</p>
                  {groupBy(props.props["Entrees"],"subcategory")["Vegetarian"].map((menuItem, index) => {
                    if(menuItem.active)return (
                        <div
                            className={styles.accordionItemContainer}
                            key={index}
                        >
                        <p>{menuItem.item.toUpperCase()} {menuItem.modifier ? "!" : ""} <span className={styles.priceNumber}>{menuItem.price1}</span></p>
                        <p className={styles.itemDescription}>{menuItem.description}</p>
                        </div>
                    )
                  })}
                  </AccordionBody>
              </AccordionItem>
              <AccordionItem cssModule={styles} className={styles.accordion}>
                <AccordionHeader targetId="4" cssModule={styles} className={styles.accordion}>CLASSICS</AccordionHeader>
                  <AccordionBody accordionId="4" cssModule={styles} className={styles.accordionBody}>
                    <p>Served with white rice.</p>
                    <p>*Served without white rice.</p>
                    {groupBy(props.props["Entrees"], "subcategory")["Classics"].map((menuItem, index) => {
                        if(menuItem.active) return (
                            <div
                                className={styles.accordionItemContainer}
                                key={index}
                                >
                                <p>{menuItem.item.toUpperCase()} {menuItem.modifier ? <Spicy/> : ""} {menuItem.price2 ? "" : <span className={styles.priceNumber}>{menuItem.price1}</span>}</p>
                                {menuItem.price2 ? 
                                    menuItem.price3 ?
                                <div className={styles.accordionPriceContainer}>
                                    <p>VEGETABLE <span className={styles.priceNumber}>{menuItem.price1}</span></p>
                                    <p>CHICKEN <span className={styles.priceNumber}>{menuItem.price2}</span></p>
                                    <p>BEEF <span className={styles.priceNumber}>{menuItem.price3}</span></p>
                                    <p>SHRIMP <span className={styles.priceNumber}>{menuItem.price4}</span></p>
                                    <p>TOFU <span className={styles.priceNumber}>{menuItem.price5}</span></p>
                                    <p>HOUSE <span className={styles.priceNumber}>{menuItem.price6}</span></p>
                                </div>
                                    :
                                <div className={styles.accordionPriceContainer}>
                                    <p>CHICKEN <span className={styles.priceNumber}>{menuItem.price1}</span></p>
                                    <p>SHRIMP <span className={styles.priceNumber}>{menuItem.price2}</span></p>
                                </div>
                                : ""}
                            </div>
                        )
                      })}
                  </AccordionBody>
              </AccordionItem>
              <AccordionItem cssModule={styles} className={styles.accordion}>
                <AccordionHeader targetId="5" cssModule={styles} className={styles.accordion}>SIAM</AccordionHeader>
                  <AccordionBody accordionId="5" cssModule={styles} className={styles.accordionBody}>
                    <p>Served with rice.</p>
                    <p>*Served without rice.</p>
                    {groupBy(props.props['Entrees'], "subcategory")["Siam"].map((menuItem, index) => {
                        if(menuItem.active) return(
                            <div
                                className={styles.accordionItemContainer}
                                key={index}
                            >
                                <p>{menuItem.item.toUpperCase()} {menuItem.modifier ? <Spicy/> : ""}{menuItem.price2 ? "" : <span className={styles.priceNumber}>{menuItem.price1}</span>}</p>
                                {menuItem.price2 ? 
                                    <div className={styles.accordionPriceContainer}>
                                        <p>CHICKEN <span className={styles.priceNumber}>{menuItem.price1}</span></p>
                                        <p>BEEF <span className={styles.priceNumber}>{menuItem.price2}</span></p>
                                        <p>PRAWNS <span className={styles.priceNumber}>{menuItem.price3}</span></p>
                                    </div>
                                    : ""
                                }
                                <p className={styles.itemDescription}>{menuItem.description}</p>
                            </div>
                        )
                    })}
                  </AccordionBody>
              </AccordionItem>
              <AccordionItem cssModule={styles} className={styles.accordion}>
                <AccordionHeader targetId="6" cssModule={styles} className={styles.accordion}>HOUSE SPECIALS</AccordionHeader>
                  <AccordionBody accordionId='6' cssModule={styles} className={styles.accordionBody}>
                    <Specials props={groupBy(props.props["Entrees"], "subcategory")["House Specials"]} className={styles}/>
                  </AccordionBody>
              </AccordionItem>
              <AccordionItem cssModule={styles} className={styles.accordion}>
                <AccordionHeader targetId="7" cssModule={styles} className={styles.accordion}>LUNCH SPECIALS</AccordionHeader>
                  <AccordionBody accordionId='7' cssModule={styles} className={styles.accordionBody}>
                    <p>Served with white rice and a choice of soup (miso, wonton, hot & sour).</p>
                    <Specials props={groupBy(props.props["Entrees"], "subcategory")["Lunch Specials"]} className={styles}/>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem cssModule={styles} className={styles.accordion}>
                <AccordionHeader targetId="8" cssModule={styles} className={styles.accordion}>DINNER SPECIALS</AccordionHeader>
                  <AccordionBody accordionId='8' cssModule={styles} className={styles.accordionBody}>
                    <Specials props={groupBy(props.props["Entrees"], "subcategory")["Dinner Specials"]} className={styles}/>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </AccordionBody>
        </AccordionItem>
    </Accordion>
  </div>

    )
}

export default Entrees