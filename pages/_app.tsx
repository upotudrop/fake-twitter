import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { twitterStore } from '../store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={twitterStore}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
