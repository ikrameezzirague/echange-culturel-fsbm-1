import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import logo_Fsbm from './../images/logo_FSBM.jpg';

const FsbmEnChiffre = () => {
  const items = [
    { text: 'Première diapositive', backgroundColor: '#e91e63' },
    { text: 'Deuxième diapositive', backgroundColor: '#9c27b0' },
    { text: 'Troisième diapositive', backgroundColor: '#3f51b5' },
  ];

  return (
    <div>
      <Box display="flex" justifyContent="center">
        <img src={logo_Fsbm} alt="Logo FSBM" />
      </Box>

      <Box display="flex" justifyContent="center" mt={2}>
        <Carousel>
          {items.map((item, index) => (
            <Paper key={index} style={{ backgroundColor: item.backgroundColor }}>
              <Typography variant="h6">{item.text}</Typography>
            </Paper>
          ))}
        </Carousel>
      </Box>
    </div>
  );
};

export default FsbmEnChiffre;
