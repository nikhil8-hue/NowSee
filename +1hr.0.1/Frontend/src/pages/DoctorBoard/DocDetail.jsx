import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Divider,
  Button,
  Box,
  TextField,
  IconButton
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {
  Person,
  Email,
  Phone,
  CalendarToday,
  LocationOn,
  CameraAlt,
  Save
} from '@mui/icons-material';
import { useNavigate } from 'react-router';

const DoctorDetail= () => {
  const navigate= useNavigate();
  return (
    <Card sx={{ 
      maxWidth: 800,
      margin: 'auto',
      borderRadius: 3,
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      overflow: 'hidden'
    }}>
      {/* Blue Header Section */}
      <Box sx={{ 
        backgroundColor: 'primary.main',
        color: 'white',
        p: 3,
        display: 'flex',
        alignItems: 'center'
      }}>
        <Box sx={{ position: 'relative' }}>
          <Avatar 
            src="/default-doctor.jpg"
            sx={{ 
              width: 80, 
              height: 80, 
              mr: 3,
              border: '3px solid white'
            }}
          />
          <IconButton 
            component="label"
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 20,
              backgroundColor: 'primary.dark',
              color: 'white',
              '&:hover': {
                backgroundColor: 'primary.dark'
              }
            }}
          >
            <CameraAlt />
            <input
              type="file"
              hidden
              accept="image/*"
            />
          </IconButton>
        </Box>
        
        <Box sx={{ flexGrow: 1 }}>
          <TextField
            name="name"
            placeholder="Full Name"
            variant="standard"
            fullWidth
            sx={{ 
              mb: 1,
              '& .MuiInputBase-input': { color: 'white', fontSize: '1.5rem' },
              '& .MuiInput-underline:before': { borderColor: 'rgba(255,255,255,0.5)' }
            }}
          />
          <TextField
            name="specialty"
            placeholder="Specialty"
            variant="standard"
            fullWidth
            sx={{ 
              '& .MuiInputBase-input': { color: 'white', fontSize: '1.2rem' },
              '& .MuiInput-underline:before': { borderColor: 'rgba(255,255,255,0.5)' }
            }}
          />
        </Box>
      </Box>

      {/* White Content Section */}
      <CardContent sx={{ p: 4 }}>
        <Grid container spacing={3}>
          {/* Personal Details Column */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ 
              display: 'flex',
              alignItems: 'center',
              color: 'primary.main'
            }}>
              <Person sx={{ mr: 1 }} />
              Personal Details
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <DetailField 
                icon={<CalendarToday />}
                label="Age"
                placeholder="35"
              />
              <DetailField 
                icon={<CalendarToday />}
                label="Date of Birth"
                placeholder="MM/DD/YYYY"
              />
              <DetailField 
                icon={<LocationOn />}
                label="Address"
                placeholder="123 Medical Drive, City, State"
                lastItem
              />
            </Box>
          </Grid>

          {/* Contact Details Column */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ 
              display: 'flex',
              alignItems: 'center',
              color: 'primary.main'
            }}>
              <Phone sx={{ mr: 1 }} />
              Contact Details
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <DetailField 
                icon={<Email />}
                label="Email"
                placeholder="your.email@example.com"
              />
              <DetailField 
                icon={<Phone />}
                label="Phone"
                placeholder="+1 (123) 456-7890"
                lastItem
              />
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            startIcon={<Save />}
            sx={{
              borderRadius: 2,
              px: 3,
              fontWeight: 'bold'
            }}
          >
            Save Profile
          </Button>
          <Button
            variant="contained"
            onClick={()=>navigate("/clinic-details")}
            sx={{
              borderRadius: 2,
              px: 3,
              fontWeight: 'bold',
              marginLeft:3
            }}
          >
            camon hurry !
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

// Reusable editable detail component
const DetailField = ({ icon, label, placeholder, lastItem = false }) => (
  <Box sx={{ 
    display: 'flex',
    mb: lastItem ? 0 : 2
  }}>
    <Box sx={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 40,
      height: 40,
      backgroundColor: 'primary.light',
      borderRadius: '50%',
      mr: 2,
      color: 'primary.main'
    }}>
      {icon}
    </Box>
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
      <TextField
        placeholder={placeholder}
        variant="standard"
        fullWidth
        sx={{ mt: 0.5 }}
      />
    </Box>
  </Box>
);

export default DoctorDetail;