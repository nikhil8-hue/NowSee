import React from 'react';
import { AppBar, Toolbar, Typography, Button, CssBaseline, Box, IconButton } from '@mui/material';
import HourglassDisabledTwoToneIcon from '@mui/icons-material/HourglassDisabledTwoTone';
import Face6TwoToneIcon from '@mui/icons-material/Face6TwoTone';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { styled } from '@mui/material/styles';


const StyledButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  textTransform: 'none',
  fontWeight: 'bold',
  borderRadius: '20px',
  padding: '6px 16px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    transform: 'translateY(-2px)'
  }
}));

const Nav = () => {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: 'primary.main', 
        boxShadow: 3,
        background: 'linear-gradient(135deg, #1976d2 0%, #004ba0 100%)'
      }}
    >
      <CssBaseline/>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo Section */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <HourglassDisabledTwoToneIcon 
            sx={{ 
              color: 'white',
              fontSize: 30,
              mr: 1
            }} 
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ 
              fontWeight: 'bold', 
              color: 'white',
              fontFamily: '"Poppins", sans-serif',
              letterSpacing: '0.5px'
            }}
          >
            NowSee
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          <StyledButton 
            color="inherit" 
            startIcon={<MedicalServicesIcon />}
            sx={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.2)'
              }
            }}
          >
            Our Doctors
          </StyledButton>
        </Box>

        {/* Profile Section */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            color="inherit"
            sx={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.2)'
              },
              borderRadius: '50%',
              p: 1.5,
              ml: 2
            }}
          >
            <Face6TwoToneIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;