import React from 'react';
import Card from './Card';

let CardList = ({ monsters }) => {
    return (
        <div>
            {
                monsters.map(monster => {
                    return (
                        <Card 
                            id={monster.id}
                            name={monster.name}
                            email={monster.email}
                            key={monster.uniqueID}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;