import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
} from '@mui/material';

const Technologies = () => {
  const techCategories = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'React', color: '#61dafb' },
        { name: 'Angular', color: '#dd1b16' },
        { name: 'Vue.js', color: '#4fc08d' },
        { name: 'TypeScript', color: '#3178c6' },
        { name: 'Next.js', color: '#000000' },
        { name: 'Material-UI', color: '#007fff' },
      ],
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node.js', color: '#339933' },
        { name: 'Python', color: '#3776ab' },
        { name: 'Java', color: '#007396' },
        { name: 'PHP', color: '#777bb4' },
        { name: '.NET', color: '#512bd4' },
        { name: 'Go', color: '#00add8' },
      ],
    },
    {
      category: 'Database',
      technologies: [
        { name: 'MongoDB', color: '#47a248' },
        { name: 'PostgreSQL', color: '#336791' },
        { name: 'MySQL', color: '#4479a1' },
        { name: 'Redis', color: '#dc382d' },
        { name: 'Elasticsearch', color: '#005571' },
        { name: 'Firebase', color: '#ffca28' },
      ],
    },
    {
      category: 'Cloud & DevOps',
      technologies: [
        { name: 'AWS', color: '#ff9900' },
        { name: 'Azure', color: '#0078d4' },
        { name: 'Docker', color: '#2496ed' },
        { name: 'Kubernetes', color: '#326ce5' },
        { name: 'Jenkins', color: '#d33833' },
        { name: 'Git', color: '#f05032' },
      ],
    },
  ];

  return (
    <Box sx={{ py: 6, backgroundColor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 4, color: '#1e3a8a' }}
        >
          Technologies We Master
        </Typography>
        
        <Grid container spacing={4}>
          {techCategories.map((category, index) => (
            <Grid item size={{xs:12, sm:6, md:3}} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: 2,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 3,
                  },
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    color: '#1e3a8a',
                    textAlign: 'center',
                    mb: 3,
                  }}
                >
                  {category.category}
                </Typography>
                
                <Grid container spacing={2}>
                  {category.technologies.map((tech, techIndex) => (
                    <Grid item size={{xs:6}} key={techIndex}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1,
                        }}
                      >
                        <Avatar
                          sx={{
                            width: 24,
                            height: 24,
                            backgroundColor: tech.color,
                            mr: 1,
                            fontSize: '0.7rem',
                            fontWeight: 'bold',
                          }}
                        >
                          {tech.name.charAt(0)}
                        </Avatar>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#475569',
                            fontSize: '0.8rem',
                          }}
                        >
                          {tech.name}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Technologies;
