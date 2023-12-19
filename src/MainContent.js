// src/components/MainContent.js
import React from 'react';
import './MainContent.css';
import minhaImagem from "./img/maria.jpeg";
import { Link } from 'react-router-dom';

const MainContent = () => {
  return (
    <section id="home">
      <div className="content-container">
        <div className="text">
          <h1>Olá! Sou Maria Menechini.</h1>
          <h2>E este é meu portfólio...</h2>
            <p>
              Tenho 22 anos, sou estudante de <strong>Ciência da Computação</strong> na UERJ. Tenho interesse nas áreas de <strong>Desenvolvimento de Software e Desenvolvimento Web</strong>. Estou estudando para me tornar uma desenvolvedora <strong>FullStack</strong> (com conhecimento em Front-End, Back-End e DevOps).
            </p>
            <Link to= "Sobre"><button className='botao'>Saiba mais sobre mim!</button></Link>
        </div>
        <div className="image">
          <img src={minhaImagem} alt="Imagem" />
        </div>
      </div>
    </section>
  );
};

export default MainContent;
