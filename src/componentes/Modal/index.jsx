// componentes/Modal/index.jsx
import React from 'react';
import styles from './modal.module.css';
import iconCerrar from './iconCerrar.png';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.centrarform}>
        <img className={styles.imgCerrar} src={iconCerrar} onClick={onClose} alt="Cerrar" />
        {children}
      </div>
    </div>
  );
};

export default Modal;

