// Імпорт бібліотек і компонентів
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Typography } from '@mui/material';
// Валідація
import { validateName, validateNumber } from '../additional/validation';
// Імпорт стилів
import {
  AppContainer,
  StyledForm,
  StyledTextField,
  AddButton,
} from './contactformstyles.js';
// Основна функція компоненту
export const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const state = {
    name,
    number,
  };
  // Відслідковування зміни текстових полів
  const onInputChange = (inputName, value) => {
    switch (inputName) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return null;
    }
  };
  // Додавання контакту
  const onFormSubmitAddContact = async e => {
    e.preventDefault();
    // Валідація
    const nameError = validateName(name);
    const numberError = validateNumber(number);

    if (nameError || numberError) {
      console.error('Validation error:', nameError || numberError);
      return;
    }

    setIsLoading(true);

    try {
      onAddContact(state);
      onFormReset();
    } catch (error) {
      console.error('Error during async operation:', error);
    } finally {
      setIsLoading(false);
    }
  };
  // Очищення текстових полів після додавання контакту
  const onFormReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <AppContainer>
      <Typography variant="h5">Phonebook</Typography>
      <StyledForm onSubmit={onFormSubmitAddContact}>
        <Box sx={{ marginBottom: 2 }}>
          <StyledTextField
            onChange={e => onInputChange('name', e.target.value)}
            value={name}
            type="text"
            name="name"
            required
            label="Name"
            fullWidth
            variant="outlined"
            error={!!name && !!validateName(name)}
            helperText={!!name && validateName(name)}
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <StyledTextField
            onChange={e => onInputChange('number', e.target.value)}
            value={number}
            type="tel"
            name="number"
            required
            label="Number"
            fullWidth
            variant="outlined"
            error={!!number && !!validateNumber(number)}
            helperText={!!number && validateNumber(number)}
          />
        </Box>
        <AddButton
          type="submit"
          variant="outlined"
          endIcon={isLoading ? <CircularProgress size={24} /> : <AddIcon />}
          disabled={isLoading}
        >
          {isLoading ? 'Adding...' : 'Add contact'}
        </AddButton>
      </StyledForm>
    </AppContainer>
  );
};
