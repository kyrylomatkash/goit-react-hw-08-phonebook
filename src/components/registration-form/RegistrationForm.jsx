// Імпорт бібліотек і компонентів
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/authAsyncThunk';

import { toast } from 'react-toastify';

import {
  Typography,
  TextField,
  Button,
  Box,
  InputAdornment,
  IconButton,
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { Loader } from 'components/loader/Loader';
import { selectAuthIsLoading } from '../../redux/auth/authSelectors';
// Основна функція компоненту
export const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector(selectAuthIsLoading);

  const userRegisterData = {
    name,
    email,
    password,
  };
  // Відслідковування змін текстових полів
  const onInputChange = (inputName, value) => {
    switch (inputName) {
      case 'name':
        setName(value);
        break;
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
  // Реєстрація
  const onFormSubmit = e => {
    e.preventDefault();

    validateEmail();
    validatePassword();

    if (emailError || passwordError) {
      return;
    }

    dispatch(register(userRegisterData)).then(response => {
      if (response.payload === 'Request failed with status code 400') {
        toast.error('User with such data already exists');
        return;
      }
      if (response.payload === 'Network Error') {
        toast.error('Oops...Network Error!');
        return;
      }
      if (response.payload.token) {
        toast.success('You are successfully signed up');
        navigate('/', { replace: true });
        onFormReset();
      }
    });
  };
  // Очищення текстових полів після реєстрації
  const onFormReset = () => {
    setName('');
    setEmail('');
    setPassword('');
    setEmailError('');
    setPasswordError('');
  };

  return (
    <>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Registration
      </Typography>
      <form onSubmit={onFormSubmit}>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            onChange={e => onInputChange('name', e.target.value)}
            value={name}
            type="text"
            name="name"
            required
            label="Name"
            fullWidth
            variant="outlined"
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            onChange={e => {
              onInputChange('email', e.target.value);
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
              onInputChange('password', e.target.value);
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
          startIcon={<PersonAddIcon />}
          sx={{ width: 300 }}
        >
          Register
        </Button>
      </form>
      {isLoading && <Loader />}
    </>
  );
};
