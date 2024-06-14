import fondo from '../assets/fondo.jpg';
import '../styles/home.css';
import pepino from '../assets/pepino.png';

function Home(){
    return(
        <>
            <div className='mainContainerFondo'>
                <div className='containerPepino'>
                    <div className='imgPepino'>
                    <img src={pepino} alt="" />
                    </div>
                    <div className='containerText'>
                    <h1>BIENVENIDOS A LA PAGINA DE RICK Y MORTY</h1>
                    <h2>Realizada con la siguiente API </h2>
                    <a href="https://rickandmortyapi.com/" target='blannk__'>
                    <button>IR</button>
                    </a>
                    
                    </div>      
                </div>
                <div className='containerFondo'>
                    <img src={fondo} alt=""/>
                </div>
            </div>
        </>
    );
}

export default Home;
