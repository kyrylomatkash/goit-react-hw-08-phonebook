import { styled } from '@mui/system';
import { Container, Typography, Button, TextField } from '@mui/material';

export const AppContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    width: 100%;
    padding: 10px;
  }
`;

export const Heading = styled(Typography)`
  font-size: 28px;
`;

export const ErrorText = styled(Typography)`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* Full width by default */

  @media (min-width: 600px) {
    max-width: 300px; /* Adjust the max-width for larger screens */
    margin: 0 auto;
  }
`;

export const StyledTextField = styled(TextField)`
  && {
    width: 100%; /* Full width by default */

    @media (min-width: 600px) {
      width: 250px; /* Adjust the width for larger screens */
    }
  }
`;

export const AddButton = styled(Button)`
  && {
    width: 100%; /* Full width by default */

    @media (min-width: 600px) {
      width: 250px; /* Adjust the width for larger screens */
    }
  }
`;
