import react from "react";
import Image from "next/dist/client/image";
import Info from "../molecules/Info";
import Navigation from "../molecules/Navigation";
import styles from '../../styles/Header.moduel.css';

const Header = (className) => {
    return (
        <div className={className}>
            <Navigation className={styles.Navigation} />
            <Image 
                src="/icons/headerLogo.png"
                alt="Basil Ginger"
                height={100}
                width={200}
            />
            <Info className={styles.info}/>
        </div>
    )
}

Header.displayName = "Header";

export default Header