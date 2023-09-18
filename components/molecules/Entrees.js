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
  <div className={props.className.menuSectionTitle}>
      <h3>Entrées</h3>
  </div>
  <div className={props.className.menuCatergoryContainer}>
  {groupBy(props.props,"category")["Entree"].map((menuItem, index) => {
    if(menuItem.active)return (
        <div 
            className={props.className.menuItemContainer}
            key={index}>
            <p className={props.className.itemText}>{menuItem.item}<span className={props.className.priceNumber}>{menuItem.price1}</span>{menuItem.price2 && <span className={props.className.priceNumber}>{menuItem.price2}</span>}</p>
            {menuItem.description &&
              <p className={props.className.itemDescription}>{menuItem.description}</p>
            }
        </div>
    )
  })}
  </div>
  </div>

    )
}

export default Entrees