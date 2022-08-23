import Image from "next/dist/client/image"
import Button from "../atoms/Button"
import imageArray from "../atoms/Image"
import styles from '../../styles/Carousel.module.css'


const Carousel = () => {

    
    let carouselPosition = 0;
    const changeImage = (next) => {
        next ? 
        carouselPosition >= 6 ? carouselPosition = 0 : carouselPosition ++ :
        carouselPosition <= 0 ? carouselPosition = 6 : carouselPosition -- ;
        console.log(`carousel position : ${carouselPosition}`);
    }

    return (
        <div className={styles.carouselContainer}>
            <Button 
                classNamePrev={styles.prevButton}
                onClickPrev={() => changeImage(false)}
                classNameNext={styles.nextButton}
                onClickNext={() => changeImage(true)}
            />
            <div className={styles.imageContainer}>
                {imageArray.map((image, i) => {
                    if(i = 1) {
                    return <div key={i} className={styles.active}>    
                        <Image 
                            src={image.src}
                            alt={image.alt}
                            height={100}
                            width={100}
                            layout='responsive'
                        />
                    </div>
                    } return    <div key={i} className={styles.notActive}>    
                                    <Image 
                                        src={image.src}
                                        alt={image.alt}
                                        height={100}
                                        width={100}
                                        layout='responsive'
                                    />
                                </div>
                    
                })}
            </div>
            <div className={styles.logo}>
                <Image 
                    src="/icons/fronteirsman-award.png"
                    alt="2021 Best of The Valley Award from Mat-Su Valley Frontiersman"
                    height={500}
                    width={500}
                />
            </div>

        </div>
    )
}

export default Carousel