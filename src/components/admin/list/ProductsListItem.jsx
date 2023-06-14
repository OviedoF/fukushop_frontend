import React, { useState } from 'react'
import styles from './ProductsList.module.scss'
import { faChevronDown, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ProductsListItem({ item, subList, actionsList, actionsSubList, listItemTitle, subItemTitle }) {
    const [open, setOpen] = useState(false);
    const subItemTitleList = subItemTitle && subItemTitle.split('.');

    const getSubItemTitle = (item) => {
        if (subItemTitleList.length === 1) {
            return item[subItemTitleList[0]]
        } else {
            return getSubItemTitle(item[subItemTitleList[0]], subItemTitleList.slice(1))
        }
    }

    return (
        <li key={item._id} className={styles.list_item} onClick={() => {
            if (subList) {
                setOpen(!open)
            }
        }} style={{
            color: open ? '#ffffff' : '#ffffff90',
            marginBottom: open ? `${item.variants.length * 70}px` : '0'
        }}>
            {item[listItemTitle]}

            <div className={styles.icons_list}>
                {actionsList && actionsList.map((action, index) => <FontAwesomeIcon key={index} icon={action.icon} color={action.color} onClick={() => action.handler(item)} />)}
                {subList && <FontAwesomeIcon icon={faChevronDown} style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />}
            </div>

            {subList && (
                <ul className={[styles.sublist, styles.sublist_active].join(' ')} style={{
                    clipPath: open ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(0 0, 100% 0, 100% 0, 0 0)'
                }}>
                    {item[subList].map((itemSubList, index) => (
                        <li key={index}>
                            Color: {itemSubList.color.name} - Talle: {itemSubList.size.name}

                            <div className={styles.icons_list}>
                                {actionsSubList && actionsSubList.map((action, index) => <FontAwesomeIcon key={index} icon={action.icon} color={action.color} onClick={() => action.handler(itemSubList)} />)}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    )
}
