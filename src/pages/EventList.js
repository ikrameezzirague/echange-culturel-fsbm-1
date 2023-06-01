import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Events from '../composants/Events';
import Navbar from '../composants/Navbar';

const Main = styled('main')({
  flexGrow: 1,
  padding: theme => theme.spacing(3),
  overflow: 'auto', // Ajout de la propriété overflow: auto pour permettre le défilement
});

export default function PersistentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <Main>
        <Typography>
        <Navbar />
          <div>
         
            <Events />
          </div>
        </Typography>
        <br />
        <Typography></Typography>
      </Main>
    </Box>
  );
}
