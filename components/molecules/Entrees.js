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
                  <AccordionHeader targetId='1' cssModule={props.moduleChange} className={props.className.accordionHeader}>SOUPS</AccordionHeader>
                    <AccordionBody accordionId='1' cssModule={props.moduleChange} className={props.className.accordionBody}>
                        {groupBy(groupBy(props.props.menu,"category")["Entrees"],"subcategory")["Soups"].map((menuItem, index) => {
                          if(menuItem.active)return (
                              <div 
                                  className={props.className.accordionItemContainer}
                                  key={index}>
                                  <p>{menuItem.item.toUpperCase()}</p>
                                  <div className={props.className.accordionPriceContainer}>
                                      <p>SMALL <span className={props.className.priceNumber}>{menuItem.price1}</span></p>
                                      <p>LARGE <span className={props.className.priceNumber}>{menuItem.price2}</span></p>
                                  </div>
                              </div>
                          )
                        })}
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem cssModule={props.moduleChange} className={props.className.accordion}>
                  <AccordionHeader targetId='2' cssModule={props.moduleChange} className={props.className.accordionHeader}>SALADS</AccordionHeader>
                      <AccordionBody accordionId="2" cssModule={props.moduleChange} className={props.className.accordionBody}>
                        {groupBy(groupBy(props.props.menu,"category")["Entrees"],"subcategory")["Salads"].map((menuItem, index) => {
                          if(menuItem.active)return (
                              <div 
                                  className={props.className.accordionItemContainer}
                                  key={index}
                                  >
                                  <p>{menuItem.item.toUpperCase()} <span className={props.className.priceNumber}>{menuItem.price1}</span></p>
                                  <p className={props.className.itemDescription}>{menuItem.description}</p>
                              </div>
                          )
                        })}
                      </AccordionBody>
                </AccordionItem>
              <AccordionItem cssModule={props.moduleChange} className={props.className.accordion}>
                <AccordionHeader targetId="3" cssModule={props.moduleChange} className={props.className.accordionHeader}>VEGETARIAN</AccordionHeader>
                  <AccordionBody accordionId="3" cssModule={props.moduleChange} className={props.className.accordionBody}>
                  <p>Served with white rice</p>
                  {groupBy(groupBy(props.props.menu,"category")["Entrees"],"subcategory")["Vegetarian"].map((menuItem, index) => {
                    if(menuItem.active)return (
                        <div
                            className={props.className.accordionItemContainer}
                            key={index}
                        >
                        <p>{menuItem.item.toUpperCase()} {menuItem.modifier ? "!" : ""} <span className={props.className.priceNumber}>{menuItem.price1}</span></p>
                        <p className={props.className.itemDescription}>{menuItem.description}</p>
                        </div>
                    )
                  })}
                  </AccordionBody>
              </AccordionItem>
              <AccordionItem cssModule={props.moduleChange} className={props.className.accordion}>
                <AccordionHeader targetId="4" cssModule={props.moduleChange} className={props.className.accordionHeader}>CLASSICS</AccordionHeader>
                  <AccordionBody accordionId="4" cssModule={props.moduleChange} className={props.className.accordionBody}>
                    <p>Served with white rice.</p>
                    <p>*Served without white rice.</p>
                    {groupBy(groupBy(props.props.menu,"category")["Entrees"], "subcategory")["Classics"].map((menuItem, index) => {
                        if(menuItem.active) return (
                            <div
                                className={props.className.accordionItemContainer}
                                key={index}
                                >
                                <p>{menuItem.item.toUpperCase()} {menuItem.modifier ? <Spicy/> : ""} {menuItem.price2 ? "" : <span className={props.className.priceNumber}>{menuItem.price1}</span>}</p>
                                {menuItem.price2 ? 
                                    menuItem.price3 ?
                                <div className={props.className.accordionPriceContainer}>
                                    <p>VEGETABLE <span className={props.className.priceNumber}>{menuItem.price1}</span></p>
                                    <p>CHICKEN <span className={props.className.priceNumber}>{menuItem.price2}</span></p>
                                    <p>BEEF <span className={props.className.priceNumber}>{menuItem.price3}</span></p>
                                    <p>SHRIMP <span className={props.className.priceNumber}>{menuItem.price4}</span></p>
                                    <p>TOFU <span className={props.className.priceNumber}>{menuItem.price5}</span></p>
                                    <p>HOUSE <span className={props.className.priceNumber}>{menuItem.price6}</span></p>
                                </div>
                                    :
                                <div className={props.className.accordionPriceContainer}>
                                    <p>CHICKEN <span className={props.className.priceNumber}>{menuItem.price1}</span></p>
                                    <p>SHRIMP <span className={props.className.priceNumber}>{menuItem.price2}</span></p>
                                </div>
                                : ""}
                            </div>
                        )
                      })}
                  </AccordionBody>
              </AccordionItem>
              <AccordionItem cssModule={props.moduleChange} className={props.className.accordion}>
                <AccordionHeader targetId="5" cssModule={props.moduleChange} className={props.className.accordion}>SIAM</AccordionHeader>
                  <AccordionBody accordionId="5" cssModule={props.moduleChange} className={props.className.accordionBody}>
                    <p>Served with rice.</p>
                    <p>*Served without rice.</p>
                    {groupBy(groupBy(props.props.menu,"category")['Entrees'], "subcategory")["Siam"].map((menuItem, index) => {
                        if(menuItem.active) return(
                            <div
                                className={props.className.accordionItemContainer}
                                key={index}
                            >
                                <p>{menuItem.item.toUpperCase()} {menuItem.modifier ? <Spicy/> : ""}{menuItem.price2 ? "" : <span className={props.className.priceNumber}>{menuItem.price1}</span>}</p>
                                {menuItem.price2 ? 
                                    <div className={props.className.accordionPriceContainer}>
                                        <p>CHICKEN <span className={props.className.priceNumber}>{menuItem.price1}</span></p>
                                        <p>BEEF <span className={props.className.priceNumber}>{menuItem.price2}</span></p>
                                        <p>PRAWNS <span className={props.className.priceNumber}>{menuItem.price3}</span></p>
                                    </div>
                                    : ""
                                }
                                <p className={props.className.itemDescription}>{menuItem.description}</p>
                            </div>
                        )
                    })}
                  </AccordionBody>
              </AccordionItem>
              <AccordionItem cssModule={props.moduleChange} className={props.className.accordion}>
                <AccordionHeader targetId="6" cssModule={props.moduleChange} className={props.className.accordion}>HOUSE SPECIALS</AccordionHeader>
                  <AccordionBody accordionId='6' cssModule={props.moduleChange} className={props.className.accordionBody}>
                    <Specials props={groupBy(groupBy(props.props.menu,"category")["Entrees"], "subcategory")["House Specials"]} className={props.className}/>
                  </AccordionBody>
              </AccordionItem>
              <AccordionItem cssModule={props.moduleChange} className={props.className.accordion}>
                <AccordionHeader targetId="7" cssModule={props.moduleChange} className={props.className.accordion}>LUNCH SPECIALS</AccordionHeader>
                  <AccordionBody accordionId='7' cssModule={props.moduleChange} className={props.className.accordionBody}>
                    <p>Served with white rice and a choice of soup (miso, wonton, hot & sour).</p>
                    <Specials props={groupBy(groupBy(props.props.menu,"category")["Entrees"], "subcategory")["Lunch Specials"]} className={props.className}/>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem cssModule={props.moduleChange} className={props.className.accordion}>
                <AccordionHeader targetId="8" cssModule={props.moduleChange} className={props.className.accordion}>DINNER SPECIALS</AccordionHeader>
                  <AccordionBody accordionId='8' cssModule={props.moduleChange} className={props.className.accordionBody}>
                    <Specials props={groupBy(groupBy(props.props.menu,"category")["Entrees"], "subcategory")["Dinner Specials"]} className={props.className}/>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
 
  </div>

    )
}

export default Entrees