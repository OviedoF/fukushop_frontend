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
        <title>Fuku Shop - Tienda de ropa urbana japonesa</title>
        <meta name="description" content="La mejor calidad y diseño en ropa urbana con estilo japonés ⭐⭐⭐⭐⭐ tela 100% algodón y gran cantidad de diseños, ¿qué esperas?" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <Hero />
        <ShowCategories />
      </main>
      
    </>
  )
}
