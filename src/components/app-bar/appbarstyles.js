import styled from 'styled-components';

export const AppBarHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: 32px auto 0;
  padding: 16px 32px;
  background: var(--background-light);
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background: var(--background-light-hover);
  }
`;
