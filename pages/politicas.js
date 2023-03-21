import React from 'react'
import Head from 'next/head'

export default function Politicas() {
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
                <link rel="canonical" href="https://fukushop.com.ar/politicas" />
            </Head>

            <main>
                <h1>Devoluciones</h1>

                <p>
                En nuestra tienda de ropa, nos comprometemos a ofrecer productos de calidad y un excelente servicio al cliente. Si por alguna razón no estás completamente satisfecho con tu compra, ofrecemos una política de reembolso y devoluciones para garantizar tu satisfacción.
                </p>

                <h2>Politica de devolucion:</h2>
                <p>
                Si por alguna razón no estás satisfecho con tu compra, aceptamos devoluciones dentro de los 14 días posteriores a la recepción del producto. Para poder procesar una devolución, el producto debe estar en su estado original, sin usar, con todas las etiquetas y envoltorios originales. Los artículos devueltos deben estar en condiciones de ser revendidos. Si la prenda se encuentra en mal estado, no se podrá realizar el reembolso o devolución.
                </p>

                <h2>Proceso de devolucion:</h2>
                <p>
                Para solicitar una devolución, por favor contáctanos a través de nuestro formulario de contacto o correo electrónico proporcionando tu información de contacto y número de orden de compra. Una vez que hayamos confirmado la elegibilidad de tu devolución, te proporcionaremos instrucciones detalladas sobre cómo enviar de vuelta el producto.
                </p>

                <h2>Politica de reembolso:</h2>
                <p>
                Una vez que hayamos recibido y verificado la devolución, procesaremos un reembolso en un plazo de 5 a 7 días hábiles. El reembolso se realizará en la misma forma de pago que se utilizó para la compra original. Tenga en cuenta que los gastos de envío y manejo no son reembolsables.
                </p>

                <h2>Cambio de productos:</h2>
                <p>
                Si necesitas cambiar un producto por otro, por favor contáctanos por correo electrónico o formulario de contacto. Por favor, incluye tu información de contacto y número de orden de compra. Una vez que hayamos confirmado la elegibilidad del cambio, te proporcionaremos instrucciones detalladas sobre cómo enviar de vuelta el producto y cómo procesaremos el cambio.
                </p>

                <p>
                En nuestra tienda, nos enorgullece ofrecer productos de calidad y un servicio al cliente excepcional. Si tienes alguna pregunta o inquietud, por favor no dudes en contactarnos. Estamos aquí para ayudarte y asegurarnos de que estés completamente satisfecho con tu compra.
                </p>

                <style jsx>{`
                    @media (min-width: 768px) {
                        main{
                            padding: 3rem;
                        }

                        h1{
                            font-size: 2rem;
                        }

                        h2{
                            font-size: 1.5rem;
                            text-align: left;
                            margin-top: 3rem;
                        }

                        h2::after{
                            content: '';
                            display: none;
                        }

                        p{
                            font-size: 1rem;
                            margin: 1rem 0;
                        }
                    }
                `}</style>
            </main>
        </>
    )
}
