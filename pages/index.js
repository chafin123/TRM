import Head from 'next/head'
import Header from '../components/organism/Header'
import Carousel from '../components/organism/Carousel'
import styles from '../styles/Home.module.css'
import Welcome from '../components/organism/Welcome'
import Review from '../components/organism/Review'
import Footer from '../components/organism/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Basil Ginger</title>
        <meta name="description" content="Basil Ginger" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/vbe1upt.css"></link>
      </Head>
      <Header/>

      <main className={styles.main}>
        <Carousel/>
        <Welcome/>
        <Review />
        <Footer />
      </main>
    </div>
  )
}
