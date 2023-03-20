import React from 'react';
import Image from 'next/image';
import styles from './TextToTopHoverCard.module.scss';
import routes from '../../routes';
import Link from 'next/link';

const TextToTopHoverCard = ({ img, text, align }) => {
    return (
        <Link href={`${routes.products}?category=${text}`}>
            <div 
                className={styles.category}
                align={align}
            >
                <Image src={img} fill='cover' alt="category" />
                <h3>{text}</h3>
            </div>
        </Link>
    );
}

export default TextToTopHoverCard;
