// src/components/Experience.jsx

import { Container, Typography, Box, Paper, List, ListItem, ListItemIcon } from '@mui/material';
import { ArrowRight } from '@mui/icons-material';
import { motion } from 'framer-motion';

// Animation for the entire section container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Animation for each individual experience item
const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Experience = ({ data }) => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Experience
        </Typography>
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          sx={{ mt: 5 }}
        >
          {data.map((job) => (
            // Using MUI Paper for a card-like effect
            <Paper
              key={job.company}
              component={motion.div}
              variants={itemVariants}
              variant="outlined"
              sx={{ p: 3, mb: 3, borderRadius: 2 }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                <Box>
                  <Typography variant="h6" component="h3">
                    {job.role}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {job.company} | {job.location}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ flexShrink: 0, mt: 0.5 }}>
                  {job.duration}
                </Typography>
              </Box>
              <List dense>
                {job.description.map((point, index) => (
                  <ListItem key={index} sx={{ py: 0.5, pl: 0 }}>
                    <ListItemIcon sx={{ minWidth: 28 }}>
                      <ArrowRight color="primary" />
                    </ListItemIcon>
                    <Typography variant="body2" color="text.secondary">
                      {point}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;