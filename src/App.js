import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom'; 
import './components/App.css'

import { PiEyeSlash } from "react-icons/pi";
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { BiLogoGmail } from "react-icons/bi";

import Photo from './images/photo.jpg';
import Projeto_samsung from './images/projeto_samsung.png';
import html from './images/html.png'
import css from './images/css.png'
import js from './images/js.png'
import php from './images/php.png'
import tailwind from './images/tailwind.png'
import react from './images/react.png'

function App() {
  return (
    <Router>
      <nav className='border-b-2 p-5 border-indigo-300 mr-20 ml-20 example'>
        <ul className='flex justify-center space-x-20 text-indigo-300 text-lg font-semibold'>
          <li className='hover:text-indigo-400'>
            <Link to="#home" onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>Home</Link>
          </li>
          <li className='hover:text-indigo-400'>
            <Link to="#projects" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>Projetos</Link>
          </li>
          <li className='hover:text-indigo-400'>
            <Link to="#about" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>Habilidades</Link>
          </li>
          <li className='hover:text-indigo-400'>
            <Link to="#contact" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contato</Link>
          </li>
        </ul>
      </nav>

      <div className='text-white example'>
        <section id="home" className="flex items-center justify-center mt-52">
          <div className="flex w-full max-w-5xl items-center justify-center mb-20">
            <img
              src={Photo}
              alt="foto"
              className="w-1/2 rounded-full mr-20 border border-violet-400 shadow-violet-400"
            />
            <div className="w-2/3 text-justify">
              <h1 className="mb-10 text-2xl">Olá!</h1>
              <p className="text-xl leading-10">
                Me chamo <span className="uppercase text-indigo-300 font-bold">Adriely Queiroz</span> e atualmente sou estagiária{" "}
                <span className="uppercase text-indigo-300 font-bold">Desenvolvedora Front-end </span>
                na Secretaria do Verde e Meio Ambiente. Estudo Análise e Desenvolvimento de Sistemas.
                Prezo pelo estudo e qualidade para que consiga atender a expectativa do usuário e junto,
                meu crescimento profissional. Sou apaixonada em criar interfaces dinâmicas, interativas e
                responsivas, e estou sempre pronta para aprender e colocar em prática todo conhecimento adquirido.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className='border border-violet-400 rounded mt-52 p-20 mr-10 ml-10 example'>
          <h2 className='uppercase text-indigo-300 font-bold border-b-2 w-52 border-violet-400 text-4xl mb-10 pb-2'>Projetos</h2>
          <div className='flex items-center mb-20'>
            <img src={Projeto_samsung} alt="samsung" className='w-1/2 rounded border-2 border-violet-400 mr-10' />
            <div className='w-1/2'>
              <h1 className='text-2xl font-bold mb-10'>Clone da página Samsung - venda <span className='uppercase text-yellow-500'>galaxy z flip 5g</span></h1>
              <p className='text-lg leading-10'>
                Projeto feito de forma simples para testar conhecimentos em HTML, CSS e JavaScript puro. O usuário consegue mudar a cor do aparelho
                ao clicar nos botões das cores referentes e a borda dos botões muda de acordo com o clique.
              </p>
              <div className='flex space-x-20 text-green-500 mt-10 text-5xl justify-center'>
                <PiEyeSlash className='hover:cursor-pointer hover:border border-green-500 rounded' onClick={() => window.open('http://127.0.0.1:5500/index.html')}/>
                <VscGithub className='hover:cursor-pointer hover:border border-green-500 rounded' onClick={() => window.open('https://github.com/AdrielyQueiroz/projeto_sms')}/>
              </div>
            </div>
          </div>
        </section>

        {/* tentar recuperar a outra seção amanhã */}

        <section id="about" className='mt-52 bg-violet-950 p-20 border border-violet-400 mr-10 ml-10'>
          <h2 className='flex text-4xl font-bold mb-20 justify-center mr-20 uppercase'>Habilidades</h2>
          <div className='flex space-x-20 justify-center mb-32'>
          <img src={html} alt="html" className='w-40 border-violet-400 shadow-violet-400 p-2'/>
          <img src={css} alt="css" className='w-40 border-violet-400 shadow-violet-400 p-2'/>
          <img src={js} alt="js" className='w-40 border-violet-400 shadow-violet-400 p-2'/>
          <img src={php} alt="php" className='w-56 border-violet-400 shadow-violet-400 p-5'/>
          <img src={tailwind} alt="tailwind" className='w-40 border-violet-400 shadow-violet-400 p-5'/>
          <img src={react} alt="tailwind" className='w-40 border-violet-400 shadow-violet-400 p-5'/>
          </div>
          <div className='flex space-x-20 justify-center text-xl mb-10 hover:cursor-grab'>
            <p className='hover:text-violet-200'>Capacidade de Organização</p>
            <p className='hover:text-violet-200'>Criatividade</p>
            <p className='hover:text-violet-200'>Dedicação</p>
            <p className='hover:text-violet-200'>Esforço</p>
            <p className='hover:text-violet-200'>Empatia</p>
            <p className='hover:text-violet-200'>Pontual</p>
            <p className='hover:text-violet-200'>Busca por Resultados</p>
          </div>
        </section>

        <section id="contact" className='mt-52'>
          <h2 className='text-4xl font-bold text-indigo-200 mb-10 border-b-2 p-5 border-indigo-400 mr-20 ml-20 pb-5 uppercase'>Contato</h2>
          <div className='border border-violet-400 rounded mr-20 ml-20 mb-20'>
          <p className='p-10 text-2xl'>vamos nos conectar?</p>
          <div className='flex space-x-10 ml-10 mb-20 text-5xl text-violet-100'>
          <CiLinkedin className='hover:cursor-pointer hover:text-green-500' onClick={() => window.open('https://www.linkedin.com/in/adriely-queiroz-b5b2481b2/')}/>
          <VscGithub className='hover:cursor-pointer hover:text-green-500' onClick={() => window.open('https://github.com/AdrielyQueiroz')}/>
          <BiLogoGmail className='hover:cursor-pointer hover:text-green-500'/>
          </div>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App; 






// import React from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
// import { PiEyeSlash } from "react-icons/pi";
// import { VscGithub } from "react-icons/vsc";


// import Photo from './images/photo.jpg'
// import Projeto_samsung from './images/projeto_samsung.png'

// function App() {
//   return (
//     <Router>
//       <nav className='border-b-2 p-5 border-indigo-300 mr-20 ml-20'>
//         <ul className='flex justify-center space-x-20 text-indigo-300 text-lg font-semibold'>
//           <li className='hover:text-indigo-400'><Link to="/">Home</Link></li>
//           <li className='hover:text-indigo-400'><Link to="#projects">Projetos</Link></li>
//           <li className='hover:text-indigo-400'><Link to="#about">Habilidades</Link></li>
//           <li className='hover:text-indigo-400'><Link to="#contact">Contato</Link></li>
//         </ul>
//       </nav>

//       <div className='text-white'>
//       <section id="home" className="flex items-center justify-center mt-32">
//         <div className="flex w-full max-w-5xl items-center justify-center">
//           <img
//           src={Photo}
//           alt="foto"
//           className="w-2/5 rounded-full mr-20 border border-violet-400 shadow-violet-400"
//           />
//     <div className="w-2/3 text-justify">
//       <h1 className="mb-10 text-2xl">Olá!</h1>
//       <p className="text-xl leading-10">
//         Me chamo <span className="uppercase text-indigo-300 font-bold">Adriely Queiroz</span> e atualmente sou estagiária{" "}
//         <span className="uppercase text-indigo-300 font-bold">Desenvolvedora Front-end </span>
//         na Secretaria do Verde e Meio Ambiente. Estudo Análise e Desenvolvimento de Sistemas.
//         Prezo pelo estudo e qualidade para que consiga atender a expectativa do usuário e junto,
//         meu crescimento profissional. Sou apaixonada em criar interfaces dinâmicas, interativas e
//         responsivas, e estou sempre pronta para aprender e colocar em prática todo conhecimento adquirido.
//       </p>
//     </div>
//   </div>
// </section>
// <section id="projects" className='border border-violet-400 rounded mt-52 p-20 mr-10 ml-10'>
//   <h2 className='uppercase text-indigo-300 font-bold border-b-2 w-52 border-violet-400 text-4xl mb-10 pb-2'>Projetos</h2>
  
//   <div className='flex items-center'>
//     <img src={Projeto_samsung} alt="samsung" className='w-1/2 rounded border-2 border-violet-400 mr-10' />
    
//     <div className='w-1/2'>
//       <h1 className='text-2xl font-bold mb-10'>Clone da página Samsung - venda <span className='uppercase text-yellow-500'>galaxy z filip 5g</span></h1>
//       <p className='text-lg leading-10'>
//         Projeto feito de forma simples para testar conhecimentos em HTML, CSS e JavaScript puro. O usuário consegue mudar a cor do aparelho
//         ao clicar nos botões das cores referentes e a borda dos botões muda de acordo com o clique.
//       </p>
//       <div className='flex space-x-20 text-green-500 mt-10 text-3xl justify-center'>
//       <PiEyeSlash className='hover:cursor-pointer hover:border border-green-500 rounded'/><VscGithub className='hover:cursor-pointer hover:border border-green-500 rounded'/> 
// </div>

//     </div>
//   </div>
// </section>


//         <section id="about">
//           <h2>About</h2>
//           <p className='mb-20'>Conteúdo da seção About.</p>
//         </section>

//         <section id="contact">
//           <h2>Contact</h2>
//           <p className='mb-20'>Conteúdo da seção Contact.</p>
//         </section>
//       </div>
//     </Router>
//   );
// }

// export default App;














// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './components/Home';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Contact from './components/Contact';

// function App() {
//   return (
//     <Router>
//       <nav className='border-b-2 p-5 border-indigo-300 mr-20 ml-20'>
//         <ul className='flex justify-center space-x-20 text-indigo-300 text-lg font-semibold'>
//           <li className='hover:text-indigo-400'><Link to="/">Home</Link></li>
//           <li className='hover:text-indigo-400'><Link to="/projects">Projetos</Link></li> {/* Ajustado aqui */}
//           <li className='hover:text-indigo-400'><Link to="/skills">Habilidades</Link></li>
//           <li className='hover:text-indigo-400'><Link to="/contact">Contato</Link></li>
//         </ul>
//         <div ></div>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/skills" element={<Skills />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <h1 className="text-4xl font-bold text-blue-500">Olá, Tailwind CSS!</h1>
//     </div>
//   );
// }

// export default App;
