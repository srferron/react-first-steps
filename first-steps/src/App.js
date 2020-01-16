import React from 'react';
import './App.css';
import ButtomAlertClassBind from "./ButtomAlertClassBind";
import ButtomAlertClass from "./ButtomAlertClass";
import ButtomAlert from "./ButtomAlert";

function App() {
  return (
    <div className="App">
      {/*Comentario en JSX*/}
      <ButtomAlert/>

      <ButtomAlertClass/>
      <ButtomAlertClassBind/>
    </div>
  );
}

export default App;
