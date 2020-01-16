import React from 'react';
import './App.css';
import Person from './Person';


function App() {
  return (
    <div className="App">
      {/*Comentario en JSX*/}
       <h2>First steps App</h2>
      <Person name = "Josechu Leton" age ="33"/> 
      <Person name = "Encarna Vales" age ="22"/> 
    </div>
  );
}

export default App;
