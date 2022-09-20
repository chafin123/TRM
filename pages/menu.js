import styles from '../styles/Menu.module.css'
import Drinks from './../components/molecules/Drinks';
import Appetizers from './../components/molecules/Appetizers';
import Entrees from '../components/molecules/Entrees';
import grouper from '../components/atoms/tempGroup';
import Sushi from '../components/molecules/Sushi';
import Dessert from './../components/molecules/Dessert';
import Image from "next/dist/client/image"

export default function Menu({ data }) {
 
    return (
    <div className={styles.menuContainer}>
        <div className={styles.menuHeader}>
            <div className={styles.logoContainer}>
                <Image
                    src="/icons/menuLogo.png"
                    alt="2021 Frontiersman Best of The Valley award"
                    height={90}
                    width={90}
                />
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.callButton}><p>CALL NOW</p></button>
                </div>
        </div>
        <Drinks props={data} className={styles.menuEntry}/>
        <Appetizers props={data} className={styles.menuEntry}/>
        <Entrees props={data} className={styles.menuEntry}/>
        <Sushi props={data} className={styles.menuEntry}/>
        <Dessert props={data} className={styles.menuEntry}/>
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
