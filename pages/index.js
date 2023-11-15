import Head from 'next/head'
import Hero from '../src/components/home/hero/Hero'
import ShowCategories from '../src/components/home/categories/ShowCategories'
import env from '../src/env'
import Featured from '../src/components/home/featured/Featured'

export default function Home({ products, categories, sizes }) {
  return (
    <>
      <Head>
        <title>Fuku Shop | Tienda de ropa urbana en Argentina ✨</title>
      </Head>

      <main>
        <Hero />
        {/* <ShowCategories categories={categories} /> */}
        <Featured products={products} sizes={sizes}/>
      </main>

    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${env.API_URL}/products`)
  const resCategories = await fetch(`${env.API_URL}/category`)
  const products = await res.json()
  const categories = await resCategories.json()

  const sizesFetch = await fetch(`${env.API_URL}/sizes`)
  const sizes = await sizesFetch.json()

  return {
    props: {
      products: products || [],
      categories: categories || [],
      sizes: sizes || []
    },
    revalidate: 1
  }
}