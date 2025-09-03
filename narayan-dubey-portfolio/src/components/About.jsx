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
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <Avatar alt="Profile Picture" src={profilePicture} sx={{ width: 220, height: 220, margin: 'auto', border: '3px solid', borderColor: 'primary.main' }}/>
            </motion.div>
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