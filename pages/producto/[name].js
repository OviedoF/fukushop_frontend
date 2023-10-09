import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import ImagesSlider from '../../src/components/product-page/ImagesSlider'
import ProductPresentation from '../../src/components/product-page/ProductPresentation'
import env from '../../src/env'
import Details from '../../src/components/product-page/Details';

export default function ProductPage({ product, sizes }) {
    const [colorSelected, setColorSelected] = useState(product.colors[0])
    const [sizeSelected, setSizeSelected] = useState({})

    useEffect(() => {
        console.log(colorSelected)
    }, [colorSelected])

    return (
        <>
            <Head>
                <title>{product.name} | Fuku Shop</title>
                <meta name="description" content='¡Bienvenidos a Fuku Shop! ✌️ Descubre nuestra amplia selección de ropa de estilo asiático y anime, con diseños exclusivos y de tendencia. 🥳🥳 Compra prendas hechas sin maltrato animal y disfruta de la moda de una forma más consciente. ¡Visítanos ahora y vive la experiencia Fuku Shop!' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="ropa anime, ropa japonesa, moda anime, moda japonesa, cosplay, ropa de anime para mujeres, ropa de anime para hombres, tienda de ropa anime, anime, remeras anime, sakura" />
                <meta property="og:title" content={`${product.name} | Fuku Shop`} />
                <meta property="og:description" content="¡Bienvenidos a Fuku Shop! ✌️ Descubre nuestra amplia selección de ropa de estilo asiático y anime, con diseños exclusivos y de tendencia. 🥳🥳" />
                <meta property="og:image" content={colorSelected.principalImage} />
                <link rel="canonical" href={`https://fukushop.com.ar/${product.name.replaceAll(' ', '_')}`} />
            </Head>

            <main>
                <section className='product'>
                    <ImagesSlider colorSelected={colorSelected} product={product} />

                    <ProductPresentation
                        product={product}
                        colorSelected={colorSelected}
                        setColorSelected={setColorSelected}
                        sizes={sizes}
                        colors={product.colors}
                        sizeSelected={sizeSelected}
                        setSizeSelected={setSizeSelected}
                    />
                </section>

                <Details product={product} sizes={sizes} />

                <style jsx>{`
                    main {
                        margin-top: 3rem;
                        padding: 70px var(--padding-from-borders);
                    }

                    .product {
                        display: flex;
                        align-items: flex-start;
                    }

                    @media screen and (max-width: 768px) {
                        .product {
                            flex-direction: column;
                        }
                    }
                `}</style>
            </main>
        </>
    )
}


export const getStaticPaths = async () => {
    const res = await fetch(`${env.API_URL}/products`)
    const products = await res.json()

    const paths = products.map(product => ({
        params: { name: product.name.replaceAll(' ', '_') }
    }));

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const productName = decodeURIComponent(params.name).replaceAll('_', ' ');
    const res = await fetch(`${env.API_URL}/products/${productName}`)
    const product = await res.json()

    const sizesFetch = await fetch(`${env.API_URL}/sizes`)
    const sizes = await sizesFetch.json()

    return {
        props: {
            product,
            sizes
        },
        revalidate: 1
    }
}