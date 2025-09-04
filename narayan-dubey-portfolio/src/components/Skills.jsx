// src/components/Skills.jsx
import { useRef } from 'react';
import { Container, Grid, Typography, Chip, Box } from '@mui/material';
import { motion, useInView } from 'framer-motion';

const listVariants = {
  visible: { transition: { staggerChildren: 0.1 } },
  hidden: {},
};
const itemVariants = {
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  hidden: { opacity: 0, y: 20 },
};

const Skills = ({ data }) => {
  const { technical, professional } = data;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Box ref={ref} sx={{ py: 8, overflow: 'hidden' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ color: '#FFFFFF', transform: 'translateZ(0)' }}>
            Skills & Technologies
          </Typography>
        </motion.div>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#FFFFFF', transform: 'translateZ(0)' }}>
              Technical Skills
            </Typography>
            <motion.div
              variants={listVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}
            >
              {technical.map((skill) => (
                <motion.div key={skill} variants={itemVariants}>
                  <Chip
                    label={skill}
                    variant="outlined"
                    color="primary"
                    // --- HOVER EFFECT ADDED HERE ---
                    sx={{
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.1)',
                        boxShadow: '0 0 15px rgba(0, 247, 255, 0.8)', // Glowing cyan effect
                      },
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#FFFFFF', transform: 'translateZ(0)' }}>
              Professional Skills
            </Typography>
            <motion.div
              variants={listVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}
            >
              {professional.map((skill) => (
                <motion.div key={skill} variants={itemVariants}>
                  <Chip label={skill} variant="outlined" 
                  sx={{
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out , margin-right 0.2s ease-in-out, margin-left 0.2s ease-in-out',
                      '&:hover': {
                        marginRight:'8px',
                        marginLeft:'8px',
                        transform: 'scale(1.1)',
                        boxShadow: '0 0 15px rgba(255, 255, 255, 0.48)', // Glowing cyan effect
                      },
                    }}
                  
                  />
                </motion.div>
              ))}
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Skills;