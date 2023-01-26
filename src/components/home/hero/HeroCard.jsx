import React from 'react';
import styles from './HeroCard.module.scss';
import Image from 'next/image';
import {motion} from 'framer-motion';

const HeroCard = ({containerStyles, image}) => {
    return (
        <motion.div className={styles.card_container} style={containerStyles} initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 2, delay: 1}}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image src={image} alt="Modelo Fuku" fill 
                    style={{objectFit: 'cover'}}/>
                </div>

            </div>
        </motion.div>
    );
}

export default HeroCard;
