import React from 'react';
import styles from './Hero.module.scss';
import HeroTitle from './HeroTitle';
import HeroInfo from './HeroInfo';

const Hero = () => {

    return (
        <section id={styles.hero}>
            <HeroTitle title={'FUKU SHOP'} span={'服店'} sliderText={'服ショップ'} sliderTextAlternative={'FUKU SHOP'} />

            <HeroInfo />
        </section>
    );
}

export default Hero;
