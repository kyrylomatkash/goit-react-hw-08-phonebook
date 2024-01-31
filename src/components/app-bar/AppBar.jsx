// Імпорт бібліотек,компонентів і логіки Redux
import { useSelector } from 'react-redux';
import { selectAuthToken } from '../../redux/auth/authSelectors';
import { AppBar as MuiAppBar, Toolbar, Typography } from '@mui/material';
import AuthNav from 'components/authorize-nav/AuthorizeNav';
import { Navigation } from 'components/navigation/Navigation';
import { UserMenu } from 'components/user-menu/UserMenu';
// Основна функція компоненту
export const AppBar = () => {
  // Токен
  const token = useSelector(selectAuthToken);

  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Navigation />
        </Typography>
        {token ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </MuiAppBar>
  );
};
