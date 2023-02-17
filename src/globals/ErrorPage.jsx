import React from 'react';
import styles from  './ErrorPage.module.scss';

const ErrorAlert = () => {
    return (
        <main id={styles.error_page}>
            <div id={styles.error}>
                <div id={styles.box}></div>
                <h3>ERROR 500</h3>
                <p>Ha ocurrido un error en el servidor :(</p>
                <p>Recomendamos volver a intentar</p>
            </div>
        </main>
    );
}

export default ErrorAlert;
