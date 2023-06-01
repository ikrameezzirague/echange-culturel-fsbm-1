import React, { useState } from 'react';
import './Events.css';


const Event = ({ date, title, description, location, isConfirmed, onConfirm }) => {
  const handleConfirm = () => {
    onConfirm();
  };

  return (
    <div className={`event ${isConfirmed ? 'event-confirmed' : ''}`}>

      <div className="event-details">
        <h3 className="event-title">{title}</h3>
        <div className="event-info">
          <p className="event-date">Date: {date.toLocaleDateString()}</p>
          <p className="event-location">Location: {location}</p>
        </div>
        <p className="event-description">{description}</p>
      </div>
      <div className="event-actions">
        {isConfirmed ? (
          <p className="event-confirmed">Confirmed</p>
        ) : (
          <button className="event-confirm" onClick={handleConfirm}>
            Confirm Your Attendance
          </button>
        )}
      </div>
    </div>
  );
};

const CombinedComponent = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Conférences',
      description: 'Intelligence artificielle',
      date: new Date('2023-09-15'),
      location: 'Amphi8',
      isConfirmed: false,
    },
    {
      id: 2,
      title: 'Journée portes ouvertes',
      description: 'Soyez là où il faut être',
      date: new Date('2023-10-01'),
      location: 'Amphi8',
      isConfirmed: false,
    },
    {
      id: 3,
      title: 'Caravanes de recrutements',
      description: 'Rencontrez votre recruteur',
      date: new Date('2023-10-15'),
      location: 'Bibliothèque',
      isConfirmed: false,
    },
    {
      id: 4,
      title: 'Atelier de programmation',
      description: 'Introduction à Python',
      date: new Date('2023-11-05'),
      location: 'Salle informatique',
      isConfirmed: false,
    },
    {
      id: 5,
      title: 'Hackathon',
      description: 'Développement d\'une application web',
      date: new Date('2023-11-18'),
      location: 'Labo informatique',
      isConfirmed: false,
    },
  ]);

  const handleConfirm = (eventId) => {
    const updatedEvents = events.map((event) => {
      if (event.id === eventId) {
        return { ...event, isConfirmed: true };
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  return (
    <div className="combined-container">
   
      <div className="event-list">
        {events.map((event, index) => (
          <Event
            key={event.id}
            title={event.title}
            description={event.description}
            date={event.date}
            location={event.location}
            isConfirmed={event.isConfirmed}
            onConfirm={() => handleConfirm(event.id)}
            className={index % 2 === 0 ? 'event-left' : 'event-right'}
          />
        ))}
      </div>
    </div>
  );
};

export default CombinedComponent;
