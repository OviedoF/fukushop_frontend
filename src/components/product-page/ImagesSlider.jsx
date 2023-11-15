import React, { useState, useEffect } from 'react';
import styles from './ImagesSlider.module.scss'
import Image from 'next/image'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ZoomImage from './ZoomImage';

export default function ImagesSlider({ colorSelected, product }) {
    const [selectedImage, setSelectedImage] = useState(colorSelected.fullImage)
    const [gallery, setGallery] = useState([colorSelected.principalImage, colorSelected.reverseImage])
    const [zoom, setZoom] = useState(false);

    useEffect(() => {
        console.log('product', product)
        setSelectedImage(colorSelected.fullImage)
        setGallery([colorSelected.principalImage, colorSelected.reverseImage])
    }, [colorSelected])

    const handleImageClick = (image) => {
        setSelectedImage(image)

        const allImages = [colorSelected.principalImage, colorSelected.reverseImage, colorSelected.fullImage]
        // remove the selected image from the gallery
        const newGallery = allImages.filter(img => img !== image)
        setGallery(newGallery)
    }

    return (
        <section className={styles.images_slider}>
            {zoom && <ZoomImage images={[zoom]} setZoom={setZoom} />}

            <div className={styles.principal_image_container} onClick={(e) => setZoom(selectedImage)} animation="appearBottom">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.zoom_icon} />
                <Image src={selectedImage} alt={`${product.name} en color ${colorSelected.name}`} fill style={{ objectFit: 'contain' }} />
            </div>

            <div className={styles.gallery_images_container} animation="appearBottom">
                {gallery.filter(image => image !== null).map((image, index) => (
                    <div key={index} className={styles.gallery_image_container} >
                        {/* <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.zoom_icon} /> */}
                        <Image src={image} alt={`${product.name} en color ${colorSelected.name}`} fill style={{ objectFit: 'contain' }}
                            onClick={() => handleImageClick(image)} />
                    </div>
                ))}
            </div>
        </section>
    )
}
