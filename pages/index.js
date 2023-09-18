/* eslint-disable react/no-unescaped-entities */
import styles from '../styles/Menu.module.css'
import Appetizers from './../components/molecules/Appetizers';
import Entrees from '../components/molecules/Entrees';
import tempData from '../shared/specials.json'
import Soup from '../components/molecules/Soup';
import Image from 'next/image';

export default function Menu({ data }) {
    return (
    <div className={styles.menuContainer}>
      <div className='text-center'>
        <div className="pt-10 pb-10">
          <Image src="/images/logo.png" alt='' width={300} height={300}/>
        </div>
        <div className='pb-10'>
          <h2 className=' text-5xl'>Today's Specials</h2>
        </div>
      </div>

      <div className={styles.entriesContainer}>
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
