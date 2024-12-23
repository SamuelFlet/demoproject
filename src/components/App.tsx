import React from 'react';
import logo from '../img/logo512.png';
import { Button } from '@mui/material';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
       <Button variant='contained'>Hello World</Button>
      </header>
    </div>
  );
}

export default App;
