import { useRouter } from 'next/router';
import React from 'react';
import routes from '../routes';
import styles from './NotFoundItem.module.scss'

const NotFoundItem = ({title, subtitle}) => {
    const router = useRouter();

    return (
        <main id={styles.not_found_item}>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>4</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <span className={styles.particle}>0</span>
            <article className={styles.content}>
                <p>{title}</p>
                <p>{subtitle}</p>
                <div>
                    <button onClick={() => router.push(routes.home)}>Volver al inicio.</button>
                </div>
            </article>
        </main>

    );
}

export default NotFoundItem;
