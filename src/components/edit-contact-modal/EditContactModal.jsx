// Імпорт бібліотек і компонентів
import { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { Modal, Backdrop, Fade, Box } from '@mui/material';
import { EditContact } from '../edit-contact/EditContact';
// Основна функція компоненту
export const EditContactModal = ({ onCloseModal, updateContactId }) => {
  // Закриття модального вікна клавішами
  useEffect(() => {
    const onEscClose = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', onEscClose);
    return () => {
      window.removeEventListener('keydown', onEscClose);
    };
  }, [onCloseModal]);

  return (
    <Modal
      open={true}
      onClose={onCloseModal}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={true}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            bgcolor: 'background.paper',
            borderRadius: '4px',
            boxShadow: 24,
            p: 4,
          }}
        >
          <EditContact
            onCloseModal={onCloseModal}
            updateContactId={updateContactId}
          />
        </Box>
      </Fade>
    </Modal>
  );
};

EditContactModal.propTypes = {
  updateContactId: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
