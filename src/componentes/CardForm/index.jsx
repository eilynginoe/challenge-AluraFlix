// src/componentes/CardForm.jsx
import React, { useState, useEffect } from 'react';
import styles from "./cardForm.module.css";
import Boton from "../../componentes/Boton";
import CampoTexto from "../../componentes/CampoTexto";
import Textarea from "../../componentes/textarea";
import ListaOpciones from "../../componentes/ListaOpciones";
import iconCerrar from './iconCerrar.png';

function FormularioModal({ categorias, registrarColaborador, videoToEdit, isOpen, onClose }) {
    const [id, actualizarId] = useState(null);
    const [titulo, actualizarTitulo] = useState("");
    const [capa, actualizarCapa] = useState("");
    const [link, actualizarLink] = useState("");
    const [descripcion, actualizarDescripcion] = useState("");
    const [categoria, actualizarCategoria] = useState("");

    useEffect(() => {
        if (videoToEdit) {
            actualizarId(videoToEdit.id);
            actualizarTitulo(videoToEdit.titulo);
            actualizarCapa(videoToEdit.capa);
            actualizarLink(videoToEdit.link);
            actualizarDescripcion(videoToEdit.descripcion);
            actualizarCategoria(videoToEdit.categoria);
        }
    }, [videoToEdit]);

    const manejarEnvio = (e) => {
        e.preventDefault();

        let datosAEnviar = {
            id: videoToEdit.id, // Mantener el ID del video editado
            titulo,
            capa,
            link,
            descripcion,
            categoria,
        };
        registrarColaborador(datosAEnviar);
        limpiarFormulario();
    };

    const limpiarFormulario = () => {
        actualizarId(null);
        actualizarTitulo("");
        actualizarCapa("");
        actualizarLink("");
        actualizarDescripcion("");
        actualizarCategoria("");
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modal}>
            <div className={styles.centrarform}>
                <img className={styles.imgCerrar} src={iconCerrar} onClick={onClose} alt="Cerrar" />
                <form onSubmit={manejarEnvio} className={styles.formulario}>
                    <div className={styles.contenedorElementos}>
                        <h2 className={styles.tituloForm}>EDITAR CARD</h2>
                        <section className={styles.elementos}>
                            <CampoTexto
                                nombreLabel="Nombre"
                                placeholder="Ingresa nombre..."
                                required={true}
                                valor={titulo}
                                actualizarValor={actualizarTitulo}
                            />
                            <ListaOpciones
                                categorias={categorias}
                                categoriaSeleccionada={categoria}
                                actualizarCategoria={actualizarCategoria}
                            />
                            <CampoTexto
                                nombreLabel="Imagen"
                                placeholder="Ingresa imagen..."
                                required={true}
                                valor={capa}
                                actualizarValor={actualizarCapa}
                            />
                            <CampoTexto
                                nombreLabel="Video"
                                placeholder="Ingresa video..."
                                required={true}
                                valor={link}
                                actualizarValor={actualizarLink}
                            />
                            <Textarea
                                nombreTextarea="Descripcion"
                                placeholder="Ingresa descripción..."
                                valor={descripcion}
                                actualizarValor={actualizarDescripcion}
                            />
                            <div className={styles.botones}>
                                <Boton type="submit" estiloAdicional={{
                                    border: '2px solid #2271D1',
                                    color: '#2271D1',
                                    hover: {
                                        border: '2px solid #ffffff',
                                        color: '#ffffff',
                                    },
                                }}>GUARDAR</Boton>
                                <Boton type="button" onClick={limpiarFormulario}estiloAdicional={{
                                    border: '2px solid #2271D1',
                                    color: '#2271D1',
                                    hover: {
                                        border: '2px solid #ffffff',
                                        color: '#ffffff',
                                    },
                                }}>LIMPIAR</Boton>
                            </div>
                        </section>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormularioModal;

