import Navbar from '../src/globals/Navbar/Navbar'
import '../styles/globals.scss'
import '../styles/SimpleForm.scss'
import '../styles/CreateFormStyle.scss'
import '../styles/SmallFormStyle.scss'
import '../styles/GlassmorphismForm.scss'
import '../styles/ButtonAnimationDesign.scss'
import '../styles/animations.scss'
import { Provider } from 'react-redux'
import store from '../src/redux/store/index'
import { QueryClientProvider } from 'react-query';
import { QueryClient } from 'react-query';
import Footer from '../src/globals/Footer/Footer'
import { SnackbarProvider } from 'notistack'

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Provider store={store}>
        <SnackbarProvider autoHideDuration={1000} anchorOrigin={
          { vertical: 'bottom', horizontal: 'center' }
        } >
          <Navbar />

          <Component {...pageProps} />

          <Footer />
        </SnackbarProvider>
      </Provider>
    </QueryClientProvider>
  )
}
