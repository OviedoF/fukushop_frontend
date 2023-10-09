import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react';
import styles from './ProductPresentation.module.scss'
import formatNumber from '../../utils/FormatNumbers'
import { useSnackbar } from 'notistack';

export default function ProductPresentation({ product, setColorSelected, sizes, colors, colorSelected, sizeSelected, setSizeSelected }) {
    const [quantity, setQuantity] = useState(1)
    const { enqueueSnackbar } = useSnackbar();
    const message = `¡Hola! me interesa el producto ${product.name}.
    ${colorSelected.name ? `En el color ${colorSelected.name}` : ''} 
    ${sizeSelected.name ? `y talle ${sizeSelected.name}` : ''}
    `

    const addProductToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (!colorSelected.name || !sizeSelected.name) {
            enqueueSnackbar('Debes seleccionar un color y un talle', { variant: 'error' });
            return;
        }

        const productInCart = cart.find(productInCart => productInCart.id === product.id && productInCart.color === colorSelected.name && productInCart.size === sizeSelected.name);

        if (productInCart) {
            productInCart.quantity = productInCart.quantity + quantity;
        } else {
            cart.push({ ...product, quantity: quantity, color: colorSelected.name, size: sizeSelected.name });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        enqueueSnackbar('Producto agregado al carrito', { variant: 'success' });
    }

    return (
        <section className={styles.product_presentation}>
            <h1>{product.name}</h1>
            <h2>{product.clothe_type.name} {product.category.name} {product.subCategory && product.subCategory.name}</h2>

            <div className={styles.product_presentation_description}>
                <p>{product.description}</p>
            </div>

            <div className={styles.product_presentation_sizes}>
                <ul>
                    {sizes.map((size, index) => (
                        <li
                            key={index}
                            style={{
                                background: sizeSelected.name === size.name ? 'var(--color-alternative)' : 'var(--color-primary)',
                                color: sizeSelected.name === size.name ? 'var(--color-primary)' : 'var(--color-text)',
                            }}
                            onClick={() => setSizeSelected(size)}
                        >
                            {size.name}
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.product_presentation_colors}>
                <ul>
                    {colors.map((color, index) => (
                        <li key={index} style={{ background: color.hex }} onClick={
                            () => setColorSelected(color)
                        }>
                            {color.hex === colorSelected.hex && <FontAwesomeIcon icon={faCheck} color={'var(--color-alternative)'} />}
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.product_presentation_quantity}>
                <div className={styles.product_presentation_quantity__buttons}>
                    <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1} className={styles.minus}>-</button>
                    <p>{quantity}</p>
                    <button onClick={() => setQuantity(quantity + 1)} className={styles.add}>+</button>
                </div>
            </div>

            <div className={styles.product_presentation_price}>
                <p className={styles.product_price}>
                    {product.discount > 0 ? (
                        <>
                            ARS ${formatNumber(quantity * product.priceWithOffer)}
                            <span className={styles.product_price__discount}>ARS {formatNumber(quantity * product.price)}</span>
                        </>
                    ) : `ARS $${formatNumber(quantity * product.price)}`}
                </p>
            </div>

            <a href={`https://api.whatsapp.com/send?phone=543492287151&text=${message}`} target="_blank" rel="noreferrer" className={styles.product_presentation_button}>
                <button className='button_design'>
                    <p>¡Quiero este producto!
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z" style={{
                                fill: 'var(--color-text)',
                            }} />
                        </svg>
                    </p>
                </button>
            </a>
        </section >
    )
}
