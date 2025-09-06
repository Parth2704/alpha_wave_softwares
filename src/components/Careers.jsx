import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Chip,
  Alert,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import {
  LocationOn,
  Work,
  Schedule,
} from '@mui/icons-material';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { submitApplication } from '../store/slices/careerSlice';
import { showSnackbar } from '../store/slices/uiSlice';

const Careers = () => {
  const dispatch = useAppDispatch();
  const { jobs, loading } = useAppSelector((state) => state.career);
  
  const [selectedJob, setSelectedJob] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: '',
    coverLetter: '',
  });

  const handleApplyClick = (jobTitle) => {
    setApplicationForm(prev => ({ ...prev, position: jobTitle }));
    setSelectedJob(jobTitle);   
    setOpenDialog(true);
  };

  const handleSubmitApplication = async () => {
    if (!applicationForm.name || !applicationForm.email || !applicationForm.position) {
      dispatch(showSnackbar({
        message: 'Please fill in all required fields',
        severity: 'error'
      }));
      return;
    }

    try {
      await dispatch(submitApplication(applicationForm)).unwrap();
      dispatch(showSnackbar({
        message: 'Application submitted successfully!',
        severity: 'success'
      }));
      setOpenDialog(false);
      setApplicationForm({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        resume: '',
        coverLetter: '',
      });
    } catch (error) {
      dispatch(showSnackbar({
        message: 'Failed to submit application',
        severity: 'error'
      }));
    }
  };

  return (
    <Box id="careers" sx={{ py: 8, backgroundColor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 2, color: '#1e3a8a' }}
        >
          Join Our Team
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{ mb: 6, color: '#64748b', maxWidth: '800px', mx: 'auto' }}
        >
          We're always looking for talented individuals who share our passion for technology
          and innovation. Explore exciting career opportunities with AlphaWave Softwares.
        </Typography>

        <Alert
          severity="info"
          sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}
        >
          <Typography variant="body2">
            We offer competitive salaries, flexible working arrangements, comprehensive health benefits,
            and opportunities for professional development.
          </Typography>
        </Alert>

        <Grid container spacing={4}>
          {jobs.map((job) => (
            <Grid item size={{xs:12, md:6, lg:4}} key={job.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(30, 58, 138, 0.15)',
                  },
                }}
              >
                <CardContent sx={{ flex: 1 }}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 'bold', color: '#1e3a8a', mb: 2 }}
                  >
                    {job.title}
                  </Typography>

                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Work sx={{ fontSize: '1rem', mr: 1, color: '#64748b' }} />
                      <Typography variant="body2" color="text.secondary">
                        {job.department}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <LocationOn sx={{ fontSize: '1rem', mr: 1, color: '#64748b' }} />
                      <Typography variant="body2" color="text.secondary">
                        {job.location}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Schedule sx={{ fontSize: '1rem', mr: 1, color: '#64748b' }} />
                      <Typography variant="body2" color="text.secondary">
                        {job.type}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        {job.experience}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography variant="body2" sx={{ mb: 3, color: '#475569', lineHeight: 1.6 }}>
                    {job.description}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 'bold', mb: 1, color: '#1e3a8a' }}
                  >
                    Key Requirements:
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    {job.requirements.map((req) => (
                      <Chip
                        key={req}
                        label={req}
                        size="small"
                        sx={{
                          mr: 0.5,
                          mb: 0.5,
                          backgroundColor: '#e0f2fe',
                          color: '#0277bd',
                          fontSize: '0.75rem',
                        }}
                      />
                    ))}
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handleApplyClick(job.title)}
                    sx={{
                      backgroundColor: '#3b82f6',
                      '&:hover': { backgroundColor: '#2563eb' },
                      mt: 'auto',
                    }}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Application Dialog */}
        <Dialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Apply for {selectedJob}
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={3} sx={{ mt: 1 }}>
              <Grid item size={{xs:12, sm:6}}>
                <TextField
                  fullWidth
                  label="Full Name"
                  required
                  value={applicationForm.name}
                  onChange={(e) => setApplicationForm(prev => ({ ...prev, name: e.target.value }))}
                />
              </Grid>
              <Grid item size={{xs:12, sm:6}}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  required
                  value={applicationForm.email}
                  onChange={(e) => setApplicationForm(prev => ({ ...prev, email: e.target.value }))}
                />
              </Grid>
              <Grid item size={{xs:12, sm:6}}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  value={applicationForm.phone}
                  onChange={(e) => setApplicationForm(prev => ({ ...prev, phone: e.target.value }))}
                />
              </Grid>
              <Grid item size={{xs:12, sm:6}}>
                <FormControl fullWidth>
                  <InputLabel>Years of Experience</InputLabel>
                  <Select
                    value={applicationForm.experience}
                    label="Years of Experience"
                    onChange={(e) => setApplicationForm(prev => ({ ...prev, experience: e.target.value }))}
                  >
                    <MenuItem value="0-1">0-1 years</MenuItem>
                    <MenuItem value="2-3">2-3 years</MenuItem>
                    <MenuItem value="4-5">4-5 years</MenuItem>
                    <MenuItem value="6+">6+ years</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item size={{xs:12}}>
                <TextField
                  fullWidth
                  label="Resume URL or LinkedIn Profile"
                  placeholder="https://your-resume-link.com"
                  value={applicationForm.resume}
                  onChange={(e) => setApplicationForm(prev => ({ ...prev, resume: e.target.value }))}
                />
              </Grid>
              <Grid item size={{xs:12}}>
                <TextField
                  fullWidth
                  label="Cover Letter"
                  multiline
                  rows={4}
                  placeholder="Tell us why you're perfect for this role..."
                  value={applicationForm.coverLetter}
                  onChange={(e) => setApplicationForm(prev => ({ ...prev, coverLetter: e.target.value }))}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions sx={{ p: 3 }}>
            <Button onClick={() => setOpenDialog(false)}>
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleSubmitApplication}
              disabled={loading}
              startIcon={loading ? <CircularProgress size={20} /> : null}
              sx={{
                backgroundColor: '#3b82f6',
                '&:hover': { backgroundColor: '#2563eb' },
              }}
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Careers;
