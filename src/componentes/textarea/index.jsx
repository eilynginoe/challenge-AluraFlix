import styles from "./textarea.module.css"

function Textarea(props) {

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    };

    const estiloAdicional = props.estiloAdicional || {};

    return (
        <div className={styles.textarea}>
            <label className={styles.labeltextarea}>{props.nombreTextarea}</label>
            <textarea
                placeholder={props.placeholder}
                required={props.required}
                className={styles.textareaDescripcion}
                value={props.valor}
                onChange={manejarCambio}
                style={estiloAdicional}
            />
        </div>

    )
}

export default Textarea;