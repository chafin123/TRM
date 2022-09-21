import Head from 'next/head'
import Header from '../components/organism/Header'
import Carousel from '../components/organism/Carousel'
import styles from '../styles/Home.module.css'
import Welcome from '../components/organism/Welcome'
import Review from '../components/organism/Review'
import Footer from '../components/organism/Footer'
import reviews from '../shared/Reviews.json'
export default function Home({ data }) {


  return (
    <div className={styles.container}>
      <Head>
        <title>Basil Ginger</title>
        <meta name="description" content="Basil Ginger" />
        <link rel="stylesheet" href="https://use.typekit.net/vbe1upt.css"></link>
      </Head>
      <Header href='#bop'/>

      <main className={styles.main}>
        <Carousel/>
        <Welcome/>
        <Review props={data}/>
        <Footer id='bop'/>
      </main>
    </div>
  )
}
export async function getStaticProps() {
  const res = await fetch('https://api.sheety.co/b6dbcc47ec9ab905fd53f75df4e9a1c0/restaurantMenu/reviews')
  const data = await res.json()
  return {
      props: {
          data,
      },
  }
}
