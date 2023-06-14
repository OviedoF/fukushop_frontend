import React from 'react';
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
            <div className={styles.hero_description_text} animation='appear'>
                <p>
                    ¡Bienvenidos a Fuku Shop! Somos una tienda copada que se dedica a vender ropa de altísima calidad con onda anime, estilo asiático, videojuegos, etc.
                </p>

                <p>
                     Tenemos altos diseños, te aseguramos que te van a gustar. ¿Qué estás esperando? Seguí scrolleando y sé parte de Fuku ;)
                </p>

                <button className='button_design' >
                    <p style={{ marginBottom: 0 }}>¡Conoce nuestros productos!</p>
                </button>
            </div>

            <HeroCard containerStyles={cardStyles} image={'https://res.cloudinary.com/dmoqdwvnr/image/upload/v1679867421/b7e3a2690a50962d5db3bb9f5a304bc9_qvodc2.webp'} />
        </div>
    );
}

export default HeroInfo;
