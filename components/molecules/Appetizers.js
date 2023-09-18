import { groupBy } from "lodash";
import { useState } from 'react';

const Appetizers = (props) => {

  return (
    <div className={props.className.menuEntry}>
      <div className={props.className.menuSectionTitle}>
          <h3>Appetizers</h3>
      </div>
      <div className={props.className.menuCatergoryContainer}>
      {groupBy(props.props,"category")["Appetizer"].map((menuItem, index) => {
        if(menuItem.active)return (
          <div
            className={props.className.menuItemContainer}
            key={index}
          >
            <p className={props.className.itemText}>
              {menuItem.item}{" "}
              <span className={props.className.priceNumber}>
                {menuItem.price1}
              </span>
            </p>
            {menuItem.description &&
              <p className={props.className.itemDescription}>{menuItem.description}</p>
            }
          </div>
        );
      })}
      </div>

    </div>
  );
};

export default Appetizers;
