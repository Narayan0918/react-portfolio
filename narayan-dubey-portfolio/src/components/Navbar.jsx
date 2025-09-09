// src/components/Navbar.jsx

import { AppBar, Toolbar, Container, Typography, Avatar, Box } from '@mui/material';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Navbar = ({ data }) => {
  const { profilePicture } = data;

  // Setup the typewriter hook for the name
  const [name] = useTypewriter({
    words: ['Narayan Raj Dubey'],
    loop: 1, // 0 means infinite loop
    typeSpeed: 120,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <AppBar
      component={motion.div}
      initial={{ y: -100 }} // Starts off-screen above
      animate={{ y: 0 }} // Animates to its natural position
      exit={{ y: -100 }} // Animates off-screen above when exiting
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      position="sticky"
      sx={{
        background: 'rgba(30, 30, 30, 0.8)', // Semi-transparent "glass" background
        backdropFilter: 'blur(10px)',
      }}
    >
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Left Side: Animated Name */}
          <Typography variant="h6" component="div" sx={{ transform: 'translateZ(0)' }}>
            <span>{name}</span>
            <Cursor cursorStyle='_' />
          </Typography>

          {/* Right Side: Avatar */}
          <Avatar alt="Profile Picture" src={profilePicture} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;