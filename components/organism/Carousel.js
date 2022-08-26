import Image from "next/dist/client/image"
import data from '../atoms/Image.json'
import styles from '../../styles/Carousel.module.css'
import { useState, useRef, useEffect } from "react"

const Carousel = () => {
    

    const [currentIndex, setCurrentIndex] = useState(0);

    const carousel = useRef(null);
    
    const movePrev = () => {
        currentIndex <= 0 ? setCurrentIndex(7) : setCurrentIndex((prevState) => prevState -1)
    };

    const moveNext = () => {
        currentIndex >= 7 ? setCurrentIndex(0) : setCurrentIndex((prevState) => prevState + 1) 
        console.log( currentIndex)
    }

      
    return (
        <div className={styles.carouselOuter} >
            <div className={styles.carouselInner}>
                <div className={styles.buttonContainer}>
                    <button
                        onClick={movePrev}
                        className={styles.prevButton}
                    >
                        <Image 
                        src='/icons/left-arrow-free.svg'
                        alt='previous arrow'
                        height={100}
                        width={100}
                    />
                    <span className={styles.screenReader}>Previous</span>
                    </button>
                    <button
                        onClick={moveNext}
                        className={styles.nextButton}
                    >
                        <Image 
                        src='/icons/right-arrow-free.svg'
                        alt='next arrow'
                        height={100}
                        width={100}
                        className="text-white"
                    />
                    <span className={styles.screenReader}>Next</span>
                    </button>
                </div>
                <div
                    ref={carousel}
                    className={styles.carouselContainer}
                >
                    {data.imageArray.map((image, index) => {
                        if (index === currentIndex) {    
                            return (
                                <div
                                    key={index}
                                    className={styles.carouselItem}
                                >
                                    <Image 
                                        src={image.src}
                                        alt={image.alt}
                                        className={styles.carouselImage}
                                        height={1080}
                                        width={1920}
                                        layout="intrinsic"
                                    />
                                    <h3
                                        className={styles.carouselImageText}
                                    >
                                        {image.name}    
                                    </h3>
                                    <div className={styles.logo}>
                                        <Image 
                                            src="/icons/frontiersman-award.png"
                                            alt="2021 Frontiersman Best of The Valley award"
                                            height={60}
                                            width={140}
                                        />
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Carousel