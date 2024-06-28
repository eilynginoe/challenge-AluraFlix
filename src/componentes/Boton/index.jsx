//import styles from "./boton.module.css"

//function Boton(props) {

    //const estiloAdicional = props.estiloAdicional || {};

    //return (
        //<div className={styles.contenedorBoton}>
           // <button className={styles.boton} style={estiloAdicional}>{props.children} </button>
        //</div>
   // )
//}

//export default Boton;

import React, { useState } from 'react';
import styles from "./boton.module.css";

function Boton(props) {
    const [hover, setHover] = useState(false);
    const estiloAdicional = props.estiloAdicional || {};

    const estilos = {
        ...estiloAdicional,
        ...(hover ? estiloAdicional.hover : {})
    };

    return (
        <div className={styles.contenedorBoton}>
            <button
                className={styles.boton}
                style={estilos}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {props.children}
            </button>
        </div>
    );
}

export default Boton;

