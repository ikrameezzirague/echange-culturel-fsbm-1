import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Master from '../composants/Master';


const Main = styled('main')({
  flexGrow: 1,
  padding: theme => theme.spacing(3),
});

export default function PersistentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' }}>
     
      <CssBaseline />
      
       {/* Import the Navbar component here */}
      
      <Main>
        <Typography>
          <Master />
        </Typography>
        <br />
        <Typography></Typography>
      </Main>
    </Box>
  );
}
