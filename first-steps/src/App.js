import React from 'react';
import './App.css';
//import ExampleProps from "./ExampleProps";
import MyButtom from "./MyButtom";
import ExamplePropsDeconstructed from "./ExamplePropsDeconstructed";

function App() {
  return (
    <div className="App">
      {/*Comentario en JSX*/}
      <ExamplePropsDeconstructed hero={{name:'Nelson Mandela', superpowers: ['resiliencia', 'determinacion']}} rating={10} isNobelWinner title="A super hero Facts"/> 
      <MyButtom isGrand legend='Mi botón'/>
    </div>
  );
}

export default App;
