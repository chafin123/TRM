import styles from '../styles/Menu.module.css'
import Appetizers from './../components/molecules/Appetizers';
import Entrees from '../components/molecules/Entrees';
import tempData from '../shared/specials.json'
import Soup from '../components/molecules/Soup';
import Image from 'next/image';

export default function Menu({ data }) {
    return (
    <div className={styles.menuContainer}>
      <div className=" text-center">
        <Image src="/../public/images/Turkey Red Logo@2x.png" alt='' width={400} height={400}/>
      </div>


      <div className={styles.entriesContainer}>
        <div className='text-center'>
          <h2 className=' text-5xl'>Today's Specials</h2>
        </div>
          <Soup props={data} className={styles} moduleChange ={styles}/>
          <Appetizers props={data} className={styles} moduleChange={styles}/>
          <Entrees props={data} className={styles} moduleChange={styles}/>
      </div>
    </div>   
    )
}
export async function getStaticProps() {
    const data = tempData;
    return {
        props: {
            data,
        },
    }
}
