import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Container, Box } from '@mui/material';
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
          padding: '100px',
          borderRadius: '8px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
        }}
      >
        {token ? (
          <>
            <Typography variant="h4" gutterBottom sx={{ color: '#2196f3' }}>
              Welcome, {name}
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ color: '#555', fontSize: '18px' }}
            >
              Click 'Contacts' for access to your info
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h4" gutterBottom sx={{ color: '#2196f3' }}>
              Welcome to Phonebook App
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ color: '#555', fontSize: '18px' }}
            >
              Please, Sign up or Log in
            </Typography>
          </>
        )}
      </Box>
    </Container>
  );
};

export default Homepage;
