import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavStyled = styled.ul`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0;
  padding: 0;
  list-style: none;
  border-radius: 8px;
`;

export const LinkNav = styled(NavLink)`
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  transition: background 0.3s ease, color 0.3s ease;

  text-decoration: none;
  color: #fff;

  &:hover {
    background: #2196f3;
  }

  &.active {
    color: #fff;
    background: #2196f3;
  }
`;
