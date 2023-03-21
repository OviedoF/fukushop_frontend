import React from 'react';
import styles from './HeroCard.module.scss';
import Image from 'next/image';

const HeroCard = ({ containerStyles, image }) => {
    return (
        <div className={styles.card_container} style={containerStyles} animation='appear'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image src={image} alt="Modelo Fuku" fill
                        style={{ objectFit: 'cover' }} />
                </div>

            </div>
        </div>
    );
}

export default HeroCard;
