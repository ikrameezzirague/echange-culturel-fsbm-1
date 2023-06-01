import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import logo_Fsbm from './../images/logo_FSBM.jpg';
import Typography from '@mui/material/Typography';
import Carousel from '../composants/Carousel';
import Navbar from '../composants/Navbar';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

export default function PersistentDrawerLeft() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    
    <Box sx={{ display: 'flex' }}>
      
      <CssBaseline />
      <Navbar />
      <Main open={open}>
        <Typography>
          <div>
            <Box display="flex" justifyContent="center">
              <img src={logo_Fsbm} alt="Logo FSBM" />
            </Box>
          </div>
        </Typography>
        <br></br>
        <Typography>
          <div>
            <Carousel />
          </div>
        </Typography>
      </Main>
    </Box>
  );
}
