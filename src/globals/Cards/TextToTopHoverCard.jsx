import React from 'react';
import Image from 'next/image';
import styles from './TextToTopHoverCard.module.scss';
import { motion } from 'framer-motion';

const TextToTopHoverCard = ({ img, text }) => {
    return (
        <motion.div className={styles.category}
            initial={{ y: -50, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.8 }}
        >
            <Image src={img} fill='cover' alt="category" />
            <h3>{text}</h3>
        </motion.div>

    );
}

export default TextToTopHoverCard;
