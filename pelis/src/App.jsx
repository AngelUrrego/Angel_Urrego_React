import React from 'react';
import img from './assets/spiderman.jpg'
function App() {
  return (
    <div>
      <h1>Nanpa basico</h1>
      <img src={img} alt="spider man 3" />
      <p>
        <h3>Descripcion</h3>
      Peter Parker sufre una terrible transformación cuando su traje 
      de Hombre Araña se vuelve negro y libera una personalidad oscura y vengativa
      <br></br>
        <h3>Logros</h3>
      La película recaudó 895 millones de dólares en todo el mundo, lo que la convierte en la película más 
      taquillera de la trilogía, la tercera película más taquillera de 2007 y fue la película de Spider-Man 
      más taquillera hasta que fue superada por Spider-Man: Far From Home en 2019.
      </p>
    </div>
  );
}

export default App;