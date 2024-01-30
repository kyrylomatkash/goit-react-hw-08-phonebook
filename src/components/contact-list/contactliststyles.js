import styled from 'styled-components';
import { List, Typography } from '@mui/material';

export const ContactListContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledList = styled(List)`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledListItem = styled('li')`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  }
`;
export const NoContactsMessage = styled(Typography)`
  font-size: 18px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #ffffff;
`;
