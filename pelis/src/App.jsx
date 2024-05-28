/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import Card from './componentes/card'
import './App.css'
import rick from './assets/rick.png'
import morty from './assets/morty.png'


function App() {
  const [pagina, setPagina] = useState(0)
  const [personajes, setPersonajes] = useState([])
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
      .then((response) => response.json())
      .then((data) => setPersonajes(data.results))
  }, [pagina])
  const incrementarContador = () => {
    setPagina(pagina + 1)
  }
  const decrementarContador = () => {
    setPagina(pagina - 1)
  }
  return (
    <>
      <div className='container'>
        {personajes.length !== 0 && personajes.map((personaje) => (
          <Card 
          key={personaje.id} 
          url={personaje.image} 
          title={personaje.name} 
          genre={personaje.gender} 
          status={personaje.status}/>
        )) }
      </div>
      <div className='containerButton'>
        <button onClick={decrementarContador}>
        <img className="rick" src={morty} alt="morty" />
        Anteior Pagina
        </button>
        
        <button onClick={incrementarContador}>
        <img className="rick" src={rick} alt="rick sanchez"/>
        Siguiente Pagina
        </button>
        
      </div>
    </>
  )
}


export default App