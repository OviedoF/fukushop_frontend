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
                    Somos una empresa dedicada a la venta de ropa de calidad, con diseños exclusivos y de tendencia. Amantes de la cultura asiática, nuestra inspiración proviene de la cultura de este continente, donde la moda es un arte.
                </motion.p>

                <motion.p initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1.5, delay: 1.2}}> 
                    Nuestro objetivo es ofrecer a nuestros clientes una experiencia única, donde puedan encontrar ropa de calidad y de su gusto a un precio accesible. Sobre todo en lugares donde no se encuentre este tipo de prendas.
                </motion.p>

                <motion.button initial={{y: 250}} animate={{y: 0}} transition={{delay: 1.5, type: 'spring', stiffness: 120}} className={styles.button}>
                    <a href="#products">Conocé nuestros productos</a>
                </motion.button>
            </motion.div>

            <HeroCard containerStyles={cardStyles} image={'https://res.cloudinary.com/syphhy/image/upload/v1674696271/tumblr_5352ef6fe0248d1c829f82f6bfded7e6_99e41e06_1280_ykh1sh.jpg'}/>
        </motion.div>
    );
}

export default HeroInfo;
