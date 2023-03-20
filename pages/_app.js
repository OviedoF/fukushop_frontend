import Navbar from '../src/globals/Navbar/Navbar'
import '../styles/globals.scss'
import '../styles/SimpleForm.scss'
import '../styles/CreateFormStyle.scss'
import '../styles/SmallFormStyle.scss'
import '../styles/GlassmorphismForm.scss'
import '../styles/ButtonAnimationDesign.scss'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from '../src/redux/store/index'
import { QueryClientProvider } from 'react-query';
import { QueryClient } from 'react-query';
import Footer from '../src/globals/Footer/Footer'


export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Provider store={store}>
        <Navbar />

        <Component {...pageProps} />

        <Footer />
      </Provider>
    </QueryClientProvider>
  )
}
