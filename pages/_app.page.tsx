import '../styles/globals.scss'
import { Provider } from "react-redux";
import type { AppProps } from 'next/app'
import Layout from './components/layout'
import { wrapper } from "./store";

function CookBook({ Component , pageProps }: AppProps ) {
  const { store } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default CookBook