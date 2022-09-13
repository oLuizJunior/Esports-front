import './styles/main.css'

import logoImg from './assets/Logo.svg'

function App() {
 return (
  <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
    <img src={logoImg} alt="Logo Esportes" />

    <h1 className=" text-6xl text-white font-black mt-20">
      Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui
    </h1>

    <div className="grid grid-cols-6 gap-6 mt-16">
      <a href="">
        <img src="./Game-1.png" alt="" />
      </a>
      <a href="">
        <img src="./Game-2.png" alt="" />
      </a>
      <a href="">
        <img src="./Game-3.png" alt="" />
      </a>
      <a href="">
        <img src="./Game-4.png" alt="" />
      </a>
      <a href="">
        <img src="./Game-5.png" alt="" />
      </a>
      <a href="">
        <img src="./Game-6.png" alt="" />
      </a>
    </div>
  </div>
 )
  
}

export default App