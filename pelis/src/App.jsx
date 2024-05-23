import React from 'react';
import img from './assets/spiderman.jpg'
import Title from './componentes/title';
import Img from './componentes/img';
import image from './assets/rick.jpg'
import image2 from './assets/morty.jpg'
import Details from './componentes/details';
import './App.css'

function App() {
  return (
    <>
    <div className='container'>
      <div className='card'>
        <Img url={image}/>
        <Title title="Rick Sánchez" />
        <Details genre="Humano" status="vivo"/>
      </div>
      <div className='card'>
        <Img url={image2}/> 
        <Title title="Morty Smith" />
        <Details genre="Humano" status="vivo"/>
      </div>
    </div>
    </>
  );
}

export default App;