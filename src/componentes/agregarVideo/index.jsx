import React, { useState, useContext } from 'react';
import styles from "./agregarVideo.module.css"
import CampoTexto from '../CampoTexto';
import Boton from '../Boton';
import Textarea from '../textarea';
import ListaOpciones from '../ListaOpciones';
import { VideoContext } from '../../context'; // Importar el hook de contexto

function AgregarVideo({ categorias, registrarColaborador }) {
  const { agregarVideo, generarNuevoId } = useContext(VideoContext);
  const [titulo, actualizarTitulo] = useState("");
  const [capa, actualizarCapa] = useState("");
  const [link, actualizarLink] = useState("");
  const [descripcion, actualizarDescripcion] = useState("");
  const [categoria, actualizarCategoria] = useState("");

  const manejarEnvio = async (e) => {
    e.preventDefault();

    const nuevoId = generarNuevoId();

    const datosAEnviar = {
      id: nuevoId,
      titulo,
      capa,
      link,
      descripcion,
      categoria,
    };

    try {
      await agregarVideo(datosAEnviar);
      limpiarFormulario();
    } catch (error) {
      console.error("Error al agregar el video:", error);
    }
  };

  const limpiarFormulario = () => {
    actualizarTitulo("");
    actualizarCapa("");
    actualizarLink("");
    actualizarDescripcion("");
    actualizarCategoria("");
  };

  return (
    <div className={styles.centrarform}>
      <form onSubmit={manejarEnvio} className={styles.formulario}>
        <div className={styles.contenedorElementos}>
          <h2 className={styles.tituloForm}>NUEVO VIDEO</h2>

          <section className={styles.elementos}>
            <CampoTexto
              nombreLabel="Nombre"
              placeholder="Ingresa nombre..."
              required={true}
              valor={titulo}
              actualizarValor={actualizarTitulo}
              estiloAdicional={{
                border: '2px solid #262626',
                borderRadius: '8px',
                backgroundColor: '#191919',
              }}
            />

            <ListaOpciones
              categorias={categorias}
              categoriaSeleccionada={categoria}
              actualizarCategoria={actualizarCategoria}
              estiloAdicional={{
                border: '2px solid #262626',
                borderRadius: '8px',
                backgroundColor: '#191919',
              }}
            />

            <CampoTexto
              nombreLabel="Imagen"
              placeholder="Ingresa imagen..."
              required={true}
              valor={capa}
              actualizarValor={actualizarCapa}
              estiloAdicional={{
                border: '2px solid #262626',
                borderRadius: '8px',
                backgroundColor: '#191919',
              }}
            />
            <CampoTexto
              nombreLabel="Video"
              placeholder="Ingresa video..."
              required={true}
              valor={link}
              actualizarValor={actualizarLink}
              estiloAdicional={{
                border: '2px solid #262626',
                borderRadius: '8px',
                backgroundColor: '#191919',
              }}
            />
            <Textarea
              nombreTextarea="Descripción"
              placeholder="Ingresa descripción..."
              valor={descripcion}
              actualizarValor={actualizarDescripcion}
              estiloAdicional={{
                border: '2px solid #262626',
                borderRadius: '8px',
                backgroundColor: '#191919',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}
            />
  
            <div className={styles.botones}>
              <Boton type="submit"  estiloAdicional={{
                border: '2px solid #ffffff',
                borderRadius: '8px',
                backgroundColor: '#191919',
                color: '#ffffff',
                hover: {
                  border: '2px solid #2271D1',
                  color: '#2271D1',
                },
              }}>GUARDAR</Boton>
              <Boton type="button" onClick={limpiarFormulario} estiloAdicional={{
                border: '2px solid #ffffff',
                borderRadius: '8px',
                backgroundColor: '#191919',
                color: '#ffffff',
                hover: {
                  border: '2px solid #2271D1',
                  color: '#2271D1',
                },
              }}>LIMPIAR</Boton>
            </div>
          </section>
        </div>
      </form>
    </div>
  );
}

export default AgregarVideo;

