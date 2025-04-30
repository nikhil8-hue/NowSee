import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton
} from '@mui/material';
// dont give up 
import Grid from '@mui/material/Grid2';
import {
  Description,
  CloudUpload,
  Verified,
  MedicalServices,
  Badge,
  Close
} from '@mui/icons-material';
import { useNavigate } from 'react-router';

const DoctorCertificationPage = () => {
   const navigate=useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [certifications, setCertifications] = useState([
    { name: "Medical Degree", uploaded: false },
    { name: "License Certificate", uploaded: false },
    { name: "Specialization Proof", uploaded: false },
    { name: "ID Proof", uploaded: false }
  ]);

  const handleUpload = (index) => {
    const updatedCerts = [...certifications];
    updatedCerts[index].uploaded = true;
    setCertifications(updatedCerts);
    setOpenDialog(true);
  };

  return (
    <Grid >
      {/* Blue Section (50%) */}
      <Grid size={12} sx={{
       
        backgroundColor: 'primary.main',
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 4,
        color: 'white'
      }}>
        <MedicalServices sx={{ fontSize: 80, mb: 3 }} />
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Doctor Verification
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 400, textAlign: 'center' }}>
          Complete your profile by uploading required documents to start accepting patients
        </Typography>
      </Grid>

      {/* White Section (50%) */}
      <Grid size={12}sx={{
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        p: 4
      }}>
        <Card sx={{ 
          
          mx: 'auto',
          borderRadius: 3,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}>
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Avatar sx={{ 
                width: 80, 
                height: 80, 
                mx: 'auto',
                mb: 2,
                bgcolor: 'primary.light'
              }}>
                <Badge fontSize="large" />
              </Avatar>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Upload Your Certifications
              </Typography>
              <Typography color="text.secondary">
                Please upload the following documents for verification
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {certifications.map((cert, index) => (
                <Grid size={12} key={index}>
                  <Card variant="outlined" sx={{ borderRadius: 2 }}>
                    <CardContent sx={{ 
                      p: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Description sx={{ 
                          mr: 2, 
                          color: cert.uploaded ? 'success.main' : 'action.active',
                          fontSize: 40 
                        }} />
                        <Box>
                          <Typography fontWeight="medium">{cert.name}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {cert.uploaded ? "Verified" : "Not uploaded"}
                          </Typography>
                        </Box>
                      </Box>
                      {cert.uploaded ? (
                        <Verified color="success" />
                      ) : (
                        <Button
                          variant="outlined"
                          startIcon={<CloudUpload />}
                          onClick={() => handleUpload(index)}
                          sx={{ borderRadius: 2 }}
                        >
                          Upload
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Button
                variant="contained"
                size="large"
                disabled={certifications.some(c => !c.uploaded)}
                sx={{
                  px: 4,
                  borderRadius: 2,
                  fontWeight: 'bold',
                  textTransform: 'none'
                }}
              >
                Submit for Verification
              </Button>
              <Button
                onClick={()=>navigate("/doctor-detail")}
                variant="contained"
                size="large"
                disabled={certifications.some(c => !c.uploaded)}
                sx={{
                  marginLeft:2,
                  px: 4,
                  borderRadius: 2,
                  fontWeight: 'bold',
                  textTransform: 'none'
                }}
              >
                Next page 
              </Button>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Verification process may take 2-3 business days
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Simple Upload Confirmation Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Upload Successful</span>
          <IconButton onClick={() => setOpenDialog(false)}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ textAlign: 'center', p: 2 }}>
            <Verified sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
            <Typography gutterBottom>
              Your document has been uploaded successfully
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our team will verify it shortly
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
          <Button 
            variant="contained" 
            onClick={() => setOpenDialog(false)}
            sx={{ borderRadius: 2 }}
          >
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default DoctorCertificationPage;