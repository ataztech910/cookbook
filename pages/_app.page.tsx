import '../styles/globals.scss'
import { Provider } from "react-redux";
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import Layout from './components/layout'
import { wrapper } from "./store";
import { changeAuthState } from './store/authSlice';
import { getFromStorageByKey } from './core/local-storage';
import { useEffect } from 'react';
import { LocalStorageKeys } from './core/configs';
import de from "../lang/de.json";
import en from "../lang/en.json";
import { IntlProvider } from "react-intl";
import { useRouter } from 'next/router';

const messages: any = {
  de,
  en
};
export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

function CookBook({ Component , pageProps }: AppProps ) {
  const { store } = wrapper.useWrappedStore(pageProps);

  useEffect(() => {
    const authFromStorage = getFromStorageByKey(LocalStorageKeys.LOGIN);
    if (authFromStorage) {
      const stateFromLocalStoarage = JSON.parse(authFromStorage);
      store.dispatch(changeAuthState(stateFromLocalStoarage));
    }
  }, [store])
  const { locale } = useRouter();
  const localeToString = locale as string;
  
  return (
    <Provider store={store}>
      <Layout>
        <IntlProvider locale={localeToString} messages={messages[localeToString]}>
          <Component {...pageProps} />
        </IntlProvider>
      </Layout>
    </Provider>
  )
}

export default CookBook