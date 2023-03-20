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
        <div className={styles.hero_description}>
            <motion.div className={styles.hero_description_text}
                initial={{ y: -50, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.8 }}
            >
                <p>
                    ¡Bienvenidos a Fuku Shop! Somos una tienda copada que se dedica a vender ropa de altísima calidad con onda anime, estilo asiático, videojuegos, etc.
                </p>

                <p>
                Nuestro estilo es único y re piola, te aseguramos que te va a encantar. ¿Qué estás esperando? Seguí scrolleando y sé parte de Fuku ;)
                </p>

                <button className='button_design' >
                    <p style={{ marginBottom: 0 }}>¡Conoce nuestros productos!</p>
                </button>
            </motion.div>

            <HeroCard containerStyles={cardStyles} image={'https://res.cloudinary.com/syphhy/image/upload/v1674696271/tumblr_5352ef6fe0248d1c829f82f6bfded7e6_99e41e06_1280_ykh1sh.jpg'} />
        </div>
    );
}

export default HeroInfo;
