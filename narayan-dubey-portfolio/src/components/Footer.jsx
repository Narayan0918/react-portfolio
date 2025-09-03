// src/components/Footer.jsx

import { Container, Typography, Box, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = ({ data }) => {
  const { name, socials } = data;
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{ borderTop: 1, borderColor: 'divider', mt: 4 }}
    >
      <Container sx={{ py: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} {name}
          </Typography>
          <Box>
            <IconButton
              aria-label="GitHub"
              color="inherit"
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </IconButton>
            <IconButton
              aria-label="LinkedIn"
              color="inherit"
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;