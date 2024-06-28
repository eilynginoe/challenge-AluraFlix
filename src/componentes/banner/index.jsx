//import React from 'react';
//import styles from "./banner.module.css";
//import bannerImg from './banner.png';
//import placeholderImg from './placeholder.png';


//function Banner({ color }) {
    //return (
        //<div className={styles.capa} style={{ backgroundImage: `url(${bannerImg})` }}>
            //<div className={styles.gradient} style={{ background: color }}></div>
        //</div>
    //);
//}

//export default Banner;

import React from 'react';
import styles from "./banner.module.css";
import bannerImg from './banner.png'; // Importación de la imagen desde la misma carpeta

function Banner({ color = 'rgba(0, 0, 0, 0.5)', title, text, placeholderImg, height }) {
    return (
        <div className={styles.bannerContainer} style={{ backgroundImage: `url(${bannerImg})`,height: height }}>
            <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
                <img className={styles.overlayImage} src={placeholderImg} alt="Placeholder" />
            </div>
            <div className={styles.gradient} style={{ background: color }}></div>
        </div>
    );
}

export default Banner;

