import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  
  Box,
  TextField,
  Button,
  Divider,
  Chip,
  IconButton
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {
  LocationOn,
  Schedule,
  Phone,
  Email,
  Public,
  Edit,
  Add,
  Delete
} from '@mui/icons-material';
import { useNavigate } from 'react-router';

const ClinicDetails = () => {
    const navigate= useNavigate();
  // Sample days for clinic timings
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <Card sx={{
      maxWidth: 1000,
      margin: 'auto',
      borderRadius: 3,
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
    }}>
      {/* Blue Header */}
      <Box sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        p: 3,
        display: 'flex',
        alignItems: 'center'
      }}>
        <Box sx={{ mr: 2 }}>
          <LocationOn sx={{ fontSize: 40 }} />
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold">Clinic Information</Typography>
          <Typography variant="body1">Fill your clinic details and working hours</Typography>
        </Box>
      </Box>

      {/* White Content Area */}
      <CardContent sx={{ p: 4 }}>
        <Grid container spacing={4}>
          {/* Left Column - Basic Info */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" fontWeight="bold" sx={{ 
              mb: 3,
              display: 'flex',
              alignItems: 'center',
              color: 'primary.main'
            }}>
              <LocationOn sx={{ mr: 1 }} />
              Clinic Details
            </Typography>

            <TextField
              fullWidth
              label="Clinic Name"
              placeholder="Enter clinic name"
              sx={{ mb: 3 }}
            />

            <TextField
              fullWidth
              label="Address"
              placeholder="Full clinic address"
              multiline
              rows={3}
              sx={{ mb: 3 }}
              InputProps={{
                startAdornment: (
                  <LocationOn sx={{ color: 'action.active', mr: 1 }} />
                )
              }}
            />

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  placeholder="+1 (123) 456-7890"
                  InputProps={{
                    startAdornment: (
                      <Phone sx={{ color: 'action.active', mr: 1 }} />
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  placeholder="clinic@example.com"
                  InputProps={{
                    startAdornment: (
                      <Email sx={{ color: 'action.active', mr: 1 }} />
                    )
                  }}
                />
              </Grid>
            </Grid>

            <TextField
              fullWidth
              label="Website"
              placeholder="www.yourclinic.com"
              sx={{ mt: 3 }}
              InputProps={{
                startAdornment: (
                  <Public sx={{ color: 'action.active', mr: 1 }} />
                )
              }}
            />
          </Grid>

          {/* Right Column - Working Hours */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" fontWeight="bold" sx={{ 
              mb: 3,
              display: 'flex',
              alignItems: 'center',
              color: 'primary.main'
            }}>
              <Schedule sx={{ mr: 1 }} />
              Working Hours
            </Typography>

            {days.map((day) => (
              <Box key={day} sx={{ mb: 2 }}>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>{day}</Typography>
                <Grid container spacing={1} alignItems="center">
                  <Grid item xs={5}>
                    <TextField
                      fullWidth
                      type="time"
                      label="Opening Time"
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      fullWidth
                      type="time"
                      label="Closing Time"
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <Chip
                      label="Open"
                      color="success"
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                </Grid>
              </Box>
            ))}

            <Box sx={{ mt: 3, display: 'flex', alignItems: 'center' }}>
              <Typography variant="body2" sx={{ mr: 2 }}>Saturday/Sunday:</Typography>
              <Chip
                label="Closed"
                color="error"
                variant="outlined"
              />
            </Box>

            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>Lunch Break</Typography>
              <Grid container spacing={1}>
                <Grid item xs={5}>
                  <TextField
                    fullWidth
                    type="time"
                    label="Start Time"
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    fullWidth
                    type="time"
                    label="End Time"
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <IconButton>
                    <Delete color="error" />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            variant="outlined"
            startIcon={<Add />}
            sx={{ borderRadius: 2 }}
          >
            Add Another Clinic
          </Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: 2,
              px: 4,
              fontWeight: 'bold'
            }}
          >
            Save Clinic Details
          </Button>
          <Button
            variant="outlined"
            onClick={()=>navigate("/doctors")}
            sx={{
              borderRadius: 2,
              px: 4,
              fontWeight: 'bold'
            }}
          >
            To Dashboard
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ClinicDetails;