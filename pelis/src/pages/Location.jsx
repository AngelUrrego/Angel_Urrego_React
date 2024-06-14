import { useState,useEffect  } from "react"
import CardLocations from "../componentes/cardLocation"
import '../styles/locations.css'

const Location = () =>{
    const [locations, setLocations] = useState([])
    console.log(locations)
    useEffect(() =>{
        fetch("https://rickandmortyapi.com/api/location")
            .then((response) => response.json())
            .then((data) => setLocations(data.results));   
    },[])

    return(
        <>
        <div className='mainContainer'>
            <div className="containerLocations">
                {locations.length !== 0 && locations.map((location) =>(
                    <CardLocations 
                    key={location.id}
                    name={location.name}
                    type={location.type}
                    dimension={location.dimension}    
                    />

                ))}
            </div>
        </div>

        </>
    );
};

export default Location


