import React from 'react';
import styles from './Hero.module.scss';
import HeroCard from './HeroCard';
import horizontalImage from '../../../../public/miller 25.jpg';

const HeroInfo = () => {
    const cardStyles = {
        width: '90%',
        height: '100%',
        position: 'relative',
    }

    return (
        <div className={styles.hero_description}>
            <div className={styles.hero_description_text} animation='appear'>
                <p>
                    Somos FukuShop, donde podrás encontrar ropa con estilo callejero y una gran calidad! La mejor alternativa en Argentina!
                </p>

                <p>
                     Podrás ver todo nuestro catálogo si sigues scrolleando, esperemos que seamos de tu agrado ;)
                </p>

                <button className='button_design' >
                    <p style={{ marginBottom: 0 }}>¡Conoce nuestros productos!</p>
                </button>
            </div>

            <HeroCard containerStyles={cardStyles} image={horizontalImage} credits='@millerband_' />
        </div>
    );
}

export default HeroInfo;
