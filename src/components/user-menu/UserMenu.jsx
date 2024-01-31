import React from 'react';
import {
  Typography,
  Box,
  Button,
  Container,
  Grid,
  Menu,
  MenuItem,
  IconButton,
} from '@mui/material';
import { Logout, Menu as MenuIcon } from '@mui/icons-material';
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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          {/* Left side: Greeting */}
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
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* Right side: Logout Button or Menu */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: isMobile ? 'flex-end' : 'center',
              alignItems: 'center',
            }}
          >
            {isMobile ? (
              <>
                <IconButton
                  onClick={handleMenuOpen}
                  color="inherit"
                  sx={{
                    marginTop: '-15px',
                    marginLeft: '30px',
                  }} // Adjust the margin as needed
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={onLogout}>
                    <Logout sx={{ marginRight: '5px' }} />
                    Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                onClick={onLogout}
                type="button"
                size="small"
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
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
