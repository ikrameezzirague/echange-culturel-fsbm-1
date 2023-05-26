import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './Carousel.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const labels = [
  {
    id: 1,
    // label: 'Label 1',
    info: <b>Nombre des étudiants:<br/>11005</b>,
  },
  {
    id: 2,
    // label: 'Label 2',
    info: <b>Nombre des professeurs:<br/>272</b>,
  },
  {
    id: 3,
    // label: 'Label 3',
    info: <b>Nombre des filiéres licence:<br/>6</b>,
  },
  {
    id: 4,
    // label: 'Label 3',
    info: <b>Nombre des filiéres masters:<br/>17</b>,
  },
  {
    id: 5,
    // label: 'Label 3',
    info: <b>Nombre des filières licence professionnelle:<br/>2</b>,
  },
  {
    id: 6,
    // label: 'Label 3',
    info: <b>Nombre de laboratoires de recherche:<br/>16</b>,
  },
  {
    id: 7,
    // label: 'Label 3',
    info: <b>Nombre des lauréats:<br/>xxxxx</b>,
  },
];

function StepperWithLabels() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = labels.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{labels[activeStep]?.label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={setActiveStep}
        enableMouseEvents
      >
        {labels.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Typography variant="body1" sx={{ p: 2, textAlign: 'center' }}>
                {step.info}
              </Typography>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={maxSteps === 1}>
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={maxSteps === 1}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default StepperWithLabels;
