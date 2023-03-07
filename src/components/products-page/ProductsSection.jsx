import React from 'react'
import styles from './ProductsSection.module.scss'
import ProductsContainer from './../../globals/Products/ProductsContainer'

export default function ProductsSection({ products }) {
    return (
        <section id={styles.products_section}>
            <h1>Nuestro catalogo!</h1>

            <ProductsContainer products={products}/>
        </section>
    )
}
