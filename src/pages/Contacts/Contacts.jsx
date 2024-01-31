import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
} from '../../redux/contacts/contactsSelectors';
import { updateFilter } from '../../redux/filter/filterSlice';
import { addContacts } from '../../redux/contacts/contactsAsyncThunk';

import { ContactForm } from '../../components/contact-form/ContactForm';
import { ContactList } from '../../components/contact-list/ContactList';
import { Filter } from '../../components/filter/Filter';
import { Loader } from '../../components/loader/Loader';

import { Container, CssBaseline, Grid } from '@mui/material';
import { toast } from 'react-toastify';
import styled from 'styled-components';

// Styled component for the colored container
const ColoredContainer = styled(Container)`
  background-color: #f0f0f0; /* Replace with your preferred color */
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const onAddContact = newUser => {
    const uniqUserSearch = contacts.find(({ name }) => name === newUser.name);
    uniqUserSearch
      ? toast.info(`"${uniqUserSearch.name}" is already in contacts`)
      : dispatch(addContacts(newUser));
  };

  const onChangeFilter = e => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <ColoredContainer
      component="main"
      maxWidth="md"
      style={{ marginTop: '15px' }}
    >
      <CssBaseline />
      <Grid container spacing={2} style={{ marginTop: '15px' }}>
        <Grid item xs={12}>
          {/* Adjust the width for larger screens if needed */}
          <ContactForm onAddContact={onAddContact} />
        </Grid>
        <Grid item xs={12}>
          <Filter onChangeFilter={onChangeFilter} />
        </Grid>
        <Grid item xs={12}>
          <ContactList />
        </Grid>
        {isLoading && (
          <Grid item xs={12}>
            <Loader />
          </Grid>
        )}
      </Grid>
    </ColoredContainer>
  );
};

export default Contacts;
