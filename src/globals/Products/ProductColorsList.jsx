import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './ProductCard.module.scss'

export default function ProductColorsList({ colors, colorSelected, setColorSelected }) {
    const handleColorSelected = (color) => {
        setColorSelected(color);
    }

    if (colorSelected) return (
        <div className={styles.product_colors_list}>
            {colors.map((color) => (
                <button
                    onClick={() => handleColorSelected(color)}
                    className={styles.product_color}
                    key={color._id}
                    style={{ background: color.hex }}
                >
                    {colorSelected.name === color.name && <>
                        <div className={styles.product_color__selected} >
                            <FontAwesomeIcon icon={faCheck} />
                        </div>

                        <span className="sr-only">Cambiar a color {color.name}</span>
                    </>}
                </button>
            ))}
        </div>
    )
}
