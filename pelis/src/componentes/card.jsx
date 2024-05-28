import React from 'react';
import Title from "./title"
import Details from "./details"
import Img from "./img"



function Card(props){
    return(
        <>
        
         <div className='card'>
            <Img url={props.url}/>
            <Title title={props.title}/>
            <Details genre={props.genre} status={props.status}/>
         </div>
            
        </>
    )
}

export default Card;