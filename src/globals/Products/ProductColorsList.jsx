import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './ProductCard.module.scss'

export default function ProductColorsList({ colors, colorSelected, setColorSelected, product, setVariantSelected }) {
    
    const handleColorSelected = (color) => {
        const variant = product.variants.find(variant => variant.color.name === color.name);

        setColorSelected(color);
        setVariantSelected(variant);
    }

    if(colorSelected) return (
        <div className={styles.product_colors_list}>
            {colors.map((color) => (
                <button
                    onClick={() => handleColorSelected(color)}
                    className={styles.product_color}
                    key={color._id}
                    style={{ background: color.color }}
                >
                    {colorSelected.name === color.name && <div className={styles.product_color__selected} >
                        <FontAwesomeIcon icon={faCheck} />
                    </div>}
                </button>
            ))}
        </div>
    )
}
