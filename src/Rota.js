import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Sobre} from './Sobre';
import {Projetos} from './Projetos';
import {Contatos} from './Contatos';

export const Rota = () => {
  return (
      <Routes>
        <Route exact path="/sobre" element={<Sobre />} />
        <Route exact path="/projetos" element={<Projetos />} />
        <Route exact path="/contatos" element={<Contatos />} />
      </Routes>
  );
};

