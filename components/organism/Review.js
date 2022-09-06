import Image from "next/image"
import styles from '../../styles/Review.module.css'
import data from '../atoms/Reviews.json'
import { useState, useEffect } from 'react'
const Review = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => currentIndex >= data.reviews.length -1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1), 10000);
        return () => clearInterval(interval)
    });

    return (
        <div className={styles.reviewContainer}>
            <div className={styles.bowlContainer}>
                <Image 
                    src='/images/sashimi-bowl.png'
                    alt="Sashimi Bowl"
                    height={300}
                    width={300}
                    className={styles.sashimiBowl}
                />
            </div>
            <div className={styles.review}>
                <div className={styles.logoContainer}>
                    <Image 
                        src='/icons/google-review.png'
                        alt='5 star Google review'
                        className={styles.logo}
                        height={30}
                        width={170}
                    />
                </div>
                    {data.reviews.map(review => {
                        return (
                        <div className={review.id == currentIndex ? styles.reviewText : "hidden"} id={data.reviews[currentIndex].id} key={review.id}>
                            <p className={styles.text}>{`"${review.text}"`}</p>
                            <p className={styles.author}>-{review.author}</p>
                        </div>
                        )
                    })}    
            </div>
            <div className={styles.sushiContainer}>
                <Image 
                    src='/images/sushi-roll.png'
                    alt="sushi"
                    height={400}
                    width={100}
                />
            </div>
        </div>
    )
}

export default Review