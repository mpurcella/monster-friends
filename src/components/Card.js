import React from 'react';
import './Card.css';

let Card = ({ id, name, email }) => {
    return (
        <div className='dib bg-light-red pa3 ma2 bw2 b--solid b--near-black br3 tc shadow-5 grow' >
            <img src={`https://robohash.org/${id}?set=set2`} alt='monster'/>
            <div>
                <h2 className='ttu tracked near-black'>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;