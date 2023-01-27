import React from 'react';
import Image from 'next/image';
import styles from './TextToTopHoverCard.module.scss';
import { motion } from 'framer-motion';

const TextToTopHoverCard = ({img, text}) => {
    return (
        <motion.div className={styles.category} initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1.5, delay: 0.5}}>
            <Image src={img} fill='cover' alt="category" />
            <h3>{text}</h3>
        </motion.div>

    );
}

export default TextToTopHoverCard;
