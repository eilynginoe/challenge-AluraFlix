import React from 'react';
import { Link } from 'react-router-dom';
import styles from './cabecera.module.css';
import logo from './logo.png'; // Ruta ajustada para el logo dentro de la misma carpeta
import CabeceraLink from '../headerLink/cabeceraLink'; // Ruta ajustada para CabeceraLink

function Cabecera() {
    return (
        <header className={styles.cabecera}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo AluraFlix" />
                </section>
            </Link>
            <nav>
                <CabeceraLink url="/">
                    HOME
                </CabeceraLink>
                <CabeceraLink url="/nuevoVideo">
                    NUEVO VIDEO
                </CabeceraLink>
            </nav>
        </header>
    );
}

export default Cabecera;


