// src/components/Projects.jsx
import { useRef } from 'react';
import { Container, Typography, Card, CardContent, CardActions, Button, Chip, Box } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { motion, useInView, LayoutGroup } from 'framer-motion'; // Import LayoutGroup

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
const itemVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const Projects = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <Box ref={ref} sx={{ py: 8, overflow: 'hidden' }}>
      <Container>
        <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ color: '#FFFFFF', transform: 'translateZ(0)' }}>
          Projects
        </Typography>
        
        {/* Wrap the entire grid in LayoutGroup */}
        <LayoutGroup>
          <Box
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            sx={{
              mt: 5,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 4,
            }}
          >
            {data.map((project) => (
              <Box
                component={motion.div}
                key={project.title}
                variants={itemVariants}
                layout // The layout prop is essential
                transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                sx={{
                  // Responsive widths for Flexbox items
                  width: {
                    xs: '100%',
                    sm: `calc(50% - 16px)`, // 16px is half the gap
                    md: `calc(33.333% - 22px)`, // ~2/3 of the gap
                  }
                }}
              >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2, bgcolor: 'background.paper' }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="h3" gutterBottom sx={{ color: '#FFFFFF', transform: 'translateZ(0)' }}>
                      {project.title}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, my: 2 }}>
                      {project.techStack.split(', ').map((tech) => ( <Chip key={tech} label={tech} size="small" /> ))}
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ transform: 'translateZ(0)' }}>
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ px: 2, pb: 2 }}>
                    <Button component="a" href={project.link} target="_blank" startIcon={<LinkIcon />}>
                      View Project
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </Box>
        </LayoutGroup>
      </Container>
    </Box>
  );
};

export default Projects;