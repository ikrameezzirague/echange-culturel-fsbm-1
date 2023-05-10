import React, { useState } from "react";
import './events.css';


const EventManager = () => {
  // Initialisation de l'état local
  const [events, setEvents] = useState([
    {
      name: "Conférence sur l'Intelligence Artificielle",
      date: "2023-06-01",
      students: 50,
      past: true
    },
    {
      name: "Journée Portes Ouvertes",
      date: "2023-07-15",
      students: 120,
      past: false
    },
    {
      name: "Séminaire sur la Blockchain",
      date: "2023-08-25",
      students: 80,
      past: false
    }
  ]);

  // Gestion de la soumission du formulaire pour ajouter un événement
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const date = event.target.elements.date.value;
    const students = event.target.elements.students.value;

    setEvents([...events, { name, date, students, past: false }]);

    event.target.reset();
  };

  // Affichage de la liste des événements
  const eventsList = events.map((event) => (
    <div key={event.name}>
      <h3>{event.name}</h3>
      <p>Date : {event.date}</p>
      <p>Nombre d'étudiants attendus : {event.students}</p>
      {event.past && <p>Cet événement est passé.</p>}
      <hr />
    </div>
  ));

  // Filtrage des événements passés
  const pastEventsList = events
    .filter((event) => event.past)
    .map((event) => (
      <div key={event.name}>
        <h3>{event.name}</h3>
        <p>Date : {event.date}</p>
        <p>Nombre d'étudiants présents : {event.students}</p>
        <hr />
      </div>
    ));

  return (
    <div>
      <h2>Liste des événements</h2>
      {eventsList}
      <h2>Événements passés</h2>
      {pastEventsList}
      <h2>Ajouter un événement</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nom de l'événement :</label>
        <input type="text" id="name" name="name" required />
        <br />
        <label htmlFor="date">Date de l'événement :</label>
        <input type="date" id="date" name="date" required />
        <br />
        <label htmlFor="students">
          Nombre d'étudiants attendus :
        </label>
        <input
          type="number"
          id="students"
          name="students"
          min="1"
          required
        />
        <br />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default EventManager;
