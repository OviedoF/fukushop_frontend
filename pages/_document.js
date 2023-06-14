import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta title='Fuku Shop | Tienda de ropa japonesa' />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Fuku Shop" />
        <meta name="language" content="es" />  
        <meta name='icon' href='/favicon.ico' />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
