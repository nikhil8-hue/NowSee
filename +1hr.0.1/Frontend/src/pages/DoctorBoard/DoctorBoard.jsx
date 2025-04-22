import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Divider,
  Chip,
  IconButton
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {
  People,
  CalendarMonth,  // Month calendar icon
  AccessTime,    // For upcoming appointments
  LocalHospital, // Clinic icon
  Notifications,
  Settings,
  PersonAdd,
  VideoCall,
  Chat,
  Assignment,
  CheckCircle,   // Verified icon
  ArrowForward,  // For navigation
  FiberManualRecord // Status indicator
} from '@mui/icons-material';


const DoctorBoard= () => {
  // Sample data with patient IDs
  const monthlyStats = {
    patients: 184,
    upcoming: 9,
    clinicVisits: 127,
    videoConsults: 57
  };

  const upcomingPatients = [
    { id: 'P-10023', name: 'John Doe', date: 'May 15', time: '09:30 AM', type: 'Clinic' },
    { id: 'P-10024', name: 'Sarah Smith', date: 'May 15', time: '10:45 AM', type: 'Video' },
    { id: 'P-10025', name: 'Michael Johnson', date: 'May 16', time: '11:15 AM', type: 'Clinic' }
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 3, backgroundColor: '#f9fafb' }}>
      {/* Header */}
      <Grid container spacing={2} textAlign="center" sx={{ mb: 4 }}>
        <Grid size={12} md={6}>
          <Typography variant="h4" fontWeight="bold" color="primary">
            Doctor Dashboard
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <FiberManualRecord sx={{ fontSize: 12, color: 'success.main', mr: 1 }} />
            Active now • Last sync: Today, 10:15 AM
          </Typography>
        </Grid>
        
      </Grid>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* Monthly Patients */}
        <Grid size={3} sm={6} md={3}>
          <Card sx={{ borderRadius: 3, height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <People sx={{ fontSize: 20, color: 'primary.main', mr: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  Monthly Patients
                </Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold" >
                {monthlyStats.patients}
              </Typography>
              <Chip 
                label="+12% from last month" 
                size="small" 
                sx={{ mt: 1, backgroundColor: 'success.light', color: 'success.dark' }} 
              />
            </CardContent>
          </Card>
        </Grid>
        
        {/* Upcoming Appointments */}
        <Grid size={3} sm={6} md={3}>
          <Card sx={{ borderRadius: 3, height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <CalendarMonth sx={{ fontSize: 20, color: 'warning.main', mr: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  Upcoming
                </Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold">
                {monthlyStats.upcoming}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Next: Today, 09:30 AM
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Clinic Visits */}
        <Grid size={3} sm={6} md={3}>
          <Card sx={{ borderRadius: 3, height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <LocalHospital sx={{ fontSize: 20, color: 'info.main', mr: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  Clinic Visits
                </Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold">
                {monthlyStats.clinicVisits}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                68% of total
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Video Consults */}
        <Grid size={3} sm={6} md={3}>
          <Card sx={{ borderRadius: 3, height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <VideoCall sx={{ fontSize: 20, color: 'secondary.main', mr: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  Video Consults
                </Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold">
                {monthlyStats.videoConsults}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                32% of total
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Main Content */}
      <Grid container spacing={3}>
        {/* Upcoming Patients */}
        <Grid size={5} md={6}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h6" fontWeight="bold" color="primary">
                  <AccessTime sx={{ verticalAlign: 'middle', mr: 1, fontSize: 22 }} />
                  Upcoming Patients
                </Typography>
                <Button endIcon={<ArrowForward />} size="small">
                  View All
                </Button>
              </Box>
              
              {upcomingPatients.map((patient) => (
                <Box key={patient.id} sx={{ mb: 2 }}>
                  <Card variant="outlined" sx={{ borderRadius: 2, borderLeft: '3px solid', borderColor: 'primary.main' }}>
                    <CardContent sx={{ p: 2 }}>
                      <Grid container alignItems="center">
                        <Grid size={6}>
                          <Typography fontWeight="medium">
                            {patient.name}
                            <Typography component="span" variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                              ({patient.id})
                            </Typography>
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {patient.date} • {patient.time}
                          </Typography>
                        </Grid>
                        <Grid size={4} sx={{ textAlign: 'right' }}>
                          <Chip
                            label={patient.type}
                            size="small"
                            sx={{ 
                              backgroundColor: patient.type === 'Clinic' ? 'primary.light' : 'secondary.light',
                              color: patient.type === 'Clinic' ? 'primary.dark' : 'secondary.dark'
                            }}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Quick Actions */}
        <Grid size={7} md={6}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" color="primary" sx={{ mb: 3 }}>
                Quick Actions
              </Typography>
              <Grid container spacing={1}>
                <Grid size={3}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<PersonAdd sx={{ color: 'success.main' }} />}
                    sx={{ py: 2, borderRadius: 2 }}
                  >
                    New Patient
                  </Button>
                </Grid>
                <Grid size={3}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<VideoCall sx={{ color: 'secondary.main' }} />}
                    sx={{ py: 2, borderRadius: 2 }}
                  >
                    Start Consult
                  </Button>
                </Grid>
                <Grid size={3}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<Chat sx={{ color: 'info.main' }} />}
                    sx={{ py: 2, borderRadius: 2 }}
                  >
                    Messages
                  </Button>
                </Grid>
                <Grid size={3}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<Assignment sx={{ color: 'warning.main' }} />}
                    sx={{ py: 2, borderRadius: 2 }}
                  >
                    Reports
                  </Button>
                </Grid>
              </Grid>

              <Divider sx={{ my: 3 }} />

              <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
                Recent Activity
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CheckCircle sx={{ fontSize: 16, color: 'success.main', mr: 1.5 }} />
                <Typography variant="body2">
                  Completed consultation with <strong>P-10022</strong>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircle sx={{ fontSize: 16, color: 'success.main', mr: 1.5 }} />
                <Typography variant="body2">
                  Added new patient <strong>P-10025</strong>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DoctorBoard;