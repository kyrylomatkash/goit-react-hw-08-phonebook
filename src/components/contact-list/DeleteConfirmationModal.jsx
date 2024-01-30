import React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const DeleteConfirmationModal = ({ isOpen, onClose, onDelete }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Delete Contact
        </Typography>
        <Typography variant="body1" id="simple-modal-description">
          Are you sure you want to delete this contact?
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: '10px' }}
          onClick={onDelete}
        >
          Delete
        </Button>
        <Button variant="outlined" color="primary" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteConfirmationModal;
