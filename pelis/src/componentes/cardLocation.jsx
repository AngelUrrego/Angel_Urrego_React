import DimensionLocation from "./dimensionLocation"
import NameLocation from "./nameLocation"
import TypeLocation from "./typeLocation"



const CardLocations = (props) =>{
    return(
        <>
            <div className="cardEpisodes">
                <NameLocation name={props.name}/>
                <TypeLocation type={props.type}/>
                <DimensionLocation dimension={props.dimension}/>
            </div>
        </>
    )
}


export default CardLocations