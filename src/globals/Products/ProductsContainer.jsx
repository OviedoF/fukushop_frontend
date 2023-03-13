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
                justify-content: flex-start;
                padding: 0 50px;
                margin-top: var(--margin-within-sections);
                width: 100%;
            }

            @media screen and (max-width: 768px) {
                .products_container {
                    padding: 0 20px;
                    justify-content: center;
                }
            }
        `}</style>
    </div>
  )
}
