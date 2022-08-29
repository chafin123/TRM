import Image from "next/image"
import styles from '../../styles/Review.module.css'
import data from '../atoms/Reviews.json'
const Review = () => {
    return (
        <div className={styles.reviewContainer}>
            <div className={styles.bowlContainer}>
                <Image 
                    src='/images/sashimi-bowl.png'
                    alt="Sashimi Bowl"
                    height={400}
                    width={400}
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
                <div className={styles.reviewText}>
                    <p className={styles.text}>{`"${data.reviews[0].text}"`}</p>
                    <p className={styles.author}>-{data.reviews[0].author}</p>
                </div>
            </div>
            <div className={styles.sushiContainer}>
                <Image 
                    src='/images/sushi.png'
                    alt="sushi"
                    height={400}
                    width={100}
                />
            </div>
        </div>
    )
}

export default Review