import React, { useState } from 'react';
import './Events.css';


const Event = ({ date, title, description, location, onConfirm }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed(true);
    onConfirm();
  };

  return (
    <div className="event">
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

const EventList = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Conférences',
      description:
        'Intelligence artificielle',
      date: new Date('2023-09-15'),
      location: 'Amphi8',
    },
    {
      id: 2,
      title: 'Journée portes ouvertes',
      description:'soyer là où il faut être',
      date: new Date('2023-10-01'),
      location: 'Amphi8',
    },
    {
      id: 3,
      title: 'Caravanes de recrutements',
      description:
        'Rencontrer votre recruteur',
      date: new Date('2023-10-15'),
      location: 'Bibliothèque',
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
    <div className="event-list">
      {events.map((event) => (
        <Event
          key={event.id}
          title={event.title}
          description={event.description}
          date={event.date}
          location={event.location}
          onConfirm={() => handleConfirm(event.id)}
        />
      ))}
    </div>
  );
};

export default EventList;