import React from 'react';

//El parametro evento que recibe el handleClick es un evento de tipo React, no el del navegador, para que sea independiente del tipo navegador 
//(cada navegador tiene su propia clase evento) 
const handleClick = (ev) =>{
    ev.persist(); //Si ponemos esta linea quitamos el recubrimiento del evento React y dejamos el evento nativo del navegador (Muchos de los getters que se ven en consola dejan de ser null)
    console.log(ev);
    alert('Booooom!!!');
}

const ButtomAlert = () => (
    //Cuando el onClick tiene la C en mayusculas (Camel Case) lo gestiona React, sino el navegador
    <button onClick={handleClick}>Don´t push</button>
)

export default ButtomAlert;
