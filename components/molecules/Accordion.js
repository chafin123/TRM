import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  AccordionItem,
} from "reactstrap";
import Image from "next/image";
const FootAccord = (props) => {
  const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) {
          setOpen();
        } else {
          setOpen(id);
        }
      };
 
  return (
    <div className={props.className.accordionContainer}>
      <Accordion flush className={props.className.accordion} open={open} toggle={toggle} cssModule={props.moduleChange}>
      <AccordionItem cssModule={props.moduleChange} className={props.className.accordionItem} >
        <AccordionHeader targetId="1" cssModule={props.moduleChange} className={props.className.header}>OPEN HOURS</AccordionHeader>
        <AccordionBody accordionId="1" cssModule={props.moduleChange} className={props.className.accordionBody}>
            <p>Monday - Thursday 11:30 - 8:30</p>
            <p>Friday 11:30 - 9:00</p>
            <p>Saturday 12:00 - 9:00</p>
            <p>Sunday 12:00 - 8:30</p>
        </AccordionBody>
      </AccordionItem>
      <AccordionItem cssModule={props.moduleChange} className={props.className.accordionItem}>
      
        <AccordionHeader targetId="2" cssModule={props.moduleChange} className={props.className.header}>ADDRESS</AccordionHeader>
        <AccordionBody accordionId="2" cssModule={props.moduleChange} className={props.className.accordionBody}>
            <a className="text-white no-underline" href='https://g.page/BasilGinger?share?'>
                <p className="text-white no-underline">850 S Roberts St. Suite 100</p>
                <p className="text-white no-underline">Wasilla, Alaska, 99654</p>
            </a>
        </AccordionBody>
      </AccordionItem>
      <AccordionItem cssModule={props.moduleChange} className={props.className.accordionItem}>
        <AccordionHeader targetId="3" cssModule={props.moduleChange} className={props.className.header}>CONTACT</AccordionHeader>
        <AccordionBody accordionId="3" cssModule={props.moduleChange} className={props.className.accordionBody}>
        <a className="text-white no-underline" href='tel: +1-907-376-722'>
            <p>907.376.7222</p>
        </a>
        <div className={props.className.iconContainer}>
          <div>
            <a>
                <Image 
                    src='/icons/facebook.png'
                    alt='facebook icon'
                    height={20}
                    width={20}
                />
            </a>
            </div>
            <div>
            <a>
                <Image 
                    src='/icons/instagram.png'
                    alt='facebook icon'
                    height={20}
                    width={20}
                />
            </a>
            </div>
            <div>
            <a>
                <Image 
                    src='/icons/email.png'
                    alt='facebook icon'
                    height={16}
                    width={20}
                />
            </a>
            </div>
        </div>
        </AccordionBody>
      </AccordionItem>
      </Accordion>
    </div>
  );
}
export default FootAccord