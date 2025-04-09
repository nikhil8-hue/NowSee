import React, { useState } from 'react';
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
  Edit,
  Save,
  CameraAlt
} from '@mui/icons-material';

const DoctorDetail = () => {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    name: '',
    specialty: '',
    age: '',
    email: '',
    phone: '',
    dob: '',
    address: ''
  });
  const [profileImage, setProfileImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setEditMode(false);
    // Add save to backend logic here
  };

  return (
    <Card sx={{ 
      maxWidth: '100VW',
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
            src={profileImage || '/default-doctor.jpg'}
            sx={{ 
              width: 80, 
              height: 80, 
              mr: 3,
              border: '3px solid white'
            }}
          />
          {editMode && (
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
                onChange={handleImageUpload}
              />
            </IconButton>
          )}
        </Box>
        
        <Box sx={{ flexGrow: 1 }}>
          {editMode ? (
            <>
              <TextField
                name="name"
                value={profile.name}
                onChange={handleChange}
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
                value={profile.specialty}
                onChange={handleChange}
                placeholder="Specialty"
                variant="standard"
                fullWidth
                sx={{ 
                  '& .MuiInputBase-input': { color: 'white', fontSize: '1.2rem' },
                  '& .MuiInput-underline:before': { borderColor: 'rgba(255,255,255,0.5)' }
                }}
              />
            </>
          ) : (
            <>
              <Typography variant="h4" fontWeight="bold">
                {profile.name || "Your Name"}
              </Typography>
              <Typography variant="h6">
                {profile.specialty || "Specialty"}
              </Typography>
            </>
          )}
        </Box>
        
        <IconButton 
          onClick={() => editMode ? handleSave() : setEditMode(true)}
          sx={{ 
            ml: 'auto', 
            color: 'white',
            backgroundColor: 'rgba(255,255,255,0.2)',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.3)'
            }
          }}
        >
          {editMode ? <Save /> : <Edit />}
        </IconButton>
      </Box>

      {/* White Content Section */}
      <CardContent sx={{ p: 4 }}>
        <Grid container spacing={3}>
          {/* Personal Details Column */}
          <Grid size={6} md={6}>
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
                editMode={editMode}
                icon={<CalendarToday />}
                label="Age"
                name="age"
                value={profile.age}
                onChange={handleChange}
                placeholder="35"
              />
              <DetailField 
                editMode={editMode}
                icon={<CalendarToday />}
                label="Date of Birth"
                name="dob"
                value={profile.dob}
                onChange={handleChange}
                placeholder="MM/DD/YYYY"
              />
              <DetailField 
                editMode={editMode}
                icon={<LocationOn />}
                label="Address"
                name="address"
                value={profile.address}
                onChange={handleChange}
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
                editMode={editMode}
                icon={<Email />}
                label="Email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
              />
              <DetailField 
                editMode={editMode}
                icon={<Phone />}
                label="Phone"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                placeholder="+1 (123) 456-7890"
                lastItem
              />
            </Box>
          </Grid>
        </Grid>

        {editMode && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
            <Button
              variant="contained"
              startIcon={<Save />}
              onClick={handleSave}
              sx={{
                borderRadius: 2,
                px: 3,
                fontWeight: 'bold'
              }}
            >
              Save Profile
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

// Reusable editable detail component
const DetailField = ({ editMode, icon, label, name, value, onChange, placeholder, lastItem = false }) => (
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
      {editMode ? (
        <TextField
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          variant="standard"
          fullWidth
          sx={{ mt: 0.5 }}
        />
      ) : (
        <Typography variant="body1" fontWeight="medium" sx={{ minHeight: '24px' }}>
          {value || <span style={{ color: '#aaa' }}>Not provided</span>}
        </Typography>
      )}
    </Box>
  </Box>
);

export default DoctorDetail;