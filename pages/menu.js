import styles from '../styles/Menu.module.css'
import { useState } from 'react'
import Drinks from './../components/molecules/Drinks';
import Appetizers from './../components/molecules/Appetizers';
import grouper from '../components/atoms/tempGroup';
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';

export default function Menu({ data }) {
    const [menuOpen, setMenuOpen] = useState(0);
 
    const handleOpen = (value) => {
        setMenuOpen(menuOpen === value ? 0 : value);
    };
    return (
    <div>
        <Accordion icon={false} className={styles.accordionGroup} open={menuOpen === 1}>
        <AccordionHeader  onClick={() => handleOpen(1)}>Drinks</AccordionHeader>
            <AccordionBody>
                <Drinks props={data}/>
            </AccordionBody>
        </Accordion>        
        <Accordion icon={false} className={styles.accordionGroup} open={menuOpen === 2} onClick={() => handleOpen(2)}>
        <AccordionHeader>Appetizers</AccordionHeader>
            <AccordionBody>
                <Appetizers props={data}/>
            </AccordionBody>
        </Accordion>        
        <Accordion icon={false} className={styles.accordionGroup} open={menuOpen === 3} onClick={() => handleOpen(3)}>
        <AccordionHeader>Entrees</AccordionHeader>
            <AccordionBody>
                <Drinks props={data}/>
            </AccordionBody>
        </Accordion>        
        <Accordion icon={false} className={styles.accordionGroup} open={menuOpen === 4} onClick={() => handleOpen(4)}>
        <AccordionHeader>Sushi</AccordionHeader>
            <AccordionBody>
                <Drinks props={data}/>
            </AccordionBody>
        </Accordion>        
        <Accordion icon={false} className={styles.accordionGroup} open={menuOpen === 5} onClick={() => handleOpen(5)}>
        <AccordionHeader>Dessert</AccordionHeader>
            <AccordionBody>
                <Drinks props={data}/>
            </AccordionBody>
        </Accordion>        
    </div>    
    )
}
export async function getStaticProps() {
    const data = grouper();
    return {
        props: {
            data,
        },
    }
}
