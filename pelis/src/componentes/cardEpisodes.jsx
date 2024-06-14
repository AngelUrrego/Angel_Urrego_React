import Date from "./dateEpisodes";
import NameEpisodes from "./nameEpisodes";
import Episode from "./episode";


const CardEpisode = (props) =>{
    return(
    <>
    
        <div className="cardEpisodes">
        <NameEpisodes name={props.name}/>
        <Date air_date={props.air_date}/>
        <Episode episode={props.episode}/>
        </div>
    </>
    )
}

export default CardEpisode