import React from 'react';
import { Link } from 'react-router-dom';
import styles from './cabeceraLink.module.css'; // Asegúrate de tener este archivo CSS con las clases definidas

function CabeceraLink({ url, children }) {
    return (
        <Link to={url} className={styles.Link}>
            {children}
        </Link>
    );
}

export default CabeceraLink;

