// Імпорт бібліотек і компонентів
import React from 'react';
import { Box, Link, Grid } from '@mui/material';
import { PersonAdd, ExitToApp } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
// Основна функція компоненту
const AuthNav = () => {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="flex-end"
      spacing={1}
    >
      <Grid item>
        <Box
          bgcolor="#fff"
          borderRadius="6px"
          padding={{ xs: '5px', sm: '8px' }}
        >
          <Link
            component={RouterLink}
            to="register"
            variant="body2"
            style={{ textDecoration: 'none', color: '#2196f3' }}
          >
            Sign up <PersonAdd />
          </Link>
        </Box>
      </Grid>
      <Grid item>
        <Box
          bgcolor="#fff"
          borderRadius="6px"
          padding={{ xs: '5px', sm: '8px' }}
        >
          <Link
            component={RouterLink}
            to="login"
            variant="body2"
            style={{ textDecoration: 'none', color: '#2196f3' }}
          >
            Log in <ExitToApp />
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
};
// Експорт
export default AuthNav;
