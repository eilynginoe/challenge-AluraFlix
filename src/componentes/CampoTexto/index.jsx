import styles from "./campoTexto.module.css"

function CampoTexto(props){

    const manejarCambios = (e) => {
        props.actualizarValor(e.target.value)
    }

    const estiloAdicional = props.estiloAdicional || {};

    return(
        <div className={styles.contenedorForm}>
            <label className={styles.labelForm}>{props.nombreLabel}</label>
            <input 
            placeholder={props.placeholder} 
            required={props.required}
            value={props.valor}
            onChange={manejarCambios}
            className={styles.inputForm}
            style={estiloAdicional}
            />
        </div>

    )
}

export default CampoTexto
