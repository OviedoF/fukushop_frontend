import React from 'react'
import styles from './SizesTable.module.scss'

export default function SizesTable({ title, sizes, titleAlign = 'center', padding = 'var(--padding-from-borders)' }) {
    return (
        <section className={styles.sizes_table} style={{padding}}>
            <h2 style={{textAlign: titleAlign}}>{title}</h2>

            <div className={styles.table}>
                <img src="https://res.cloudinary.com/dmoqdwvnr/image/upload/v1678643458/TALLE_REMERA_OVERSIZE_xas5wz.png" alt="Talles remera oversize" />

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
            </div>


        </section>
    )
}
