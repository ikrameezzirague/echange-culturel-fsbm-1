import React from 'react';
import Logo_UHIIC from './../univesités/Logo_UHIIC.png';
import UABMST from './../univesités/UABMST.png';
import UBNTK from './../univesités/UBNTK.png';
import UCAM from './../univesités/UCAM.png';
import UCDJ from './../univesités/UCDJ.png';
import UHIS from './../univesités/UHIS.png';
import UIBZA from './../univesités/UIBZA.jpeg';
import UMIM from './../univesités/UMIM.png';
import UMIO from './../univesités/UMIO.png';
import UMVR from './../univesités/UMVR.png';
import USMBAF from './../univesités/USMBAF.png';
import UMYS from './../univesités/UMYS.jpeg';
import établissements_uh2c from './établissements_uh2c.js';
import Navbar from '../composants/Navbar';

import './Master.css'

function App() {
  return (
    <div className="App">
       <Navbar />
      <div className="image-container">
        <a href="#"><img src={Logo_UHIIC} alt="Logo UHIIC" /></a>
        <a href="#"><img src={UABMST} alt="Université 2" /></a>
        <a href="https://example.com/page3"><img src={UBNTK} alt="Université 3" /></a>
        <a href="https://example.com/page4"><img src={UCAM} alt="Université 4" /></a>
        <a href="https://example.com/page5"><img src={UCDJ} alt="Université 5" /></a>
        <a href="https://example.com/page6"><img src={UHIS} alt="Université 6" /></a>
        <a href="https://example.com/page7"><img src={UIBZA} alt="Université 7" /></a>
        <a href="https://example.com/page8"><img src={UMIM} alt="Université 8" /></a>
        <a href="https://example.com/page9"><img src={UMIO} alt="Université 9" /></a>
        <a href="https://example.com/page10"><img src={UMVR} alt="Université 10" /></a>
        <a href="https://example.com/page11"><img src={USMBAF} alt="Université 11" /></a>
        <a href="https://example.com/page12"><img src={UMYS} alt="Université 12" /></a>
      </div>
    </div>
  );
}

export default App;
