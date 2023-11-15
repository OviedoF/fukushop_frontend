import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Filters from '../src/components/products-page/Filters'
import env from '../src/env'
import ProductsSection from '../src/components/products-page/ProductsSection'
import { useRouter } from 'next/router'

export default function products({products, categories, types, colors, sizes}) {
    const [productsState, setProductsState] = useState(products)
    const [minPrice, setMinPrice] = useState(Math.min(...products.map(product => product.priceWithOffer || product.price)))
    const [maxPrice, setMaxPrice] = useState(Math.max(...products.map(product => product.priceWithOffer || product.price)) + 500)
    const [queryCategory, setQueryCategory] = useState(null)
    const originalProducts = products;
    const router = useRouter();
    const { category } = router.query;

    useEffect(() => {
        if (category) {
            setQueryCategory(categories.find(cat => cat.name === category))
        }
    }, [category])

    useEffect(() => {
        setProductsState(products)
    }, [products])

    return (
        <>
            <Head>
                <title>Fuku Shop | Catálogo de ropa urbana</title>
            </Head>

            <main>
                <Filters categories={categories} types={types} colors={colors} sizes={sizes} products={productsState} setProducts={setProductsState} originalProducts={originalProducts} 
                maxPrice={maxPrice} minPrice={minPrice} queryCategory={queryCategory ? queryCategory._id : null}/>

                <ProductsSection products={productsState} sizes={sizes} />

                <style jsx>{`
                    main {
                        display: flex;
                        width: 100vw;
                    }

                    @media screen and (max-width: 900px) {
                        main {
                            flex-direction: column;
                        }
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
      },
      revalidate: 1
    }
  }