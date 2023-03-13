import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import ImagesSlider from '../../src/components/product-page/ImagesSlider'
import ProductPresentation from '../../src/components/product-page/ProductPresentation'
import env from '../../src/env'
import Details from '../../src/components/product-page/Details';

export default function ProductPage({ product }) {
    const [productVariant, setProductVariant] = useState(false);
    const [variantColorSizes, setVariantColorSizes] = useState([]);
    const [productColors, setProductColors] = useState([])
    const [allProductSizes, setallProductSizes] = useState([])

    useEffect(() => {
        if (product.variants.length > 0) {
            // Find the first variant that color is black
            const blackVariant = product.variants.find(variant => variant.color === 'black');

            if (blackVariant) {
                setProductVariant(blackVariant);
            } else {
                setProductVariant(product.variants[0]);
            }
        }

        // Get all colors of the product in an array
        const colors = product.variants.map(variant => variant.color);
        // Remove duplicates
        const uniqueColors = colors.map(color => JSON.stringify(color)).filter((color, index, self) => self.indexOf(color) === index).map(color => JSON.parse(color));

        // Get all sizes of the product in an array
        const sizes = product.variants.map(variant => variant.size);
        console.log(sizes)
        // Remove duplicates
        const uniqueSizes = sizes.filter((size, index, self) => self.indexOf(size) === index);
        
        setProductColors(uniqueColors);
        setallProductSizes(uniqueSizes);
    }, [product]);

    useEffect(() => {
        if (productVariant) {
            // Find all variants wich color is the same as the selected variant
            const variantsWithSameColor = product.variants.filter(variant => variant.color._id === productVariant.color._id);

            // Get the sizes of the variants with the same color in an array
            const sizes = variantsWithSameColor.map(variant => variant.size);
            setVariantColorSizes(sizes);
        }
    }, [productVariant])


    if (productVariant) return (
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
                <section className='product'>
                    <ImagesSlider variant={productVariant} product={product} />

                    <ProductPresentation product={product} variant={productVariant} sizes={variantColorSizes} colors={productColors} />
                </section>

                <Details product={product} sizes={allProductSizes} />

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