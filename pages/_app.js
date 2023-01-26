import Navbar from '../src/globals/Navbar/Navbar'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      
      <Component {...pageProps} />
    </>
  )
}
