// Імпорт бібліотек і компонентів
import React from 'react';
import styled from 'styled-components';
import { SentimentVeryDissatisfied } from '@mui/icons-material';
import CircularProgress from '@mui/material/CircularProgress';

const NotFoundContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  padding: 20px;
`;

const IconWrapper = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
  color: #ff4d4f;
`;

const Loader = styled.div`
  margin-top: 20px;
`;
// Основна функція компоненту
const NotFound = () => {
  return (
    <NotFoundContainer>
      <IconWrapper>
        <SentimentVeryDissatisfied sx={{ fontSize: 60 }} />
      </IconWrapper>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Loader>
        <CircularProgress size={24} color="primary" />
      </Loader>
    </NotFoundContainer>
  );
};
// Експорт
export default NotFound;
