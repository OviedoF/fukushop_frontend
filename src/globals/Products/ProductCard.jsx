import React, { useEffect, useState } from 'react'
import styles from './ProductCard.module.scss'
import ProductColorsList from './ProductColorsList';

export default function ProductCard({ product }) {
    const [variantSelected, setVariantSelected] = useState(null);
    const [colorSelected, setColorSelected] = useState(null);
    const [productColors, setProductColors] = useState([]);

    const getColors = () => {
        const colors = product.variants.map(variant => variant.color);

        // Eliminamos los colores repetidos
        const colorsWithoutDuplicates = colors.filter((color, index) => colors.indexOf(color) === index);

        setProductColors(colorsWithoutDuplicates);
    }

    useEffect(() => {
      const variant = product.variants.find(variant => variant.color.name === 'Negro'); 

      if(!variant) return setVariantSelected(product.variants[0])

      setVariantSelected(variant)
      getColors();
    }, [product])

    useEffect(() => {
        const color = productColors.find(color => color.name === variantSelected.color.name);

        setColorSelected(color);
    }, [variantSelected])
    

    if(variantSelected) return (
        <div key={product._id} className={styles.product_card}>
            <img src={variantSelected.image} alt={product.name} />

            <ProductColorsList colors={productColors} product={product} setVariantSelected={setVariantSelected} colorSelected={colorSelected} setColorSelected={setColorSelected} />

            <div className={styles.product_card__info}>
                <h3 className={styles.product_name}>{product.name}</h3>
                <p className={styles.clothe_type}>{product.clothe_type.name}</p>
                
                <p className={styles.product_price}>${product.price}</p>
            </div>
        </div>
    )
}
