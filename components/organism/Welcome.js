import styles from '../../styles/Welcome.module.css'
import Image
 from 'next/image'
const Welcome = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.welcomePictureContainer}>
                <Image 
                    src="/images/welcome.jpg"
                    alt="The chef owners welcoming you in"
                    layout="responsive"
                    height={300}
                    width={300}
                />
            </div>
            <div className={styles.welcomeBlock}>
                <div className={styles.textBlock}>
                    <h2>WELCOME</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed ut malesuada nisl. Suspendisse nec eros non tortor 
                sollicitudin accumsan. Aenean fermentum consequat orci posuere 
                rutrum. Duis dui purus, gravida quis ipsum eget, elementum.</p>
                </div>
                <div className={styles.backgroundBlock}>
                    <Image 
                        src="/icons/bg-welcome-mountain.png"
                        alt="mountain with crane"
                        height={300}
                        width={500}
                        className={styles.bgMountain}
                    />
                </div>    
            </div>
        </div>
    )
} 

export default Welcome