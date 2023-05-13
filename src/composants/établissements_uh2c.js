import React from 'react';
import logo_ensam from './../établissements/logo_ensam.png'
import logo_fsbm from './../établissements/logo_fsbm.png'
import logo_fst from './../établissements/logo_fst.png'
import './établissements_uh2c.css';
function App() {
    
  
    return (
      <div className="App">
        <div className="image-container">
          <img src={logo_ensam} alt="Université 1" />
          <img src={logo_fsbm} alt="Université 2" />
          <img src={logo_fst} alt="Université 3" />
        </div>
      </div>
    );
  }
  
  export default App;