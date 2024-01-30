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
import { Section } from '../../components/section/Section';
import { Loader } from '../../components/loader/Loader';

import { Container, CssBaseline } from '@mui/material';
import { toast } from 'react-toastify';
import { PhonebookMain } from './contactstyles';

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
    <PhonebookMain>
      <CssBaseline />
      <Container component="main" maxWidth="md">
        <Section>
          <ContactForm onAddContact={onAddContact} />
        </Section>

        <Section>
          <Filter onChangeFilter={onChangeFilter} />
          <ContactList />
        </Section>

        {isLoading && <Loader />}
      </Container>
    </PhonebookMain>
  );
};

export default Contacts;
