import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Login.module.scss'
import LoginForm from '../ui/molecules/LoginForm'

const LoginPage: NextPage = () => {
  return (
    <article>
      <LoginForm />
    </article>
  )
}

export default LoginPage
