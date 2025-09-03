// src/components/Hero.jsx

import { Box, Container, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { motion } from 'framer-motion';

// Framer Motion variants for the container and its children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Animates children one after the other
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Hero = ({ data }) => {
  const { name, title, socials } = data;

  return (
    // Use MUI's Container to center and manage width
    <Container>
      {/* Use Box for layout, treated as a motion.div for animations */}
      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        sx={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <motion.div variants={itemVariants}>
          {/* Use Typography for theme-aware text styling */}
          <Typography variant="h1" component="h1">
            {name}
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography variant="h4" component="p" color="text.secondary" sx={{ mt: 1, mb: 3 }}>
            {title}
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Box>
            {/* Use IconButton for social links with official MUI icons */}
            <IconButton
              aria-label="GitHub"
              color="inherit"
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub sx={{ fontSize: 30 }} />
            </IconButton>
            <IconButton
              aria-label="LinkedIn"
              color="inherit"
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn sx={{ fontSize: 30 }} />
            </IconButton>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Hero;