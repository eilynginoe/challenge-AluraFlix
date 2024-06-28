import styles from "./listaOpciones.module.css"

const ListaOpciones = (props) => {

  const manejarCambios = (e) => {
    props.actualizarCategoria(e.target.value);
  };

  const estiloAdicional = props.estiloAdicional || {};

  return (
    <div className={styles.listaOpciones}>
      <label className={styles.labelOption}>Categorias</label>
      <select
        className={styles.options}
        value={props.categoriaSeleccionada}
        onChange={manejarCambios}
        style={estiloAdicional}
      >
        <option value="" disabled>Selecciona una categoría</option>
        {props.categorias.map((categoria, index) => {
          return <option key={index} value={categoria}>{categoria}</option>;
        })}
      </select>
    </div>
  );

}

export default ListaOpciones;
