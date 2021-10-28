import Head from 'next/head'

import styles from '../styles/Home.module.scss';


export default function Home() {
  return (
    <>
      <Head>
        <title>Início | ig.news</title>
      </Head>
      
      <h1 className={styles.initialHeader}>
        Building Website
        <p className={styles.paragraph}>
          you can't <span>wait</span> to see
        </p>
      </h1>
    </>
  )
}
