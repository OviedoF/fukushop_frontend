import React from 'react';
import {motion} from 'framer-motion';
import styles from './Hero.module.scss';
import HeroCard from './HeroCard';

const HeroInfo = () => {
    const cardStyles = {
        width: '90%',
        height: '100%',
        position: 'relative',
    }
    
    return (
        <motion.div className={styles.hero_description} initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1.5, delay: 1.2}}>
            <motion.div className={styles.hero_description_text} initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1.5, delay: 1.2}}>
                <motion.p initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1.5, delay: 1.2}}>
                ¡Bienvenidos a Fuku Shop! Aquí encontrarás lo mejor de la moda asiática y el anime, y lo mejor de todo: sin maltrato animal.
                </motion.p>

                <motion.p initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1.5, delay: 1.2}}> 
                Nuestro estilo exclusivo y de tendencia te encantará. Además, estarás apoyando la protección del medio ambiente.                </motion.p>

                <motion.button initial={{y: 250}} animate={{y: 0}} transition={{delay: 1.5, type: 'spring', stiffness: 120}} className={styles.button}>
                    <a href="#products">¡Conoce nuestros productos!</a>
                </motion.button>
            </motion.div>

            <HeroCard containerStyles={cardStyles} image={'https://res.cloudinary.com/syphhy/image/upload/v1674696271/tumblr_5352ef6fe0248d1c829f82f6bfded7e6_99e41e06_1280_ykh1sh.jpg'}/>
        </motion.div>
    );
}

export default HeroInfo;
