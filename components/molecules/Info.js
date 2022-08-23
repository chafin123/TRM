import Phone from '../atoms/Phone'
import Location from '../atoms/Location'
import Schedule from '../atoms/Schedule';
import styles from '../../styles/Info.module.css'


const Info = (props) => {
    return (
        <div className={props.className}>
            <div>
                <Phone className={styles.phone}/>
                <Location className={styles.location}/>
            </div>        
            <div>
                <Schedule className={styles.schedule}/>
            </div>
        
        </div>
    )
}


export default Info