import styled from 'styled-components';

export const PhonebookMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background: #ecf1f3; /* Light background color */
  margin-top: 32px;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 26px 16px; /* Updated padding for smaller screens */
  border-radius: 6px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1); /* Adjusted box shadow */
  width: 100%;

  @media (min-width: 600px) {
    width: 80%; /* Adjusted width for larger screens */
    max-width: 900px;
  }
`;
