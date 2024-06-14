import { useEffect, useState } from "react"
import CardEpisodes from "../componentes/cardEpisodes"
import '../styles/episodes.css'

const Episodes = () => {
    const [episodios, setEpisodios] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/episode')
        .then((response) => response.json())
        .then((data) => setEpisodios(data.results))
    },[])
    
    return(
        <>
        <div className='mainContainer'>
            <div className="containerCardEpisodes">
                {episodios.length !== 0 && episodios.map((episodio) => (
                <CardEpisodes 
                key={episodio.id} 
                name={episodio.name} 
                air_date={episodio.air_date} 
                episode={episodio.episode}
                />
                ))}
            </div>
        </div>    
        </>
    )
}

export default Episodes