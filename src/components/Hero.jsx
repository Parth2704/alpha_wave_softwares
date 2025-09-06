import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Fade,
} from '@mui/material';
import { TrendingUp, People, Code, CloudDone } from '@mui/icons-material';

const Hero = () => {
  const stats = [
    { icon: <People />, number: '50+', label: 'Happy Clients' },
    { icon: <Code />, number: '200+', label: 'Projects Delivered' },
    { icon: <TrendingUp />, number: '5+', label: 'Years Experience' },
    { icon: <CloudDone />, number: '99%', label: 'Success Rate' },
  ];

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Section */}
          <Grid item size={{xs:12, md:6}}>
            <Fade in timeout={1000}>
              <Box>
                <Typography
                  variant="h2"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    mb: 3,
                  }}
                >
                  Transforming Ideas into
                  <Typography
                    component="span"
                    sx={{
                      color: '#60a5fa',
                      fontWeight: 'inherit',
                      fontSize: 'inherit',
                      display: 'block',
                    }}
                  >
                    Digital Solutions
                  </Typography>
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    mb: 4,
                    opacity: 0.9,
                    lineHeight: 1.6,
                  }}
                >
                  At AlphaWave Softwares, we craft innovative software solutions
                  that drive business growth and digital transformation for our
                  clients worldwide.
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: 'white',
                      color: '#1e3a8a',
                      '&:hover': { backgroundColor: '#f1f5f9' },
                      px: 4,
                      py: 1.5,
                    }}
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      '&:hover': {
                        borderColor: '#60a5fa',
                        backgroundColor: 'rgba(96, 165, 250, 0.1)',
                      },
                      px: 4,
                      py: 1.5,
                    }}
                  >
                    View Portfolio
                  </Button>
                </Box>
              </Box>
            </Fade>
          </Grid>

          {/* Right Section */}
          <Grid item size={{xs:12, md:6}}>
            <Grid container spacing={2}>
              {stats.map((stat, index) => (
                <Grid item size={{xs:6}} key={index}>
                  <Fade in timeout={1000 + index * 200}>
                    <Card
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        textAlign: 'center',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                        },
                      }}
                    >
                      <CardContent>
                        <Box sx={{ mb: 1, color: '#60a5fa' }}>{stat.icon}</Box>
                        <Typography
                          variant="h4"
                          sx={{ fontWeight: 'bold', mb: 1 }}
                        >
                          {stat.number}
                        </Typography>
                        <Typography variant="body2">{stat.label}</Typography>
                      </CardContent>
                    </Card>
                  </Fade>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
