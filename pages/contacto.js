import Head from 'next/head'
import React from 'react'
import ContactForm from '../src/components/contact/ContactForm'
import ContactText from '../src/components/contact/ContactText'

export default function contacto() {
    return (
        <>
            <Head>
                <title>Fuku Shop | Contacto</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
