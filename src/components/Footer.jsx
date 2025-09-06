import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
  Email,
  Phone,
  LocationOn,
  Code,
} from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook />, url: '#', label: 'Facebook' },
    { icon: <Twitter />, url: '#', label: 'Twitter' },
    { icon: <LinkedIn />, url: '#', label: 'LinkedIn' },
    { icon: <GitHub />, url: '#', label: 'GitHub' },
  ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'Cloud Solutions',
    'API Development',
    'Cybersecurity',
    'Data Analytics',
  ];

  const company = [
    'About Us',
    'Our Team',
    'Careers',
    'News & Insights',
    'Contact Us',
    'Privacy Policy',
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1e3a8a',
        color: 'white',
        pt: 6,
        pb: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item size={{xs:12, md:4}}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Code sx={{ mr: 1, fontSize: '2rem' }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                AlphaWave Software
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.9, lineHeight: 1.8 }}>
              Transforming ideas into digital solutions. We're your trusted partner
              for innovative software development and technology consulting.
            </Typography>
            
            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Email sx={{ mr: 1, fontSize: '1.2rem' }} />
                <Typography variant="body2">info@alphawavesoftware.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Phone sx={{ mr: 1, fontSize: '1.2rem' }} />
                <Typography variant="body2">+91 91578 77809</Typography>
              </Box>
              {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOn sx={{ mr: 1, fontSize: '1.2rem' }} />
                <Typography variant="body2">New York, NY 10001</Typography>
              </Box> */}
            </Box>

            <Box>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  component={Link}
                  href={social.url}
                  aria-label={social.label}
                  sx={{
                    color: 'white',
                    mr: 1,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Services */}
          <Grid item size={{xs:12, sm:6, md:3}}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Services
            </Typography>
            <Box>
              {services.map((service) => (
                <Link
                  key={service}
                  color="inherit"
                  underline="none"
                  sx={{
                    display: 'block',
                    mb: 1,
                    opacity: 0.8,
                    transition: 'opacity 0.3s ease',
                    '&:hover': { opacity: 1 },
                  }}
                >
                  <Typography variant="body2">{service}</Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Company */}
          <Grid item size={{xs:12, sm:6, md:3}}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Company
            </Typography>
            <Box>
              {company.map((item) => (
                <Link
                  key={item}
                  color="inherit"
                  underline="none"
                  sx={{
                    display: 'block',
                    mb: 1,
                    opacity: 0.8,
                    transition: 'opacity 0.3s ease',
                    '&:hover': { opacity: 1 },
                  }}
                >
                  <Typography variant="body2">{item}</Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item size={{xs:12, md:2}}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Stay Connected
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
              Subscribe to our newsletter for the latest updates and insights.
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.6, fontSize: '0.8rem' }}>
              Coming Soon: Newsletter signup
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              © {currentYear} AlphaWave Software. All rights reserved.
            </Typography>
          </Grid>
          {/* <Grid item>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Built with ❤️ using React & Material-UI
            </Typography>
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
