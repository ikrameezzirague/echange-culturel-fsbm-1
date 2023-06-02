import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import établissements_uh2c from '../composants/établissements_uh2c';
import Navbar from '../composants/Navbar';

import './Master.css';

function App() {
  const universities = [
    { image: Logo_UHIIC, alt: 'Logo UHIIC', text: 'Nombre de masters: 4', description: 'UH2C', link: 'établissements_uh2c' },
    { image: UMVR, alt: 'Université 10', text: 'Nombre de masters: 5', description: ' UMVR' },
    { image: UBNTK, alt: 'Université 3', text: 'Nombre de masters: 1', description: ' UBNTK' },
    { image: UCAM, alt: 'Université 4', text: 'Nombre de masters: 1', description: 'UCAM' },
    { image: UCDJ, alt: 'Université 5', text: 'Nombre de masters: 1', description: 'UCAM' },
    { image: UHIS, alt: 'Université 6', text: 'Nombre de masters: 1', description: 'UHIS' },
    { image: UIBZA, alt: 'Université 7', text: 'Nombre de masters: 1', description: 'UIBZA' },
    { image: UMIM, alt: 'Université 8', text: 'Nombre de masters: 4', description: 'UMIM' },
    { image: UMIO, alt: 'Université 9', text: 'Nombre de masters: 0', description: 'UMIO' },
    { image: UABMST, alt: 'Université 2', text: 'Nombre de masters: 4', description: 'UABMST' },
    { image: USMBAF, alt: 'Université 11', text: 'Nombre de masters: 2', description: 'USMBAF' },
    { image: UMYS, alt: 'Université 12', text: 'Nombre de masters: 0', description: 'UMYS' },
  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleUniversityClick = (link) => {
    navigate(`/${link}`);
  };

  const rows = [];
  for (let i = 0; i < universities.length; i += 3) {
    const row = universities.slice(i, i + 3);
    rows.push(row);
  }

  return (
    
    <div className={`App ${isDrawerOpen ? 'drawer-open' : ''}`}>
      <Navbar onDrawerClick={handleDrawerClick} />
      <div className="image-container">
        <table className="image-table table-background">
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((university, index) => (
                  <td key={index}>
                    <Link to={`/${university.link}`}>
                      <div className="image-wrapper" onClick={() => handleUniversityClick(university.link)}>
                        <img src={university.image} alt={university.alt} />
                      </div>
                      <div className="image-text">{university.text}</div>
                      <div className="image-description">{university.description}</div>
                    </Link>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App