// src/components/Hero.jsx

import { Box, Container, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter'; // Import the new library

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3 } } };
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } };

const Hero = ({ data }) => {
  const { title, socials } = data;
  
  // Setup the typewriter hook
  const [name] = useTypewriter({
    words: ['Narayan Raj Dubey'],
    loop: 1, // Set to 1 to type out once, 0 for infinite loop
    typeSpeed: 120,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <Container>
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <motion.div variants={itemVariants}>
            <Typography variant="h1" component="h1" sx={{ color: '#FFFFFF', transform: 'translateZ(0)' }}>
              {/* Use the animated text and add a cursor */}
              <span>{name}</span>
              <Cursor cursorStyle='_' />
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