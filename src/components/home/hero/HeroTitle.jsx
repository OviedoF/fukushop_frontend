import React from 'react';
import styles from './HeroTitle.module.scss';
import {motion} from 'framer-motion';
import HeroCard from './HeroCard';

const HeroTitle = ({title, span, sliderText, sliderTextAlternative}) => {
    const cardStyle = {
        height: '180%',
        width: '25%',
        position: 'absolute',
        top: '0%',
        right: '3%',
    }

    return (
        <motion.div className={styles.hero_name} initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1.5, delay: 0.2}}>
            <motion.div className={styles.title} initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1.5, delay: 0.2}}>
                <h1>{title}</h1>
                <p><span>[</span>{span}<span>]</span></p>
            </motion.div>

            <motion.div className={styles.traduction_container} initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1.5, delay: 0.5}}>
                <motion.div className={styles.traduction_slider} initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1.5, delay: 0.7}}>
                    <motion.div className={styles.traduction} initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1.5, delay: 1}}>
                        <p>{sliderText}</p>
                    </motion.div>

                    <motion.div className={styles.traduction_alternative} initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1.5, delay: 1.2}}>
                        <p style={{fontFamily: 'Fuku', fontSize: 26}}>{sliderTextAlternative}</p>
                    </motion.div>

                    <motion.div className={styles.traduction} initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1.5, delay: 1}}>
                        <p>{sliderText}</p>
                    </motion.div>

                    <motion.div className={styles.traduction_alternative} initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1.5, delay: 1.2}}>
                        <p style={{fontFamily: 'Fuku', fontSize: 26}}>{sliderTextAlternative}</p>
                    </motion.div>

                    <motion.div className={styles.traduction} initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1.5, delay: 1}}>
                        <p>{sliderText}</p>
                    </motion.div>

                    <motion.div className={styles.traduction_alternative} initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1.5, delay: 1.2}}>
                        <p style={{fontFamily: 'Fuku', fontSize: 26}}>{sliderTextAlternative}</p>
                    </motion.div>
                </motion.div>

                <motion.div className={styles.traduction_slider} initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1.5, delay: 2}}>
                    <motion.div className={styles.traduction} initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1.5, delay: 1}}>
                        <p>{sliderText}</p>
                    </motion.div>

                    <motion.div className={styles.traduction_alternative} initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1.5, delay: 1.2}}>
                        <p style={{fontFamily: 'Fuku', fontSize: 26}}>{sliderTextAlternative}</p>
                    </motion.div>

                    <motion.div className={styles.traduction} initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1.5, delay: 1}}>
                        <p>{sliderText}</p>
                    </motion.div>

                    <motion.div className={styles.traduction_alternative} initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1.5, delay: 1.2}}>
                        <p style={{fontFamily: 'Fuku', fontSize: 26}}>{sliderTextAlternative}</p>
                    </motion.div>

                    <motion.div className={styles.traduction} initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1.5, delay: 1}}>
                        <p>{sliderText}</p>
                    </motion.div>

                    <motion.div className={styles.traduction_alternative} initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1.5, delay: 1.2}}>
                        <p style={{fontFamily: 'Fuku', fontSize: 26}}>{sliderTextAlternative}</p>
                    </motion.div>
                </motion.div>
            </motion.div>

            <HeroCard containerStyles={cardStyle} image={'https://res.cloudinary.com/syphhy/image/upload/v1674524513/Sudadera-con-capucha-y-cremallera-para-hombre-ropa-de-calle-negra-para-Jogger-Hip-Hop-Punk.jpg_Q90.jpg__qryyq5.webp'}/>
        </motion.div>
    );
}

export default HeroTitle;
