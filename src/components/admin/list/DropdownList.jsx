import React from 'react'
import styles from './ProductsList.module.scss'
import ProductsListItem from './ProductsListItem'

export default function DropdownList({items, subList, actionsList, actionsSubList, listItemTitle, subItemTitle}) {
    return (
        <ul className={styles.list}>
            {items.map((item, index) => (
                <ProductsListItem key={index} item={item} subList={subList} actionsList={actionsList} actionsSubList={actionsSubList} 
                listItemTitle={listItemTitle} subItemTitle={subItemTitle}/>
            ))}
        </ul>
    )
}
