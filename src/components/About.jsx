import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
} from '@mui/material';
import {
  Business,
  Group,
  Speed,
  Security,
} from '@mui/icons-material';

const About = () => {
  const values = [
    {
      icon: <Business />,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.',
    },
    {
      icon: <Group />,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique needs.',
    },
    {
      icon: <Speed />,
      title: 'Efficiency',
      description: 'We deliver high-quality solutions on time and within budget.',
    },
    {
      icon: <Security />,
      title: 'Reliability',
      description: 'We build secure and scalable solutions you can depend on.',
    },
  ];

  const achievements = [
    '50+ Successful Projects',
    'Award-Winning Team',
    '24/7 Support',
    'Global Reach',
    'Agile Methodology',
    'Quality Assured',
  ];

  return (
    <Box id="about" sx={{ py: 8, backgroundColor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 2, color: '#1e3a8a' }}
        >
          About AlphaWave
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{ mb: 6, color: '#64748b', maxWidth: '800px', mx: 'auto' }}
        >
          Founded with a vision to bridge the gap between innovative technology and business success,
          AlphaWave Software has been at the forefront of digital transformation.
        </Typography>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item size={{xs:12, md:6}}>
            <Typography variant="h4" gutterBottom sx={{ color: '#1e3a8a', fontWeight: 'bold' }}>
              Our Story
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: '#475569', lineHeight: 1.8 }}>
              Since our inception, we've been committed to delivering exceptional software solutions
              that not only meet but exceed our clients' expectations. Our team of skilled developers,
              designers, and strategists work together to create digital experiences that drive real
              business results.
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: '#475569', lineHeight: 1.8 }}>
              We believe in the power of technology to transform businesses and create meaningful
              connections between companies and their customers. Every project we undertake is an
              opportunity to showcase our expertise and dedication to excellence.
            </Typography>
            <Box sx={{ mt: 3 }}>
              {achievements.map((achievement) => (
                <Chip
                  key={achievement}
                  label={achievement}
                  sx={{ 
                    mr: 1, 
                    mb: 1, 
                    backgroundColor: '#e0f2fe',
                    color: '#0277bd',
                  }}
                />
              ))}
            </Box>
          </Grid>
          <Grid size={{xs:12, md:6}}>
            <Box
              sx={{
                backgroundColor: '#1e3a8a',
                borderRadius: 2,
                p: 4,
                color: 'white',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph sx={{ opacity: 0.9, lineHeight: 1.8 }}>
                To empower businesses with innovative technology solutions that drive growth,
                enhance efficiency, and create competitive advantages in the digital marketplace.
              </Typography>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                Our Vision
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.8 }}>
                To be the leading software development partner for businesses worldwide,
                recognized for our innovation, quality, and commitment to client success.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 4, color: '#1e3a8a' }}
        >
          Our Core Values
        </Typography>
        <Grid container spacing={3}>
          {values.map((value, index) => (
            <Grid item size={{xs:12, sm:6, md:3}} key={index}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 3,
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Avatar
                    sx={{
                      backgroundColor: '#3b82f6',
                      width: 64,
                      height: 64,
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    {value.icon}
                  </Avatar>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b' }}>
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
