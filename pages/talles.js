import React from 'react'
import Head from 'next/head'
import env from '../src/env'
import SizesTable from '../src/components/sizes-page/SizesTable'

export default function talles({ sizes }) {
    console.log(sizes)
    return (
        <>
            <Head>
                <title>Fuku Shop | Talles</title>
                <meta name="description" content='¡Bienvenidos a Fuku Shop! ✌️ Descubre nuestra amplia selección de ropa de estilo asiático y anime, con diseños exclusivos y de tendencia. 🥳🥳 Compra prendas hechas sin maltrato animal y disfruta de la moda de una forma más consciente. ¡Visítanos ahora y vive la experiencia Fuku Shop!' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="ropa anime, ropa japonesa, moda anime, moda japonesa, cosplay, ropa de anime para mujeproductsFetch, ropa de anime para hombres, tienda de ropa anime, anime, remeras anime" />
                <meta property="og:title" content="Fuku Shop | Ropa estilo japones y anime para argentina 🍙" />
                <meta property="og:description" content="¡Bienvenidos a Fuku Shop! ✌️ Descubre nuestra amplia selección de ropa de estilo asiático y anime, con diseños exclusivos y de tendencia. 🥳🥳" />
                <meta property="og:image" content="https://res.cloudinary.com/syphhy/image/upload/v1678072035/logo_mitkyo.png" />
                <link rel="canonical" href="https://fukushop.com.ar/talles" />
            </Head>

            <main
                initial={{ y: -50, opacity: 0, scale: 0.8 }}
                animation='appear'
            >
                <h1>Tablas de talles</h1>

                <SizesTable sizes={sizes} title='Remera oversize' />

                <style jsx>{`
                    @media (min-width: 768px) {
                        main{
                            padding-top: 3rem;
                        }
                    }
                `}</style>
            </main>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch(`${env.API_URL}/sizes`)
    const sizes = await res.json()

    return {
        props: {
            sizes
        },
        revalidate: 10
    }
}