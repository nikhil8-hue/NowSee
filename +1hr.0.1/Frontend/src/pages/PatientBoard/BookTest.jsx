import React from 'react';

import { 
  Card, CardContent, Typography, Box, 
   Button, TextField, FormControl, 
  InputLabel, Select, MenuItem, Chip, Divider, Avatar
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {
  MedicalServices, LocalHospital, 
  Healing, MonitorHeart, Visibility,
  AccessTime, CheckCircle, Warning
} from '@mui/icons-material';

const BookTest = () => {
  const [formData, setFormData] = React.useState({
    testType: '',
    patientName: '',
    appointmentDate: '',
    selectedClinic: null
  });

  const tests = [
    { value: 'full-body', label: 'Full Body Checkup', icon: <MonitorHeart color="primary" /> },
    { value: 'xray', label: 'X-Ray Scan', icon: <Visibility color="secondary" /> },
    { value: 'ultrasound', label: 'Ultrasound', icon: <Healing color="success" /> },
    { value: 'eye', label: 'Eye Examination', icon: <Visibility color="info" /> },
    { value: 'routine', label: 'Daily Routine Check', icon: <MedicalServices color="warning" /> }
  ];

  const clinics = [
    { id: 1, name: 'City Medical Center', status: 'smooth', waitTime: '15 min', image: '/clinic1.jpg' },
    { id: 2, name: 'Prime Diagnostics', status: 'rush', waitTime: '45 min', image: '/clinic2.jpg' },
    { id: 3, name: 'HealthPlus Labs', status: 'smooth', waitTime: '10 min', image: '/clinic3.jpg' },
    { id: 4, name: 'Metro Imaging', status: 'busy', waitTime: '30 min', image: '/clinic4.jpg' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClinicSelect = (clinic) => {
    setFormData(prev => ({
      ...prev,
      selectedClinic: clinic
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', {
      ...formData,
      clinicName: formData.selectedClinic.name
    });
    // Add your API call here
  };

  return (
    <Card sx={{ 
     
      maxWidth: '100vw', 
      margin: 'auto', 
      borderRadius: 3,
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      backgroundColor: 'rgba(255,255,255,0.95)'
    }}>
      <CardContent sx={{ p: 4 }}>
        <form onSubmit={handleSubmit}>
          {/* Header */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: 3,
            borderBottom: '1px solid #e0e0e0',
            pb: 2
          }}>
            <LocalHospital sx={{ 
              fontSize: 40, 
              color: 'primary.main', 
              mr: 2 
            }} />
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Book Medical Tests
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {/* Left Column - Form */}
            <Grid size={12} md={6}>
              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>Select Test Type</InputLabel>
                <Select
                  name="testType"
                  value={formData.testType}
                  label="Select Test Type"
                  onChange={handleInputChange}
                  sx={{ borderRadius: 2 }}
                  required
                >
                  {tests.map((test) => (
                    <MenuItem key={test.value} value={test.value}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {test.icon}
                        <Typography sx={{ ml: 2 }}>{test.label}</Typography>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                fullWidth
                name="patientName"
                label="Patient Name"
                variant="outlined"
                value={formData.patientName}
                onChange={handleInputChange}
                sx={{ mb: 3, borderRadius: 2 }}
                required
              />

              <TextField
                fullWidth
                name="appointmentDate"
                label="Preferred Date"
                type="date"
                value={formData.appointmentDate}
                onChange={handleInputChange}
                slotProps={{ inputLabel: { shrink: true } }}
                sx={{ mb: 3 }}
                required
              />
            </Grid>

            {/* Right Column - Clinics */}
            <Grid size={12} md={6}>
              <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'medium' }}>
                Select Clinic/Lab
              </Typography>

              <Box sx={{ 
                border: '1px solid #e0e0e0',
                borderRadius: 2,
                p: 2,
                maxHeight: 300,
                overflowY: 'auto'
              }}>
                {clinics.map((clinic) => (
                  <Box 
                    key={clinic.id}
                    onClick={() => handleClinicSelect(clinic)}
                    sx={{
                      mb: 2,
                      p: 2,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      backgroundColor: formData.selectedClinic?.id === clinic.id 
                        ? '#e3f2fd' 
                        : 'background.paper',
                      border: formData.selectedClinic?.id === clinic.id
                        ? '2px solid #1976d2'
                        : '1px solid #e0e0e0',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: '#f5f5f5',
                        borderColor: '#90caf9'
                      }
                    }}
                  >
                    <Avatar 
                      src={clinic.image} 
                      alt={clinic.name}
                      sx={{ 
                        width: 56, 
                        height: 56, 
                        mr: 2,
                        bgcolor: clinic.status === 'rush' ? '#ff9800' : '#4caf50'
                      }}
                    >
                      {clinic.image ? null : <LocalHospital />}
                    </Avatar>
                    
                    <Box sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontWeight: 'medium' }}>
                          {clinic.name}
                        </Typography>
                        <Chip
                          icon={clinic.status === 'rush' ? <Warning /> : <CheckCircle />}
                          label={clinic.status === 'rush' ? 'Busy' : 'Available'}
                          color={clinic.status === 'rush' ? 'warning' : 'success'}
                          size="small"
                        />
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        <AccessTime fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                        <Typography variant="body2" color="text.secondary">
                          Wait time: {clinic.waitTime}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>

          {/* Selected Clinic Summary */}
          {formData.selectedClinic && (
            <Box sx={{ 
              backgroundColor: '#e8f5e9',
              p: 2,
              borderRadius: 2,
              mt: 3,
              display: 'flex',
              alignItems: 'center'
            }}>
              <CheckCircle color="success" sx={{ mr: 2 }} />
              <Typography>
                Selected: <strong>{formData.selectedClinic.name}</strong> • 
                Status: {formData.selectedClinic.status === 'rush' ? 'Busy' : 'Available'} • 
                Wait: {formData.selectedClinic.waitTime}
              </Typography>
            </Box>
          )}

          <Divider sx={{ my: 3 }} />

          {/* Submit Button */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={!formData.testType || !formData.patientName || !formData.appointmentDate || !formData.selectedClinic}
              sx={{
                px: 4,
                borderRadius: 2,
                fontWeight: 'bold',
                fontSize: '1rem',
                textTransform: 'none',
                boxShadow: 'none',
                '&:hover': {
                  boxShadow: '0 2px 10px rgba(25, 118, 210, 0.5)'
                }
              }}
            >
              Confirm Appointment
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookTest;