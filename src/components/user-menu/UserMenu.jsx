import { Typography, Box, Button, Container } from '@mui/material';
import { Logout } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMedia } from 'react-use';
import { toast } from 'react-toastify';

// Import your redux actions and selectors if not already imported
import { logout } from '../../redux/auth/authAsyncThunk';
import { selectAuthUser } from '../../redux/auth/authSelectors';

export const UserMenu = () => {
  const isMobile = useMedia('(max-width: 768px)');
  const { name } = useSelector(selectAuthUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout()).then(response => {
      if (response.payload === 'Request failed with status code 400') {
        toast.error('Oops...Something went wrong. Try later!');
        return;
      }
      if (!response.payload) {
        toast.success('You are successfully logged out!');
        navigate('/', { replace: true });
      }
    });
  };

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {!isMobile && (
          <Typography
            variant="body1"
            sx={{
              color: '#ffffff', // Text color
              fontSize: '1rem', // Font size
            }}
          >
            Hello, {name}!
          </Typography>
        )}

        <Button
          onClick={onLogout}
          type="button"
          sx={{
            backgroundColor: '#2196F3', // Button background color
            color: '#fff', // Button text color
            '&:hover': {
              backgroundColor: '#1565C0', // Button background color on hover
            },
          }}
        >
          Logout
          <Logout sx={{ marginLeft: '5px' }} />
        </Button>
      </Box>
    </Container>
  );
};
