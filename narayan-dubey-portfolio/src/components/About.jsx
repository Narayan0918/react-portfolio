// src/components/About.jsx

import { Container, Grid, Typography, Avatar, Box } from '@mui/material';
import { motion } from 'framer-motion';

// Framer Motion variants for the scroll animation
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const About = ({ data }) => {
  const { summary, profilePicture } = data;

  return (
    <Box
      component={motion.div}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible" // This triggers the animation when the component scrolls into view
      viewport={{ once: true, amount: 0.2 }} // Ensures the animation runs only once
      sx={{ py: 8 }} // Adds vertical padding (py = padding-top & padding-bottom)
    >
      <Container>
        {/* MUI Grid container for responsive layout */}
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            {/* MUI Avatar for a styled circular profile picture */}
            <Avatar
              alt="Profile Picture"
              src={profilePicture}
              sx={{
                width: 220,
                height: 220,
                margin: 'auto',
                border: '3px solid',
                borderColor: 'primary.main',
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h2" component="h2" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              {summary}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;