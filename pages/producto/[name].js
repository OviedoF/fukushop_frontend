import Head from 'next/head'
import React from 'react'
import env from '../../src/env'

export default function ProductPage({ product }) {
    console.log(product)

    return (
        <>
            <Head>
                <title>{product.name} | Fuku Shop</title>
                <meta name="description" content='¡Bienvenidos a Fuku Shop! ✌️ Descubre nuestra amplia selección de ropa de estilo asiático y anime, con diseños exclusivos y de tendencia. 🥳🥳 Compra prendas hechas sin maltrato animal y disfruta de la moda de una forma más consciente. ¡Visítanos ahora y vive la experiencia Fuku Shop!' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="ropa anime, ropa japonesa, moda anime, moda japonesa, cosplay, ropa de anime para mujeres, ropa de anime para hombres, tienda de ropa anime, anime, remeras anime, sakura" />
                <meta property="og:title" content={`${product.name} | Fuku Shop`} />
                <meta property="og:description" content="¡Bienvenidos a Fuku Shop! ✌️ Descubre nuestra amplia selección de ropa de estilo asiático y anime, con diseños exclusivos y de tendencia. 🥳🥳" />
            </Head>

            <main>
                <h1>{product.name}</h1>
            </main>
        </>
    )
}


export const getStaticPaths = async () => {
    const res = await fetch(`${env.API_URL}/products`)
    const products = await res.json()

    const paths = products.map(product => ({
        params: { name: product.name }
    }));

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const res = await fetch(`${env.API_URL}/products/${params.name}`)
    const product = await res.json()

    return {
        props: {
            product
        }
    }
}