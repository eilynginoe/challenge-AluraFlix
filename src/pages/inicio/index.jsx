import React, { useState, useContext } from 'react';
import { VideoContext } from '../../context';
import Banner from '../../componentes/banner';
import { categorias } from '../../componentes/Categorias/configCategorias/categoriasConfig';
import Categoria from '../../componentes/Categorias';
import FormularioModal from '../../componentes/CardForm';
import placeholderImg from './placeholder.png';
import styles from './inicio.module.css';

function Inicio() {
  const { videos, colaboradores, isLoading, cargarDatos, eliminarVideo, actualizarVideo } = useContext(VideoContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoToEdit, setVideoToEdit] = useState(null);

  const handleEditClick = (video) => {
    setVideoToEdit(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setVideoToEdit(null);
  };

  if (isLoading) {
    return <p>Cargando datos...</p>;
  }

  return (
    <div>
      <Banner
        color="rgba(0, 0, 0, 0.5)"
        title="FRONT END"
        text="Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React."
        placeholderImg={placeholderImg}
      />
      {categorias.map((categoria) => {
        const videosFiltrados = videos.filter(video => video.categoria.toUpperCase() === categoria.titulo.toUpperCase());
        const colaboradoresFiltrados = colaboradores.filter(colaborador => colaborador.categoria.toUpperCase() === categoria.titulo.toUpperCase());

        return (
          <Categoria 
            datos={categoria} 
            key={categoria.titulo} 
            videos={videosFiltrados}
            colaboradores={colaboradoresFiltrados}
            onDeleteVideo={eliminarVideo}
            onEditVideo={handleEditClick}
          />
        );
      })}
      <FormularioModal
        categorias={categorias.map((categoria) => categoria.titulo)}
        registrarColaborador={actualizarVideo}
        videoToEdit={videoToEdit}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default Inicio;




















