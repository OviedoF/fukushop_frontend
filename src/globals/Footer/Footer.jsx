import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import logo from '../../assets/icon.png'
import { faFacebook, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer id={styles.footer}>
        <section>
            <ul>
                <li>Soporte</li>
                <li>Contáctanos</li>
                <li>Políticas de envío y reembolso</li>
                <li>Terminos y condiciones</li>
            </ul>
        </section>

        <section id={styles.footer_copyright}>
            <div className={styles.img_container}>
                <Image src={logo} alt="Fuku Shop" width={200} height={200} />
            </div>
            <p>
                Copyright © 2023 Fuku Shop. Todos los derechos reservados. El contenido de esta tienda en línea, incluyendo textos, imágenes, diseños y logotipos, está protegido por derechos de autor y otras leyes de propiedad intelectual. Queda estrictamente prohibida la reproducción, distribución, modificación, exhibición o transmisión de cualquier contenido sin el permiso previo y por escrito de Fuku Shop.
            </p>

            <p>
                Esta página web fue diseñada y desarrollada por OvDev. Nos enorgullece haber creado una plataforma intuitiva y fácil de usar para nuestros clientes. Si tienes alguna pregunta o comentario sobre la tienda en línea, por favor contáctanos. ¡Gracias por elegir Fuku Shop!
            </p>

            <ul id='footer_social_media'>
                <li><a href={'https://www.facebook.com'}><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li><a href={'https://www.instagram.com'}><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href={'https://www.pinterest.com'}><FontAwesomeIcon icon={faPinterest} /></a></li>
            </ul>
        </section>

        <section>
            <ul>
                <li><a href=''>Todos los productos</a></li>
                <li><a href=''>Nuevos productos</a></li>
                <li><a href=''>Categorias</a></li>
                <li><a href=''>Sobre nosotros</a></li>
            </ul>
        </section>
    </footer>
  )
}
