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
      <div className=" pb-16 text-center w-full before:bg-blend-multiply before:contents-[''] before:absolute before:left-0 before:w-[100rem] before:h-[300px] before:z-[-1] before:bg-[#881b1d]/90">
        <div className="pt-10 flex justify-evenly">
          <div className=" pb-16 w-1/3 text-center">
            <Image className=' mix-blend-multiply' src="/images/TurkeyRed.svg" alt='' width={200} height={200}/>
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
export async function getServerSideProps() {
  const res = await fetch('https://api.sheety.co/b6dbcc47ec9ab905fd53f75df4e9a1c0/turkeyRedMenu/specials')
  const data = await res.json()

    return {
        props: {
            data,
        },
    }
}
