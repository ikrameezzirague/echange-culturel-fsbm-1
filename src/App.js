import React, { useState } from 'react';
import { HashRouter, NavLink, Route, Routes } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';
import SearchBar from './composants/SearchBar';
import MyGrid from './composants/MyGrid';
import Navbar from './composants/Navbar';
import FsbmEnChiffre from './pages/FsbmEnChiffre';
import MasterMaroc from './pages/MasterMaroc';
import Clubs from './pages/clubs';
import Associations from './pages/Associations';
import partenaireIndustriel from './pages/partenaireIndustriel';
import partenaireAcademique from './pages/partenaireAcademique';
import './App.css';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
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
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

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
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            ...(open && { width: drawerWidth }),
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          {/* Add your drawer content here */}
        </Drawer>

        <Main open={open}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
            <Typography variant="h2" color="inherit" noWrap style={{ marginBottom: '16px', textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '20px', color: '#8696FE;' }}>
              <br/>
              <br/>
            <SearchBar className="custom-searchbar" />  
            
            </Typography>
           
            <div style={{ marginBottom: '30px' }}>
             
              <div class="button-container">
  <Button component={NavLink} to="/FsbmEnChiffre" variant="contained" color="primary" class="my-button-class">
    Fsbm En Chiffre
  </Button>
  <Button component={NavLink} to="/partenaireAcademique" variant="contained" color="primary" class="my-button-class">
    Partenaire Académique
  </Button>
  <Button component={NavLink} to="/partenaireIndustriel" variant="contained" color="primary" class="my-button-class">
    Partenaire industriel
  </Button>
  <Button component={NavLink} to="/MasterMaroc" variant="contained" color="primary" class="my-button-class">
    Masters Maroc
  </Button>
  <Button component={NavLink} to="/associations" variant="contained" color="primary" class="my-button-class">
    Associations
  </Button>
  <Button component={NavLink} to="/clubs" variant="contained" color="primary" class="my-button-class">
    Clubs
  </Button>
</div>
              <div style={{ marginBottom: '-30px' }}>
                <MyGrid />
              </div>
              
              <br/>
              <br/>
              
            </div>
          </div>
        </Main>

      </Box>
   
  );
}
