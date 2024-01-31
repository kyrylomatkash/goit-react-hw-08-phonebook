// Імпорт бібліотек і компонентів
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/contactsSelectors';
import { Typography, Button, Box } from '@mui/material';
import { Check } from '@mui/icons-material';
import { updateContact } from '../../redux/contacts/contactsAsyncThunk';
import { validateName, validateNumber } from '../additional/validation';
// Імпорт стилів
import { StyledForm, StyledTextField } from './editcontactstyles.js';
// Основна функція компоненту
export const EditContact = ({ onCloseModal, updateContactId }) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const userToUpdateArr = contacts.filter(
    contact => contact.id === updateContactId
  );
  const { id, name: userName, number: userNumber } = userToUpdateArr[0];

  const [name, setName] = useState(userName);
  const [number, setNumber] = useState(userNumber);
  const [nameError, setNameError] = useState('');
  const [numberError, setNumberError] = useState('');

  const stateData = {
    id,
    name,
    number,
  };

  const onInputChange = (inputName, value) => {
    switch (inputName) {
      case 'name':
        setName(value);
        setNameError(validateName(value));
        break;
      case 'number':
        setNumber(value);
        setNumberError(validateNumber(value));
        break;
      default:
        return null;
    }
  };

  const onFormSubmitAddContact = e => {
    e.preventDefault();
    if (nameError || numberError) {
      return;
    }
    dispatch(updateContact(stateData));
    onCloseModal();
    onFormReset();
  };

  const onFormReset = () => {
    setName('');
    setNumber('');
    setNameError('');
    setNumberError('');
  };

  return (
    <>
      <Typography variant="h4">Update contact</Typography>
      <StyledForm onSubmit={onFormSubmitAddContact}>
        <Box sx={{ marginBottom: 2 }}>
          <StyledTextField
            onChange={e => onInputChange('name', e.target.value)}
            type="text"
            name="name"
            value={name}
            required
            fullWidth
            variant="outlined"
            label="Name"
            error={!!nameError}
            helperText={nameError}
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <StyledTextField
            onChange={e => onInputChange('number', e.target.value)}
            value={number}
            type="tel"
            name="number"
            required
            fullWidth
            variant="outlined"
            label="Number"
            error={!!numberError}
            helperText={numberError}
          />
        </Box>
        <Button type="submit" variant="outlined" endIcon={<Check />}>
          Save changes
        </Button>
      </StyledForm>
    </>
  );
};

EditContact.propTypes = {
  updateContactId: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
