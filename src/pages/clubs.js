import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../composants/Navbar';

import chess from './../images/chess.png';
import softskils from './../images/softskils.jpg';
import enactus from './../images/enactus.jpg';
import orange from './../images/orange.jpg';
import robotique from './../images/robotique.jpg';

function Clubs() {
  const universities = [
    { image: chess, alt: 'Image 1' },
    { image: softskils, alt: 'Image 2' },
    { image: enactus, alt: 'Image 3' },
    { image: orange, alt: 'Image 4' },
    { image: robotique, alt: 'Image 5' },
    { text: 'En cours...', alt: 'Image 6' }
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
                    <div className="image-wrapper" onClick={() => handleUniversityClick(university.link)}>
                      {university.image ? (
                        <img src={university.image} alt={university.alt} />
                      ) : (
                        <div>{university.text}</div>
                      )}
                    </div>
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

export default Clubs;