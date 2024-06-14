import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import ModalC from './components/ModalC'; // Corrected import statement
import CardC from './components/CardC';

function App() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button color="danger" onClick={toggle}>
          Open Modal
        </Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ModalC modal={modal} toggle={toggle} /> {/* Pass modal and toggle props */}
        <CardC/>
        <CardC/>
        <CardC/>
      </header>
    </div>
  );
}

export default App;
