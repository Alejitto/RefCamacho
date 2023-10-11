import { useState } from 'react'
import './App.css'
import logo from './assets/logoRef.png'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div id='container'>
          <div className='first'>
            <div className='dLogo'>
              <img src={logo}/>
            </div>
            <div className='titulo'>
              <div>
                <h1>REFRIGERACIÓN CAMACHO</h1>
                <p>Cuidamos nuestra marca y tus productos.</p>
              </div>
            </div>
          </div>
          <div className='login'>
            <a href='www.facebook.com'>
              <i className="bi bi-person-fill"></i>
              <p>Iniciar Sesión <br/> ó Registrarme</p>
            </a>
          </div>
        </div>
      </header>
      <main>
        <div id='container-main'>
          <div id='home' className='menu'>
            <a href='#'>
            <i className="bi bi-house-door-fill"></i>
              <p>Inicio</p>
            </a>
          </div>
          <div id='about-us' className='menu'>
            <a href='#'>
            <i className="bi bi-question-circle-fill"></i>
              <p>¿Quiénes Somos?</p>
            </a>
          </div>
          <div id='home' className='menu'>
            <a href='#'>
            <i className="bi bi-binoculars-fill"></i>
              <p>Vision</p>
            </a>
          </div>
          <div id='about-us' className='menu'>
            <a href='#'>
            <i className="bi bi-bullseye"></i>
              <p>Mision</p>
            </a>
          </div>
          <div id='about-us' className='menu'>
            <a href='#'>
            <i className="bi bi-gear-fill"></i>
              <p>Trabajos</p>
            </a>
          </div>
          <div id='home' className='menu'>
            <a href='#'>
            <i className="bi bi-cart-fill"></i>
              <p>Servicios y Ventas</p>
            </a>
          </div>
          <div id='about-us' className='menu'>
            <a href='#'>
            <i className="bi bi-person-fill"></i>
              <p>Contacto</p>
            </a>
          </div>
        </div>
      </main>
      <body>

      </body>
    </>
  )
}

export default App
