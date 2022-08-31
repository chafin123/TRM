import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Image from "next/image";
const FootAccord = (props) => {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <div className={props.accordionContainerClass}>
      <Accordion className={props.accordionClass} open={open === 1} onClick={() => handleOpen(1)}>
        <AccordionHeader className={props.headerClass}>OPEN HOURS</AccordionHeader>
        <AccordionBody className={props.accordionBodyClass}>
            <p>Monday - Thursday 11:30 - 8:30</p>
            <p>Friday 11:30 - 9:00</p>
            <p>Saturday 12:00 - 9:00</p>
            <p>Sunday 12:00 - 8:30</p>
        </AccordionBody>
      </Accordion>
      <Accordion className={props.accordionClass} open={open === 2} onClick={() => handleOpen(2)}>
        <AccordionHeader className={props.headerClass}>ADDRESS</AccordionHeader>
        <AccordionBody className={props.accordionBodyClass}>
        <a href='https://g.page/BasilGinger?share?'>
            <p>850 S Roberts St. Suite 100</p>
            <p>Wasilla, Alaska, 99654</p>
        </a>
        </AccordionBody>
      </Accordion>
      <Accordion className={props.accordionClass} open={open === 3} onClick={() => handleOpen(3)}>
        <AccordionHeader className={props.headerClass}>CONTACT</AccordionHeader>
        <AccordionBody className={props.accordionBodyClass}>
        <a href='tel: +1-907-376-722'>
            <p>907.376.7222</p>
        </a>
        <div className={props.iconContainerClass}>
                        <a>
                            <Image 
                                src='/icons/facebook.png'
                                alt='facebook icon'
                                height={20}
                                width={20}
                            />
                        </a>
                        <a>
                            <Image 
                                src='/icons/instagram.png'
                                alt='facebook icon'
                                height={20}
                                width={20}
                            />
                        </a>
                        <a>
                            <Image 
                                src='/icons/email.png'
                                alt='facebook icon'
                                height={16}
                                width={20}
                            />
                        </a>
                    </div>
        </AccordionBody>
      </Accordion>
    </div>
  );
}
export default FootAccord