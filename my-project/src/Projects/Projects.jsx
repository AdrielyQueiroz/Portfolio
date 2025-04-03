import React from 'react';
import './style.css';
import projeto from '../Images/projeto_samsung.jpg';
import form from '../Images/form.png';
import qrcode from '../Images/qrcode.png';
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
  return (
      <div id='projects'>
      <div className='container-projects'>
        <hr />
        <h4>Projetos</h4>
      {/* </div> */}
      <section className='container-products'>
        <div className='product-image'>
          <img src={projeto} alt="Projeto Samsung" className='img' />
          <div className="overlay">
            <a href='https://github.com/AdrielyQueiroz/samsung' target="_blank" rel="noopener noreferrer">
              <FaGithub className="icons" />
            </a>
           <h1 className='text'>Projeto samsung</h1>
          </div>
        </div>

        <div className='product-image'>
          <img src={form} alt="Projeto Form" className='img' />
          <div className="overlay">
            <a href="https://github.com/AdrielyQueiroz/formul-rio_simples" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icons" />
            </a>
            <h1 className='text'>Projeto Form</h1>
          </div>
        </div>

        <div className='product-image'>
          <img src={qrcode} alt="Projeto QR Code" className='img' />
          <div className="overlay">
            <a href="https://github.com/AdrielyQueiroz/Qr_code" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icons" />
            </a>
            <h1 className='text'>Projeto Qr Code</h1>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Projects;

