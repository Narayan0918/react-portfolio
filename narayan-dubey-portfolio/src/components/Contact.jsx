// src/components/Contact.jsx
import { Container, Typography, Button, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

const Contact = ({ data }) => {
  const { email } = data;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Container>
          <Typography variant="h2" component="h2" color="text.primary" gutterBottom sx={{ transform: 'translateZ(0)' }}>Get In Touch</Typography>
          {/* FIX APPLIED HERE */}
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto', mb: 4, transform: 'translateZ(0)' }}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out.
          </Typography>
          <Button variant="outlined" size="large" href={`mailto:${email}`} startIcon={<EmailIcon />}>Say Hello</Button>
        </Container>
      </Box>
    </motion.div>
  );
};
export default Contact;