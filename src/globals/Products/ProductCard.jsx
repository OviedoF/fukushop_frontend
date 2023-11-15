import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import styles from './ProductCard.module.scss'
import ProductColorsList from './ProductColorsList';
import Image from 'next/image';

export default function ProductCard({ product, sizes }) {
    const [colorSelected, setColorSelected] = useState({});
    const [productColors, setProductColors] = useState([]);

    const getColors = () => {
        const colors = product.colors.map(variant => variant.name);
        setProductColors(colors);
        setColorSelected(product.colors[0]);
    }

    useEffect(() => {
        getColors();
    }, [])

    return (
        <div key={product._id} className={styles.product_card} animation='appear'>
            <div className={styles.product_card__image_container}>
                <Image src={colorSelected.principalImage} alt={product.name} fill style={{
                    objectFit: 'contain',
                }} />
            </div>

            {product.discount > 0 && <span className={styles.product_card__discount}>{product.discount}% OFF</span>}
            <ProductColorsList colors={product.colors} product={product} colorSelected={colorSelected} setColorSelected={setColorSelected} />

            <div className={styles.product_card__info}>
                <h3 className={styles.product_name}>{product.name}</h3>
                <p className={styles.clothe_type}>{product.clothe_type.name}</p>

                <p className={styles.product_price}>
                    {product.discount > 0 ? (
                        <>
                            ${product.priceWithOffer}
                            <span className={styles.product_price__discount}>{product.price}</span>
                        </>
                    ) : `$${product.price}`}

                </p>

                {
                    sizes.length > 0 && (
                        <div className={styles.product_sizes}>
                            <ul className={styles.product_sizes__list}>
                                {sizes.map(size => (
                                    <li key={size._id} className={styles.product_sizes__item}>{size.name}</li>
                                ))}
                            </ul>
                        </div>
                    )
                }

                <Link href={encodeURI(`/producto/${product.name}`).replaceAll('%20', '_')} className={styles.product_card__link}>
                    <button>Ver producto</button>
                </Link>
            </div>
        </div>
    )
}
