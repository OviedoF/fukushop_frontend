import React, { useState, useEffect } from 'react';
import styles from './HeroTitle.module.scss';
import { motion } from 'framer-motion';
import HeroCard from './HeroCard';

const HeroTitle = ({ title, span, sliderText, sliderTextAlternative }) => {
    const [windowWidth, setWindowWidth] = useState(1200);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const cardStyle = {
        height: '180%',
        width: '25%',
        position: 'absolute',
        top: '0%',
        right: '3%',
    }

    return (
        <motion.div className={styles.hero_name} 
        initial={{ y: -50, opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, duration: 1 }}
        >

            <div className={styles.title}>
                <h1>{title}</h1>
                <p><span>[</span>{span}<span>]</span></p>
            </div>

            <div className={styles.traduction_container}>
                <div className={styles.traduction_slider} >
                    <div className={styles.traduction} >
                        <p>{sliderText}</p>
                    </div>

                    <div className={styles.traduction_alternative} >
                        <p style={{ fontFamily: 'Fuku', fontSize: 26 }}>{sliderTextAlternative}</p>
                    </div>

                    <div className={styles.traduction} >
                        <p>{sliderText}</p>
                    </div>

                    <div className={styles.traduction_alternative} >
                        <p style={{ fontFamily: 'Fuku', fontSize: 26 }}>{sliderTextAlternative}</p>
                    </div>

                    <div className={styles.traduction} >
                        <p>{sliderText}</p>
                    </div>

                    <div className={styles.traduction_alternative} >
                        <p style={{ fontFamily: 'Fuku', fontSize: 26 }}>{sliderTextAlternative}</p>
                    </div>
                </div>

                <div className={styles.traduction_slider} >
                    <div className={styles.traduction} >
                        <p>{sliderText}</p>
                    </div>

                    <div className={styles.traduction_alternative} >
                        <p style={{ fontFamily: 'Fuku', fontSize: 26 }}>{sliderTextAlternative}</p>
                    </div>

                    <div className={styles.traduction} >
                        <p>{sliderText}</p>
                    </div>

                    <div className={styles.traduction_alternative} >
                        <p style={{ fontFamily: 'Fuku', fontSize: 26 }}>{sliderTextAlternative}</p>
                    </div>

                    <div className={styles.traduction} >
                        <p>{sliderText}</p>
                    </div>

                    <div className={styles.traduction_alternative} >
                        <p style={{ fontFamily: 'Fuku', fontSize: 26 }}>{sliderTextAlternative}</p>
                    </div>
                </div>
            </div>

            <HeroCard containerStyles={cardStyle} image={'https://res.cloudinary.com/syphhy/image/upload/v1674524513/Sudadera-con-capucha-y-cremallera-para-hombre-ropa-de-calle-negra-para-Jogger-Hip-Hop-Punk.jpg_Q90.jpg__qryyq5.webp'} />
        </motion.div>
    );
}

export default HeroTitle;
