import React from 'react'
import Head from 'next/head'

export default function SobreNosotros() {
    return (
        <>
            <Head>
                <title>Fuku Shop | Sobre nosotros</title>
                <meta name="description" content='¡Bienvenidos a Fuku Shop! ✌️ Descubre nuestra amplia selección de ropa de estilo asiático y anime, con diseños exclusivos y de tendencia. 🥳🥳 Compra prendas hechas sin maltrato animal y disfruta de la moda de una forma más consciente. ¡Visítanos ahora y vive la experiencia Fuku Shop!' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="ropa anime, ropa japonesa, moda anime, moda japonesa, cosplay, ropa de anime para mujeproductsFetch, ropa de anime para hombres, tienda de ropa anime, anime, remeras anime" />
                <meta property="og:title" content="Fuku Shop | Ropa estilo japones y anime para argentina 🍙" />
                <meta property="og:description" content="¡Bienvenidos a Fuku Shop! ✌️ Descubre nuestra amplia selección de ropa de estilo asiático y anime, con diseños exclusivos y de tendencia. 🥳🥳" />
                <meta property="og:image" content="https://res.cloudinary.com/syphhy/image/upload/v1678072035/logo_mitkyo.png" />
                <link rel="canonical" href="https://fukushop.com.ar/sobre-nosotros" />
            </Head>

            <main>
                <h1>Sobre nosotros</h1>

                <p>
                    Fuku Shop es una tienda de ropa al estilo anime, asiática y de videojuegos, con diseños exclusivos y de tendencia.

                </p>

                <p>
                    Oriundo de la ciudad de Rafaela, Santa Fe, Argentina, Fuku Shop nació en el año 2023 como un proyecto de emprendimiento de dos jóvenes, que decidieron unirse para crear una tienda de ropa que les permitiera vivir de su pasión: la moda.
                </p>

                <p>
                    Nuestro objetivo es ofrecer una amplia selección de prendas de estilo asiático y anime, con diseños exclusivos y de tendencia, para que puedas vestirte de la forma más original y divertida posible.
                </p>

                <p>
                    Nuestro servicio de atención al cliente está disponible de lunes a viernes de 9 a 18hs, y los sábados de 9 a 13hs. Puedes contactarnos a través de nuestro formulario de contacto, o a través de nuestras redes sociales.
                </p>

                <p style={{textAlign: 'center'}}>
                    ¡Esperamos que disfrutes de tu experiencia en Fuku Shop! ✌️
                </p>

                <style jsx>{`
                    @media (min-width: 768px) {
                        main{
                            padding: 3rem;
                        }

                        p{
                            font-size: 1.2rem;
                            margin-bottom: 2rem;
                        }
                    }
                `}</style>
            </main>
        </>
    )
}
