import styles from './footer.module.css';
import logoPie from './logoPie.png'; // Ruta ajustada para el logo dentro de la misma carpeta


function PieDePagina () {
    return(
        <footer className={styles.rodapie}>
            <img src={logoPie} alt="Logo Pie de Página" />
            <h2>Elaborado por Eilyn Brito</h2>
        </footer>
    )
}

export default PieDePagina;