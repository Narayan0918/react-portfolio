// src/components/Experience.jsx
import { useRef } from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemIcon } from '@mui/material';
import { ArrowRight } from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.3 } } };
const itemVariants = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } };

const Experience = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Box ref={ref} sx={{ py: 8 }}>
      <Container>
        <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ color: '#FFFFFF', transform: 'translateZ(0)' }}>
          Experience
        </Typography>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Box sx={{ mt: 5 }}>
            {data.map((job) => (
              <motion.div key={job.company} variants={itemVariants}>
                <Paper variant="outlined" sx={{ p: 3, mb: 3, borderRadius: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                    <Box>
                      <Typography variant="h6" component="h3" sx={{ color: '#FFFFFF', transform: 'translateZ(0)' }}>{job.role}</Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ transform: 'translateZ(0)' }}>{job.company} | {job.location}</Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ flexShrink: 0, mt: 0.5 }}>{job.duration}</Typography>
                  </Box>
                  <List dense>
                    {job.description.map((point, index) => (
                      <ListItem key={index} sx={{ py: 0.5, pl: 0 }}>
                        <ListItemIcon sx={{ minWidth: 28 }}><ArrowRight color="primary" /></ListItemIcon>
                        <Typography variant="body2" color="text.secondary">{point}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};
export default Experience;