import React from 'react';

function Details(props) {
  return (
    <div>
        <p className='parrafo'>
          {props.genre}
        </p>
        <div className='containerStatus'>
          <p>
            {props.status}
          </p>
        </div>
    </div>
  );
}
export default Details;