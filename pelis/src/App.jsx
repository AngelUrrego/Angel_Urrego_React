import { useState, useEffect } from 'react'
import Card from './componentes/card'
import './App.css'
import rick from './assets/rick.png'
import morty from './assets/morty.png'
import serie from './assets/serie.png'


function App() {
  const [pagina, setPagina] = useState(1)
  const [personajes, setPersonajes] = useState([])
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
      .then((response) => response.json())
      .then((data) => setPersonajes(data.results))
  }, [pagina])

  /* useEffect(() =>{ 
      const rick = 1
      const morty = 2
       fetch(`https://rickandmortyapi.com/api/character/${rick}`)
        .then((response) => response.json())
        .then((result) => console.log(result))
   }) Sirve para traer un personaje por su ID*/

   const queryIncrementor = () => {
    const url = new URL(window.location)
    url.searchParams.set('page',parseInt(pagina)+ 1)
    window.history.pushState({},'',url)
    setPagina(parseInt(pagina)+ 1) 
   }

   const queryDecrementor = () =>{
    const url = new URL(window.location)
    url.searchParams.set('page', parseInt(pagina) - 1)
    window.history.pushState({},'',url)
    setPagina(parseInt(pagina) - 1)
   }
   
 
  return (
    <>
      <div className='containerImg'>
        <img src={serie} alt="" />
      </div>
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
        <button onClick={queryDecrementor}>
        <img className="rick" src={morty} alt="morty" />
        Anteior Pagina
        </button>
        

        <button onClick={queryIncrementor} >
        <img className="rick" src={rick} alt="rick sanchez"/>
        Siguiente Pagina
        </button>    
      </div>
    </>
  )
}


export default App