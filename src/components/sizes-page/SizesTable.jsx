import React from 'react'
import styles from './SizesTable.module.scss'

export default function SizesTable({title, sizes}) {
  return (
    <section className={styles.sizes_table}>
        <h2>{title}</h2>

        <table>
            <thead>
                <tr>
                    <th>Talle</th>
                    <th>Ancho</th>
                    <th>Alto</th>
                    <th>Hombros</th>
                    <th>Mangas</th>
                </tr>
            </thead>

            <tbody>
                {sizes.map((size, index) => (
                    <tr key={index}>
                        <td>{size.name}</td>
                        <td>{size.width}</td>
                        <td>{size.height}</td>
                        <td>{size.shoulders}</td>
                        <td>{size.sleeves}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    </section>
  )
}
