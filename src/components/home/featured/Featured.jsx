import React from 'react'
import ProductsContainer from '../../../globals/Products/ProductsContainer'
import styles from './Featured.module.scss'

export default function Featured({ products }) {
  return (
    <section id={styles.section_featured}>
      <h2 animation='appear'>
        PRODUCTOS DESTACADOS
      </h2>

      <ProductsContainer products={products} />
    </section>
  )
}