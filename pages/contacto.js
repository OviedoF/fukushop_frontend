import Head from 'next/head'
import React from 'react'
import ContactForm from '../src/components/contact/ContactForm'
import ContactText from '../src/components/contact/ContactText'

export default function contacto() {
    return (
        <>
            <Head>
                <title>Fuku Shop | Contacto</title>
                <meta name="description" content='¡Bienvenidos a Fuku Shop! ✌️ Descubre nuestra amplia selección de ropa de estilo asiático y anime, con diseños exclusivos y de tendencia. 🥳🥳 Compra prendas hechas sin maltrato animal y disfruta de la moda de una forma más consciente. ¡Visítanos ahora y vive la experiencia Fuku Shop!' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="ropa anime, ropa japonesa, moda anime, moda japonesa, cosplay, ropa de anime para mujeproductsFetch, ropa de anime para hombres, tienda de ropa anime, anime, remeras anime" />
                <meta property="og:title" content="Fuku Shop | Ropa estilo japones y anime para argentina 🍙" />
                <meta property="og:description" content="¡Bienvenidos a Fuku Shop! ✌️ Descubre nuestra amplia selección de ropa de estilo asiático y anime, con diseños exclusivos y de tendencia. 🥳🥳" />
                <meta property="og:image" content="https://res.cloudinary.com/syphhy/image/upload/v1678072035/logo_mitkyo.png" />
                <link rel="canonical" href="https://fukushop.com.ar/contacto" />
            </Head>

            <main>
                <h1>Contacto</h1>

                <section id='contact_section'>
                    <ContactText />

                    <ContactForm />
                </section>

                <style jsx>{`
                    main {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding: 0 7rem;
                        margin: 3rem auto 6rem;
                        width: 100vw;
                    }

                    h1 {
                        font-size: 2rem;
                        font-weight: 600;
                        margin: 2rem;
                    }

                    #contact_section {
                        display: flex;
                        width: 100%;
                        justify-content: space-between;
                    }

                    @media screen and (max-width: 900px) {
                        main{
                            padding: 0 1rem;
                        }

                        #contact_section {
                            flex-direction: column-reverse;
                        }
                    }
                `}</style>
            </main>
        </>
    )
}
