import React from 'react';

//React Component child
const ExampleProps = (props) => (
    <div>
        <h1>{props.title}</h1> 
        <h2>Name: {props.hero.name}</h2>
        <h2>Rating: {props.rating}</h2>
        <h2>Superpowers: {props.hero.superpowers[0]},{props.hero.superpowers[1]}</h2>
        {props.isNobelWinner && <h2>Has won the Nobel</h2>}
    </div>
);

export default ExampleProps;