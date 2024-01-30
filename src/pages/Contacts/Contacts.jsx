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
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <ContactForm onAddContact={onAddContact} />
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Filter onChangeFilter={onChangeFilter} />
          <ContactList />
          {isLoading && <Loader />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contacts;
