import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Hello there ! This is the main page of CookBook</h1>
      <Link href="/about"><a className={styles.link}>About</a></Link>
    </div>
  )
}

export default Home
