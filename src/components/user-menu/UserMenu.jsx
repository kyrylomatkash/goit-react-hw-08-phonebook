// Імпорт бібліотек і компонентів
import React, { useState } from 'react';
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
import { logout } from '../../redux/auth/authAsyncThunk';
import { selectAuthUser } from '../../redux/auth/authSelectors';
// Основна функція компоненту
export const UserMenu = () => {
  const isMobile = useMedia('(max-width: 768px)');
  const { name } = useSelector(selectAuthUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const onLogout = () => {
    dispatch(logout()).then(response => {
      if (response.payload === 'Request failed with status code 400') {
        toast.error('Something went wrong. Try again');
        return;
      }
      if (!response.payload) {
        toast.success('You are successfully logged out');
        navigate('/', { replace: true });
      }
    });
  };

  return (
    <Container sx={{ borderRadius: '8px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          {!isMobile && (
            <Typography
              variant="body1"
              sx={{
                color: '#ffffff',
                fontSize: '1rem',
              }}
            >
              Hello, {name}!
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
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
                  }}
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
                  backgroundColor: '#2196F3',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: '#1565C0',
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
