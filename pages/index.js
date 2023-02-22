import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Hero from '../src/components/home/hero/Hero'
import ShowCategories from '../src/components/home/categories/ShowCategories'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Fuku Shop | Tienda de ropa urbana japonesa</title>
        <meta name="description" content='¡Bienvenidos a Fuku Shop! ✌️ Descubre nuestra amplia selección de ropa de estilo asiático y anime, con diseños exclusivos y de tendencia. 🥳🥳 Compra prendas hechas sin maltrato animal y disfruta de la moda de una forma más consciente. ¡Visítanos ahora y vive la experiencia Fuku Shop!' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="ropa anime, ropa japonesa, moda anime, moda japonesa, cosplay, ropa de anime para mujeres, ropa de anime para hombres, tienda de ropa anime, anime, remeras anime" />
        <meta property="og:title" content="Fuku Shop | Ropa estilo japones y anime para argentina 🍙" />
        <meta property="og:description" content="¡Bienvenidos a Fuku Shop! ✌️ Descubre nuestra amplia selección de ropa de estilo asiático y anime, con diseños exclusivos y de tendencia. 🥳🥳" />
      </Head>
      
      <main>
        <Hero />
        <ShowCategories />
      </main>
      
    </>
  )
}
