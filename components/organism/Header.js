import React from "react";
import Image from "next/dist/client/image";
import Info from "../molecules/Info";
import Navigation from "../molecules/Navigation";
import styles from "../../styles/Header.module.css";

const Header = () => {
    return (
        <div className={styles.header}>
            <Navigation className={styles.navigation} />
            <div className={styles.logo}>

                <Image 
                    src="/icons/headerLogo.png"
                    alt="Basil Ginger"
                    height={90}
                    width={150}
                />
            </div>     

            <Info className={styles.info}/>
        </div>
    )
}

Header.displayName = "Header";

export default Header