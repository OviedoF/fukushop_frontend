import React, { useEffect, useState } from 'react'
import styles from './ProductCard.module.scss'
import ProductColorsList from './ProductColorsList';

export default function ProductCard({ product }) {
    const [colorSelected, setColorSelected] = useState(null);
    console.log(product);

    useEffect(() => {
      const colorBlack = product.colors.find(color => color.color.name === 'Negro');

      if(!colorBlack) {
        return setColorSelected(product.colors[0]);
      }

      setColorSelected(colorBlack);
    }, [])

    if(colorSelected) return (
        <div key={product.id} className={styles.product_card}>
            <img src={colorSelected.principalImage} alt={product.name} />

            <div className={styles.product_card__info}>
                <h3 className={styles.product_name}>{product.name}</h3>
                
                <ProductColorsList colors={product.colors} colorSelected={colorSelected} setColorSelected={setColorSelected} />

            </div>
        </div>
    )
}
