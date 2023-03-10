import Navbar from '../src/globals/Navbar/Navbar'
import '../styles/globals.css'
import '../styles/SimpleForm.scss'
import '../styles/CreateFormStyle.scss'
import '../styles/SmallFormStyle.scss'
import { useEffect } from 'react'
import Aos from 'aos'
import { Provider } from 'react-redux'
import store from '../src/redux/store/index'
import { QueryClientProvider } from 'react-query';
import { QueryClient } from 'react-query';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <QueryClientProvider client={new QueryClient()}>
      <Provider store={store}>
        <Navbar />
        
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  )
}
