import React from 'react'
import styles from './ProductsSection.module.scss'
import ProductCard from '../../globals/Products/ProductCard'

export default function ProductsSection({ products, sizes }) {
    return (
        <section id={styles.products_section}>
            <h1>Nuestro catalogo!</h1>

            <div className='products_container'>
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} sizes={sizes} />
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
        </section>
    )
}
