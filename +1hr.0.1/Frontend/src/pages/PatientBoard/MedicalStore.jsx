import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Rating,
  Avatar,
  Box,
  CardHeader
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import MoreVert from '@mui/icons-material/MoreVert';
import {
  Directions,
  MedicalServices,
  Inventory,
  Star,
  Schedule
} from '@mui/icons-material';

const MedicalStore = () => {
  const pharmacies = [
    {
      id: 1,
      name: "City Health Pharmacy",
      distance: "0.5 km",
      rating: 4.5,
      availability: "high",
      medicinesAvailable: 95,
      image: "/pharmacy1.jpg",
      open: true
    },
    {
      id: 2,
      name: "24/7 Med Mart",
      distance: "1.2 km",
      rating: 3.8,
      availability: "medium",
      medicinesAvailable: 75,
      image: "/pharmacy2.jpg",
      open: false
    },
    {
      id: 3,
      name: "Green Cross Pharmacy",
      distance: "0.8 km",
      rating: 4.2,
      availability: "high",
      medicinesAvailable: 90,
      image: "/pharmacy3.jpg",
      open: true
    }
  ];

  return (
    
      <Card>
        <CardHeader
          title="Medical Stores"
          titleTypographyProps={{
            variant: 'h5',
            fontWeight: 'bold',
            color: 'primary.main'
          }}
          avatar={<MedicalServices fontSize="large" color="primary" />}
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          sx={{
            borderBottom: '1px solid',
            borderColor: 'divider',
            bgcolor: 'background.default'
          }}
        />
        <CardContent>
        {pharmacies.map((pharmacy) => (
        <Card 
          key={pharmacy.id} 
          sx={{ 
            mb: 2, 
            borderRadius: 3,
            boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.12)'
            }
          }}
        >
          <CardContent sx={{ p: 2.5 }}>
            <Grid container alignItems="center" spacing={1}>
              {/* Pharmacy Info (Columns 1-4) */}
              <Grid size={4} md={4}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar 
                    src={pharmacy.image}
                    sx={{ 
                      width: 56, 
                      height: 56, 
                      mr: 2,
                      bgcolor: 'primary.light',
                      border: '2px solid',
                      borderColor: 'primary.main'
                    }}
                  >
                    <MedicalServices />
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" fontWeight="600">
                      {pharmacy.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                      {pharmacy.distance} away
                    </Typography>
                    <Chip 
                      label={pharmacy.open ? "Open Now" : "Closed"} 
                      size="small" 
                      color={pharmacy.open ? "success" : "error"}
                      icon={<Schedule fontSize="small" />}
                      sx={{ mt: 1 }}
                      variant="outlined"
                    />
                  </Box>
                </Box>
              </Grid>

              {/* Rating & Availability (Columns 5-8) */}
              <Grid size={4} md={4}>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: { xs: 'flex-start', md: 'center' }
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Star color="primary" sx={{ mr: 0.5, fontSize: 20 }} />
                    <Typography variant="body1" fontWeight="500" sx={{ mr: 1.5 }}>
                      {pharmacy.rating.toFixed(1)}
                    </Typography>
                    <Rating
                      value={pharmacy.rating}
                      precision={0.5}
                      readOnly
                      size="medium"
                      icon={<Star fontSize="inherit" />}
                      emptyIcon={<Star fontSize="inherit" />}
                    />
                  </Box>
                  <Chip
                    icon={<Inventory fontSize="small" />}
                    label={`${pharmacy.medicinesAvailable}% available`}
                    size="medium"
                    sx={{ 
                      fontWeight: '500',
                      backgroundColor: 
                        pharmacy.availability === 'high' ? 'success.light' :
                        pharmacy.availability === 'medium' ? 'warning.light' : 'error.light',
                      color: 
                        pharmacy.availability === 'high' ? 'success.dark' :
                        pharmacy.availability === 'medium' ? 'warning.dark' : 'error.dark'
                    }}
                  />
                </Box>
              </Grid>

              {/* Action Buttons (Columns 9-12) */}
              <Grid size={4} md={4}>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: { xs: 'flex-start', md: 'flex-end' },
                  gap: 1.5
                }}>
                  <Button
                    variant="outlined"
                    startIcon={<Directions />}
                    sx={{
                      borderRadius: 2,
                      px: 2.5,
                      py: 1,
                      borderWidth: 2,
                      '&:hover': { borderWidth: 2 }
                    }}
                  >
                    Directions
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: 2,
                      px: 2.5,
                      py: 1,
                      fontWeight: '500',
                      minWidth: 90
                    }}
                  >
                    Order Med
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
            
      </CardContent>
        </Card>  
  );
};

export default MedicalStore;