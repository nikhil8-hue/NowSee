import React from 'react';
import { Link } from 'react-router-dom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { 
  Box, Button, Typography, Container, CssBaseline, 
  Card, CardContent, Stack 
} from '@mui/material';
import { 
  SentimentDissatisfied as PatientIcon, 
  HourglassDisabledTwoTone as TimeIcon
} from '@mui/icons-material';
import { 
  MedicalServices, Healing, MonitorHeart, Spa,
  HealthAndSafety, MedicationLiquid, Biotech,
  Emergency, Notifications, Drafts, MarkEmailRead, MarkEmailUnread
} from '@mui/icons-material';

const ChooseRole = () => {
  const floatingIcons = [
    { icon: <MedicalServices fontSize="large" />, position: { top: '10%', left: '10%' }, color: '#e0e0e0' },
    { icon: <MonitorHeart fontSize="large" />, position: { top: '20%', right: '15%' }, color: '#bb9988' },
    { icon: <LocalHospitalIcon fontSize="large" />, position: { bottom: '26%', left: '19%' }, color: '#c3c5cb' },
    { icon: <Spa fontSize="large" />, position: { top: '5%', right: '5%' }, color: '#eec187' },
    { icon: <HealthAndSafety fontSize="large" />, position: { bottom: '8%', right: '10%' }, color: '#c3c5cb' },
    { icon: <Healing fontSize="large" />, position: { bottom: '10%', left: '5%' }, color: '#c3c5cb' },
    { icon: <MedicationLiquid fontSize="medium" />, position: { top: '5%', left: '60%' }, color: '#96afca' },
    { icon: <Biotech fontSize="medium" />, position: { top: '15%', right: '55%' }, color: '#e1c3dc' },
    { icon: <Emergency fontSize="medium" />, position: { bottom: '7%', left: '30%' }, color: '#75c58e' },
    { icon: <Notifications fontSize="medium" />, position: { top: '45%', left: '5%' }, color: '#97bde8' },
    { icon: <Drafts fontSize="medium" />, position: { bottom: '3%', right: '35%' }, color: '#c3c5cb' },
    { icon: <MarkEmailRead fontSize="large" />, position: { top: '45%', right: '18%' }, color: '#c3c5cb' },
    { icon: <MarkEmailUnread fontSize="medium" />, position: { bottom: '55%', right: '72%' }, color: '#f4dd9c' }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1976d2 0%, #004ba0 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <CssBaseline />
      
      {/* Floating Icons */}
      <Box sx={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}>
        {floatingIcons.map((item, index) => (
          <Box key={index} sx={{ 
            position: 'absolute',
            fontSize: '60px',
            opacity: 0.2,
            ...item.position,
            color: item.color
          }}>
            {item.icon}
          </Box>
        ))}
      </Box>

      <Container maxWidth="sm">
        <Card sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          p: 4
        }}>
          <CardContent>
            <Stack spacing={4} alignItems="center">
              <TimeIcon sx={{ 
                fontSize: 60, 
                color: 'white',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
              }} />
              
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem' },
                  fontWeight: 700,
                  textAlign: 'center',
                  textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  color: 'white'
                }}
              >
                Choose Your Role
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <Button
                  component={Link}
                  to="/dashboard"
                  variant="contained"
                  size="large"
                  startIcon={<PatientIcon />}
                  sx={{
                    py: 2,
                    px: 4,
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    backgroundColor: 'white',
                    color: '#1976d2',
                    borderRadius: '50px',
                    '&:hover': {
                      backgroundColor: '#f5f5f5',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                    },
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                    minWidth: '200px'
                  }}
                >
                  I am Patient
                </Button>

                <Button
                  variant="contained"
                  size="large"
                  startIcon={<LocalHospitalIcon/>}
                  sx={{
                    py: 2,
                    px: 4,
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    backgroundColor: 'white',
                    color: '#1976d2',
                    borderRadius: '50px',
                    '&:hover': {
                      backgroundColor: '#f5f5f5',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                    },
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                    minWidth: '200px'
                  }}
                >
                  I am Doctor
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default ChooseRole;