import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import styles from './ProductCard.module.scss'
import ProductColorsList from './ProductColorsList';
import { motion } from 'framer-motion';

export default function ProductCard({ product }) {
    const [variantSelected, setVariantSelected] = useState(null);
    const [colorSelected, setColorSelected] = useState(null);
    const [productColors, setProductColors] = useState([]);
    const [productSizes, setProductSizes] = useState([])

    const getColors = () => {
        const colors = product.variants.map(variant => variant.color);

        // Eliminamos los colores repetidos
        const colorsWithoutDuplicates = colors.map(color => JSON.stringify(color)).filter((value, index, self) => self.indexOf(value) === index).map(color => JSON.parse(color));

        setProductColors(colorsWithoutDuplicates);
    }

    useEffect(() => {
        const variant = product.variants.find(variant => variant.color.name === 'Negro');

        if (!variant) return setVariantSelected(product.variants[0])

        setVariantSelected(variant)
        getColors();
    }, [product])

    useEffect(() => {
        const color = productColors.find(color => color.name === variantSelected.color.name);

        setColorSelected(color);
        if (variantSelected) {
            setProductSizes(product.variants.filter(variant => variant.color.name === variantSelected.color.name).map(variant => variant.size))
        }
    }, [variantSelected])


    if (variantSelected) return (
        <motion.div key={product._id} className={styles.product_card}
            initial={{ y: -50, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.8 }}
        >
            <img src={variantSelected.image} alt={product.name} />

            {product.discount > 0 && <span className={styles.product_card__discount}>{product.discount}% OFF</span>}
            <ProductColorsList colors={productColors} product={product} setVariantSelected={setVariantSelected} colorSelected={colorSelected} setColorSelected={setColorSelected} />

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
                    productSizes.length > 0 && (
                        <div className={styles.product_sizes}>
                            <ul className={styles.product_sizes__list}>
                                {productSizes.map(size => (
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
        </motion.div>
    )
}
