import { useState, useEffect } from 'react';
import Card from '../componentes/card';
import '../styles/App.css';
import rick from '../assets/rick.png';
import morty from '../assets/morty.png';


function App() {
  const [pagina, setPagina] = useState(1);
  const [personajes, setPersonajes] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [genreFilter, setGenreFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  useEffect(() => {
    const filterParams = new URLSearchParams({
      page: pagina,
      name: nameFilter,
      gender: genreFilter,
      status: statusFilter,

    });

    fetch(`https://rickandmortyapi.com/api/character/?${filterParams}`)
      .then((response) => response.json())
      .then((data) => setPersonajes(data.results || []))
  }, [pagina, nameFilter, genreFilter,statusFilter]);

  const queryIncrementor = () => {
    const url = new URL(window.location)
    url.searchParams.set('page',parseInt(pagina)+ 1)
    window.history.pushState({},'',url)
    setPagina(parseInt(pagina)+ 1) 
  }

  const queryPage = () => {
    const url = new URL(window.location)
    url.searchParams.set('page',parseInt(pagina))
    window.history.pushState({},'',url)
    setPagina(parseInt(pagina)) 
  };
  
  const updatePage = (newPage) => {
    const url = new URL(window.location);
    url.searchParams.set('page', newPage);
    window.history.pushState({}, '', url);
    setPagina(newPage);
  };
  
  const queryDecrementor = () =>{
    const url = new URL(window.location)
    url.searchParams.set('page', parseInt(pagina) - 1)
    window.history.pushState({},'',url)
    setPagina(parseInt(pagina) - 1)
  }

  const onSearch = (e) => {
    e.preventDefault();
    setPagina(1); // Reset to first page on new search
    const url = new URL(window.location);
    url.searchParams.set('name', nameFilter);
    url.searchParams.set('gender', genreFilter);
    url.searchParams.set('gender', statusFilter);
    window.history.pushState({}, '', url);
  };
 
  return (
    <>
      
      
      <div className='forms'>
        <form onSubmit={onSearch}>
          <input
          placeholder='Ingrese un nombre:'
            type="text"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
          <select
            value={genreFilter}
            onChange={(e) => setGenreFilter(e.target.value)}
          >
           <option value="" disabled selected hidden>Seleccionar género</option>
            <option value="">Todos</option>
            <option value="Male">Hombre</option>
            <option value="Female">Mujer</option>
            <option value="Genderless">Sin género</option>
            <option value="unknown">Desconocido</option>
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="" disabled selected hidden>Estado</option>
            <option value="">Todos</option>
            <option value="Alive">Vivo</option>
            <option value="Dead">Muerto</option>
            <option value="unknown">Desconocido</option>
          </select>
        </form>
      </div>
        <div className='mainContainer'>
          <div className='containerCard'>
            {personajes.length !== 0 && personajes.map((personaje) => (
              <Card 
                key={personaje.id} 
                url={personaje.image} 
                title={personaje.name} 
                genre={personaje.gender} 
                status={personaje.status}
              />
            ))}
          </div>
        </div>
  
        <div className='containerButton'> 
          <button onClick={queryDecrementor}>
            <img className="rick" src={morty} alt="morty" />
            Página Anterior
          </button>

          {pagina > 1 &&(
          <button className="buttons"onClick={queryDecrementor} >
            {pagina - 1}
          </button>
          )}
  
          <button  className="buttons" onClick={queryPage}>
            {pagina}
          </button>
          
          {pagina < 42 && (
          <button className="buttons" onClick={() => updatePage (pagina+ 1)}>
          {pagina + 1}
          </button>
          )}
  
          {pagina < 41 && (
          <button className="buttons" onClick={() => updatePage (pagina+ 2) }>
          {pagina + 2}
          </button>
          )}
  
          {pagina < 40 && (
          <button className="buttons" onClick={() => updatePage (pagina + 3)}>
          {pagina + 3}
          </button>
          )}
  
          {pagina < 42 && (
          <button onClick={queryIncrementor}>
            <img className="rick" src={rick} alt="rick sanchez"/>
            Siguiente Página
          </button>
          )}
  
        </div>
      </>
    );
  }

export default App;
