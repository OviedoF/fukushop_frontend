import React from 'react'
import styles from './Filters.module.scss'
import CheckboxList from '../../globals/libs/CheckboxList'
import DoubleRangeSlider from '../../globals/libs/DoubleRangeSelecter'

export default function Filters({ categories, types, colors, sizes }) {
  return (
    <aside id={styles.products_filter}>
      <h3>Filtros</h3>

      <div className={styles.filter}>
        <h4>Categorías</h4>

        <CheckboxList items={categories} />
      </div>

      <div className={styles.filter}>
        <h4>Tipo de prenda</h4>

        <CheckboxList items={types} />
      </div>

      <div className={styles.filter}>
        <h4>Colores</h4>

        <CheckboxList items={colors} />
      </div>

      <div className={styles.filter}>
        <h4>Tallas</h4>

        <CheckboxList items={sizes} />
      </div>

      <div className={styles.filter}>
        <h4>Precio</h4>

        <DoubleRangeSlider min={0} max={1000} minValueBetween={10} />
      </div>
    </aside>
  )
}
