import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from './ZoomImage.module.scss';

export default function ZoomImage({ images, setZoom }) {
    const [isZoomed, setIsZoomed] = useState(false);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleMouseMove = (event) => {
        if (isZoomed) {
            const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
            const mouseX = event.clientX ;
            const mouseY = event.clientY;
            setX((mouseX / width) * 20);
            setY((mouseY / height) * 70);
        }
    };

    const handleClick = (event) => {
        const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX ;
        const mouseY = event.clientY;
        setX((mouseX / width) * 20);
        setY((mouseY / height) * 70);
        setIsZoomed(!isZoomed);
    };

    return (
        <section className={styles.zoom_image_container} onMouseMove={handleMouseMove}>
            <FontAwesomeIcon icon={faXmark} className={styles.close_icon} onClick={() => setZoom(false)} />

            <div className={styles.zoom_image} style={{
                width: isZoomed ? '1500px' : '100%',
                height: isZoomed ? '1500px' : '100%',
                cursor: isZoomed ? 'zoom-out' : 'zoom-in',
            }}
            onClick={() => setIsZoomed(!isZoomed)}
            >
                {!isZoomed && (
                    <Image
                        src={images[0]}
                        alt="Zoomed image"
                        fill
                        style={{ objectFit: 'contain', cursor: 'zoom-in' }}
                        onClick={handleClick}
                    />
                )}

                {isZoomed && (
                    <Image
                        src={images[0]}
                        alt="Zoomed image"
                        width={1500}
                        height={1500}
                        style={{ 
                            objectFit: 'contain', 
                            cursor: 'zoom-out',
                            transform: `translate(-${x}%, -${y}%)`,
                        }}
                        onMouseMove={handleMouseMove}
                        onClick={() => setIsZoomed(!isZoomed)}
                    />
                )}
            </div>
        </section>
    );
}