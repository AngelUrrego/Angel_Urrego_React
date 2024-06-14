import '../styles/episodes.css'

const Episode = (props) =>{
    return(
    <>
        <div className="containerParrafo">
            <p>{props.episode}</p>
        </div>
        
    </>
    )
}

export default Episode