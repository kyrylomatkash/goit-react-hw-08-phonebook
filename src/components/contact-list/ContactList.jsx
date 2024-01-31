// Імпорт бібліотек і компонентів
import React, { useState } from 'react';
import { IconButton, Typography } from '@mui/material';
import { DeleteOutline, Edit } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilterContacts,
} from '../../redux/contacts/contactsSelectors';
import { deleteContacts } from '../../redux/contacts/contactsAsyncThunk';
import { EditContactModal } from '../edit-contact-modal/EditContactModal';
import DeleteConfirmationModal from './DeleteConfirmationModal';
// Імпорт стилів
import {
  ContactListContainer,
  StyledList,
  StyledListItem,
  NoContactsMessage,
} from './contactliststyles';
// Основна функція компоненту
export const ContactList = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [updateContactId, setUpdateContactId] = useState(null);

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterContacts = useSelector(selectFilterContacts);
  // Видалення контакту
  const onDeleteContact = id => {
    setUpdateContactId(id);
    setIsDeleteModalOpen(true);
  };
  // Підтвердження видалення уонтакту
  const onConfirmDelete = () => {
    dispatch(deleteContacts(updateContactId));
    setIsDeleteModalOpen(false);
  };
  // Відміна видалення контакту
  const onCancelDelete = () => {
    setIsDeleteModalOpen(false);
  };
  // Редагування контакту
  const onEditContact = id => {
    setUpdateContactId(id);
    setIsEditModalOpen(true);
  };

  const onCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <ContactListContainer>
      {!contacts.length && (
        <NoContactsMessage>There are no contacts</NoContactsMessage>
      )}
      {filterContacts.length > 0 ? (
        <StyledList>
          {filterContacts.map(({ name, number, id }) => (
            <StyledListItem key={id}>
              <Avatar
                sx={{ width: 40, height: 40, backgroundColor: '#2196f3' }}
              >
                {name.charAt(0).toUpperCase()}
              </Avatar>
              <div>
                <Typography variant="body1">
                  {name}-{number}
                </Typography>
              </div>
              <IconButton
                onClick={() => onEditContact(id)}
                size="small"
                color="primary"
              >
                <Edit />
              </IconButton>
              <IconButton
                onClick={() => onDeleteContact(id)}
                size="small"
                color="error"
              >
                <DeleteOutline />
              </IconButton>
            </StyledListItem>
          ))}
        </StyledList>
      ) : (
        contacts.length > 0 && (
          <NoContactsMessage>There are no contacts.</NoContactsMessage>
        )
      )}
      {isEditModalOpen && (
        <EditContactModal
          onCloseModal={onCloseEditModal}
          updateContactId={updateContactId}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={onCancelDelete}
          onDelete={onConfirmDelete}
        />
      )}
    </ContactListContainer>
  );
};
