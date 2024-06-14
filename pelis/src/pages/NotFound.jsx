import '../styles/notFound.css'
import rick from '../assets/rick.png'
function NotFound(){
    return(
        <>  
            <div className='containerNot'>
                <h1>Página no encontrada</h1>
                    <img src={rick} alt="rick" />
            </div>
            
        </>
        
    )
}

export default NotFound