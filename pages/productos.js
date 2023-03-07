import React from 'react'
import Head from 'next/head'
import Filters from '../src/components/products-page/Filters'
import env from '../src/env'
import ProductsSection from '../src/components/products-page/ProductsSection'

export default function products({products, categories, types, colors, sizes}) {
    return (
        <>
            <Head>
                <title>Fuku Shop | Catálogo de ropa anime o japonesa</title>
                <meta name="description" content='¡Bienvenidos a Fuku Shop! ✌️ Descubre nuestra amplia selección de ropa de estilo asiático y anime, con diseños exclusivos y de tendencia. 🥳🥳 Compra prendas hechas sin maltrato animal y disfruta de la moda de una forma más consciente. ¡Visítanos ahora y vive la experiencia Fuku Shop!' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="ropa anime, ropa japonesa, moda anime, moda japonesa, cosplay, ropa de anime para mujeproductsFetch, ropa de anime para hombres, tienda de ropa anime, anime, remeras anime" />
                <meta property="og:title" content="Fuku Shop | Ropa estilo japones y anime para argentina 🍙" />
                <meta property="og:description" content="¡Bienvenidos a Fuku Shop! ✌️ Descubre nuestra amplia selección de ropa de estilo asiático y anime, con diseños exclusivos y de tendencia. 🥳🥳" />
                <meta property="og:image" content="https://res.cloudinary.com/syphhy/image/upload/v1678072035/logo_mitkyo.png" />
            </Head>

            <main>
                <Filters categories={categories} types={types} colors={colors} sizes={sizes} />

                <ProductsSection products={products} />

                <style jsx>{`
                    main {
                        display: flex;
                        width: 100vw;
                    }
                `}</style>
            </main>
        </>
    )
}

export async function getStaticProps() {
    const productsFetch = await fetch(`${env.API_URL}/products`)
    const products = await productsFetch.json()

    const categoriesFetch = await fetch(`${env.API_URL}/category`)
    const categories = await categoriesFetch.json()

    const typesFetch = await fetch(`${env.API_URL}/types`)
    const types = await typesFetch.json()

    const colorsFetch = await fetch(`${env.API_URL}/productColor`)
    const colors = await colorsFetch.json()

    const sizesFetch = await fetch(`${env.API_URL}/sizes`)
    const sizes = await sizesFetch.json()
  
    return {
      props: {
        products: products || [],
        categories: categories || [],
        types: types || [],
        colors: colors || [],
        sizes: sizes || []
      }
    }
  }