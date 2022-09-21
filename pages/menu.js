import styles from '../styles/Menu.module.css'
import Drinks from './../components/molecules/Drinks';
import Appetizers from './../components/molecules/Appetizers';
import Entrees from '../components/molecules/Entrees';
import Sushi from '../components/molecules/Sushi';
import Dessert from './../components/molecules/Dessert';
import Image from "next/dist/client/image"
import { useState } from 'react'
import Link from 'next/link'
import tempData from '../shared/temp.json'
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
                    <AccordionBody className={styles.topAccordionBody} cssModule={styles} accordionId='5'>
            <Dessert props={data} className={styles} moduleChange={styles}/>
            </AccordionBody>
            </AccordionItem>
        </Accordion>
        <div className={styles.foot}>
            <div className={styles.ctaContainer}>
                <p>Follow & Review Us</p>
            </div>
            <div className={styles.iconContainer}>
                <div>
                    <a href='https://www.facebook.com/basilgingerrestaurant/'>
                        <Image 
                            src='/icons/facebook.svg'
                            alt='facebook icon'
                            height={20}
                            width={20}
                        />
                    </a>
                </div>
                <div>
                    <a href='https://www.instagram.com/explore/locations/799258566887951/basil-ginger'>
                        <Image 
                            src='/icons/instaham.svg'
                            alt='facebook icon'
                            height={20}
                            width={20}
                        />
                    </a>
                </div>
                <div>
                    <a href='https://www.google.com/maps/place/Basil+Ginger/@61.5744972,-149.421341,17z/data=!3m1!4b1!4m6!3m5!1s0x56c8de1a9924ce4b:0xa9fcf353750cfe37!8m2!3d61.5744972!4d-149.421341!16s%2Fg%2F11fy2s2qmn'>
                        <Image 
                            src='/icons/googles.svg'
                            alt='facebook icon'
                            height={16}
                            width={20}
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>    
    )
}
export async function getStaticProps() {
    const res = await fetch('https://api.sheety.co/b6dbcc47ec9ab905fd53f75df4e9a1c0/restaurantMenu/menu')
    const data = await res.json()
    return {
        props: {
            data,
        },
    }
}
