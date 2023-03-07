import React from 'react'
import styles from './ImagesSlider.module.scss'
import Image from 'next/image'

export default function ImagesSlider({variant, product}) {
  return (
    <section className={styles.images_slider}>
        <div className={styles.principal_image_container}>
            <Image src={variant.image} alt={`${product.name} en color ${variant.color.name}`} fill style={{objectFit: 'contain'}} />
        </div>

        <div className={styles.gallery_images_container}>
            {variant.gallery.filter(image => image !== null).map((image, index) => (
                <div key={index} className={styles.gallery_image_container}>
                    <Image src={image} alt={`${product.name} en color ${variant.color.name}`} fill style={{objectFit: 'contain'}} />
                </div>
            ))}
        </div>
    </section>
  )
}
