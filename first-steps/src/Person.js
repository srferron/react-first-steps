import React from 'react';

//React Component child
const Person = (props) => (
    <div>
        <h2>I´m a person and my name is {props.name} and my age is {props.age}</h2> 
    </div>
)

export default Person;