import React, { useState } from 'react';
import styles from './ImagesSlider.module.scss'
import Image from 'next/image'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ZoomImage from './ZoomImage';

export default function ImagesSlider({ variant, product }) {
    const [selectedImage, setSelectedImage] = useState(variant.image)
    const [gallery, setGallery] = useState(variant.gallery)
    const [zoom, setZoom] = useState(false);

    const handleImageClick = (image) => {
        setSelectedImage(image)

        const allImages = [...variant.gallery, variant.image]
        console.log(allImages)
        // remove the selected image from the gallery
        const newGallery = allImages.filter(img => img !== image)
        console.log(newGallery)

        setGallery(newGallery)
    }

    return (
        <section className={styles.images_slider}>
            {zoom && <ZoomImage images={[zoom]} setZoom={setZoom} />}

            <div className={styles.principal_image_container} onClick={(e) => setZoom(selectedImage)}>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.zoom_icon} />
                <Image src={selectedImage} alt={`${product.name} en color ${variant.color.name}`} fill style={{ objectFit: 'contain' }} />
            </div>

            <div className={styles.gallery_images_container}>
                {gallery.filter(image => image !== null).map((image, index) => (
                    <div key={index} className={styles.gallery_image_container} >
                        {/* <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.zoom_icon} /> */}
                        <Image src={image} alt={`${product.name} en color ${variant.color.name}`} fill style={{ objectFit: 'contain' }}
                            onClick={() => handleImageClick(image)} />
                    </div>
                ))}
            </div>
        </section>
    )
}
