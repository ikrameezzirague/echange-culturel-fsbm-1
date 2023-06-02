import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import Navbar from '../composants/Navbar';
import Carousel from '../composants/Carousel';
import fsbm from '../composants/fsbm';
import iconeEtudiants from './../icones/icôneétudiants.png';
import iconeLaureats from './../icones/icônelauréats.jpg';
import iconeLicence from './../icones/icônelicence.jpg';
import iconeMaster from './../icones/icônemaster.jpg';
import iconeProfs from './../icones/icôneprofs.jpg';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  carousel: {
    position: 'relative',
    width: 600,
    height: 400,
    overflow: 'hidden',
    marginBottom: 16,
    '&:hover $caption': {
      opacity: 1,
    },
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  caption: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  buttonsContainer: {
    display: 'flex',
    gap: 460,
  },
}));

const images = [
  {
    src: iconeEtudiants,
    caption: 'Icône Étudiants',
  },
  {
    src: iconeLaureats,
    caption: 'Icône Laureats',
  },
  {
    src: iconeLicence,
    caption: 'Icône Licence',
  },
  {
    src: iconeMaster,
    caption: 'Icône Master',
  },
  {
    src: iconeProfs,
    caption: 'Icône Professeurs',
  },
];

const CarouselComponent = () => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Box className={classes.root}>
      <Navbar/>
      <Carousel />
      <fsbm/>
      <div className={classes.carousel}>
        <img src={images[activeIndex].src} alt={`Image ${activeIndex + 1}`} className={classes.image} />
        <Typography variant="body1" className={classes.caption}>
          {images[activeIndex].caption}
        </Typography>
      </div>
      <div className={classes.buttonsContainer}>
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </Box>
  );
};

export default CarouselComponent;
