import React from 'react'
import Head from 'next/head'
import env from '../src/env'
import SizesTable from '../src/components/sizes-page/SizesTable'

export default function talles({ sizes }) {
    return (
        <>
            <Head>
                <title>Fuku Shop | Talles</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        revalidate: 1
    }
}