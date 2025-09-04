// src/components/RotatingBorderCard.jsx
import React from 'react';
import { Box } from '@mui/material';

const RotatingBorderCard = ({ children, sx, ...props }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden', // Essential to clip the rotating pseudo-element
        borderRadius: 2, // Match your card's border-radius
        p: 0, // No padding here, padding will be on the actual Card content
        display: 'flex', // Ensure content stretches
        flexDirection: 'column', // Ensure content stretches
        // Custom styles for the rotating border effect
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-150%', // Start far above to allow full rotation
          left: '-150%', // Start far left
          width: '300%', // Make it large enough to cover the entire card diagonally
          height: '300%',
          transformOrigin: '50% 50%', // Rotate from the center of this large element
          background: 'conic-gradient(from 0deg, transparent 0%, #00f7ff 10%, transparent 20%)', // Bluish ray effect
          animation: 'rotateBorder 6s linear infinite', // Animation name, duration, speed, loop
          opacity: 0.6, // Slightly transparent
          zIndex: 1, // Place it above the card, but below content
        },
        // A subtle static border
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit', // Inherit border-radius from parent Box
          border: '1px solid rgba(0, 247, 255, 0.2)', // A subtle, static blue border
          zIndex: 2, // Above the rotating border
        },
        // Your card content will be placed here, above the borders
        '& > div': { // Targeting the direct child, which will be the MUI Card
          position: 'relative',
          zIndex: 3, // Ensure the actual card content is on top
          borderRadius: 'inherit',
          background: 'rgba(30, 30, 30, 0.8)', // Re-apply the background to the inner card
          width: '100%',
          height: '100%',
        },
        ...sx, // Allow custom sx props to be passed in
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default RotatingBorderCard;