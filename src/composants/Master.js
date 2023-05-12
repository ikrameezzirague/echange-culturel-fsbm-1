import React from 'react';
import './Master.css';

function handleClick(image) {
  console.log(`You clicked ${image}`);
}

function Layout() {
  const images = [
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/id/238/200/300",
    "https://picsum.photos/id/239/200/300",
    "https://picsum.photos/id/240/200/300",
    "https://picsum.photos/id/241/200/300",
    "https://picsum.photos/id/242/200/300",
    "https://picsum.photos/id/243/200/300",
    "https://picsum.photos/id/244/200/300",
    "https://picsum.photos/id/245/200/300",
    "https://picsum.photos/id/246/200/300",
    "https://picsum.photos/id/247/200/300",
    "https://picsum.photos/id/248/200/300"
  ];

  return (
    <div className="layout">
      <div className="image-container">
        <img
          src={images[0]}
          alt="Image 1"
          onClick={() => handleClick(images[0])}
        />
      </div>
      <div className="image-container">
        <img
          src={images[1]}
          alt="Image 2"
          onClick={() => handleClick(images[1])}
        />
      </div>
      <div className="image-container">
        <img
          src={images[2]}
          alt="Image 3"
          onClick={() => handleClick(images[2])}
        />
      </div>
      <div className="image-container">
        <img
          src={images[3]}
          alt="Image 4"
          onClick={() => handleClick(images[3])}
        />
      </div>
      <div className="image-container">
        <img
          src={images[4]}
          alt="Image 5"
          onClick={() => handleClick(images[4])}
        />
      </div>
      <div className="image-container">
        <img
          src={images[5]}
          alt="Image 6"
          onClick={() => handleClick(images[5])}
        />
      </div>
      <div className="image-container">
        <img
          src={images[6]}
          alt="Image 7"
          onClick={() => handleClick(images[6])}
        />
      </div>
      <div className="image-container">
        <img
          src={images[7]}
          alt="Image 8"
          onClick={() => handleClick(images[7])}
        />
      </div>
      <div className="image-container">
        <img
          src={images[8]}
          alt="Image 9"
          onClick={() => handleClick(images[8])}
        />
      </div>
      <div className="image-container">
        <img
          src={images[9]}
          alt="Image 10"
          onClick={() => handleClick(images[9])}
        />
      </div>
      <div className="image-container">
        <img
          src={images[10]}
          alt="Image 11"
          onClick={() => handleClick(images[10])}
        />
      </div>
      <div className="image-container">
        <img
          src={images[11]}
          alt="Image 12"
          onClick={() => handleClick(images[11])}
        />
      </div>
    </div>
  );
}

export default Layout;