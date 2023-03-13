import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.scss';
import HeroCard from './HeroCard';

const HeroInfo = () => {
    const cardStyles = {
        width: '90%',
        height: '100%',
        position: 'relative',
    }

    return (
        <motion.div className={styles.hero_description}>
            <motion.div className={styles.hero_description_text}
                initial={{ y: -50, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.8 }}
            >
                <motion.p>
                    ¡Bienvenidos a Fuku Shop! Aquí encontrarás lo mejor de la moda asiática y el anime, y lo mejor de todo: sin maltrato animal.
                </motion.p>

                <motion.p>
                    Nuestro estilo exclusivo y de tendencia te encantará. Además, estarás apoyando la protección del medio ambiente.
                </motion.p>

                <motion.button className='button_design' >
                    <p style={{ marginBottom: 0 }}>¡Conoce nuestros productos!</p>
                </motion.button>
            </motion.div>

            <HeroCard containerStyles={cardStyles} image={'https://res.cloudinary.com/syphhy/image/upload/v1674696271/tumblr_5352ef6fe0248d1c829f82f6bfded7e6_99e41e06_1280_ykh1sh.jpg'} />
        </motion.div>
    );
}

export default HeroInfo;
