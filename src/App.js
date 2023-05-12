import * as React from 'react';
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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
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
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          <ul style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: 0 }}>
      <li>
      <a href="/EventList">
        évènements </a>
        <a href="/Login">
          <button className="login-btn">Login</button>
        </a>
      </li>
      <li>
        <a href="/SignUp">
          <button className="signup-btn">Sign-up</button>
        </a>
      </li>
    </ul>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
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
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="FsbmEnChiffre">Fsbm En Chiffre</a></li>
          <li><a href="MasterMaroc">Masters Maroc</a></li>
          <li><a href="EventList">évènements</a></li>
          <li><a href="./Clubs">Clubs</a></li>
          <li><a href="./Partenaires industrueles">Partenaires industrueles</a></li>
          <li><a href="./Partenaires Académiques">Partenaires Académiques</a></li>
          <li><a href="./CV-Thèque">CV-Thèque</a></li>
          <li><a href="./FAQ">FAQ</a></li>
          
        </ul>
        <Divider />
       
      </Drawer>
      <Main open={open}>
      <DrawerHeader>
  <IconButton onClick={handleDrawerClose}>
    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
  </IconButton>
</DrawerHeader>

<Divider />

<SearchBar />
<Divider />


      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
      <Button variant="contained" color="primary" sx={{ bgcolor: blue[500], m: 1 }} href="FsbmEnChiffre">
        Fsbm En Chiffre
      </Button>
      <Button variant="contained" color="primary" sx={{ bgcolor: blue[500], m: 1 }} href="/partenaire-academique">
        Partenaire Académique
      </Button>
      <Button variant="contained" color="primary" sx={{ bgcolor: blue[500], m: 1 }} href="/partenaire-industriel">
        Partenaire industriel
      </Button>
      <Button variant="contained" color="primary" sx={{ bgcolor: blue[500], m: 1 }} href="MasterMaroc">
        Masters Maroc
      </Button>
      <Button variant="contained" color="primary" sx={{ bgcolor: blue[500], m: 1 }} href="/associations">
        associations
      </Button>
      <Button variant="contained" color="primary" sx={{ bgcolor: blue[500], m: 1 }} href="/clubs">
        Clubs
      </Button>
      <div>
      <MyGrid/>
    </div>
    </div>
    
    </div>
      </Main>
    </Box>
  );
}