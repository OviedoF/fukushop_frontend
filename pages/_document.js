import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content='¡Bienvenidos a Fuku Shop! ✌️ Descubre nuestra amplia selección de ropa de estilo urbano, con diseños exclusivos 🥳🥳 ' />
        <meta name="keywords" content="ropa anime, ropa japonesa, moda anime, moda japonesa, cosplay, ropa de anime para mujeres, ropa de anime para hombres, tienda de ropa anime, anime, remeras anime, remeras oversize argentina, remera oversize, estilo urbano, urbano, argentina" />
        <meta property="og:title" content="Fuku Shop | Tienda de ropa urbana en Argentina ✨" />
        <meta property="og:description" content="¡Bienvenidos a Fuku Shop! ✌️ Descubre nuestra amplia selección de ropa de estilo urbano, con diseños exclusivos 🥳🥳" />
        <meta property="og:image" content="https://res.cloudinary.com/syphhy/image/upload/v1678072035/logo_mitkyo.png" />
        <link rel="canonical" href="https://fukushop.com.ar/" />
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
