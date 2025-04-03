import React from 'react';
import './style.css';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { MdChevronRight } from "react-icons/md";

const Skills = () => {
  return (
    <div id='skills'>
      <div className="container">
      <MdChevronRight className='chevron'/>
      <MdChevronRight className='chevron'/>
      <MdChevronRight className='chevron'/>
      <MdChevronRight className='chevron'/>
      <h3>Habilidades</h3>
      <MdChevronRight className='chevron'/>
      <MdChevronRight className='chevron'/>
      <MdChevronRight className='chevron'/>
      <MdChevronRight className='chevron'/>
      </div>
      {/* Container para as habilidades */}
      <div className="skills-container">
        <div className="skill">
          <FaHtml5 size={100} />
          <p className='p-skills'>Usado para estruturar e organizar o conteúdo de páginas da web.</p>
        </div>
        <div className="skill">
          <IoLogoCss3 size={100} />
          <p className='p-skills'>Oferece uma série de recursos e propriedades para controlar a aparência de elementos HTML de forma precisa e flexível.</p>
        </div>
        <div className="skill">
          <RiTailwindCssFill size={100} />
          <p className='p-skills'>Framework de CSS altamente personalizável e baseado em utilitários que permite aos desenvolvedores criar rapidamente layouts e designs responsivos de forma eficiente.</p>
        </div>
        <div className="skill">
          <FaReact size={100} />
          <p className='p-skills'>Biblioteca JavaScript de código aberto usada para construir interfaces de usuário.</p>
        </div>
        <div className="skill">
          <FaPython size={100} />
          <p className='p-skills'>Linguagem de programação de alto nível, interpretada e de propósito geral que facilita o aprendizado e a manutenção do código.</p>
        </div>
        <div className="skill">
          <FaJs size={100} />
          <p className='p-skills'>Linguagem de programação amplamente utilizada para desenvolvimento web, essencial para criar páginas dinâmicas e interativas.</p>
        </div>
        <div className="skill">
          <FaPhp size={100} />
          <p className='p-skills'>Linguagem de programação de código aberto amplamente utilizada no desenvolvimento de sites e aplicações web.</p>
        </div>
        <div className="skill">
          <DiMysql size={100} />
          <p className='p-skills'>Sistema de gerenciamento de banco de dados relacional (RDBMS) de código aberto, e é um dos bancos de dados mais populares, especialmente para aplicações web.</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

