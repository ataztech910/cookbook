import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import { LoginService } from './api/core/login.service'

const Home: NextPage = () => {

  const user = LoginService.getInstance()
  console.log('user', user)

  return (
    <div className={styles.container}>
      <h1>Hello there ! This is the main page of CookBook</h1>
      <Link href="/about"><a className={styles.link}>About</a></Link>
    </div>
  )
}

export default Home
