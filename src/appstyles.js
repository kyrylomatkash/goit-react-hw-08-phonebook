import { styled } from '@mui/system';

export const AppContainer = styled('div')`
  background-color: #f2f2f2;
  border-radius: 5px;
  padding: 20px;
  width: 80%;
  margin: auto;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1),
    /* Top shadow */ -2px 0px 8px 0px rgba(0, 0, 0, 0.1),
    /* Left shadow */ 2px 0px 8px 0px rgba(0, 0, 0, 0.1),
    /* Right shadow */ 0px -2px 8px 0px rgba(0, 0, 0, 0.1); /* Bottom shadow */
`;
