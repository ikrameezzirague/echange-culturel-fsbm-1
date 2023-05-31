import * as React from 'react';
import { HashRouter, NavLink, Route, Routes} from 'react-router-dom';

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material-next/Button';
import { blue } from '@mui/material/colors';
import SearchBar from './composants/SearchBar';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import MyGrid from './composants/MyGrid';
import Events from './composants/Events';
import EventList from './pages/EventList';
import Navbar from './composants/Navbar';
import FsbmEnChiffre from './pages/FsbmEnChiffre';
//import PartenaireAcademique from './composants/PartenaireAcademique';
//import PartenaireIndustriel from './composants/PartenaireIndustriel';
import MasterMaroc from './pages/MasterMaroc';
//import Associations from './composants/Associations';
//import Clubs from './composants/Clubs';

import './App.css';

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
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (
    <HashRouter>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar/>
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
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div>
              <NavLink exact to="/" style={{ textDecoration: 'none' }}>
                <Typography variant="h6" color="inherit" noWrap>
                  Mon application
                </Typography>
              </NavLink>
              <SearchBar />
              <h1>Boostez votre carrière</h1>
              <Button component={NavLink} to="/FsbmEnChiffre" variant="contained" color="primary" sx={{ bgcolor: blue[500], m: 1 }}>
                Fsbm En Chiffre
              </Button>
              <Button component={NavLink} to="/partenaire-academique" variant="contained" color="primary" sx={{ bgcolor: blue[500], m: 1 }}>
                Partenaire Académique
              </Button>
              <Button component={NavLink} to="/partenaire-industriel" variant="contained" color="primary" sx={{ bgcolor: blue[500], m: 1 }}>
                Partenaire industriel
              </Button>
              <Button component={NavLink} to="/MasterMaroc" variant="contained" color="primary" sx={{ bgcolor: blue[500], m: 1 }}>
                Masters Maroc
              </Button>
              <Button component={NavLink} to="/associations" variant="contained" color="primary" sx={{ bgcolor: blue[500], m: 1 }}>
                associations
              </Button>
              <Button component={NavLink} to="/clubs" variant="contained" color="primary" sx={{ bgcolor: blue[500], m: 1 }}>
                Clubs
              </Button>
              <div>
                <MyGrid />
                <MyGrid />
              </div>
            </div>
          </div>
        </Main>
     
    
      {/* Add your routes here */}
      <Route exact path="/EventList" component={EventList} />
     
      {/* <Route path="/FsbmEnChiffre" component={FsbmEnChiffre} />
     <Route path="/partenaire-academique" component={PartenaireAcademique} />
      <Route path="/partenaire-industriel" component={PartenaireIndustriel} />
      <Route path="/MasterMaroc" component={MasterMaroc} />
      <Route path="/associations" component={Associations} />
      <Route path="/clubs" component={Clubs} />*/}
    </Box>
    </HashRouter>
  
  );
}
