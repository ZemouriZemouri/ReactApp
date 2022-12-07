import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          | QX Day Demo |
        </p>
		    <img src="../sogeti-qx-day-2022.png" />
        <a
          className="App-link"
          href="https://https://www.sogeti.nl/events/QXDay2022"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to QX Day !
        </a>
      </header>
    </div>
  );
}

export default App;
