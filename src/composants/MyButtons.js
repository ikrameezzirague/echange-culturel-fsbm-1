import React from "react";
import "./MyButtons.css";

const MyButtons = () => {
  const handleButtonClick = (buttonLabel) => {
    console.log(`Le bouton ${buttonLabel} a été cliqué.`);
  };

  return (
    <div className="button-container"> {/* Ajout de la classe button-container */}
      <button onClick={() => handleButtonClick("Fsbm en chiffre")}><a href='./FsbmEnChiffre'>Fsbm en chiffre</a></button>
      <button onClick={() => handleButtonClick("Masters maroc")}>Masters maroc</button>
      <button onClick={() => handleButtonClick("Partenaire industruelle")}>Partenaire industruelle</button>
      <button onClick={() => handleButtonClick("Associations")}>Associations</button>
      <button onClick={() => handleButtonClick("Partenaire Académique")}>Partenaire Académique</button>
      <button onClick={() => handleButtonClick("Clubs")}>Clubs</button>
    </div>
  );
};

export default MyButtons;