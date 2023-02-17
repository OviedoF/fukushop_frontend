import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import styles from './AdminCreateModuleCard.module.scss';

const AdminCreateModuleCard = ({title, href}) => {
    return (
        <Link href={href} className={styles.admin_create_card}>
            <FontAwesomeIcon icon={faPlus} size='2x' />

            <p>{title}</p>
        </Link>
    );
}

export default AdminCreateModuleCard;
