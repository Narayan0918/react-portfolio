// src/components/About.jsx
import { useRef } from 'react';
import { Container, Grid, Typography, Avatar, Box } from '@mui/material';
import { motion, useInView } from 'framer-motion';

const About = ({ data }) => {
  const { summary, profilePicture } = data;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Box ref={ref} sx={{ py: 8 }}>
      <Container>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            {/* This Box is the animated frame */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              sx={{
                width: 250,
                height: 250,
                margin: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                border: '1px',
                borderColor: 'primary.text',
                animation: 'morphing 10s infinite',
                '&:hover': {
                  animationPlayState: 'paused',
                },
              }}
            >
              {/* The Avatar now sits inside the frame */}
              <Avatar
                alt="Profile Picture"
                src={profilePicture}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover', // Ensures the image covers the frame without distortion
                  objectPosition: 'top', // Aligns the image to the top
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              <Typography variant="h2" component="h2" gutterBottom sx={{ color: '#FFFFFF', transform: 'translateZ(0)' }}>About Me</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8, transform: 'translateZ(0)' }}>{summary}</Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default About;