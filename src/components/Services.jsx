import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
} from '@mui/material';
import {
  Web,
  PhoneAndroid,
  Cloud,
  DataObject,
  Security,
  Analytics,
} from '@mui/icons-material';

const Services = () => {
  const services = [
    {
      icon: <Web />,
      title: 'Web Development',
      description:
        'Custom web applications built with modern frameworks and technologies for optimal performance and user experience.',
      technologies: ['React', 'Angular', 'Vue.js', 'Node.js', 'Python', 'PHP'],
      features: [
        'Responsive Design',
        'SEO Optimization',
        'Fast Performance',
        'Cross-browser Compatible',
      ],
    },
    {
      icon: <PhoneAndroid />,
      title: 'Mobile Development',
      description:
        'Native and cross-platform mobile applications that deliver seamless user experiences across all devices.',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Xamarin'],
      features: [
        'Native Performance',
        'Cross-platform',
        'App Store Ready',
        'Push Notifications',
      ],
    },
    {
      icon: <Cloud />,
      title: 'Cloud Solutions',
      description:
        'Scalable cloud infrastructure and migration services to help your business leverage the power of the cloud.',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
      features: [
        'Auto Scaling',
        '99.9% Uptime',
        'Cost Optimization',
        'Security First',
      ],
    },
    {
      icon: <DataObject />,
      title: 'API Development',
      description:
        'Robust and secure APIs that enable seamless integration and data exchange between different systems.',
      technologies: ['REST API', 'GraphQL', 'Microservices', 'API Gateway'],
      features: [
        'RESTful Design',
        'Documentation',
        'Rate Limiting',
        'Authentication',
      ],
    },
    {
      icon: <Security />,
      title: 'Cybersecurity',
      description:
        'Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.',
      technologies: ['SSL/TLS', 'OAuth', 'Encryption', 'Firewall', 'Monitoring'],
      features: [
        'Threat Assessment',
        'Security Audits',
        '24/7 Monitoring',
        'Compliance',
      ],
    },
    {
      icon: <Analytics />,
      title: 'Data Analytics',
      description:
        'Transform your data into actionable insights with our advanced analytics and business intelligence solutions.',
      technologies: ['Python', 'R', 'Tableau', 'Power BI', 'Machine Learning'],
      features: [
        'Real-time Analytics',
        'Custom Dashboards',
        'Predictive Modeling',
        'Data Visualization',
      ],
    },
  ];

  return (
    <Box id="services" sx={{ py: 8, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 2, color: '#1e3a8a' }}
        >
          What We Do
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{ mb: 6, color: '#64748b', maxWidth: '800px', mx: 'auto' }}
        >
          We offer comprehensive technology solutions designed to accelerate your
          business growth and digital transformation journey.
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item size={{xs:12, md:6, lg:4}} key={index}>
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
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                    }}
                  >
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
                      {service.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 'bold', color: '#1e3a8a' }}
                    >
                      {service.title}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{ mb: 3, color: '#64748b', lineHeight: 1.6 }}
                  >
                    {service.description}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 'bold', mb: 1, color: '#1e3a8a' }}
                  >
                    Technologies:
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {service.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
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

                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 'bold', mb: 1, color: '#1e3a8a' }}
                  >
                    Key Features:
                  </Typography>
                  <Box>
                    {service.features.map((feature) => (
                      <Typography
                        key={feature}
                        variant="body2"
                        sx={{
                          color: '#64748b',
                          fontSize: '0.8rem',
                          mb: 0.5,
                          '&::before': {
                            content: '"✓"',
                            color: '#10b981',
                            fontWeight: 'bold',
                            mr: 1,
                          },
                        }}
                      >
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>

                {/* <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      borderColor: '#3b82f6',
                      color: '#3b82f6',
                      '&:hover': {
                        backgroundColor: '#3b82f6',
                        color: 'white',
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
