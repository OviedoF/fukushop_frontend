import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './ProductPresentation.module.scss'
import formatNumber from '../../utils/FormatNumbers'
import env from '../../env'

export default function ProductPresentation({ product, sizes, colors, variant }) {
    const message = `¡Hola! me gustaría saber más sobre el producto "${product.name}"
¿Podrías enviarme más información? 人(_ _*)
¡Muchas gracias! :D

Para que las cosas nos sean más fácil a los dos: 
${env.FRONTEND_URL}/producto/${encodeURIComponent(product.name)}
`

    return (
        <section className={styles.product_presentation}>
            <h1>{product.name}</h1>
            <h2>{product.clothe_type.name} {product.category.name} {product.subCategory.name}</h2>

            <div className={styles.product_presentation_description}>
                <p>{product.description}</p>
            </div>

            <div className={styles.product_presentation_sizes}>
                <ul>
                    {sizes.map((size, index) => (
                        <li key={index}>{size.name}</li>
                    ))}
                </ul>
            </div>

            <div className={styles.product_presentation_colors}>
                <ul>
                    {colors.map((color, index) => (
                        <li key={index} style={{ background: color._id === variant.color._id ? 'var(--color-secondary)' : color.color }}>
                            {color._id === variant.color._id && <FontAwesomeIcon icon={faCheck} color={'var(--color-success)'} />}
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.product_presentation_price}>
                <p className={styles.product_price}>
                    {product.discount > 0 ? (
                        <>
                            ARS ${formatNumber(product.priceWithOffer)}
                            <span className={styles.product_price__discount}>ARS {formatNumber(product.price)}</span>
                        </>
                    ) : `ARS $${formatNumber(product.price)}`}
                </p>
            </div>

            <a target={'_blank'} href={env.FUKU_WHATSAPP + encodeURIComponent(message)} className={styles.product_presentation_actions}>
                <button className='button_design'>
                    <p>¡Quiero este producto!</p>
                </button>
            </a>
        </section>
    )
}
