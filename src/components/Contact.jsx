import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Paper,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Business,
} from '@mui/icons-material';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { submitContactForm } from '../store/slices/contactSlice';
import { showSnackbar } from '../store/slices/uiSlice';
import emailjs from "emailjs-com";

const Contact = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.contact);

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });


  const sendMail = async () => {
    try {
      const result = await emailjs.send(
        "service_x98ohhv",
        "template_02kf88b",
        contactForm,
        "bV8Rrkbd50nlxLGi5"
      );

      console.log("✅ Email sent!", result.text);
      dispatch(showSnackbar({
        message: "Message sent successfully! We'll get back to you soon.",
        severity: 'success'
      }));

      // Reset form
      setContactForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error("❌ Error sending email:", error.text);
      dispatch(showSnackbar({
        message: 'Failed to send message. Please try again.',
        severity: 'error'
      }));
    }
  };

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email Us',
      details: 'info.alphawavesoftware@gmail.com',
      subtitle: 'We reply within 24 hours',
    },
    {
      icon: <Phone />,
      title: 'Call Us',
      details: '+91 9157877809',
      subtitle: 'Mon-Fri 9 AM - 6 PM',
    },
    {
      icon: <LocationOn />,
      title: 'Visit Us',
      details: '604, KBC 1, Khushbu Circle, Yamuna Chowk, near RIO Business Hub, Mota Varachha',
      subtitle: 'Surat, Gujarat 394101',
    },
    {
      icon: <Business />,
      title: 'Business Hours',
      details: 'Monday - Friday: 9AM - 6PM',
      subtitle: 'Saturday: 10AM - 2PM',
    },
  ];

  const subjects = [
    'General Inquiry',
    'Project Discussion',
    'Technical Support',
    'Partnership',
    'Career Inquiry',
    'Other',
  ];

  const handleInputChange = (field) => (event) => {
    setContactForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      dispatch(showSnackbar({
        message: 'Please fill in all required fields',
        severity: 'error'
      }));
      return;
    }

    await sendMail();
  };

  return (
    <Box id="contact" sx={{ py: 8, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 2, color: '#1e3a8a' }}
        >
          Get In Touch
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{ mb: 6, color: '#64748b', maxWidth: '800px', mx: 'auto' }}
        >
          Ready to start your next project? We'd love to hear from you.
          Contact us today to discuss how we can help transform your business.
        </Typography>

        <Grid container spacing={6}>
          {/* Contact Information */}
          <Grid item size={{ xs: 12, lg: 4 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 'bold', mb: 3, color: '#1e3a8a' }}
            >
              Contact Information
            </Typography>

            <Grid container spacing={3}>
              {contactInfo.map((info, index) => (
                <Grid item size={{ xs: 12, sm: 6, lg: 12 }} key={index}>
                  <Card
                    sx={{
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 2,
                      },
                    }}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <Box
                          sx={{
                            backgroundColor: '#3b82f6',
                            color: 'white',
                            p: 1,
                            borderRadius: 1,
                            mr: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {info.icon}
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: 'bold', color: '#1e3a8a', mb: 0.5 }}
                          >
                            {info.title}
                          </Typography>
                          <Typography variant="body1" sx={{ mb: 0.5 }}>
                            {info.details}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {info.subtitle}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Contact Form */}
          <Grid item size={{ xs: 12, lg: 8 }}>
            <Paper elevation={2} sx={{ p: 4, borderRadius: 2 }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: 'bold', mb: 3, color: '#1e3a8a' }}
              >
                Send Us a Message
              </Typography>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      required
                      value={contactForm.name}
                      onChange={handleInputChange('name')}
                    />
                  </Grid>
                  <Grid item size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={handleInputChange('email')}
                    />
                  </Grid>
                  <Grid item size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      value={contactForm.phone}
                      onChange={handleInputChange('phone')}
                    />
                  </Grid>
                  <Grid item size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Company"
                      value={contactForm.company}
                      onChange={handleInputChange('company')}
                    />
                  </Grid>
                  <Grid item size={{ xs: 12 }}>
                    <FormControl fullWidth>
                      <InputLabel>Subject</InputLabel>
                      <Select
                        value={contactForm.subject}
                        label="Subject"
                        onChange={(e) =>
                          setContactForm((prev) => ({ ...prev, subject: e.target.value }))
                        }
                      >
                        {subjects.map((subject) => (
                          <MenuItem key={subject} value={subject}>
                            {subject}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={6}
                      required
                      placeholder="Tell us about your project, requirements, or any questions you have..."
                      value={contactForm.message}
                      onChange={handleInputChange('message')}
                    />
                  </Grid>
                  <Grid item size={{ xs: 12 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={loading}
                      startIcon={loading ? <CircularProgress size={20} /> : null}
                      sx={{
                        backgroundColor: '#3b82f6',
                        '&:hover': { backgroundColor: '#2563eb' },
                        px: 4,
                        py: 1.5,
                      }}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
