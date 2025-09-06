import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
} from '@mui/material';
import { AccessTime, Person } from '@mui/icons-material';

const Insights = () => {
  const insights = [
    {
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt:
        'Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.',
      category: 'Web Development',
      readTime: '5 min read',
      author: 'Tech Team',
      date: 'Dec 15, 2024',
      image:
        'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=500',
    },
    {
      title: 'Cloud Migration Strategies for Small to Medium Businesses',
      excerpt:
        'A comprehensive guide to successful cloud migration, including best practices and cost optimization tips.',
      category: 'Cloud Computing',
      readTime: '8 min read',
      author: 'Cloud Team',
      date: 'Dec 10, 2024',
      image:
        'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=500',
    },
    {
      title: 'Mobile App Security: Protecting Your Users in 2025',
      excerpt:
        'Essential security practices every mobile app developer should implement to protect user data and privacy.',
      category: 'Mobile Security',
      readTime: '6 min read',
      author: 'Security Team',
      date: 'Dec 5, 2024',
      image:
        'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=500',
    },
    {
      title: 'AI and Machine Learning: Transforming Business Operations',
      excerpt:
        'How artificial intelligence is revolutionizing business processes and creating new opportunities for growth.',
      category: 'AI/ML',
      readTime: '7 min read',
      author: 'AI Team',
      date: 'Nov 28, 2024',
      image:
        'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500',
    },
    {
      title: 'DevOps Best Practices for Continuous Integration',
      excerpt:
        'Learn how to implement effective CI/CD pipelines that improve development efficiency and code quality.',
      category: 'DevOps',
      readTime: '9 min read',
      author: 'DevOps Team',
      date: 'Nov 20, 2024',
      image:
        'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=500',
    },
    {
      title: 'The Rise of Low-Code Development Platforms',
      excerpt:
        'Exploring how low-code platforms are changing the software development landscape and democratizing app creation.',
      category: 'Development',
      readTime: '4 min read',
      author: 'Development Team',
      date: 'Nov 15, 2024',
      image:
        'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=500',
    },
  ];

  return (
    <Box id="insights" sx={{ py: 8, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 2, color: '#1e3a8a' }}
        >
          What We Think
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{ mb: 6, color: '#64748b', maxWidth: '800px', mx: 'auto' }}
        >
          Stay updated with the latest industry insights, trends, and best
          practices from our expert team. We share our knowledge to help
          businesses navigate the ever-evolving tech landscape.
        </Typography>

        <Grid container spacing={4}>
          {insights.map((insight, index) => (
            <Grid item size={{xs:12, sm:6, lg:4}} key={index}>
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
                <CardMedia
                  component="img"
                  height="200"
                  image={insight.image}
                  alt={insight.title}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Box sx={{ mb: 2 }}>
                    <Chip
                      label={insight.category}
                      size="small"
                      sx={{
                        backgroundColor: '#e0f2fe',
                        color: '#0277bd',
                        fontSize: '0.75rem',
                        mb: 1,
                      }}
                    />
                  </Box>

                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 'bold',
                      color: '#1e3a8a',
                      lineHeight: 1.3,
                      mb: 2,
                    }}
                  >
                    {insight.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 3,
                      lineHeight: 1.6,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {insight.excerpt}
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      color: '#64748b',
                      fontSize: '0.8rem',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Person sx={{ fontSize: '1rem', mr: 0.5 }} />
                      <Typography variant="caption">{insight.author}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AccessTime sx={{ fontSize: '1rem', mr: 0.5 }} />
                      <Typography variant="caption">
                        {insight.readTime}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>

                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    size="small"
                    sx={{
                      color: '#3b82f6',
                      '&:hover': {
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                      },
                    }}
                  >
                    Read More
                  </Button>
                  <Box sx={{ ml: 'auto' }}>
                    <Typography variant="caption" color="text.secondary">
                      {insight.date}
                    </Typography>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: '#3b82f6',
              color: '#3b82f6',
              '&:hover': {
                backgroundColor: '#3b82f6',
                color: 'white',
              },
              px: 4,
              py: 1.5,
            }}
          >
            View All Insights
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Insights;
