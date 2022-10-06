import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Login.module.scss'
import LoginForm from '../ui/molecules/LoginForm'

const LoginPage: NextPage = () => {
  return (
    <article>
      <LoginForm />
      <Link href="/"><a className={styles.link}>Main</a></Link>
    </article>
  )
}

export default LoginPage
