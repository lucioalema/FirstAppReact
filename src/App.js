import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cliente from './components/Cliente';


function HolaMundo(props) {
  return (
  <div>
      <h1>Hola {props.nombre} {props.apellido}</h1>
  </div>);
}

const Saludo = (props) => {
  return <h2>Hasta mañana {props.nombre}</h2>;
}

function App() {
  return (
    <div>
        <HolaMundo nombre="Juan" apellido="Perez" />
        <Cliente nombre="Juan" />
        <Saludo nombre="Juan" />
    </div>
    /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
  );
}

export default App;
