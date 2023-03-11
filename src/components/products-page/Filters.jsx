import React, { useState, useEffect } from 'react';
import styles from './Filters.module.scss'
import CheckboxList from '../../globals/libs/CheckboxList'
import DoubleRangeSlider from '../../globals/libs/DoubleRangeSelecter'

export default function Filters({ categories, types, colors, sizes, setProducts, originalProducts, maxPrice, minPrice }) {
  const [filters, setFilters] = useState({
    categories: [],
    types: [],
    colors: [],
    sizes: [],
    price: {
      min: minPrice,
      max: maxPrice,
    },
  })

  const handleFilters = (filter, value) => {
    setFilters({
      ...filters,
      [filter]: value,
    });
  }

  const handleMax = (max) => {
    console.log(max)
    setFilters({
      ...filters,
      price: {
        ...filters.price,
        max
      },
    })
  }

  const handleMin = (min) => {
    setFilters({
      ...filters,
      price: {
        ...filters.price,
        min
      },
    })
  }

  useEffect(() => {
    const productsFiltered = originalProducts.filter(product => {
      let category = true;
      let type = true;
      let color = true;
      let size = true;
      let price = true;

      if (filters.categories.length > 0) {
        category = filters.categories.includes(product.category._id)
      }

      if (filters.types.length > 0) {
        type = filters.types.includes(product.clothe_type._id)
      }

      if (filters.colors.length > 0) {
        color = product.variants.some(variant => filters.colors.includes(variant.color._id))
      }

      if (filters.sizes.length > 0) {
        size = product.variants.some(variant => filters.sizes.includes(variant.size._id))
      }

      if (filters.price.min > 0 || filters.price.max < 50000) {
        price = product.priceWithOffer ? product.priceWithOffer >= filters.price.min && product.priceWithOffer <= filters.price.max : product.price >= filters.price.min && product.price <= filters.price.max 
      }

      if(!(category && type && color && size && price)) return setProducts([])

      return category && type && color && size && price
    })

    setProducts(productsFiltered)
  }, [filters])

  return (
    <aside id={styles.products_filter}>
      <h3>Filtros</h3>

      <div className={styles.filter}>
        <h4>Categorías</h4>

        <CheckboxList handleFilters={handleFilters} filterName={'categories'} filters={filters} items={categories} />
      </div>

      <div className={styles.filter}>
        <h4>Tipo de prenda</h4>

        <CheckboxList handleFilters={handleFilters} filterName={'types'} filters={filters} items={types} />
      </div>

      <div className={styles.filter}>
        <h4>Colores</h4>

        <CheckboxList handleFilters={handleFilters} filterName={'colors'} filters={filters} items={colors} />
      </div>

      <div className={styles.filter}>
        <h4>Tallas</h4>

        <CheckboxList handleFilters={handleFilters} filterName={'sizes'} filters={filters} items={sizes} />
      </div>

      <div className={styles.filter}>
        <h4>Precio</h4>

        <DoubleRangeSlider handleMax={handleMax} handleMin={handleMin} min={filters.price.min} 
        max={filters.price.max} minValueBetween={10} />
      </div>
    </aside>
  )
}
