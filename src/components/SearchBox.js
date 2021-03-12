import React from 'react';

let SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2 mb3'>
            <input
                className='pa3 b--light-red bg-near-black white-80 outline-0'
                type='search'
                placeholder='Search Monsters'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;