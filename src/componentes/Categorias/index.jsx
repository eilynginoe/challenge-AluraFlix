//import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import styles from "./categorias.module.css";
import Card from "../card";

const Categoria = ({ datos, colaboradores, videos, onDeleteVideo, onEditVideo }) => {
  return (
    <section className={styles.categoriaSection}>
      <h3 style={{ backgroundColor: datos.colorDestaque }}>{datos.titulo}</h3>
      <div className={styles.card}>
        {colaboradores.length === 0 && videos.length === 0 ? (
          <p>No hay colaboradores ni videos en esta categoría.</p>
        ) : (
          <>
            {colaboradores.map((colaborador, index) => (
              <Card datos={colaborador} key={index} onDelete={onDeleteVideo} onEdit={onEditVideo} />
            ))}
            {videos.map((video, index) => (
              <Card datos={video} key={index} onDelete={onDeleteVideo} onEdit={onEditVideo} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default Categoria;



