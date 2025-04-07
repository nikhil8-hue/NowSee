import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Divider,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {
  Videocam,
  Person,
  Schedule,
  ArrowForward,
  CheckCircle,
  FiberManualRecord,
  MoreVert,
  VolumeUp,
  Mic,
  CallEnd,
  ScreenShare,
  Chat
} from '@mui/icons-material';

const VideoCall = () => {


  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      image: "/doctor1.jpg",
      available: true,
      nextAvailable: "in 15 mins"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      image: "/doctor2.jpg",
      available: false,
      nextAvailable: "in 45 mins"
    },
    {
      id: 3,
      name: "Dr. Priya Patel",
      specialty: "Pediatrician",
      image: "/doctor3.jpg",
      available: true,
      nextAvailable: "now"
    }
  ];





  return (
    <Box sx={{ Width:'100vw', margin: 'auto', p: 3 }}>
      <Card sx={{ borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
        <CardContent sx={{ p: 0 }}>
          <Grid container>
            {/* Left Side - Video Call Interface (6 columns) */}
            <Grid size={12} md={6} sx={{ 
              borderRight: { md: '1px solid' },
              borderColor: 'divider',
              p: 3,
              minHeight: '60vh',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* {callStarted ? (
                <>
                  <Box sx={{ 
                    flexGrow: 1,
                    backgroundColor: '#f5f5f5',
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mb: 2,
                    position: 'relative'
                  }}>
                    <Avatar
                      src={selectedDoctor.image}
                      sx={{
                        width: 120,
                        height: 120,
                        mb: 2,
                        border: '3px solid',
                        borderColor: 'primary.main'
                      }}
                    />
                    <Typography variant="h6" fontWeight="bold">
                      {selectedDoctor.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {selectedDoctor.specialty}
                    </Typography>
                    
                    <Box sx={{ 
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <FiberManualRecord color="error" sx={{ fontSize: 14, mr: 1 }} />
                      <Typography variant="caption">LIVE</Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2,
                    mt: 'auto'
                  }}>
                    <IconButton sx={{ 
                      backgroundColor: 'primary.light',
                      '&:hover': { backgroundColor: 'primary.main', color: 'white' }
                    }}>
                      <Mic />
                    </IconButton>
                    <IconButton sx={{ 
                      backgroundColor: 'error.light',
                      '&:hover': { backgroundColor: 'error.main', color: 'white' }
                    }}>
                      <CallEnd />
                    </IconButton>
                    <IconButton sx={{ 
                      backgroundColor: 'primary.light',
                      '&:hover': { backgroundColor: 'primary.main', color: 'white' }
                    }}>
                      <VolumeUp />
                    </IconButton>
                    <IconButton sx={{ 
                      backgroundColor: 'primary.light',
                      '&:hover': { backgroundColor: 'primary.main', color: 'white' }
                    }}>
                      <ScreenShare />
                    </IconButton>
                    <IconButton sx={{ 
                      backgroundColor: 'primary.light',
                      '&:hover': { backgroundColor: 'primary.main', color: 'white' }
                    }}>
                      <Chat />
                    </IconButton>
                  </Box>
                </>
              ) : ( */}
                <Box sx={{ 
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center'
                }}>
                  <Videocam sx={{ 
                    fontSize: 80,
                    color: 'primary.main',
                    mb: 2
                  }} />
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Virtual Consultation
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    Connect with your doctor for a virtual consultation.
                  </Typography>
                </Box>
              {/* )} */}
            </Grid>

            {/* Right Side - Doctor Selection (6 columns) */}
            <Grid size={12} md={6} sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                Available Doctors
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  
                  sx={{
                    mb: 2,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 'bold',
                    textTransform: 'none'
                  }}
                >
                  Quick Connect with Next Available
                </Button>
                <Divider sx={{ my: 2, display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body2" color="text.secondary" sx={{ px: 2 }}>
                    OR
                  </Typography>
                </Divider>
                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
                  Choose your preferred doctor:
                </Typography>
              </Box>
              
              <List sx={{ width: '100%' }}>
                {doctors.map((doctor) => (
                  <Card 
                    key={doctor.id} 
                    variant="outlined" 
                    sx={{ 
                      mb: 2,
                      borderRadius: 2,
                      borderLeft: '3px solid',
                      borderColor: doctor.available ? 'success.main' : 'grey.300'
                    }}
                  >
                    <ListItem
                      secondaryAction={
                        <Button
                          variant={doctor.available ? "contained" : "outlined"}
                          size="small"
                          endIcon={<ArrowForward />}
                          
                          disabled={!doctor.available}
                          sx={{
                            borderRadius: 2,
                            textTransform: 'none'
                          }}
                        >
                          {doctor.available ? "Connect" : "Unavailable"}
                        </Button>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar 
                          src={doctor.image} 
                          sx={{ 
                            width: 56, 
                            height: 56,
                            border: '2px solid',
                            borderColor: doctor.available ? 'primary.main' : 'grey.300'
                          }} 
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography fontWeight="medium">
                            {doctor.name}
                          </Typography>
                        }
                        secondary={
                          <>
                            <Typography variant="body2" color="text.primary">
                              {doctor.specialty}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                              {doctor.available ? (
                                <>
                                  <FiberManualRecord color="success" sx={{ fontSize: 12, mr: 1 }} />
                                  <Typography variant="caption" color="success.main">
                                    Available now
                                  </Typography>
                                </>
                              ) : (
                                <>
                                  <Schedule color="disabled" sx={{ fontSize: 14, mr: 1 }} />
                                  <Typography variant="caption" color="text.secondary">
                                    Next available {doctor.nextAvailable}
                                  </Typography>
                                </>
                              )}
                            </Box>
                          </>
                        }
                      />
                    </ListItem>
                  </Card>
                ))}
              </List>

            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default VideoCall;