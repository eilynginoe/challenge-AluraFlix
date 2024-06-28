/// videoContext.jsx

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const VideoContext = createContext(); // Exporta el contexto sin nombre específico

export const VideoProvider = ({ children }) => { // Define VideoProvider como un export nombrado
  const [videos, setVideos] = useState([]);
  const [colaboradores, setColaboradores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    try {
      const response = await axios.get('https://my-json-server.typicode.com/eilynginoe/AluraFlix/videos');
      setVideos(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  const obtenerIdsVideos = () => {
    return videos.map(video => video.id);
  };

  const generarNuevoId = () => {
    const ids = obtenerIdsVideos();
    const maxId = Math.max(...ids);
    return maxId + 1;
  };

  const agregarVideo = async (nuevoVideo) => {
    try {
      const response = await axios.post('https://my-json-server.typicode.com/eilynginoe/AluraFlix/videos', nuevoVideo);
      console.log('Video agregado:', response.data);
      // Actualizar localmente los videos con el nuevo video agregado desde la API
      setVideos(prevVideos => [...prevVideos, response.data]);
    } catch (error) {
      console.error('Error agregando el video:', error);
    }
  };

  const eliminarVideo = async (id) => {
    try {
      await axios.delete(`https://my-json-server.typicode.com/eilynginoe/AluraFlix/videos/${id}`);
      // Actualizar localmente los videos eliminando el video con el ID especificado
      setVideos(prevVideos => prevVideos.filter(video => video.id !== id));
      console.log(`Video con ID ${id} eliminado`);
    } catch (error) {
      console.error('Error eliminando el video:', error);
    }
  };
  

  const actualizarVideo = async (videoActualizado) => {
    try {
      const response = await axios.put(`https://my-json-server.typicode.com/eilynginoe/AluraFlix/videos/${videoActualizado.id}`, videoActualizado);
      console.log('Video actualizado:', response.data);
      // Actualizar localmente los videos con el nuevo dato
      setVideos(prevVideos => prevVideos.map(video => video.id === response.data.id ? response.data : video));
    } catch (error) {
      console.error('Error actualizando el video:', error);
    }
  };
  

  return (
    <VideoContext.Provider value={{ videos, colaboradores, isLoading, cargarDatos, agregarVideo, eliminarVideo, actualizarVideo, generarNuevoId }}>
      {children}
    </VideoContext.Provider>
  );
};


