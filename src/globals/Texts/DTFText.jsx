import { faAngellist } from '@fortawesome/free-brands-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './DTFText.module.scss'


export default function DTFText({ title }) {
    return (
        <section className={styles.section_dtf}>
            <h2>{title}</h2>

            <p>El método de impresión DTF utiliza una película especial que se imprime con la imagen deseada y se adhiere a la prenda mediante calor y presión. A diferencia de la serigrafía y la impresión directa sobre prendas de vestir (DTG), el DTF permite imprimir diseños detallados y complejos en una amplia variedad de colores, incluyendo tonos vibrantes y neón. Además, el DTF se puede usar para imprimir en una amplia variedad de materiales, incluidos algodón, poliéster y mezclas.</p>

            <h3>Ventajas de la impresión DTF</h3>

            <ul>
                <li>
                    <FontAwesomeIcon icon={faAngleRight} />
                    Calidad de imagen superior: El DTF produce una imagen nítida y detallada que se ve casi como una impresión fotográfica. La película de impresión se adhiere firmemente a la prenda, lo que garantiza que la imagen no se desvanezca ni se desprenda con el tiempo.
                </li>

                <li>
                    <FontAwesomeIcon icon={faAngleRight} />
                    Colores brillantes y vibrantes: La impresión DTF permite imprimir colores brillantes y vibrantes, incluyendo tonos fluorescentes y neón, que no son posibles de lograr con otros métodos de impresión. Esto se debe a que la película de impresión DTF es más densa y permite la absorción completa de la tinta, lo que resulta en una imagen de alta calidad.
                </li>

                <li>
                    <FontAwesomeIcon icon={faAngleRight} />
                    Durabilidad y resistencia: La impresión DTF es muy duradera y resistente al lavado y al desgaste. La película de impresión se adhiere firmemente a la prenda, lo que garantiza que la imagen no se desvanezca ni se desprenda con el tiempo. Además, la impresión DTF no se agrieta ni se pela, lo que significa que la prenda se verá como nueva durante mucho tiempo.
                </li>
            </ul>
        </section>
    )
}
