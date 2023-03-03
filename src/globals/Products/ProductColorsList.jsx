import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './ProductCard.module.scss'

export default function ProductColorsList({ colors, colorSelected, setColorSelected }) {
    return (
        <div className={styles.product_colors_list}>
            {colors.map((color) => (
                <button
                    onClick={() => setColorSelected(color)}
                    className={styles.product_color}
                    key={color.color._id}
                    style={{ background: color.color.color }}
                >
                    {colorSelected.color.name === color.color.name && <div className={styles.product_color__selected} >
                        <FontAwesomeIcon icon={faCheck} />
                    </div>}
                </button>
            ))}
        </div>
    )
}
