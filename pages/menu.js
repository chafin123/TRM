import styles from '../styles/Menu.module.css'
import Drinks from './../components/molecules/Drinks';
import Appetizers from './../components/molecules/Appetizers';
import Entrees from '../components/molecules/Entrees';
import grouper from '../components/atoms/tempGroup';
import Sushi from '../components/molecules/Sushi';
import Dessert from './../components/molecules/Dessert';
import Image from "next/dist/client/image"
import { useState } from 'react'
import Link from 'next/link'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';

export default function Menu({ data }) {
    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) {
          setOpen();
        } else {
          setOpen(id);
        }
      };
    return (
    <div className={styles.menuContainer}>
        <div className={styles.menuHeader}>
            <div className={styles.logoContainer}>
                <Link href='/'>
                <Image
                    src="/icons/menuLogo.png"
                    alt="2021 Frontiersman Best of The Valley award"
                    height={90}
                    width={90}
                />
                </Link>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.callButton}><p>CALL NOW</p></button>
                </div>
        </div>
        <Accordion open={open} toggle={toggle} cssModule={styles} className={styles.topAccordion}>
        <AccordionItem className={styles.topAccordionItem} cssModule={styles}>
            <AccordionHeader cssModule={styles} className={styles.accordionHeader} targetId='1'>DRINKS</AccordionHeader>
                    <AccordionBody className={styles.topAccordionBody} cssModule={styles} accordionId='1'>
            <Drinks props={data} className={styles} moduleChange={styles}/>
            </AccordionBody>
                </AccordionItem>


                <AccordionItem className={styles.topAccordionItem} cssModule={styles}>
          <AccordionHeader cssModule={styles} className={styles.accordionHeader} targetId='2'>APPETIZERS</AccordionHeader>
          <AccordionBody className={styles.topAccordionBody} cssModule={styles} accordionId='2'>

            <Appetizers props={data} className={styles} moduleChange={styles}/>
            </AccordionBody>
        </AccordionItem>


        <AccordionItem className={styles.topAccordionItem} cssModule={styles}>
          <AccordionHeader cssModule={styles} className={styles.accordionHeader} targetId='3'>ENTREES</AccordionHeader>
            <AccordionBody className={styles.topAccordionBody} cssModule={styles} accordionId='3'>
            <Entrees props={data} className={styles} moduleChange={styles}/>
            </AccordionBody>
        </AccordionItem>


            <AccordionItem className={styles.topAccordionItem} cssModule={styles}>
                    <AccordionHeader cssModule={styles} className={styles.accordionHeader} targetId='4'>SUSHI</AccordionHeader>
                    <AccordionBody className={styles.topAccordionBody} cssModule={styles} accordionId='4'>
            <Sushi props={data} className={styles} moduleChange={styles}/>
            </AccordionBody>
                </AccordionItem>

            <AccordionItem className={styles.topAccordionItem} cssModule={styles}>
                <AccordionHeader cssModule={styles} className={styles.accordionHeader} targetId='5'>DESSERT</AccordionHeader>
                    <AccordionBody className={styles.topAccordionBody} cssModule={styles} className={styles.accordionBody} accordionId='5'>
            <Dessert props={data} className={styles} moduleChange={styles}/>
            </AccordionBody>
            </AccordionItem>
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
