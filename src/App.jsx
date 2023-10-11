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

      </main>
      <body>

      </body>
    </>
  )
}

export default App
