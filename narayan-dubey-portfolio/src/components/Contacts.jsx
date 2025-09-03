// src/components/Contact.jsx

import { Container, Typography, Button, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Contact = ({ data }) => {
  const { email } = data;
  return (
    <Box
      component={motion.div}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      sx={{ py: 8, textAlign: 'center' }}
    >
      <Container>
        <Typography variant="h2" component="h2" gutterBottom>
          Get In Touch
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto', mb: 4 }}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out.
        </Typography>
        <Button
          variant="outlined"
          size="large"
          href={`mailto:${email}`}
          startIcon={<EmailIcon />}
        >
          Say Hello
        </Button>
      </Container>
    </Box>
  );
};

export default Contact;