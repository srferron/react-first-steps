import React from 'react';

//React Component child
const ExamplePropsDeconstructed = (props) => {
    const {
        title,
        hero,
        isNobelWinner,
        rating
    } = props;

    return (
        <>
            <h1 className="saludo">{title}</h1> 
            <h2>Name: {hero.name}</h2>
            <h2 style={
                {
                color:'red',
                fontSize: '150%'
            }} >Rating: {rating}</h2>
            <h2>Superpowers: {hero.superpowers[0]},{hero.superpowers[1]}</h2>
            {isNobelWinner && <h2>Has won the Nobel</h2>}
        </>
    )
};

export default ExamplePropsDeconstructed;