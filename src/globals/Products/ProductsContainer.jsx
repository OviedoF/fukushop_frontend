import React from 'react'
import ProductCard from './ProductCard'

export default function ProductsContainer({products}) {
  return (
    <div className='products_container'>
        {products.map((product) => (
            <ProductCard key={product._id} product={product} />
        ))}

        <style jsx>{`
            .products_container {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                padding: 0 50px;
                margin-top: var(--margin-within-sections);
                width: 100%;
            }
        `}</style>
    </div>
  )
}
