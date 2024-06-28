// routes.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaBase from './pages/pagina base';
import Inicio from './pages/inicio';
import NuevoVideo from './pages/nuevoVideo';
import Player from './pages/player/player';
import { VideoProvider } from './context'; // Importa VideoProvider como un export nombrado

function AppRoutes() {
  return (
    <BrowserRouter>
      <VideoProvider> {/* Utiliza VideoProvider como un componente */}
        <Routes>
          <Route path='/' element={<PaginaBase />}>
            <Route index element={<Inicio />} />
            <Route path='nuevoVideo' element={<NuevoVideo />} />
            <Route path='videos/:id' element={<Player />} />
          </Route>
        </Routes>
      </VideoProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;

