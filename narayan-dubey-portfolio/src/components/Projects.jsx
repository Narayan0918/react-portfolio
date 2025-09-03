// src/components/Projects.jsx

import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Box,
} from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { motion } from 'framer-motion';

// Animation for the container to stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Animation for each individual project card
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Projects = ({ data }) => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Projects
        </Typography>
        <Grid
          component={motion.div}
          container
          spacing={4}
          sx={{ mt: 5 }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {data.map((project) => (
            // Grid item for responsive layout
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={project.title}
              component={motion.div}
              variants={itemVariants}
            >
              {/* MUI Card for each project */}
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2 }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {project.title}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, my: 2 }}>
                    {project.techStack.split(', ').map((tech) => (
                      <Chip key={tech} label={tech} size="small" />
                    ))}
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ px: 2, pb: 2 }}>
                  <Button
                    component="a" // Render as an anchor tag
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<LinkIcon />}
                  >
                    View Project
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;