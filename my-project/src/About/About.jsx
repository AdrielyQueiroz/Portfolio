import React from 'react';
import './Style.css';
import { CiPaperplane } from "react-icons/ci";

const About = () => {
  return (
    <div className="About-container">
      <section className='About' id='about'>
        <div className='icon'>
          <CiPaperplane />
          <h1>Olá, eu sou a Adriely!</h1>
        </div>

        <p>
          Me chamo <span>Adriely Queiroz</span>, sou estagiária <span>Desenvolvedora Front-end</span> e estou cursando Ciência da Computação com ênfase em algoritmos, 
          estruturas de dados e novas tendências tecnológicas. Apaixonada por design responsivo e performance web, busco constantemente aprimorar 
          minhas habilidades para melhor atender ao usuário, resolver problemas reais e, junto, desenvolver-me pessoalmente.<br></br>
          <br />
          Iniciei meus estudos no ano de 2022, onde optei pelo curso de Análise e Desenvolvimento de Sistemas e conlcuí em 2024. Minha primeira oportunidade profissional foi
          como atendente e vendedora em uma loja varejista e logo após como auxiliar administrativa no ramo de logística onde permaneci por dois anos e meio.<br></br>
          <br />
          Atualmente estagio na Secretaria do Verde e Meio Ambiente (SVMA), desenvolvendo aplicações web, manutenção de código, criando design's dinâmicos e responsivos
          e etc. Estou sempre refém dos estudos, onde acredito fielmente no conhecimento e busco aprender na prática sobre as tecnologias que melhor compoem o front end.<br></br>
          <br></br>
          Possuo conhecimento em outras linguagens de programação como phyton e php e diante disso, estou sempre disposta a por em prática 
          todo o conhecimento adquirido. Com isso, buscar a evolução profissional e pessoal torna-se meu objetivo, fazendo com que o usuário obtenha a melhor experiência 
          possível como foi na minha vez de entrar no mundo da tencologia.

        </p>
      </section>
      </div>
  );
}

export default About;