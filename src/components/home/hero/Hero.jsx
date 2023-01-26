import React from 'react';
import {motion} from 'framer-motion';
import styles from './Hero.module.scss';
import HeroTitle from './HeroTitle';
import HeroCard from './HeroCard';

const Hero = () => {
    const cardStyles = {
        width: '90%',
        height: '100%',
        position: 'relative',
    }

    return (
        <section id={styles.hero}>
            <HeroTitle title={'FUKU SHOP'} span={'コムスーパー'} sliderText={'服ショップ'} sliderTextAlternative={'FUKU SHOP'}/>

            <motion.div className={styles.hero_description} initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1.5, duration: 1.5}}>
                <motion.div className={styles.hero_description_text} initial={{width: '0%'}} animate={{width: '100%'}} transition={{delay: 1.5, duration: 1.5}}>
                    <motion.p initial={{y: 250}} animate={{y: 0}} transition={{delay: 1.5, type: 'spring', stiffness: 120}}>
                        Somos una empresa dedicada a la venta de ropa de calidad, con diseños exclusivos y de tendencia. Amantes de la cultura asiática, nuestra inspiración proviene de la cultura de este continente, donde la moda es un arte.
                    </motion.p>

                    <motion.p initial={{y: 250}} animate={{y: 0}} transition={{delay: 1.5, type: 'spring', stiffness: 120}}> 
                        Nuestro objetivo es ofrecer a nuestros clientes una experiencia única, donde puedan encontrar ropa de calidad y de su gusto a un precio accesible. Sobre todo en lugares donde no se encuentre este tipo de prendas.
                    </motion.p>

                    <motion.button initial={{y: 250}} animate={{y: 0}} transition={{delay: 1.5, type: 'spring', stiffness: 120}} className={styles.button}>
                        <a href="#products">Conocé nuestros productos</a>
                    </motion.button>
                </motion.div>

                <HeroCard containerStyles={cardStyles} image={'https://res.cloudinary.com/syphhy/image/upload/v1674696271/tumblr_5352ef6fe0248d1c829f82f6bfded7e6_99e41e06_1280_ykh1sh.jpg'}/>
            </motion.div>

        </section>
    );
}

export default Hero;
