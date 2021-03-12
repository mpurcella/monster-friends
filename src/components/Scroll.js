import React from 'react';

let Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', borderTop: '2px solid black', borderBottom: '2px solid black', height: '700px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;