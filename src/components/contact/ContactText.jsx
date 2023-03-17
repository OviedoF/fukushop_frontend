import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './ContactText.module.scss'
import { motion } from 'framer-motion';

export default function ContactText() {
    return (
        <motion.div className={styles.message_container}
            initial={{ y: -50, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.8 }}
        >
            <h4>¡Hola! ¡Qué gusto tenerte por aquí! 😃</h4>
            <p>
                Nos encanta estar en contacto contigo y queremos que sepas que estamos disponibles para cualquier duda o consulta.
            </p>

            <p>
                Si necesitas ayuda con tu pedido, tienes alguna pregunta sobre nuestros productos o simplemente quieres saludarnos, ¡no dudes en escribirnos! Estamos aquí para ayudarte en todo lo que necesites.
            </p>

            <p>
                Además, si tienes alguna sugerencia o reclamo que quieras compartir con nosotros, también puedes hacerlo a través de este formulario y nos pondremos en contacto contigo lo antes posible para solucionarlo.
            </p>

            <p>
                Por último, si prefieres comunicarte con nosotros a través de las redes sociales, ¡estamos ahí también! ¡Síguenos y mantente al día con nuestras novedades!
            </p>

            <p>
                ¡Muchísimas gracias por tu interés en Fuku Shop! Estamos ansiosos de poder ayudarte y ser parte de tu experiencia.
            </p>

            <p>¡Un abrazo! 🤗
                Equipo de Fuku Shop</p>

            <ul className={styles.social_media}>
                <li>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                        @fukushop (prox)
                    </a>
                </li>

                <li>
                    <a href="mailto:contacto@fukushop.com.ar" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} />
                        contacto@fukushop.com.ar
                    </a>
                </li>

                <li>
                    <a href="https://wa.me/543492287151" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} />
                        +54 3492 287151
                    </a>
                </li>
            </ul>
        </motion.div>
    )
}