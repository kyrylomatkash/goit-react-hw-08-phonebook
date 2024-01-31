// Імпорт бібліотек,компонентів і логіки Redux
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/auth/authAsyncThunk';
import { toast } from 'react-toastify';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {
  Typography,
  TextField,
  Button,
  Box,
  CircularProgress,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { selectAuthIsLoading } from '../../redux/auth/authSelectors';
// Основна функція компоненту
export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector(selectAuthIsLoading);

  const userLoginData = {
    email,
    password,
  };
  // Відслідковування змін текстових полів
  const onInputChange = ({ target: { name: inputName, value } }) => {
    switch (inputName) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return null;
    }
  };
  // Перемикач для відображення паролю
  const toggleShowPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };
  // Валідація
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordError('Password should be at least 8 characters long.');
    } else {
      setPasswordError('');
    }
  };
  // Логін
  const onFormSubmit = e => {
    e.preventDefault();

    validateEmail();
    validatePassword();

    if (emailError || passwordError) {
      return;
    }

    dispatch(login(userLoginData)).then(response => {
      if (response.payload === 'Request failed with status code 400') {
        toast.error('Wrong email or password');
        return;
      }
      if (response.payload === 'Network Error') {
        toast.error('Network Error!');
        return;
      }
      if (response.payload.token) {
        toast.success('You are successfully logged in');
        navigate('/', { replace: true });
        onFormReset();
      }
    });
  };
  // Очищення текстових полів після логіну
  const onFormReset = () => {
    setEmail('');
    setPassword('');
    setEmailError('');
    setPasswordError('');
  };

  return (
    <>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Log in
      </Typography>
      <form onSubmit={onFormSubmit}>
        <Box
          sx={{
            marginBottom: 2,
            width: '100%',
          }}
        >
          <TextField
            onChange={e => {
              onInputChange(e);
              validateEmail();
            }}
            value={email}
            type="email"
            name="email"
            required
            label="Email"
            fullWidth
            variant="outlined"
            error={!!emailError}
            helperText={emailError}
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            onChange={e => {
              onInputChange(e);
              validatePassword();
            }}
            value={password}
            type={showPassword ? 'text' : 'password'}
            name="password"
            required
            label="Password"
            fullWidth
            variant="outlined"
            error={!!passwordError}
            helperText={passwordError}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleShowPassword}>
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          startIcon={<PersonIcon />}
          disabled={isLoading}
          sx={{ width: 300 }}
        >
          {isLoading ? <CircularProgress size={24} /> : 'Log in'}
        </Button>
      </form>
    </>
  );
};
