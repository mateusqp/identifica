import React from 'react';
import { Typography } from '@mui/material';

const NotFound: React.FC = () => {
  return (
    <div>
      <Typography variant="h4">404 - Page Not Found</Typography>
      <Typography>The page you are looking for does not exist.</Typography>
    </div>
  );
};

export default NotFound;