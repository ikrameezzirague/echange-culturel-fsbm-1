import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        ☰
      </button>
      <ul>
        <li><a href="Accueil">Accueil</a></li>
        <li><a href="/FsbmEnChiffre">Fsbm en chiffre</a></li>
        <li><a href="Masters maroc">Masters maroc</a></li>
        <li><a href="événements">événements</a></li>
        <li><a href="Partenaire industruelle">Partenaire industruelle</a></li>
        <li><a href="Partenaire Académique">Partenaire Académique</a></li>
        <li><a href="Clubs">Clubs</a></li>
        <li><a href="Associations">Associations</a></li>
        <li><a href="Cv-Thèque">Cv-Thèque</a></li>
        <li><a href="FAQ">FAQ</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;