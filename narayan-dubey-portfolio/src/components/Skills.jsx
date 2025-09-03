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
    <Box ref={ref} sx={{ py: 8 }}>
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
                  <Chip label={skill} variant="outlined" color="primary" />
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
              style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}
            >
              {professional.map((skill) => (
                <motion.div key={skill} variants={itemVariants}>
                  <Chip label={skill} variant="outlined" />
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