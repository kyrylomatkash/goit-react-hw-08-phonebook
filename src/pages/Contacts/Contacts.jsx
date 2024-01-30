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

import { Container, CssBaseline, Grid } from '@mui/material';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const StyledGridContainer = styled(Grid)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
`;

const StyledGridItem = styled(Grid)`
  padding: 16px;
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
    <StyledGridContainer container component="main">
      <CssBaseline />
      <StyledGridItem item xs={12} sm={10} md={8} lg={6}>
        <Section>
          <ContactForm onAddContact={onAddContact} />
        </Section>

        <Section>
          <Filter onChangeFilter={onChangeFilter} />
          <ContactList />
        </Section>

        {isLoading && (
          <Section>
            <Loader />
          </Section>
        )}
      </StyledGridItem>
    </StyledGridContainer>
  );
};

export default Contacts;
