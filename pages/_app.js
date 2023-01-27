import Navbar from '../src/globals/Navbar/Navbar'
import '../styles/globals.css'
import { useEffect } from 'react'
import Aos from 'aos'

export default function App({ Component, pageProps }) {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <>
      <Navbar />
      
      <Component {...pageProps} />
    </>
  )
}
