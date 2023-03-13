import React from 'react'
import styles from './TextSection.module.scss'

export default function TextSection({title, children}) {
  return (
    <section className={styles.text_section}>
        <h2>{title}</h2>

        {children}
    </section>
  )
}
