import styles from '../../styles/Appetizers.module.css'
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';
import { useState } from 'react';
import { groupBy } from 'lodash'

const Appetizers = (props) => {
    const [open, setOpen] = useState(0);
 
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    // accordion open starts at 13
    return (
        <div>
            <Accordion icon={false} className={styles.accordionGroup} open={open === 13} onClick={() => handleOpen(13)}>
                <AccordionHeader>Appetizers</AccordionHeader>
                    <AccordionBody> 
                        {groupBy(props.props["Appetizers"], "subcategory")["Appetizers"].map((menuItem, index) => {
                            return (
                                <div key={index}>
                                    <p>{menuItem.item}</p>
                                    <p>{menuItem.price1}</p>
                                </div>
                            )
                        })}
                    </AccordionBody>
            </Accordion>
            <Accordion icon={false} className={styles.accordionGroup} open={open === 14} onClick={() => handleOpen(14)}>
                <AccordionHeader>Sushi Appetizers</AccordionHeader>
                    <AccordionBody> 
                        {groupBy(props.props["Appetizers"], "subcategory")["Sushi Appertizers"].map((menuItem, index) => {
                            return (
                                <div key={index}>
                                    <p>{menuItem.item}</p>
                                    <p>{menuItem.price1}</p>
                                    {menuItem.description ?
                                    <p>{menuItem.description}</p>
                                    :
                                    <div/>
                                    }
                                </div>
                            )
                        })}
                    </AccordionBody>
            </Accordion>
        </div>
    )
}

export default Appetizers