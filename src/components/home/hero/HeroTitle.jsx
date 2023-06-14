import React, { useState, useEffect } from 'react';
import styles from './HeroTitle.module.scss';
import HeroCard from './HeroCard';

const HeroTitle = ({ title, span, sliderText, sliderTextAlternative }) => {
    const cardStyle = {
        height: '180%',
        width: '25%',
        position: 'absolute',
        top: '0%',
        right: '3%',
    }

    return (
        <div className={styles.hero_name} animation='appear'>

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

            <HeroCard containerStyles={cardStyle} image={'https://res.cloudinary.com/dmoqdwvnr/image/upload/v1679867422/14f1ee34b3c004a7c755c5c4eeb265d0_dfiyyl.webp'} />
        </div>
    );
}

export default HeroTitle;
