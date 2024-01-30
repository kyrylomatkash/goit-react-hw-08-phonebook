import React from 'react';
import { Box, Link } from '@mui/material';
import { PersonAdd, ExitToApp } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <Box
      as="nav"
      position="absolute"
      top="10px"
      right="10px"
      display="flex"
      alignItems="center"
    >
      <Box bgcolor="#fff" borderRadius="8px" padding="10px" marginRight="10px">
        <Link
          component={RouterLink}
          to="register"
          variant="body1"
          style={{ textDecoration: 'none', color: '#2196f3' }}
        >
          Sign up <PersonAdd />
        </Link>
      </Box>
      <Box bgcolor="#fff" borderRadius="8px" padding="10px">
        <Link
          component={RouterLink}
          to="login"
          variant="body1"
          style={{ textDecoration: 'none', color: '#2196f3' }}
        >
          Log in <ExitToApp />
        </Link>
      </Box>
    </Box>
  );
};

export default AuthNav;
