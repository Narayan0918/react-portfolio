// src/components/Skills.jsx

import { Container, Grid, Typography, Chip, Box } from '@mui/material';
import { motion } from 'framer-motion';

// Animation for the entire section
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Animation for the list container to stagger its children
const listVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1, // Delay between each child animating in
    },
  },
  hidden: {
    opacity: 0,
  },
};

// Animation for each individual skill chip
const itemVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

const Skills = ({ data }) => {
  const { technical, professional } = data;

  return (
    <Box
      component={motion.div}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      sx={{ py: 8 }}
    >
      <Container>
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Skills & Technologies
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h3" gutterBottom>
              Technical Skills
            </Typography>
            <Box
              component={motion.div}
              variants={listVariants}
              sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}
            >
              {technical.map((skill) => (
                <motion.div key={skill} variants={itemVariants}>
                  <Chip label={skill} variant="outlined" color="primary" />
                </motion.div>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h3" gutterBottom>
              Professional Skills
            </Typography>
            <Box
              component={motion.div}
              variants={listVariants}
              sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}
            >
              {professional.map((skill) => (
                <motion.div key={skill} variants={itemVariants}>
                  <Chip label={skill} variant="outlined" />
                </motion.div>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;