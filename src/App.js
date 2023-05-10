import './App.css';
import Navbar from './composants/Navbar';
//import Login from './pages/Login';
import Sidebar from './composants/Sidebar';
import React from 'react';
import MyGrid from "./composants/MyGrid";
import MyButtons from "./composants/MyButtons";
//import events from './pages/events';

import { TextField } from '@mui/material';





function App() {
  const handleSearch = (term) => {
    // Faire quelque chose avec la recherche effectuée
  };

  return (
    <div>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div className="App">
        <h1>Booster votre carrière</h1>
      </div>
      <main>
        </main>
        <div>
      <MyButtons />
    </div>
        <div>

        <MyGrid />
    </div>
    </div>
    
  );
}

export default App;
