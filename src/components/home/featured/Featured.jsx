import React from 'react'
import ProductsContainer from '../../../globals/Products/ProductsContainer'
import styles from './Featured.module.scss'
import { motion } from 'framer-motion';

export default function Featured({ products }) {
  return (
    <section id={styles.section_featured}>
      <motion.h2
        initial={{ y: -50, opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.8 }}
      >
        PRODUCTOS DESTACADOS
      </motion.h2>

      <ProductsContainer products={products} />
    </section>
  )
}