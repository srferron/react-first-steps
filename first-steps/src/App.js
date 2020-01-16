import React from 'react';
import './App.css';
//import ExampleProps from "./ExampleProps";
import ExamplePropsDeconstructed from "./ExamplePropsDeconstructed";


function App() {
  return (
    <div className="App">
      {/*Comentario en JSX*/}
      <ExamplePropsDeconstructed hero={{name:'Nelson Mandela', superpowers: ['resiliencia', 'determinacion']}} rating={10} isNobelWinner title="A super hero Facts"/> 
    </div>
  );
}

export default App;
