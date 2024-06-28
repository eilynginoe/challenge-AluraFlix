// src/pages/nuevoVideo.jsx
import React, { useContext } from 'react';
import { VideoContext } from '../../context';
import AgregarVideo from '../../componentes/agregarVideo';
import styles from "./nuevoVideo.module.css";
import {categorias} from '../../componentes/Categorias/configCategorias/categoriasConfig';


function NuevoVideo() {
  const { agregarVideo} = useContext(VideoContext);

  const registrarColaborador = (datos) => {
    console.log('Datos del nuevo video:', datos);
    agregarVideo(datos);
    //cargarDatos(); // Recargar los datos para actualizar la página de inicio
  };

  return (
    <div className={styles.div}>
      <h1 className={styles.titulo}>NUEVO VIDEO</h1>
      <p>Complete el formulario para crear una nueva tarjeta de video</p>
      <AgregarVideo
        categorias={categorias.map((categoria) => categoria.titulo)}
        registrarColaborador={registrarColaborador}
      />
    </div>
  );
}

export default NuevoVideo;


