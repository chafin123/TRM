import Image from 'next/image'
import styles from '../../styles/Footer.module.css'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.logoContianer}>
                <Image 
                    src='/icons/footer-logo.png'
                    alt='Basil Ginger'
                    height={100}
                    width={100}
                />
            </div>
            <div className={styles.hours}>
                <p>Monday - Thursday 11:30 - 8:30</p>
                <p>Friday 11:30 - 9:00</p>
                <p>Saturday 12:00 - 9:00</p>
                <p>Sunday 12:00 - 8:30</p>
            </div>
            <div className={styles.address}>
                <a href='https://g.page/BasilGinger?share?'>
                    <p>850 S Roberts St. Suite 100</p>
                    <p>Wasilla, Alaska, 99654</p>
                </a>
            </div>
            <div className={styles.contact}>
                <a href='tel: +1-907-376-722'>
                    <p>907.376.7222</p>
                </a>
                <a>
                    <SocialIcon url="https://www.facebook.com/basilgingerrestaurant/" />
                </a>
                <a>
                    <SocialIcon url=""
                </a>
                <a>

                </a>
            </div>
        </div>
    )
}

export default Footer