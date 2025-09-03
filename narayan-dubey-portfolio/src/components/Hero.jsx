// src/components/Hero.jsx
import { Box, Container, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { motion } from 'framer-motion';

// ... (variants code is the same)
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3 } } };
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } };

const Hero = ({ data }) => {
  const { name, title, socials } = data;
  return (
    <Container>
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <Box sx={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <motion.div variants={itemVariants}>
            {/* DEFINITIVE COLOR FIX */}
            <Typography variant="h1" component="h1" sx={{ color: '#FFFFFF', transform: 'translateZ(0)' }}>
              {name}
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography variant="h4" component="p" color="text.secondary" sx={{ mt: 1, mb: 3, transform: 'translateZ(0)' }}>
              {title}
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Box>
              <IconButton color="inherit" href={socials.github} target="_blank"><GitHub sx={{ fontSize: 30 }} /></IconButton>
              <IconButton color="inherit" href={socials.linkedin} target="_blank"><LinkedIn sx={{ fontSize: 30 }} /></IconButton>
            </Box>
          </motion.div>
        </Box>
      </motion.div>
    </Container>
  );
};
export default Hero;