import React from 'react';

import { Navbar } from '../components/layout/Navbar/Navbar';
import { Board } from '../views/Main/Board';

import "../sass/_main.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      
      <Board />
    </div>
  );
}

export default App;
