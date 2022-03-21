import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function CookBook({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default CookBook
