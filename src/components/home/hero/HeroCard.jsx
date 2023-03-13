import React from 'react';
import styles from './HeroCard.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroCard = ({ containerStyles, image }) => {
    return (
        <motion.div className={styles.card_container} style={containerStyles}
            initial={{ y: -50, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.8 }}
        >
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
        </motion.div>
    );
}

export default HeroCard;
