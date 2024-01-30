import { useSelector } from 'react-redux';
import { selectAuthToken } from '../../redux/auth/authSelectors';
import { Box } from '@mui/material';
import { NavStyled, LinkNav } from './navigationstyles';

export const Navigation = () => {
  const token = useSelector(selectAuthToken);
  return (
    <>
      <Box as={'nav'} display="flex">
        <NavStyled>
          <li>
            <LinkNav to="/" end>
              Home
            </LinkNav>
          </li>
          {token && (
            <li>
              <LinkNav to="contacts">Contacts</LinkNav>
            </li>
          )}
        </NavStyled>
      </Box>
    </>
  );
};
