import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//container je mesto gde ce element da se renderuje
//umetni element na lokaciju containera
ReactDOM.render(
  //element
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //container
  //pretrazi dokument po id-ju i nadji onaj ciji je id root
  document.getElementById('root')
);