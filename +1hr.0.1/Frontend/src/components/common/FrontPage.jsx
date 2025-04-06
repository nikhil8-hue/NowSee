import React from 'react';
import { Box, Typography, Container, Button, Stack,CssBaseline } from '@mui/material';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import HealingIcon from '@mui/icons-material/Healing';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';



const FrontPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1976d2 0%, #004ba0 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        py: 8,
      }}
    >
        
         
        
      <Container maxWidth="md">
     
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 4,
            mb: 4,
          }}
        >
          <MedicalServicesIcon sx={{ fontSize: 60 }} />
          <MonitorHeartIcon sx={{ fontSize: 60 }} />
          <HealingIcon sx={{ fontSize: 60 }} />
        </Box>
        
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
            fontWeight: 700,
            lineHeight: 1.2,
            mb: 4,
            textShadow: '0 2px 4px rgba(0,0,0,0.2)',
          }}
        >
          Let's Set Your Turn
        </Typography>
        
        <Typography
          variant="h5"
          sx={{
            mb: 6,
            opacity: 0.9,
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          Book your medical appointment with ease and get the care you deserve
        </Typography>
        
        <Stack 
          direction="row" 
          justifyContent="center" 
          spacing={3}
          sx={{ mb: 6 }}
        >
          <MedicalServicesIcon sx={{ fontSize: 40 }} />
          <HealingIcon sx={{ fontSize: 40 }} />
          <MonitorHeartIcon sx={{ fontSize: 40 }} />
          <MedicalServicesIcon sx={{ fontSize: 40 }} />
        </Stack>

        {/* "Set Turn" Button */}
        <Button
          onClick={() => navigate('/choose-role')}
          variant="contained"
          size="large"
          endIcon={<ArrowForwardIcon />}
          sx={{
            py: 2,
            px: 6,
            fontSize: '1.2rem',
            fontWeight: 'bold',
            backgroundColor: 'white',
            color: '#1976d2',
            '&:hover': {
              backgroundColor: '#f5f5f5',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            },
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            borderRadius: '50px',
          }}
        >
          Set Turn Now
        </Button>
      </Container>
    </Box>
  );
};

export default FrontPage;