import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Fuku Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="es" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
