import React from 'react'
import SizesTable from '../sizes-page/SizesTable'
import TextSection from '../../globals/Texts/TextSection'
import DTFText from '../../globals/Texts/DTFText'
import styles from './Details.module.scss'

export default function Details({ product, sizes }) {
    return (
        <>
            <TextSection title={product.clothe_type.name}>
                <p>{product.clothe_type.description}</p>
            </TextSection>

            <DTFText title='Impresion DTF' />

            <SizesTable sizes={sizes} title={'Tabla de talles'} titleAlign={'left'} padding={0} />
        </>
    )
}
