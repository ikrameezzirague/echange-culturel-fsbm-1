import React, { useState } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, title: 'Nombre des étudiants', content: '11005' },
    { id: 2, title: 'Nombre des professeurs', content: '272' },
    { id: 3, title: 'Nombre de filières licence', content: '6' },
    { id: 3, title: 'Nombre de filières licence Pro', content: '2'},
    { id: 3, title: 'Nombre de filières Master', content: '17' },
    { id: 3, title: 'Nombre de labo-Recherche', content: '16' },
    { id: 4, title: 'Nombre de lauréats', content: 'X' },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="carousel-item">
            <h3>{slide.title}</h3>
            <p>{slide.content}</p>
          </div>
        ))}
      </div>
      <button className="carousel-prev" onClick={handlePrevSlide}>
        Prev
      </button>
      <button className="carousel-next" onClick={handleNextSlide}>
        Next
      </button>
    </div>
  );
};

export default Carousel;