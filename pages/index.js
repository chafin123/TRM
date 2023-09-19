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
      <div className=" pb-16 text-center w-full before:bg-blend-multiply before:contents-[''] before:absolute before:left-0 before:w-[100rem] before:h-[300px] before:z-[-1] before:bg-[#881b1d]">
        <div className="pt-10 flex justify-evenly">
          <div className="pt-10 pb-16 w-1/3 text-end pr-10">
            <Image className=' mix-blend-multiply' src="/images/TurkeyRed.svg" alt='' width={150} height={150}/>
          </div>
          <div className='pb-10 pl-2 z-10 self-center w-2/3 text-start'>
            <h2 className='text-[#ECE7DB] text-7xl'>Today's Specials</h2>
          </div>
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
