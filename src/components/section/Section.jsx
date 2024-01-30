import PropTypes from 'prop-types';
import { Container, Typography } from '@mui/material';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  && {
    margin: 15px auto;

    @media (max-width: 600px) {
      padding: 0 8px; /* Adjust padding for smaller screens */
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

export default ResponsiveSection;
