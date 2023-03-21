import Head from 'next/head'
import Hero from '../src/components/home/hero/Hero'
import ShowCategories from '../src/components/home/categories/ShowCategories'
import env from '../src/env'
import Featured from '../src/components/home/featured/Featured'
import { motion } from 'framer-motion'

export default function Home({ products, categories }) {
  return (
    <>
      <Head>
        <title>Fuku Shop | Tienda de ropa urbana japonesa</title>
        <meta name="description" content='¡Bienvenidos a Fuku Shop! ✌️ Descubre nuestra amplia selección de ropa de estilo asiático y anime, con diseños exclusivos y de tendencia. 🥳🥳 Compra prendas hechas sin maltrato animal y disfruta de la moda de una forma más consciente. ¡Visítanos ahora y vive la experiencia Fuku Shop!' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="ropa anime, ropa japonesa, moda anime, moda japonesa, cosplay, ropa de anime para mujeres, ropa de anime para hombres, tienda de ropa anime, anime, remeras anime" />
        <meta property="og:title" content="Fuku Shop | Ropa estilo japones y anime para argentina 🍙" />
        <meta property="og:description" content="¡Bienvenidos a Fuku Shop! ✌️ Descubre nuestra amplia selección de ropa de estilo asiático y anime, con diseños exclusivos y de tendencia. 🥳🥳" />
        <meta property="og:image" content="https://res.cloudinary.com/syphhy/image/upload/v1678072035/logo_mitkyo.png" />
        <link rel="canonical" href="https://fukushop.com.ar/" />
      </Head>

      <motion.main>
        <Hero />
        <ShowCategories categories={categories} />
        <Featured products={products} />
      </motion.main>

    </>
  )
}

// getStaticProps

export async function getStaticProps() {
  const res = await fetch(`${env.API_URL}/products`)
  const resCategories = await fetch(`${env.API_URL}/category`)
  const products = await res.json()
  const categories = await resCategories.json()

  return {
    props: {
      products: products || [],
      categories: categories || []
    }
  }
}