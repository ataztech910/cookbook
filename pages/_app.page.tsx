import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from './components/layout'
import { ReactElement } from 'react'


function CookBook({ Component , pageProps }: AppProps ) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default CookBook
