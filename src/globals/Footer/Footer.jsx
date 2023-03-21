import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faFacebook, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import styles from './Footer.module.scss'
import Link from 'next/link'
import routes from '../../routes'
import env from '../env'

export default function Footer() {
    return (
        <footer id={styles.footer}>
            <section>
                <ul>
                    <li><Link href={routes.contact}>Contáctanos</Link></li>
                    <li><Link href={routes.politics || '/'}>Políticas de envío y reembolso</Link></li>
                    <li><Link href={routes.sizes}>Talles</Link></li>
                </ul>
            </section>

            <section className={styles.footer_copyright} id={styles.footer_copyright_noresponsive}>
                <div className={styles.img_container}>
                    <Image src={env.logoUrl} alt="Fuku Shop" width={200} height={200} />
                </div>
                <p>
                    Copyright © 2023 Fuku Shop. Todos los derechos reservados. El contenido de esta tienda en línea, incluyendo textos, imágenes, diseños y logotipos, está protegido por derechos de autor y otras leyes de propiedad intelectual. Queda estrictamente prohibida la reproducción, distribución, modificación, exhibición o transmisión de cualquier contenido sin el permiso previo y por escrito de Fuku Shop.
                </p>

                <p>
                    Esta página web fue diseñada y desarrollada por OvDev. Nos enorgullece haber creado una plataforma intuitiva y fácil de usar para nuestros clientes. Si tienes alguna pregunta o comentario sobre la tienda en línea, por favor contáctanos. ¡Gracias por elegir Fuku Shop!
                </p>

                <ul id='footer_social_media'>
                    <li>
                        <a href={'https://www.facebook.com'} target={'_blank'}>
                            <FontAwesomeIcon icon={faFacebook} />
                            <span className="sr-only">Ir al Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href={'https://www.instagram.com'} target={'_blank'}>
                            <FontAwesomeIcon icon={faInstagram} />
                            <span className="sr-only">Ir al Instagram</span>
                        </a>
                    </li>
                    <li>
                        <a href={'https://www.pinterest.com'} target={'_blank'}>
                            <FontAwesomeIcon icon={faPinterest} />
                            <span className="sr-only">Ir al Pinterest</span>
                        </a>
                    </li>
                </ul>
            </section>

            <section>
                <ul>
                    <li><Link href={routes.products}>Todos los productos</Link></li>
                    <li><Link href='/#categories'>Categorias</Link></li>
                    <li><Link href={routes.about}>Sobre nosotros</Link></li>
                </ul>
            </section>

            <section className={styles.footer_copyright} id={styles.footer_copyright_nocomputer}>
                <div className={styles.img_container}>
                    <Image src={env.logoUrl} alt="Fuku Shop" width={200} height={200} />
                </div>
                <p>
                    Copyright © 2023 Fuku Shop. Todos los derechos reservados. El contenido de esta tienda en línea, incluyendo textos, imágenes, diseños y logotipos, está protegido por derechos de autor y otras leyes de propiedad intelectual. Queda estrictamente prohibida la reproducción, distribución, modificación, exhibición o transmisión de cualquier contenido sin el permiso previo y por escrito de Fuku Shop.
                </p>

                <p>
                    Esta página web fue diseñada y desarrollada por OvDev. Nos enorgullece haber creado una plataforma intuitiva y fácil de usar para nuestros clientes. Si tienes alguna pregunta o comentario sobre la tienda en línea, por favor contáctanos. ¡Gracias por elegir Fuku Shop!
                </p>

                <ul id='footer_social_media'>
                    <li>
                        <a href={'https://www.facebook.com'} target={'_blank'}>
                            <FontAwesomeIcon icon={faFacebook} />
                            <span className="sr-only">Ir al Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href={'https://www.instagram.com'} target={'_blank'}>
                            <FontAwesomeIcon icon={faInstagram} />
                            <span className="sr-only">Ir al Instagram</span>
                        </a>
                    </li>
                    <li>
                        <a href={'https://www.pinterest.com'} target={'_blank'}>
                            <FontAwesomeIcon icon={faPinterest} />
                            <span className="sr-only">Ir al Pinterest</span>
                        </a>
                    </li>
                </ul>
            </section>
        </footer>
    )
}
