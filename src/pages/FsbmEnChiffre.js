import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './FsbmEnChiffre.css';

const data = [
  { name: 'Jan', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 300, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 200, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 278, pv: 3908, amt: 2000 },
  { name: 'May', uv: 189, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 239, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 349, pv: 4300, amt: 2100 },
  { name: 'Aug', uv: 200, pv: 4300, amt: 2100 },
  { name: 'Sep', uv: 278, pv: 3908, amt: 2000 },
  { name: 'Oct', uv: 189, pv: 4800, amt: 2181 },
  { name: 'Nov', uv: 239, pv: 3800, amt: 2500 },
  { name: 'Dec', uv: 349, pv: 4300, amt: 2100 },
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
            Évolution du nombre d'étudiants
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <LineChart
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
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;