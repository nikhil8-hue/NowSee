import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Avatar,
 TextField,
  Box,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CardHeader,
  IconButton
} from '@mui/material';

import Grid from '@mui/material/Grid2';
import {
  MedicalServices,
  AccessTime,
  Notifications,
  CalendarToday,
  ArrowForward,
  MoreVert
} from '@mui/icons-material';

const Appointment = () => {
  const [notificationTime, setNotificationTime] = useState(30);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const doctors = [
    {
      id: 1,
      name: "Dr. Anshul Singh",
      specialty: "Cardiologist",
      image: "/doctor1.jpg",
      availability: [
        { day: "Mon-Fri", time: "9:00 AM - 5:00 PM" },
        { day: "Sat", time: "10:00 AM - 2:00 PM" }
      ],
      rating: 4.7
    },
    {
      id: 2,
      name: "Dr. rahul Verma",
      specialty: "Neurologist",
      image: "/doctor2.jpg",
      availability: [
        { day: "Tue-Thu", time: "8:00 AM - 4:00 PM" },
        { day: "Sat", time: "9:00 AM - 1:00 PM" }
      ],
      rating: 4.5
    },
    {
      id: 3,
      name: "Dr. Priya Patel",
      specialty: "Pediatrician",
      image: "/doctor3.jpg",
      availability: [
        { day: "Mon-Wed-Fri", time: "10:00 AM - 6:00 PM" }
      ],
      rating: 4.9
    }
  ];

  const handleBookAppointment = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleConfirmAppointment = () => {
    console.log("Appointment booked with:", selectedDoctor.name);
    console.log("Notification before:", notificationTime, "minutes");
    // Add your booking logic here
  };

  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto', p: 3 }}>
      <Card sx={{ borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
        <CardHeader
          title="Book Doctor Appointment"
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
          {/* Doctors List */}
          <Grid container spacing={3}>
            {doctors.map((doctor) => (
              <Grid size={12} key={doctor.id}>
                <Card variant="outlined" sx={{ borderRadius: 2 }}>
                  <CardContent sx={{ p: 3 }}>
                    <Grid container alignItems="center" spacing={3}>
                      {/* Doctor Info */}
                      <Grid size={4} md={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Avatar 
                            src={doctor.image} 
                            sx={{ 
                              width: 64, 
                              height: 64, 
                              mr: 2,
                              border: '2px solid',
                              borderColor: 'primary.main'
                            }}
                          >
                            <MedicalServices />
                          </Avatar>
                          <Box>
                            <Typography variant="subtitle1" fontWeight="600">
                              {doctor.name}
                            </Typography>
                            <Typography variant="body2" color="primary">
                              {doctor.specialty}
                            </Typography>
                            <Chip
                              label={`★ ${doctor.rating}`}
                              size="small"
                              sx={{ mt: 1, backgroundColor: 'primary.light' }}
                            />
                          </Box>
                        </Box>
                      </Grid>

                      {/* Availability */}
                      <Grid size={4} md={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <Typography variant="body2" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                            <AccessTime color="primary" sx={{ mr: 1 }} />
                            <strong>Available Hours:</strong>
                          </Typography>
                          {doctor.availability.map((slot, index) => (
                            <Typography key={index} variant="body2">
                              {slot.day}: {slot.time}
                            </Typography>
                          ))}
                        </Box>
                      </Grid>

                      {/* Action */}
                      <Grid size={4} md={4}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                          <Button
                            variant="contained"
                            endIcon={<ArrowForward />}
                            onClick={() => handleBookAppointment(doctor)}
                            sx={{
                              borderRadius: 2,
                              px: 3,
                              textTransform: 'none'
                            }}
                          >
                            Book Now
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Appointment Form (shown when doctor selected) */}
          {selectedDoctor && (
            <Card sx={{ mt: 3, borderRadius: 2, borderLeft: '4px solid', borderColor: 'primary.main' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Booking with <strong>{selectedDoctor.name}</strong>
                </Typography>
                
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Select Date"
                      type="date"
                      InputLabelProps={{ shrink: true }}
                      sx={{ mb: 2 }}
                    />
                    <FormControl fullWidth sx={{ mb: 2 }}>
                      <InputLabel>Select Time Slot</InputLabel>
                      <Select label="Select Time Slot">
                        {['9:00 AM', '10:30 AM', '12:00 PM', '2:30 PM', '4:00 PM'].map((time) => (
                          <MenuItem key={time} value={time}>{time}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth sx={{ mb: 3 }}>
                      <InputLabel>Notify Me Before</InputLabel>
                      <Select
                        value={notificationTime}
                        onChange={(e) => setNotificationTime(e.target.value)}
                        label="Notify Me Before"
                      >
                        <MenuItem value={15}>15 Minutes</MenuItem>
                        <MenuItem value={30}>30 Minutes</MenuItem>
                        <MenuItem value={60}>1 Hour</MenuItem>
                        <MenuItem value={120}>2 Hours</MenuItem>
                      </Select>
                    </FormControl>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Notifications color="primary" sx={{ mr: 1 }} />
                      <Typography variant="body2">
                        You'll be notified {notificationTime} minutes before your turn
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleConfirmAppointment}
                    sx={{
                      borderRadius: 2,
                      px: 4,
                      fontWeight: 'bold'
                    }}
                  >
                    Confirm Appointment
                  </Button>
                </Box>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Appointment;