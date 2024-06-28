import styles from "./card.module.css";
import iconTrash from "./borrarWhite.png";
import iconEdit from "./editarWhite.png";
import { Link } from 'react-router-dom';

function Card({ datos, onDelete, onEdit }) {

    const { id, video, capa, titulo, categoria } = datos;

    const handleDeleteClick = () => {
        console.log("Video clicado:", id); // Aquí colocas el console.log para ver el ID del video clicado
        if (onDelete) {
            onDelete(id);
        }
    };

    const handleEditClick = () => {
        if (onEdit) {
            onEdit(datos);
        }
    };

    return (
        <div className={styles.container}>
            <Link to={`/videos/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
            </Link>
            <div className={styles.edicionCard}>
                <button onClick={handleDeleteClick} className={styles.borrar}>
                    <img src={iconTrash} alt="Icono borrar" />
                    <p>Borrar</p>
                </button>
                <button onClick={handleEditClick} className={styles.editar}>
                    <img src={iconEdit} alt="Icono editar" />
                    <p>Editar</p>
                </button>
            </div>
        </div>
    )


}

export default Card;











