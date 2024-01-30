import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Container, Box, Grid } from '@mui/material';
import {
  selectAuthToken,
  selectAuthUser,
} from '../../redux/auth/authSelectors';

const Homepage = () => {
  const token = useSelector(selectAuthToken);
  const { name } = useSelector(selectAuthUser);

  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
          padding: { xs: '20px', md: '100px' }, // Adjust padding for small screens
        }}
      >
        {token ? (
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h4" sx={{ color: '#2196f3' }}>
                Welcome, {name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                sx={{ color: '#555', fontSize: '18px' }}
              >
                Click 'Contacts' for access to your info
              </Typography>
            </Grid>
          </Grid>
        ) : (
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h4" sx={{ color: '#2196f3' }}>
                Welcome to Phonebook App
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                sx={{ color: '#555', fontSize: '18px' }}
              >
                Please, Sign up or Log in
              </Typography>
            </Grid>
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default Homepage;
