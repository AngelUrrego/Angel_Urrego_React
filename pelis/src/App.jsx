import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import './styles/App.css'
import './styles/navbar.css'
import Home from './pages/Home'
import Characters from './pages/Characters'
import Episodes from './pages/Episodes'
import serie from './assets/serie.png'
import NotFound from './pages/NotFound'
import Location from './pages/Location'

function App() {
  return (
    <Router>
        <div className='nav'>
              <img  src={serie} alt="" />  
              <Link className="link" to="/">Inicio</Link>
              <Link className="link" to='/characters'>Personajes</Link>
              <Link className="linkE" to='/episodes'>Episodios</Link>
              <Link className="linkE" to='/location'>Locaciones</Link>
        </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/location" element={<Location />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    
  )
}

export default App