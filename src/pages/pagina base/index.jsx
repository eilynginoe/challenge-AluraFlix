
import { Outlet } from 'react-router-dom';
import Cabecera from '../../componentes/header/cabecera';
import PieDePagina from '../../componentes/footer';


function PaginaBase(){
    return(
        <main>
            <Cabecera/>
                <Outlet/>
            <PieDePagina/>   
        </main>
    )
}

export default PaginaBase