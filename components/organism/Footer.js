import Image from 'next/image'
import styles from '../../styles/Footer.module.css'
import FootAccord from '../molecules/Accordion'

const Footer = (props) => {
    return (
        <div className={styles.footerContainer} id={props.id}>
            <div className={styles.largeFoot}>
                <div className={styles.logoContainer}>
                    <Image 
                        src='/icons/footer-logo.png'
                        alt='Basil Ginger'
                        height={120}
                        width={120}
                    />
                </div>
                <div className={styles.hours}>
                    <h3>OPENING HOURS</h3>
                        <p>Monday - Thursday 11:30 - 8:30</p>
                        <p>Friday 11:30 - 9:00</p>
                        <p>Saturday 12:00 - 9:00</p>
                        <p>Sunday 12:00 - 8:30</p>
                </div>
                <div className={styles.address}>
                    <h3>ADDRESS</h3>
                        <a href='https://g.page/BasilGinger?share?'>
                            <p>850 S Roberts St. Suite 100</p>
                            <p>Wasilla, Alaska, 99654</p>
                        </a>
                </div>
                <div className={styles.contact}>
                    <h3>CONTACT</h3>
                        <a href='tel: +1-907-376-722'>
                            <p>907.376.7222</p>
                        </a>
                    <div className={styles.iconContainer}>
                        <a href='https://www.facebook.com/basilgingerrestaurant/'>
                            <Image 
                                src='/icons/facebook.png'
                                alt='facebook icon'
                                height={20}
                                width={20}
                            />
                        </a>
                        <a href='https://www.instagram.com/explore/locations/799258566887951/basil-ginger'>
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
                </div>
            </div>
            <FootAccord
                moduleChange={styles} 
                className={styles}
            />
        </div>
    )
}

export default Footer