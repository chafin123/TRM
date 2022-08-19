import Phone from '../atoms/Phone'
import Location from '../atoms/Location'
import Schedule from '../atoms/Schedule';
import styles from '../../styles/Info.module.css'


const Info = () => {
    return (
        <div className={className}>
            <Phone className={styles.phone}/>
            <Location className={styles.location}/>
            <Schedule className={styles.schedule}/>
        </div>
    )
}


export default Info