import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { PieChart, Pie, Cell, Legend as RechartsLegend, LineChart, Line } from 'recharts';
import './FsbmEnChiffre.css';
import logo_fsbm from './../établissements/logo_fsbm.png'

import Navbar from './../composants/Navbar';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';


function ContactInfo() {
  return (
    <Box sx={{ p: 2, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        {/* Add the logo_fsbm image on the left */}
        <img src={logo_fsbm} alt="logo_fsbm" style={{ width: '250px', height: '150px' }} />
        <Typography variant="body1" gutterBottom style={{ color: '#1D419F', fontSize: 'arial', fontWeight: 'bold' }}>
          La Faculté des Sciences Ben M'Sick a pour mission de former des étudiants compétents, capables de mettre leurs connaissances et leur savoir-faire au service d'un environnement économique et social de plus en plus exigeant, complexe et imprévisible.
        </Typography>
      </Box>

      {/* Rest of the contact info */}
      <Typography variant="h6" gutterBottom style={{ color: 'blue', marginTop: '20px' }}>
        Contactez nous
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <EmailIcon />
        <Typography variant="body1" gutterBottom>
          fsbmcontact@gmail.com
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <FacebookIcon />
        <Typography variant="body1" gutterBottom>
        /faculté ben M'sik
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <LinkedInIcon />
        <Typography variant="body1" gutterBottom>
          /benM'sik
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <LocationOnIcon />
        <Typography variant="body1" gutterBottom>
          Faculté des Sciences Ben M'Sick Av Driss El Harti Sidi Othmane Casablanca B.P 7955.
        </Typography>
      </Box>
    </Box>
  );
}
function Dashboard() {
  const theme = useTheme();
  const data = [
    { name: 'Femmes', value: 105 },
    { name: 'Hommes', value: 167 },
  ];

  const filieresData = [
    { filiere: 'Licence', nombre: 9213 },
    { filiere: 'Master', nombre: 1154 },
    { filiere: 'Doctorant', nombre: 597 },
    { filiere: 'LP', nombre: 41 },
  ];

  const laureatesData = [
    { year: 0, DEUG: 879, Licence: 543, Master: 234 },
    { year: 2022, DEUG: 979, Licence: 684, Master: 354 },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Navbar />

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box sx={{ p: 2, backgroundColor: '#f5f5f5' }}>
              <Typography variant="h5" gutterBottom style={{ color: 'blue' }}>
                Statistiques annuelles
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ p: 2, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
              <Typography variant="h6" gutterBottom>
                Nombre d'étudiants
              </Typography>
              <Typography variant="h4" gutterBottom className="red-number">
                11,005
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ p: 2, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
              <Typography variant="h6" gutterBottom>
                Nombre de professeurs
              </Typography>
              <Typography variant="h4" gutterBottom className="red-number">
                272
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ p: 2, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
              <Typography variant="h6" gutterBottom>
                Nombre de filières licence
              </Typography>
              <Typography variant="h4" gutterBottom className="red-number">
                6
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ p: 2, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
              <Typography variant="h6" gutterBottom>
                Nombre de filières master
              </Typography>
              <Typography variant="h4" gutterBottom className="red-number">
                17
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ p: 2, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
              <Typography variant="h6" gutterBottom>
                Nombre de filières licence professionnelle
              </Typography>
              <Typography variant="h4" gutterBottom className="red-number">
                2
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ p: 2, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
              <Typography variant="h6" gutterBottom>
                Nombre de laboratoires de recherche
              </Typography>
              <Typography variant="h4" gutterBottom className="red-number">
                15
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom style={{ color: 'blue' }}>
                Nombre d'étudiants par Niveau
              </Typography>

              <BarChart
                width={700}
                height={400}
                data={filieresData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="filiere" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="nombre" fill={theme.palette.primary.main} />
              </BarChart>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ p: 2, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
              <Typography variant="h6" gutterBottom style={{ color: 'blue' }}>
                Répartition des professeurs selon le sexe
              </Typography>
              <PieChart width={400} height={300}>
                <Pie
                  data={data}
                  innerRadius={60}
                  outerRadius={80}
                  dataKey="value"
                  label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
                    const percentage = ((value / 272) * 100).toFixed(1);
                    const label = `${data[index].name} ${percentage}%`;

                    const lines = label.split(' ');
                    return (
                      <text
                        x={cx}
                        y={cy}
                        fill={theme.palette.text.primary}
                        textAnchor={cx > 200 ? 'start' : 'end'}
                        dominantBaseline="central"
                      >
                        {`${data[index].name} ${percentage}%`}
                      </text>
                    );
                  }}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={entry.name === 'Femmes' ? '#FFC0CB' : '#8884d8'}
                    />
                  ))}
                </Pie>
                <RechartsLegend align="right" verticalAlign="middle" layout="vertical" />
              </PieChart>
              <table className="profs-table">
                <tbody>
                  <tr>
                    <td className="header">Grades</td>
                    <td className="header">PES</td>
                    <td className="header">PH</td>
                    <td className="header">PESA</td>
                    <td className="header">TOTAL</td>
                  </tr>
                  <tr>
                    <td className="header">Nombre de professeurs</td>
                    <td className="number" style={{ color: '#1D419F' }}>
                      138
                    </td>
                    <td className="number" style={{ color: '#1D419F' }}>
                      32
                    </td>
                    <td className="number" style={{ color: '#1D419F' }}>
                      102
                    </td>
                    <td className="number" style={{ color: '#1D419F' }}>
                      272
                    </td>
                  </tr>
                </tbody>
              </table>
              </Box>
              
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom style={{ color: 'blue' }}>
                Nombre de lauréats par Niveau
              </Typography>
              <LineChart
                width={800}
                height={400}
                data={laureatesData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="DEUG" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Licence" stroke="#82ca9d" />
                <Line type="monotone" dataKey="Master" stroke="#ffc658" />
              </LineChart>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom style={{ color: 'blue' }}>
                Contact de la faculté
              </Typography>
              <ContactInfo />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;
