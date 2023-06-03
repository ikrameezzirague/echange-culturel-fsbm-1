import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Navbar from './../composants/Navbar';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Scrollbar from 'react-scrollbar';
import './FsbmEnChiffre.css';

const data = [
  { name: 'Licence', étudiants: 1200 },
  { name: 'Master', étudiants: 800 },
  { name: 'LP', étudiants: 300 },
];

function Dashboard() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = 2;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Navbar />
        <Button disabled={activeStep === 0} onClick={handleBack}>
          <KeyboardArrowLeft />
        </Button>
        <Scrollbar style={{ width: '100%', height: 'calc(100vh - 64px)' }} horizontal={true}>
        
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                Statistiques mensuelles
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Box sx={{ p: 2, bgcolor: 'background.paper', textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  Nombre d'étudiants
                </Typography>
                <Typography variant="h4" gutterBottom>
                  11,005
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Box sx={{ p: 2, bgcolor: 'background.paper', textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  Nombre de professeurs
                </Typography>
                <Typography variant="h4" gutterBottom>
                  272
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Box sx={{ p: 2, bgcolor: 'background.paper', textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  Nombre de filières licence
               </Typography>
                <Typography variant="h4" gutterBottom>
                  6
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Box sx={{ p: 2, bgcolor: 'background.paper', textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  Nombre de filières master
                </Typography>
                <Typography variant="h4" gutterBottom>
                  17
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Box sx={{ p: 2, bgcolor: 'background.paper', textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  Nombre de filières licence professionnelle
                </Typography>
                <Typography variant="h4" gutterBottom>
                  2
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Box sx={{ p: 2, bgcolor: 'background.paper', textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  Nombre de laboratoires de recherche
                </Typography>
                <Typography variant="h4" gutterBottom>
                  16
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                Répartition des étudiants par filière
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <BarChart
                width={1000}
                height={300}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="étudiants" fill="#888" />
              </BarChart>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                Carte de la faculté de Sciences Ben M'Sik
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {/* Remplacez le contenu de cette div par votre carte */}
              <div>Carte de la faculté de Sciences Ben M'Sik</div>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                Informations supplémentaires
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Box sx={{ p: 2, bgcolor: 'background.paper' }}>
                <Typography variant="h6" gutterBottom>
                  Nombre d'étudiants
                </Typography>
                <ul>
                  <li>Licence: 1200</li>
                  <li>Master: 800</li>
                  <li>LP: 300</li>
                </ul>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Box sx={{ p: 2, bgcolor: 'background.paper' }}>
                <Typography variant="h6" gutterBottom>
                  Nombre de professeurs
                </Typography>
                <Typography variant="body1" gutterBottom>
                  272
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Scrollbar>
        <Button disabled={activeStep === maxSteps - 1} onClick={handleNext}>
          <KeyboardArrowRight />
        </Button>
      </Box>
    </Box>
  );
}

export default Dashboard;