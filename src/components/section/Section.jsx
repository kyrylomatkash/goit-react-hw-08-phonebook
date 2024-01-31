// Імпорт бібліотек і компонентів
import PropTypes from 'prop-types';
import { Container, Typography } from '@mui/material';
import styled from 'styled-components';
// Основна функція компоненту
const StyledContainer = styled(Container)`
  && {
    margin: auto;
    @media (max-width: 600px) {
      margin-top: 15px;
    }
  }
`;

const Title = styled(Typography)`
  && {
    margin-bottom: 15px;
    text-align: center;
  }
`;

const ResponsiveSection = ({ title, children }) => {
  return (
    <StyledContainer>
      <Title variant="h2">{title}</Title>
      <div>{children}</div>
    </StyledContainer>
  );
};

ResponsiveSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
// Експорт
export default ResponsiveSection;
