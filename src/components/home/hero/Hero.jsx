import React from 'react';
import {motion} from 'framer-motion';
import styles from './Hero.module.scss';
import HeroTitle from './HeroTitle';
import HeroCard from './HeroCard';
import HeroInfo from './HeroInfo';

const Hero = () => {

    return (
        <section id={styles.hero}>
            <HeroTitle title={'FUKU SHOP'} span={'コムスーパー'} sliderText={'服ショップ'} sliderTextAlternative={'FUKU SHOP'}/>

            <HeroInfo />
        </section>
    );
}

export default Hero;
